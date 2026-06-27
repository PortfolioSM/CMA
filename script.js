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

  // ── godziny otwarcia ──────────────────────────────────────────
  const HOURS = {
    1: { open: 10, close: 20, label: '10:00–20:00' },
    2: { open: 10, close: 20, label: '10:00–20:00' },
    3: { open: 10, close: 20, label: '10:00–20:00' },
    4: { open: 10, close: 20, label: '10:00–20:00' },
    5: { open: 10, close: 20, label: '10:00–20:00' },
    6: { open:  9, close: 17, label: '09:00–17:00' },
    0: null // zamknięte
  };

  function getWarsawTime() {
    // Konwertuje bieżący czas na strefę Europe/Warsaw
    const now = new Date();
    const warsawStr = now.toLocaleString('en-US', { timeZone: 'Europe/Warsaw' });
    return new Date(warsawStr);
  }

  const DAY_NAMES = ['Niedziela','Poniedziałek','Wtorek','Środa','Czwartek','Piątek','Sobota'];

  function dayLabel(d) {
    const h = HOURS[d];
    return h ? h.label : 'Zamknięte';
  }

  function updateHoursUI() {
    const t = getWarsawTime();
    const day = t.getDay();
    const hour = t.getHours();
    const min  = t.getMinutes();
    const nowMins = hour * 60 + min;

    const today = HOURS[day];
    const isOpen = today && nowMins >= today.open * 60 && nowMins < today.close * 60;

    // hero status
    const statusDot  = document.getElementById('statusDot');
    const statusText = document.getElementById('statusText');
    if (statusDot && statusText) {
      if (isOpen) {
        statusDot.style.background = '#22c55e';
        statusText.textContent = `Otwarte teraz · do ${today.close}:00`;
      } else {
        statusDot.style.background = '#6b7280';
        if (!today) {
          statusText.textContent = 'Dziś zamknięte';
        } else if (nowMins < today.open * 60) {
          statusText.textContent = `Otwieramy o ${today.open}:00`;
        } else {
          const nextDay = HOURS[(day + 1) % 7];
          if (nextDay) statusText.textContent = `Jutro otwieramy o ${nextDay.open}:00`;
          else statusText.textContent = 'Zamknięte';
        }
      }
    }

    // hours-table — highlight today
    document.querySelectorAll('.hrow[data-day]').forEach(row => {
      row.classList.toggle('today', parseInt(row.dataset.day) === day);
    });

    // hours-strip (3-kolumnowy pasek w sekcji rezerwacji)
    const d1 = day;
    const d2 = (day + 1) % 7;
    const d3 = (day + 2) % 7;

    const s0L = document.getElementById('stripDay0Label');
    const s0H = document.getElementById('stripDay0Hours');
    const s1  = document.getElementById('stripDay1');
    const s1L = document.getElementById('stripDay1Label');
    const s1H = document.getElementById('stripDay1Hours');
    const s2  = document.getElementById('stripDay2');
    const s2L = document.getElementById('stripDay2Label');
    const s2H = document.getElementById('stripDay2Hours');

    if (s0L) s0L.textContent = 'Dziś';
    if (s0H) s0H.textContent = today ? today.label.replace('–', '– ') : 'Zamknięte';
    if (s1L) s1L.textContent = DAY_NAMES[d2];
    if (s1H) s1H.textContent = dayLabel(d2).replace('–', '– ');
    if (s2L) s2L.textContent = DAY_NAMES[d3];
    if (s2H) s2H.textContent = dayLabel(d3).replace('–', '– ');

    // kolory strip
    if (s1) s1.classList.toggle('closed', !HOURS[d2]);
    if (s2) s2.classList.toggle('closed', !HOURS[d3]);
  }

  updateHoursUI();

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
