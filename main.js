var tl = gsap.timeline();

window.addEventListener('load', function() {
if (window.innerWidth < 768) {
        // Mobile animation
     tl.from('h1 span' , {
    y: 5,
    opacity:0,
    stagger:.2,
    textShadow:'inset 0px 10px 55px black',
    x:-2,
      


  

});
tl.to('h1' , {

gap:'20px',
      stagger:.1,

  


},'sp2');

tl.to('h1 span' , {

  opacity:.8,
        stagger:.1,
     
  


},'sp2');
tl.to('.white-con' , {
    left:'80%',
    duration:1.2,
    delay:0,
 
},'sp2');
tl.to('.white-con' , {
    left:'0%',
    bottom:'0%',
    width:'100%',
    height:'100%',
    duration:1.2,
    delay:.2,
    rotate:0,
 
},'sp3');
tl.to('h1' , {
    delay:.2,

gap:'5px',
  stagger:.1,
        duration:.8,
  


},'sp3');
tl.to('h1' , {
    ease:'power2.inOut',

scale:560,
        duration:3,

  


},'sp4');
tl.to('.white-con' , {
    duration:1.8,
backgroundColor:'rgb(38, 38, 38)',  

},'sp4');

tl.to('.intro-container' , {
opacity:0,
duration:.8,
delay:-1.4,
});
tl.to('.intro-container' , {
display:'none',

});
      } 
      
      
      
      
      
      
      
      else {
        // Desktop animation
     tl.from('h1 span' , {
    y: 10,
    opacity:0,
    stagger:.28,
    transform:"rotate3d(-1,0,0,20deg)",
        ease:'power2.inOut',
          duration:1.5,



  

});
tl.to('h1' , {

  gap:'35px',
      stagger:.1,
    ease:'power2.inOut',
          duration:3,

  


},'sp2');

tl.to('h1 span' , {

  opacity:.9,
        stagger:.1,
     
  


},'sp2');
tl.to('.white-con' , {
    left:'70%',
    duration:3,
    ease:'power2.inOut',
    delay:0,
 
},'sp2');
tl.to('.white-con' , {
    left:'0%',
    width:'100%',
    height:'100%',
    duration:2,
    ease:'power2.inOut',
    delay:0,
    rotate:0,
 
},'sp3');
tl.to('h1' , {

letterSpacing:'15px',
  stagger:.1,
        duration:.8,
delay:.8,
  


},'sp3');
tl.to('h1' , {
    ease:'power2.inOut',

scale:560,
        duration:3,

  


},'sp4');
tl.to('.white-con' , {
    duration:1.8,
backgroundColor:'rgb(38, 38, 38)',  

},'sp4');

tl.to('.intro-container' , {
opacity:0,
duration:.8,
delay:-1.4,
});
tl.to('.intro-container' , {
display:'none',

});
      }
    






});
