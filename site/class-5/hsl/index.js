'use strict';

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(30);
var renderer = new THREE.WebGLRenderer({antialias: true});

/* Set z index. */
camera.position.z = 6;

/* Don’t bug with info messages. */
renderer.context.getShaderInfoLog = function () { return ''; };

scene.add(cone(0)).add(cone(1));

resize();
render();

document.body.appendChild(renderer.domElement);

window.addEventListener('resize', resize);

function render() {
  var meshes = scene.children;
  var length = meshes.length;
  var index = -1;

  while (++index < length) {
    meshes[index].rotation.x += 0.01;
    meshes[index].rotation.y += 0.005;
  }

  renderer.render(scene, camera);
  requestAnimationFrame(render);
}


function resize(){
  var w = window.innerWidth;
  var h = window.innerHeight;

  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h);
}

function cone(apex) {
  var geometry = new THREE.Geometry();
  var material = new THREE.MeshBasicMaterial({vertexColors: THREE.VertexColors, side: THREE.DoubleSide});
  var wedges = 60;
  var colors = [];
  var faces = geometry.faces;
  var vertices = geometry.vertices;
  var index;
  var length;
  var last;
  var radians;
  var hue;
  var color;
  var face;

  /* Black or white and grey. */
  colors.push(new THREE.Color(apex, apex, apex), new THREE.Color(0.5, 0.5, 0.5));

  vertices.push(new THREE.Vector3(0, 0, apex * 1.5), new THREE.Vector3(0, 0, 0.75));

  /* Loop around the base and create vertices and their colors. */
  index = -1;
  length = wedges;
  while (++index < length) {
    hue = index / wedges;
    radians = hue * 2 * Math.PI;
    vertices.push(new THREE.Vector3(Math.cos(radians), Math.sin(radians), 0.75));
    colors.push(new THREE.Color().setHSL(hue, 1, 0.5));
  }

  /* Create all but the last two faces. */
  index = 2;
  last = wedges + 1;
  while (++index <= last) {
    faces.push(new THREE.Face3(0, index, index - 1)); /* Face up to apex. */
    faces.push(new THREE.Face3(1, index - 1, index)); /* Face in to center. */
  }

  /* Last faces. */
  faces.push(new THREE.Face3(0, 2, last));
  faces.push(new THREE.Face3(1, last, 2));

  /* Add colors. */
  index = -1;
  length = faces.length;
  while (++index < length) {
    face = faces[index];
    face.vertexColors = [colors[face.a], colors[face.b], colors[face.c]];
  }

  return new THREE.Mesh(geometry, material);
}
