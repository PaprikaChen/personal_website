document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.getElementById('videoWrapper');
  if (!wrapper) return;

  // Parallax config
  const MAX_ROTATE = 6;       // max degrees of tilt
  const MAX_TRANSLATE = 14;   // max px of lateral drift
  const DEPTH_SCALE = 0.015;  // subtle scale pulse
  const LERP = 0.07;          // smoothing factor (lower = smoother/slower)

  let targetX = 0, targetY = 0;
  let currentX = 0, currentY = 0;
  let rafId = null;

  function onMouseMove(e) {
    // Normalized -1 to 1 relative to viewport center
    const nx = (e.clientX / window.innerWidth  - 0.5) * 2;
    const ny = (e.clientY / window.innerHeight - 0.5) * 2;

    targetX = nx;
    targetY = ny;

    if (!rafId) rafId = requestAnimationFrame(animate);
  }

  function onMouseLeave() {
    targetX = 0;
    targetY = 0;
    if (!rafId) rafId = requestAnimationFrame(animate);
  }

  function lerp(a, b, t) { return a + (b - a) * t; }

  function animate() {
    currentX = lerp(currentX, targetX, LERP);
    currentY = lerp(currentY, targetY, LERP);

    const rotY =  currentX * MAX_ROTATE;
    const rotX = -currentY * MAX_ROTATE;
    const tx   =  currentX * MAX_TRANSLATE;
    const ty   =  currentY * MAX_TRANSLATE;
    // subtle scale: slightly larger when mouse is away from center
    const dist = Math.sqrt(currentX * currentX + currentY * currentY);
    const scale = 1 + dist * DEPTH_SCALE;

    wrapper.style.transform =
      `translate(${tx}px, ${ty}px) ` +
      `perspective(800px) ` +
      `rotateY(${rotY}deg) ` +
      `rotateX(${rotX}deg) ` +
      `scale(${scale})`;

    // Keep animating until settled
    const settled =
      Math.abs(currentX - targetX) < 0.001 &&
      Math.abs(currentY - targetY) < 0.001;

    if (settled) {
      rafId = null;
    } else {
      rafId = requestAnimationFrame(animate);
    }
  }

  document.addEventListener('mousemove', onMouseMove, { passive: true });
  document.addEventListener('mouseleave', onMouseLeave);

  // Touch support: gentle drift on touch devices
  document.addEventListener('touchmove', (e) => {
    const t = e.touches[0];
    const nx = (t.clientX / window.innerWidth  - 0.5) * 2;
    const ny = (t.clientY / window.innerHeight - 0.5) * 2;
    targetX = nx * 0.5;
    targetY = ny * 0.5;
    if (!rafId) rafId = requestAnimationFrame(animate);
  }, { passive: true });

  document.addEventListener('touchend', onMouseLeave, { passive: true });
});
