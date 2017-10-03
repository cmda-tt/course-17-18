//d3.csv('./index.csv', function (err, questions) {
//    if (err) throw err;
//    questions.forEach(function (q) {
//        console.log('From: csv\ndag: %s\neten: %s', q.question, q.answer)
//    })
//})

d3.csv("./index.csv", function (error, data) {
    // console.log(data[0]);
});

//d3.json('./index.json', function (err, questions) {
//    if (err) throw err;
//    questions.forEach(function (q) {
//        console.log('From: JSON\ndag: %s\neten: %s', q.question, q.answer)
//    })
//})

d3.json("./index.json", function (error, data) {
    // console.log(data[0]);
});
