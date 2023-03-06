var webglCanvas = new OffscreenCanvas(400,400);
var gl = webglCanvas.getContext('webgl2');
if(!gl){
  alert('You need webgl2 for this to work!');
  println('you need webgl2 for this to work!');
  console.log('You need webgl2 for this to work!');
  debug('you need webgl2 for this to work!');
}
var vsh = 
`#version 300 es

in vec2 pos;

void main(){
  gl_Position = pos;
}`;
function createProgram(fsh){
  var vertexShader = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vsh);
}
