/* ===== FAQ アコーディオン ===== */
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const answer = btn.nextElementSibling;
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    document.querySelectorAll('.faq-q').forEach(b => {
      b.setAttribute('aria-expanded', 'false');
      b.nextElementSibling.classList.remove('open');
    });
    if (!expanded) {
      btn.setAttribute('aria-expanded', 'true');
      answer.classList.add('open');
    }
  });
});

/* ===== スティッキー予約ボタン＆ヘッダー（ヒーロー通過後に切り替え） ===== */
const stickyBtn = document.getElementById('stickyBooking');
const siteHeader = document.querySelector('.site-header');
const hero = document.querySelector('.hero');
const heroObserver = new IntersectionObserver(
  ([entry]) => {
    const past = !entry.isIntersecting;
    stickyBtn.classList.toggle('visible', past);
    siteHeader.classList.toggle('scrolled', past);
  },
  { threshold: 0 }
);
heroObserver.observe(hero);

/* ===== 予約ボタンクリックを GA イベントとして計測 ===== */
document.querySelectorAll('a[href*="fresha.com"]').forEach(link => {
  link.addEventListener('click', () => {
    gtag('event', 'booking_click', {
      event_category: 'CTA',
      event_label: link.textContent.trim(),
    });
  });
});
