
precision mediump float;

varying vec2 vUv;

uniform vec3 color1;  
uniform vec3 color2; 
uniform float time; 
uniform vec2 resolution;

float stripeWidth = 0.4;

// Sine wave-based wobble effect
float wobble(vec2 uv, float time) {
    // Use sine waves to create a smooth wobble along both x and y axes
    time *= 0.025;
    float waveX = sin((uv.x + time * 1.0) * 5.0) * 0.1;
    float waveY = sin((uv.y + time * 0.8) * 12.0) * 0.1;

    // Combine the waves for a more natural effect
    return waveX + waveY;
}

void main() {

    // normalize uv coordinates to screen-independent space
    vec2 aspectRatio = resolution / min(resolution.x, resolution.y);
    vec2 normalizedUV = (vUv - 0.5) * aspectRatio;

    // Apply the sine wave wobble to the UV coordinates
    float wavyStripe = (normalizedUV.x - normalizedUV.y) / stripeWidth + wobble(normalizedUV, time);

    // Create the striped pattern with the mod function
    float stripe = mod(wavyStripe, 2.0);

    // Mix the two colors based on the stripe value
    vec3 finalColor = mix(color1, color2, step(1.0, stripe));

    gl_FragColor = vec4(finalColor, 1.0);
}
