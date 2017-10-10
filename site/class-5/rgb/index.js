'use strict';

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(30);
var renderer = new THREE.WebGLRenderer({antialias: true});
var geometry = color(new THREE.BoxGeometry(1, 1, 1));
var material = new THREE.MeshBasicMaterial({vertexColors: THREE.VertexColors});
var mesh = new THREE.Mesh(geometry, material);

/* Set z index. */
camera.position.z = 4;

/* Don’t bug with info messages. */
renderer.context.getShaderInfoLog = function () { return ''; };

scene.add(mesh);

resize();
render();

document.body.appendChild(renderer.domElement);

window.addEventListener('resize', resize);

function render() {
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.02;
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

function color(geometry) {
  var faces = geometry.faces;
  var vertices = geometry.vertices;
  var length = faces.length;
  var index = -1;
  var indices = ['a', 'b', 'c'];
  var count = indices.length;
  var colors;
  var face;
  var offset;
  var vertex;
  var point;

  while (++index < length) {
    face = faces[index];
    colors = face.vertexColors;
    offset = -1;

    while (++offset < count) {
      point = vertices[face[indices[offset]]];
      colors[offset] = new THREE.Color(point.x + 0.5, point.y + 0.5, point.z + 0.5);
    }
  }

  return geometry;
}
