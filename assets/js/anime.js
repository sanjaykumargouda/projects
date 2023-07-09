anime({
    targets: '.animg',
    translateX: 50,
    direction: 'alternate',
    loop: true,
    duration: 2000,
    easing: function(el, i, total) {
      return function(t) {
        return Math.pow(Math.sin(t * (i + 1)), total);
      }
    }
  });