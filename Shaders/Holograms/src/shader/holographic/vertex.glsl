#include "random";

uniform float uTime; 

varying vec3 vPosition;
varying vec3 vNormal;


void main()
{
    //Position
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    //Model normal
    vec4 modelNormal = modelMatrix * vec4(normal, 0.0);

    // When the fourth value is set to 1.0, it means that our vector is “homogeneous” and all 3 transformations (translation, rotation, scale) implied by the modelMatrix will be applied, which is perfect in the case of a position.
    // When the fourth value is set to 0.0, it means that our vector is not homogeneous and the translation won’t be applied, which is ideal in the case of a normal, because the normal is not a position, it’s a direction.


    //Glitch
    float glitchTime = uTime - modelPosition.y;
    float glitchStrength = sin(glitchTime) + sin(glitchTime * 3.45) + sin(glitchTime * 8.76);
    glitchStrength /= 3.0;
    glitchStrength = smoothstep(0.3, 1.0, glitchStrength);
    glitchStrength *= 0.10;

    modelPosition.x += (random2D(modelPosition.xz + uTime) - 0.5) * glitchStrength;
    modelPosition.z += (random2D(modelPosition.zx + uTime) - 0.5) * glitchStrength;

    //Base position
    gl_Position = projectionMatrix * viewMatrix * modelPosition;

    //Varyings
    vPosition = modelPosition.xyz;
    vNormal = modelNormal.xyz;
}