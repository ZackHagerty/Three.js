uniform mat4 projectionMatrix; //Transforms our coordinates into the final clip space coorrdinates
uniform mat4 viewMatrix; //apply transformations relative to the camera. If we rotate the camera to the left, the vertices should be on the right. If we move the camera in direction of the Mesh, the vertices should get bigger, etc.
uniform mat4 modelMatrix; //apply all transformations relative to the Mesh. If we scale, rotate or move the Mesh, these transformations will be contained in the modelMatrix and applied to the position.
uniform vec2 uFrequency;
uniform float uTime;

attribute vec3 position;
attribute vec2 uv;

varying vec2 vUv;
varying float vElevation;


// attribute float aRandom;

// varying float vRandom;

void main()
{
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
 
    float elevation = sin(modelPosition.x * uFrequency.x - uTime) * 0.1;
    elevation += sin(modelPosition.y * uFrequency.y - uTime) * 0.1;
 
    modelPosition.z += elevation;
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    
    vUv = uv; 
    vElevation = elevation;

    gl_Position = projectedPosition;
    
}