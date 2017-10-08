// developed by Daniel Risacher, dan@risacher.org (c) 2016

// inspired by galaxycharts.com

// The first planet is to the left, rather than down, because most
// computer displays are wider than they are tall, and thus the chart
// has a more portait-y orientation



(function () {
d3.layout.galaxy = function () {
    var hierarchy = d3.layout.hierarchy().sort(d3_layout_galaxySort),
    spread = 4,
    initialAngle = -Math.PI/2,
    size = [1, 1],
    radius;

    function galaxy(d, i) {
        var nodes = hierarchy.call(this, d, i),
        root = nodes[0],
        w = size[0],
        h = size[1],
        r = radius == null ? Math.sqrt : typeof radius === "function" ? radius : function() { return radius; };

        // Recursively compute the layout.
        root.angle = initialAngle; root.x = root.y = 0;
//        d3_layout_hierarchyVisitBefore(root, function(d) { console.log(d.name); });
        d3_layout_hierarchyVisitAfter(root, function(d) { d.r = +r(d.value); });
        d3_layout_hierarchyVisitBefore(root, function(x) { return d3_layout_galaxySiblings(x,spread); });

        // Translate and scale the layout to fit the requested size.
        var bounds = d3_layout_galaxyBound(root);
        var k = Math.min(w/(bounds[1]-bounds[0]), h/(bounds[3]-bounds[2]));
        var dx = (w-k*(bounds[1]+bounds[0])) / 2  ;
        var dy = (h-k*(bounds[3]+bounds[2])) / 2  ;
//        console.log('****** before ', bounds, w, h);
//        console.log('****** transforms:', dx, dy, k);
        d3_layout_galaxyTransform(root, dx, dy, k);
//        console.log('****** after ', d3_layout_galaxyBound(root), root.x, root.y, w, h);
        return nodes;
    }

    galaxy.size = function(_) {
        if (!arguments.length) return size;
        size = _;
        return galaxy;
    };

    galaxy.initialAngle = function(_) {
        if (!arguments.length) return initialAngle;
        initialAngle = _;
        return galaxy;
    };

    galaxy.radius = function(_) {
        if (!arguments.length) return radius;
        radius = _ == null || typeof _ === "function" ? _ : +_;
        return galaxy;
    };

    galaxy.spread = function(_) {
        if (!arguments.length) return spread;
        spread = +_;
        return galaxy;
    };

    return d3_layout_hierarchyRebind(galaxy, hierarchy);
};

function d3_layout_galaxyBound(node) {
    var b = [- node.r,
             + node.r,
             - node.r,
             + node.r];
    var nodes = node.children;
    if (nodes) {
        for (var i=0; i<nodes.length; i++) {
            var nb = d3_layout_galaxyBound(nodes[i]);
            b[0] = Math.min(b[0], nb[0]+nodes[i].x);
            b[1] = Math.max(b[1], nb[1]+nodes[i].x);
            b[2] = Math.min(b[2], nb[2]+nodes[i].y);
            b[3] = Math.max(b[3], nb[3]+nodes[i].y);
        };
    }
//    console.log(node.name, b);
    return b;
}


function d3_layout_galaxySort(a, b) {
    return -(a.value - b.value);
}

function d3_layout_galaxySiblings(node, spread) {
    if (!(nodes = node.children) || !(n = nodes.length)) return;

    for (var i = 0; i < nodes.length; i++) {
        // the complexity with the modulo (below) is to rotate even
        // sets of moons by half a pie-wedge to prevent lunar
        // eclipses.
        nodes[i].angle = node.angle - (i-(nodes.length-1)%2/2)*2*Math.PI/nodes.length;
        var distance = node.r + spread * nodes[i].r;
        nodes[i].x = distance * Math.sin(nodes[i].angle);
        nodes[i].y = distance * Math.cos(nodes[i].angle);
    }

}


function d3_layout_galaxyTransform(node, x, y, k) {
    var children = node.children;
    node.x = x += k * node.x;
    node.y = y += k * node.y;
    node.r *= k;
    if (children) {
        var i = -1, n = children.length;
        while (++i < n) d3_layout_galaxyTransform(children[i], x, y, k);
    }
}

// below functions included from hierachy.js, since I can't import from a plugin
function d3_layout_hierarchyRebind(object, hierarchy) {
    d3.rebind(object, hierarchy, "sort", "children", "value");

    // Add an alias for nodes and links, for convenience.
    object.nodes = object;
    object.links = d3_layout_hierarchyLinks;

    return object;
}
function d3_layout_hierarchyLinks(nodes) {
    return d3.merge(nodes.map(function(parent) {
        return (parent.children || []).map(function(child) {
            return {source: parent, target: child};
        });
    }));
}

// Pre-order traversal.
function d3_layout_hierarchyVisitBefore(node, callback) {
  var nodes = [node];
  while ((node = nodes.pop()) != null) {
    callback(node);
    if ((children = node.children) && (n = children.length)) {
      var n, children;
      while (--n >= 0) nodes.push(children[n]);
    }
  }
}
// Post-order traversal.
function d3_layout_hierarchyVisitAfter(node, callback) {
    var nodes = [node], nodes2 = [];
    while ((node = nodes.pop()) != null) {
        nodes2.push(node);
        if ((children = node.children) && (n = children.length)) {
            var i = -1, n, children;
            while (++i < n) nodes.push(children[i]);
        }
    }
    while ((node = nodes2.pop()) != null) {
        callback(node);
    }
}

})();
