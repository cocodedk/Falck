(() => {
  const slides = Array.from(document.querySelectorAll('.slide'));
  const nav = document.querySelector('.nav');
  const dotsEl = document.getElementById('dots');
  const currentEl = document.getElementById('current');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');

  slides.forEach((s, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.setAttribute('aria-label', `Gå til slide ${i + 1}`);
    b.addEventListener('click', () => s.scrollIntoView({ behavior: 'smooth' }));
    dotsEl.appendChild(b);
  });
  const dots = Array.from(dotsEl.querySelectorAll('button'));

  let currentIdx = 0;

  const go = (delta) => {
    const next = Math.max(0, Math.min(slides.length - 1, currentIdx + delta));
    slides[next]?.scrollIntoView({ behavior: 'smooth' });
  };
  prevBtn.addEventListener('click', () => go(-1));
  nextBtn.addEventListener('click', () => go(1));

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0.5) {
        entry.target.classList.add('is-visible');
        const idx = slides.indexOf(entry.target);
        currentIdx = idx;
        currentEl.textContent = idx + 1;
        dots.forEach((d, i) => d.classList.toggle('is-active', i === idx));
        const isYellow = entry.target.classList.contains('slide--title');
        document.body.classList.toggle('is-yellow-slide', isYellow);
        prevBtn.disabled = idx === 0;
        nextBtn.disabled = idx === slides.length - 1;
      }
    });
  }, { threshold: [0.5] });

  slides.forEach((s) => io.observe(s));

  let ticking = false;
  const parallax = () => {
    const h = window.innerHeight;
    slides.forEach((s) => {
      const r = s.getBoundingClientRect();
      if (r.bottom < 0 || r.top > h) return;
      const progress = (r.top + r.height / 2 - h / 2) / h;
      const y = Math.max(-40, Math.min(40, progress * -30));
      s.querySelector('.slide__inner').style.setProperty('--parallax-y', `${y.toFixed(1)}px`);
    });
    ticking = false;
  };
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(parallax);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  parallax();

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ' || e.key === 'ArrowRight') {
      e.preventDefault();
      go(1);
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      go(-1);
    } else if (e.key === 'Home') {
      slides[0].scrollIntoView({ behavior: 'smooth' });
    } else if (e.key === 'End') {
      slides[slides.length - 1].scrollIntoView({ behavior: 'smooth' });
    }
  });
})();
