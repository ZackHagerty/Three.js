#include "../shading/includes/ambientLight.glsl";
#include "../shading/includes/directionalLight.glsl";
#include "../shading/includes/pointLight.glsl";


uniform vec3 uColor;

varying vec3 vNormal;
varying vec3 vPosition;




void main()
{
    vec3 color = uColor;
    vec3 viewDirection = normalize(vPosition - cameraPosition);
    vec3 normal = normalize(vNormal);

    //Lights
    vec3 light = vec3(0.0);

    light += ambientLight(
        vec3(1.0),  //Light color
        0.03        //Light intensity 
        );

    light += directionalLight(
        vec3(0.1, 0.1, 1.0),  // Light colorr
        1.0,                  // Light Intensity 
        normal,               // Normal
        vec3(0.0, 0.0, 3.0),  // Light position
        viewDirection,         // View direction,
        40.0                  // Specular power
    );
    
     light += pointLight(
        vec3(1.0, 0.1, 0.1), // Light color
        1.0,                 // Light intensity,
        normal,              // Normal
        vec3(0.0, 2.5, 0.0), // Light position
        viewDirection,       // View direction
        20.0,                // Specular power
        vPosition,           // Position
        0.25                 // Light Decay
    );

    color *= light;


    // Final color
    gl_FragColor = vec4(color, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}