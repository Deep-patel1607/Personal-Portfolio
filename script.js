// Scroll reveal
(function(){
  const obs = new IntersectionObserver((entries, observer)=>{
    entries.forEach(entry =>{
      if(entry.isIntersecting){
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {threshold:0.15});

  document.querySelectorAll(".reveal").forEach(el => obs.observe(el));
})();

// Progress bars animation
(function(){
  const bars = document.querySelectorAll(".progress span");
  const obs = new IntersectionObserver((entries, observer)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        const width = e.target.dataset.width;
        e.target.style.width = width;
        observer.unobserve(e.target);
      }
    });
  }, {threshold:0.3});
  
  bars.forEach(b => obs.observe(b));
})();

// Zoom effect for about photo
(function(){
  const photo = document.querySelector(".about-photo");
  if(photo){
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          photo.classList.add("zoomed");
        }
      });
    }, {threshold:0.3});
    obs.observe(photo);
  }
})();

// Hire button scroll
document.getElementById("hireBtn").addEventListener("click", ()=>{
  document.getElementById("contact").scrollIntoView({behavior:"smooth"});
});
