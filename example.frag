// https://alexander-timoshenko.tumblr.com/post/160079083250/void-main-void-vec2
#ifdef GL_ES
precision highp float;
precision highp int;
#endif

uniform vec2    u_resolution;
uniform float   u_time;

void main(void) {
    vec2 p = (gl_FragCoord.xy - 0.5 * u_resolution) / u_resolution.y;
    float tun = 0.2 / sqrt(dot(p, p));
    float en = float(fract(1.0 / tun + u_time) >= 0.02 / fract(tun + sin(u_time)));
    float l = float(0.5 < fract(tun + sin(u_time * 1.0) + atan(p.x, p.y) * 3.0));
    gl_FragColor = vec4(tun < 0.05 || en < l);
}