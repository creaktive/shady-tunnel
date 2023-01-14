#ifdef GL_ES
precision highp float;
#endif

uniform vec2    u_resolution;
uniform float   u_time;

#include "lygia/space/ratio.glsl"
#include "lygia/draw/circle.glsl"

void main(void) {
    vec3 color = vec3(0.0);
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    st = ratio(st, u_resolution);
    
    float r = 0.5;
    float w = 0.01;
    float z = -0.5 + sin(u_time);
    int n = 50;

    for (int i = 0; i < n; i++, z += 0.2) {
        color += circle(st, r / z, w / (z * 2.0));
    }
    
    gl_FragColor = vec4(color, 1.0);
}