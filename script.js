window.onload = () => {
  gsap.from('.home-text', {
    delay: .5,
    opacity: 0,
    y: -30,
    stagger: .2
  });
  gsap.from('.home-img', {
    delay: .4,
    opacity: 0,
    x: 30
  });

  document.querySelectorAll('.card').forEach(card => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 40%'
      },
      y: 30,
      opacity: 0
    })
  });

  const beltText = document.querySelector('.belt-wrapper h1');
  gsap.to(beltText, {
    scrollTrigger: {
      trigger: beltText,
      start: 'top 60%'
    },
    scale: 1.2
  });

  gsap.timeline({
    scrollTrigger: {
      trigger: '#last-img',
      start: 'top 25%'
    }
  })
    .from('#last-img', {
      opacity: 0,
      x: -30,
    })
    .from('#last-text', {
      opacity: 0,
      x: 30
    }, '<')
};
