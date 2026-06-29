/* Super landing page interactions */
(function(){
  var hasGSAP = typeof window.gsap !== 'undefined';
  if(hasGSAP){
    try {
      gsap.from('.hero h1', {opacity:0, y:30, duration:1, ease:'power3.out'});
    } catch(e) {}
  }
})();