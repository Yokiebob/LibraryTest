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
  gl.shaderSource(vertexShader,vsh);
  gl.compileShader(vertexShader);
  
  var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fragmentShader,fsh);
  gl.compileShader(fragmentShader);
  
  var program = gl.createProgram();
  gl.attachShader(program,vertexShader);
  gl.attachShader(program,fragmentShader);
  gl.linkProgram(program);
  return program;
}
function setUpProgram(program){
  var positionAttributeLocation = gl.getAttribLocation(program,'pos');
  var positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER,positionBuffer);
  var screen = [
    1,1,
    -1,1,
    1,-1,
    
    -1,1,
    1,-1,
    -1,-1
  ];
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(screen),gl.STATIC_DRAW);
  var vao = gl.createVertexArray();
  gl.bindVertexArray(vao);
  gl.enableVertexAttribArray(positionAttributeLocation);
  gl.vertexAttribPointer(positionAttributeLocation,2,gl.FLOAT,false,0,0);
}
