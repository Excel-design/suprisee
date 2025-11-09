
const lines = [
  "alllooooo Pipit 🩵",
  "selamat ulang tahun yangg ke 17 ya—semoga sehat selalu,panjang umur,di lancarkan rezekinya,di mudahkan urusannyaa,suksess dunia & akhirat , dan semoga apa yang di citaa citainn bisaa tercapaii,semogaa di jauhkan juga dari marabahaya,dan semoga di jauhkan dari kemaksiatan/hall hall yang buatt dosaa",
  "semoga setiap hari pipitt dipenuhi doa baik,orangg orangg baikk,selaluu bahagiaa,selalu semangatt,selalu jadi orang baikk,istiqomah beribadahnya , jangann pernah putus doanyaa aminn",
  "tetapp jadii pribadiii pipitt yangg baikk yaa,patuhh sama orang tuaa,rajinn belajarr,dan lakukann hall hall positiff tiapp harinyaa"
];

let li = 0, ch = 0;
const typedEl = document.getElementById("typed");

function typeWriter() {
  if (li >= lines.length) return;
  const line = lines[li];
  if (ch < line.length) {
    typedEl.textContent = line.slice(0, ch + 1);
    ch++;
    setTimeout(typeWriter, 42 + Math.random() * 30);
  } else {
    typedEl.textContent += "\n\n";
    li++; ch = 0;
    setTimeout(typeWriter, 650 + Math.random() * 300);
  }
}
setTimeout(typeWriter, 700);


function ultraConfetti(duration = 3200) {
  const colors = ['#ffd6e9','#d6f1ff','#e9f7ff','#fff0f6','#c8f5ff','#b3e5ff','#ffc6e0','#ffffff','#f6e3ff','#aee7ff'];
  const emojis = ['🦋','🌸','💐','🏳️','✨','💖'];
  const end = Date.now() + duration;

  (function frame() {
    
    confetti({
      particleCount: 25 + Math.floor(Math.random() * 25),
      startVelocity: 35 + Math.random() * 15,
      spread: 90 + Math.random() * 60,
      ticks: 100 + Math.random() * 40,
      gravity: 0.8,
      origin: { x: Math.random(), y: Math.random() * 0.25 },
      colors,
      shapes: ['circle', 'square']
    });


    for (let i = 0; i < 5; i++) {
      const emoji = document.createElement('div');
      emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      emoji.style.position = 'fixed';
      emoji.style.left = Math.random() * 100 + 'vw';
      emoji.style.top = Math.random() * 50 + 'vh';
      emoji.style.fontSize = (18 + Math.random() * 22) + 'px';
      emoji.style.pointerEvents = 'none';
      emoji.style.zIndex = '999';
      emoji.style.opacity = 0.9;
      document.body.appendChild(emoji);

      const dur = 2200 + Math.random() * 1200;
      emoji.animate([
        { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
        { transform: `translateY(${150 + Math.random() * 50}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
      ], { duration: dur, easing: 'ease-out' });

      setTimeout(() => emoji.remove(), dur);
    }

    
    confetti({
      particleCount: 18 + Math.floor(Math.random() * 12),
      angle: 60,
      spread: 100,
      startVelocity: 40,
      gravity: 0.8,
      origin: { x: 0 },
      colors
    });
    confetti({
      particleCount: 18 + Math.floor(Math.random() * 12),
      angle: 120,
      spread: 100,
      startVelocity: 40,
      gravity: 0.8,
      origin: { x: 1 },
      colors
    });

    if (Date.now() < end) requestAnimationFrame(frame);
  })();
}


const confettiBtn = document.getElementById("confettiBtn");
const surpriseBtn = document.getElementById("surpriseBtn");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const modalConfetti = document.getElementById("modalConfetti");

confettiBtn.addEventListener("click", ()=>ultraConfetti(2800));
surpriseBtn.addEventListener("click", ()=>{
  modal.classList.remove("hidden");
  ultraConfetti(3500);
});
if(closeModal) closeModal.addEventListener("click", ()=>modal.classList.add("hidden"));
if(modalConfetti) modalConfetti.addEventListener("click", ()=>ultraConfetti(2200));


const stickers = document.querySelectorAll('.sticker');
stickers.forEach((s,idx)=>{
  const dur = 3500 + idx*400 + Math.random()*1200;
  s.animate([{ transform: s.style.transform||'translateY(0) rotate(0deg)' },
             { transform: 'translateY(-12px) rotate(5deg)' },
             { transform: s.style.transform||'translateY(0) rotate(0deg)' }],
             { duration: dur, iterations: Infinity, direction: 'alternate', easing: 'ease-in-out' });
});

const butts = document.querySelectorAll('.butterfly');
butts.forEach((b,idx)=>{
  const dur = 6000 + Math.random()*3000;
  b.animate([{ transform: `translateY(0) rotate(${idx%2?8:-8}deg)` },
             { transform: `translateY(-20px) rotate(${idx%2?-6:6}deg)` },
             { transform: `translateY(0) rotate(${idx%2?8:-8}deg)` }],
             { duration: dur, iterations: Infinity, easing: 'ease-in-out' });
});

const bgCanvas = document.createElement('canvas');
bgCanvas.id = 'bgParticles';
bgCanvas.style.position='fixed';
bgCanvas.style.top='0';
bgCanvas.style.left='0';
bgCanvas.style.width='100%';
bgCanvas.style.height='100%';
bgCanvas.style.pointerEvents='none';
bgCanvas.style.zIndex='0';
document.body.appendChild(bgCanvas);

const ctx = bgCanvas.getContext('2d');
bgCanvas.width = window.innerWidth;
bgCanvas.height = window.innerHeight;

const bgColors = ['#ffd6e9','#d6f1ff','#fff0f6','#c8f5ff','#ffffff','#b3e5ff','#ffc6e0'];
const bgEmojis = ['🦋','🌸','💐','🏳️','✨'];

const particles = [];
for(let i=0;i<100;i++){
  particles.push({
    x: Math.random()*bgCanvas.width,
    y: Math.random()*bgCanvas.height,
    r: 2+Math.random()*3,
    dx: (Math.random()-0.5)*0.6,
    dy: (Math.random()-0.5)*0.6,
    color: bgColors[Math.floor(Math.random()*bgColors.length)],
    emoji: Math.random() < 0.2 ? bgEmojis[Math.floor(Math.random()*bgEmojis.length)] : null,
    alpha: 0.3 + Math.random()*0.7
  });
}

function animateBgParticles(){
  ctx.clearRect(0,0,bgCanvas.width,bgCanvas.height);
  particles.forEach(p=>{
    p.x += p.dx;
    p.y += p.dy;
    if(p.x < 0) p.x = bgCanvas.width;
    if(p.x > bgCanvas.width) p.x = 0;
    if(p.y < 0) p.y = bgCanvas.height;
    if(p.y > bgCanvas.height) p.y = 0;

    ctx.globalAlpha = p.alpha;
    if(p.emoji){
      ctx.font = `${p.r*4}px sans-serif`;
      ctx.fillText(p.emoji, p.x, p.y);
    } else {
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fill();
    }
  });
  requestAnimationFrame(animateBgParticles);
}
animateBgParticles();

window.addEventListener('resize',()=>{
  bgCanvas.width = window.innerWidth;
  bgCanvas.height = window.innerHeight;
});
