'use strict';

var fs = require('fs');
var path = require('path');
var https = require('https');
var concat = require('concat-stream');
var dsv = require('d3-dsv');
var async = require('async');
var unified = require('unified');
var parse = require('rehype-parse');
var select = require('hast-util-select');
var toString = require('hast-util-to-string');
var iso31661 = require('iso-3166-1');
var bail = require('bail');

// http://publications.europa.eu/code/pdf/370000en.htm
var codeMap = {
  EL: 'GR',
  UK: 'GB'
};

var countryMap = {
  GB: 'United Kingdom'
};

async.parallel([
  temperature,
  languages,
  toilets
], bail);

function temperature(done) {
  https.get('https://projects.knmi.nl/klimatologie/onderzoeksgegevens/homogeen_260/tg_hom_mnd260.txt', onresponse);

  function onresponse(res) {
    res.pipe(concat(onconcat)).on('error', done);
  }

  function onconcat(buf) {
    var doc = String(buf);
    var pos = doc.indexOf('STN,YYYYMMDD');
    var eol = doc.indexOf('\n', pos + 1);
    var rows = dsv.csvParseRows(doc.slice(eol).trim().replace(/ {1,}/g, ','), map);

    fs.writeFile(
      path.join('assessment-1', 'temperature.csv'),
      dsv.csvFormat(rows) + '\n',
      done
    );

    function map(d) {
      return {date: d[1], temp: Number(d[2])};
    }
  }
}

function languages(done) {
  https.get('https://en.wikipedia.org/wiki/List_of_languages_by_total_number_of_speakers', onresponse);

  function onresponse(res) {
    res.pipe(concat(onconcat)).on('error', done);
  }

  function onconcat(buf) {
    var tree = unified().use(parse).parse(buf);
    var rows = select.selectAll('.wikitable tr', tree);
    var data = [];

    rows.forEach(map);

    fs.writeFile(
      path.join('assessment-1', 'languages.tsv'),
      dsv.tsvFormat(data) + '\n',
      done
    );

    function map(row) {
      var fields = select.selectAll('td', row);

      if (fields.length === 0) {
        return;
      }

      data.push({
        language: clean(fields[0]),
        speakers: toNumber(clean(fields[5]))
      });
    }

    function clean(node) {
      return toString(node).replace(/\([^)]+\)|\[[^\]]+\]/g, '').trim();
    }

    function toNumber(value) {
      var num = parseFloat(value, 10);
      var factor = /billion/.test(value) ? 1e9 : 1e6;
      return num * factor;
    }
  }
}

function toilets(done) {
  /* Source: http://ec.europa.eu/eurostat/estat-navtree-portlet-prod/BulkDownloadListing?file=data/tessi294.tsv.gz */
  fs.readFile(path.join(__dirname, 'assessment-1-toilets-raw.tsv'), onread);

  function onread(err, buf) {
    var doc;
    var rows;

    if (err) {
      return done(err);
    }

    doc = String(buf).replace(/,/g, '\t').replace(/ {1,}/g, '');
    rows = dsv.tsvParse(doc, clean).filter(filter);

    delete rows.columns;

    fs.writeFile(
      path.join('assessment-1', 'toilets.json'),
      JSON.stringify(rows, null, 2) + '\n',
      done
    );

    function filter(row) {
      var sex = row.sex;
      delete row.sex;
      return sex === 'T' && row.country;
    }

    function clean(row) {
      var code = row['geo\\time'];
      var country;
      var result = {};
      var begin = 2005;
      var index = 0;
      var key = String(begin);

      code = codeMap[code] || code;
      country = countryMap[code] || (iso31661.whereAlpha2(code) || {}).country;

      result.code = code;
      result.country = country;
      result.sex = row.sex;

      do {
        result[key] = row[key] === ':' ? null : parseFloat(row[key], 10);
        key = String(begin + (++index));
      } while (key in row);

      return result;
    }
  }
}
