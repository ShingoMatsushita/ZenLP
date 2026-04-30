/* ===== Google Analytics (GA4) ===== */
// TODO: G-XXXXXXXXXX を実際の測定IDに置き換えてください
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-XXXXXXXXXX');

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

/* ===== スティッキー予約ボタン（ヒーロー通過後に表示） ===== */
const stickyBtn = document.getElementById('stickyBooking');
const hero = document.querySelector('.hero');
const observer = new IntersectionObserver(
  ([entry]) => {
    stickyBtn.classList.toggle('visible', !entry.isIntersecting);
  },
  { threshold: 0.1 }
);
observer.observe(hero);

/* ===== 予約ボタンクリックを GA イベントとして計測 ===== */
document.querySelectorAll('a[href*="fresha.com"]').forEach(link => {
  link.addEventListener('click', () => {
    gtag('event', 'booking_click', {
      event_category: 'CTA',
      event_label: link.textContent.trim(),
    });
  });
});
