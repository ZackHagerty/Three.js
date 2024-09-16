varying vec2 vUv;


float random(vec2 st)
{
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

void main()
{

    //Pattern 1 - UV with RGB Applied

    // gl_FragColor = vec4(vUv, 1.0, 1.0);

    //Pattern 2 - UV with only RG Applied

    // gl_FragColor = vec4(vUv, 0.0, 1.0);

    //Pattern 3 - UV with gradient on the x-axis
    
    // float strength = vUv.x;
    // gl_FragColor = vec4(vec3(strength), 1.0);

    //Pattern 4 - UV with gradient on y-axis
    
    // float strength = vUv.y;
    // gl_FragColor = vec4(vec3(strength), 1.0);
    
    //Pattern 5 - UV with gradient on y-axis, but flipped

    // float strength = 1.0 - vUv.y;
    // gl_FragColor = vec4(vec3(strength), 1.0);

    //Pattern 6 - Squeezed UV with gradient on y-axis

    // float strength = vUv.y * 10.0;
    // gl_FragColor = vec4(vec3(strength), 1.0);

    //Pattern 7 - Repeated squeezed UV gradient using modulus (%) operator

    // float strength = mod(vUv.y * 10.0, 1.0);
    // gl_FragColor = vec4(vec3(strength), 1.0);

    //Pattern 8 - Squeezed horizontal black and white stripes

    // float strength = mod(vUv.y * 10.0, 1.0);
    // strength = step(0.5, strength);

    // gl_FragColor = vec4(vec3(strength), 1.0);

    //Pattern 9 - Controlling the thickness of the stripes via a higher edge value

    // float strength = mod(vUv.y * 10.0, 1.0);
    // strength = step(0.8, strength);

    // gl_FragColor = vec4(vec3(strength), 1.0);

    //Pattern 10 - Vertical Stripes

    // float strength = mod(vUv.x * 10.0, 1.0);
    // strength = step(0.8, strength);

    // gl_FragColor = vec4(vec3(strength), 1.0);

    //Pattern 11 - Combined Stripes using the += operator, creating tiles

    // float strength = step(0.8, mod(vUv.x * 10.0, 1.0));
    // strength += step(0.8, mod(vUv.y * 10.0, 1.0));

    // gl_FragColor = vec4(vec3(strength), 1.0);

    //Pattern 12 - Dots, same principle but using the *= operator

    // float strength = step(0.8, mod(vUv.x * 10.0, 1.0));
    // strength *= step(0.8, mod(vUv.y * 10.0, 1.0));

    // gl_FragColor = vec4(vec3(strength), 1.0);

    //Pattern 13 - Same pattern, but tweaking the edges results in longer horizontal stripes

    // float strength = step(0.4, mod(vUv.x * 10.0, 1.0));
    // strength *= step(0.8, mod(vUv.y * 10.0, 1.0));

    // gl_FragColor = vec4(vec3(strength), 1.0);

    //Pattern 14 - Applying the y bar as well using the same logic

    // float barX = step(0.4, mod(vUv.x * 10.0, 1.0)) * step(0.8, mod(vUv.y * 10.0, 1.0));
    // float barY = step(0.8, mod(vUv.x * 10.0, 1.0)) * step(0.4, mod(vUv.y * 10.0, 1.0));
    // float strength = barX + barY;

    // gl_FragColor = vec4(vec3(strength), 1.0);

    //Pattern 15 - Applying an offset to the bars to make it "+" shaped

    // float barX = step(0.4, mod(vUv.x * 10.0 - 0.2, 1.0)) * step(0.8, mod(vUv.y * 10.0, 1.0));
    // float barY = step(0.8, mod(vUv.x * 10.0, 1.0)) * step(0.4, mod(vUv.y * 10.0 - 0.2, 1.0));

    // float strength = barX + barY;

    // gl_FragColor = vec4(vec3(strength), 1.0);

    //Doing different things now


    //Pattern 16 - Need to offset the vUv.x so it goes from -0.5 -> 0.5, and then clamp it to 0.0 -> 0.5 using abs()

    // float strength = abs(vUv.x - 0.5);
    // gl_FragColor = vec4(vec3(strength), 1.0);

    //Pattern 17 - minimum value between the pattern on the x axis and the pattern on the y axis

    // float strength = min(abs(vUv.x - 0.5), abs(vUv.y - 0.5));

    // gl_FragColor = vec4(vec3(strength), 1.0);

    //Pattern 18 - maximum value between the pattern on the x axis and the pattern on the y axis

    // float strength = max(abs(vUv.x - 0.5), abs(vUv.y - 0.5));

    // gl_FragColor = vec4(vec3(strength), 1.0);

    //Pattern 19 - applied a step on the previous value to produce a square

    // float strength = step(0.2, max(abs(vUv.x - 0.5), abs(vUv.y - 0.5)));

    // gl_FragColor = vec4(vec3(strength), 1.0);
    
    //Pattern 20 - Multiplication of one square with another but smaller and inverted

    // float strength = step(0.2, max(abs(vUv.x - 0.5), abs(vUv.y - 0.5)));
    // strength *= 1.0 - step(0.25, max(abs(vUv.x - 0.5), abs(vUv.y - 0.5)));

    // gl_FragColor = vec4(vec3(strength), 1.0);


    //Pattern 21 - gradient from left to right (x I think)

    // float strength = floor(vUv.x * 10.0) / 10.0;
    // gl_FragColor = vec4(vec3(strength), 1.0);


    //Pattern 22 - gradient from bottom left to rop right by combining x and y gradient

    // float strength = floor(vUv.x * 10.0) / 10.0 * floor(vUv.y * 10.0) / 10.0;
    // gl_FragColor = vec4(vec3(strength), 1.0);


    //Pattern 23 - random noise ona huge scale

    float strength = random(vUv);
    gl_FragColor = vec4(vec3(strength), 1.0);

    //Pattern 24 - random noise 
}
