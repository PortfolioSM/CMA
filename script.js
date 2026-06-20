  // header scroll state
  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  });

  // hero neon video — force play in case autoplay attribute gets blocked
  const neonVideo = document.querySelector('.neon-video');
  if (neonVideo) {
    neonVideo.muted = true;
    neonVideo.defaultMuted = true;
    const tryPlay = () => {
      const playPromise = neonVideo.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // autoplay blocked — retry once on first user interaction
          const resumeOnInteract = () => {
            neonVideo.play().catch(() => {});
            document.removeEventListener('touchstart', resumeOnInteract);
            document.removeEventListener('click', resumeOnInteract);
          };
          document.addEventListener('touchstart', resumeOnInteract, { once:true });
          document.addEventListener('click', resumeOnInteract, { once:true });
        });
      }
    };
    if (neonVideo.readyState >= 2) { tryPlay(); }
    else { neonVideo.addEventListener('loadeddata', tryPlay, { once:true }); }
    neonVideo.load();
  }

  // reveal on scroll
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => io.observe(el));

  // pricing tabs
  const tabs = document.querySelectorAll('.price-tab');
  const panels = document.querySelectorAll('.price-panel');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      document.querySelector(`.price-panel[data-panel="${tab.dataset.tab}"]`).classList.add('active');
    });
  });
