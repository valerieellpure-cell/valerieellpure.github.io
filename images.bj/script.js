// Create floating hearts
function createHearts() {
  const container = document.getElementById('heartsBg');
  const hearts = ['❤️', '💕', '💗', '💖', '💘', '💝', '🩷', '💋', '🩷', '❤️‍🩹'];
  
  for (let i = 0; i < 25; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (14 + Math.random() * 18) + 'px';
    heart.style.animationDuration = (8 + Math.random() * 12) + 's';
    heart.style.animationDelay = (Math.random() * 8) + 's';
    container.appendChild(heart);
  }
}
createHearts();

// Letter content
const letterContent = `Happy Birthday loveyy!!

Happyy Birthdayy to the man who is my very best boyfriend I have!>< and turned into something that already feels like home<3

I can’t believe how quickly you became my favorite person. One day I was just existing… and then you showed up, all charming and a little dangerous hihi, and suddenly everything got warmer, brighter, happiness. And a lot more interesting after my dark days.

I love the way you look at me when you think I’m not paying attention. I love how you make feel what is LOVE again and especially gina pakita nimo sa ako a na the way you are!<3. I love when we hangout together even if we have a very short time too spend bisag hours ug 1 day okay na kaayo na nako, even minutes gina value and appreciete gihapon nako!^^ and I also love to remind myself that how lucky I am to have you in my life!. We might fight over the smallest things, but we still choose to work it out every time… and I hope ma kwa-an pud na imong pride kay permenti nalang ko nimo katulgan everytime where having an argument but it's okayyy, sabton nalang pud kay mas babaye pa ug batasan and dili man sad nako ma tiis ug magpa taas sad kog pride kay even ako mahadlok ko basig ma unsa patang duha. But I hope you know how much I LOVE YOU and unta aware ka!

Thank you for the late-night talks that somehow always end in laughter or arguments HAHAHAHAHAHA(or something even better). Thank you for the silly talks to make me happy when I'm having a bad day, the cuddles, kisses and the way you make ordinary days feel like a motivation forever.

Today is your day, 21 namn ka noh?! diba?!!, emeee lngg hihi 20 pa diay ng baby na^^ anywayss I hope it feels as special as you make me feel everytime we spend time together and chatting. I hope this year brings you everything you deserve and I promise to be right here, make you angry, teasing you, loving you, and be with you everytime to cheer you up and ready to be your listener and making sure you never forget how deeply you’re wanted even kulang pa gyud huhu. Mao ratoo lovee please always remind yourself na naa rako permenti para sa imoha!^^
#godknowshowmuchIwantutobemyLAST

Happy Birthday again, lovee!
I LOVE YOU MORE THAN YOU KNOWS
Yours,
VAL!^^`;


let isOpen = false;

function openEnvelope() {
  if (isOpen) return;
  isOpen = true;

  const envelope = document.getElementById('envelope');
  const letterCard = document.getElementById('letterCard');
  const hint = document.getElementById('hint');

  envelope.classList.add('open');
  hint.style.opacity = '0';
  hint.style.transition = 'opacity 0.4s';

  setTimeout(() => {
    letterCard.classList.add('visible');
    typeWriter();
    createConfetti();
  }, 500);
}

function typeWriter() {
  const el = document.getElementById('letterText');
  let i = 0;
  el.innerHTML = '<span class="typed"></span>';
  const typed = el.querySelector('.typed');

  function type() {
    if (i < letterContent.length) {
      typed.textContent += letterContent.charAt(i);
      i++;
      // Auto scroll a bit while typing
      if (i % 40 === 0) {
        letterCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
      setTimeout(type, 28);
    } else {
      typed.classList.remove('typed');
    }
  }
  type();
}

function createConfetti() {
  const colors = ['#ff6b9d', '#ffb6c1', '#e8b86d', '#ff8fab', '#c44569', '#ffc0cb'];
  for (let i = 0; i < 60; i++) {
    const conf = document.createElement('div');
    conf.className = 'confetti';
    conf.style.left = Math.random() * 100 + 'vw';
    conf.style.background = colors[Math.floor(Math.random() * colors.length)];
    conf.style.width = (6 + Math.random() * 8) + 'px';
    conf.style.height = conf.style.width;
    conf.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    conf.style.animationDuration = (2.5 + Math.random() * 2.5) + 's';
    conf.style.animationDelay = (Math.random() * 0.8) + 's';
    document.body.appendChild(conf);

    setTimeout(() => conf.remove(), 6000);
  }
}

// Optional: auto open after a few seconds if user doesn't click
// setTimeout(() => { if (!isOpen) openEnvelope(); }, 4000);
