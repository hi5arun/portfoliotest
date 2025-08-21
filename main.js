// ====== Main JS ======
AOS.init({ once: true, duration: 700 });

// Mobile menu
const mobileBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
if (mobileBtn) {
  mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// ScrollTop button
const scrollTopBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add('opacity-100','translate-y-0');
    scrollTopBtn.classList.remove('opacity-0','translate-y-4');
  } else {
    scrollTopBtn.classList.remove('opacity-100','translate-y-0');
    scrollTopBtn.classList.add('opacity-0','translate-y-4');
  }
});
scrollTopBtn.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

// Projects filter
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active','bg-gradient-to-r','from-brand-primary','to-brand-secondary','text-white'));
    btn.classList.add('active','bg-gradient-to-r','from-brand-primary','to-brand-secondary','text-white');
    const filter = btn.dataset.filter;
    projectCards.forEach(card => {
      const match = filter === 'all' || card.dataset.category === filter;
      card.style.display = match ? '' : 'none';
    });
  });
});

// Testimonials carousel (auto-play with manual controls)
const track = document.getElementById('carouselTrack');
const imgs = document.querySelectorAll('#carouselTrack .testimonial-img');
let idx = 0;
function goTo(n){
  idx = (n + imgs.length) % imgs.length;
  const width = track.parentElement.clientWidth;
  track.style.transform = `translateX(${-idx * width}px)`;
}
function next(){ goTo(idx + 1); }
function prev(){ goTo(idx - 1); }
let timer = setInterval(next, 3500);
document.getElementById('nextBtn').addEventListener('click', ()=>{ next(); resetAuto(); });
document.getElementById('prevBtn').addEventListener('click', ()=>{ prev(); resetAuto(); });
track.parentElement.addEventListener('mouseenter', ()=> clearInterval(timer));
track.parentElement.addEventListener('mouseleave', ()=> timer = setInterval(next, 3500));
window.addEventListener('resize', ()=> goTo(idx));
function resetAuto(){ clearInterval(timer); timer = setInterval(next, 3500); }
goTo(0);

// Contact form: fallback to mailto if no Formspree ID
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    const action = form.getAttribute('action');
    if (!action || action.includes('your-id')) {
      e.preventDefault();
      const data = new FormData(form);
      const subject = encodeURIComponent(data.get('subject') || 'Portfolio Contact');
      const body = encodeURIComponent(
        `Name: ${data.get('name')}
Email: ${data.get('email')}
\n${data.get('message')}`
      );
      window.location.href = `mailto:Hi5arun@gmail.com?subject=${subject}&body=${body}`;
    }
  });
}

// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Jarvis popup
const openJarvis = document.getElementById('openJarvis');
const jarvisToggle = document.getElementById('jarvis-toggle');
const jarvisPopup = document.getElementById('jarvis-popup');
const jarvisClose = document.getElementById('jarvis-close');
const jarvisTip = document.getElementById('jarvis-tooltip');

function toggleJarvis(){
  const isHidden = jarvisPopup.classList.contains('hidden');
  jarvisPopup.classList.toggle('hidden', !isHidden);
  if (jarvisTip) jarvisTip.classList.toggle('hidden', !isHidden);
}
if (openJarvis) openJarvis.addEventListener('click', toggleJarvis);
if (jarvisToggle) jarvisToggle.addEventListener('click', toggleJarvis);
if (jarvisClose) jarvisClose.addEventListener('click', toggleJarvis);
