// add by wsy
var Objects = require('./objects.js')
const GLTFLoader = require('./loaders/GLTFLoader.js')

function loadGLTF(url, cb) {
  let loader = new GLTFLoader()
  loader.load(url, function(gltf) {
    var obj = gltf.scene
    Objects.prototype._addMethods(obj)
    cb(obj)
  })
}

module.exports = exports = loadGLTF;
