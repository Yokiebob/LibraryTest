var webglCanvas = new OffscreenCanvas(400,400);
var gl = webglCanvas.getContext('webgl2');
var vertexShader = 
`#version 300 es

in vec2 pos;

void main(){
  gl_Position = pos;
}`;
