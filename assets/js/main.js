let nav = window.document.getElementById('nav');
// console.log(nav)

window.addEventListener('scroll',function(){
    if(window.scrollY > 50){
        nav.classList.add('bg-gray');
        nav.classList.add('shadow');
        nav.classList.remove('bg-transparent');
    }else{
        nav.classList.remove('bg-gray');
        nav.classList.remove('shadow');
        nav.classList.add('bg-transparent');
    }
    nav.style.transition = '.5s';
})

//smooth scoll 

let links = document.querySelectorAll('nav .nav-link');
 

links.forEach(Element => {
    Element.addEventListener('click', function(e){
        e.preventDefault();
        let currentId = e.target.attributes.href.value;
        let sectionPosition = document.querySelector(currentId).offsetTop;
        window.scroll({
            top: sectionPosition,
            behavior: "smooth"
        })
    })

})

// move to top 
let moveTop =  document.getElementById('move-to-top');
window.addEventListener('scroll', function(){
    let sPostion = document.getElementById('service').offsetTop;
    if(window.scrollY > sPostion){  
        moveTop.style.opacity = 1;
    }else{
        moveTop.style.opacity = 0;
    }
    moveTop.style.transition='1s';
})

moveTop.addEventListener('click', function(){
    window.scroll({
        top:0,
        behavior: "smooth"
    })
})

//loading screen
let body= document.body;
body.style.overflow = 'hidden';
document.querySelector('.loading').style.opacity= '1';
document.querySelector('.loading').style.visibility= 'visible';

window.addEventListener('load',function(){
    setTimeout(function(){
        document.querySelector('.loading').style.opacity= '0';
        document.querySelector('.loading').style.visibility= 'hidden';
        body.style.overflow = 'visible';
        document.querySelector('.ALEXIS').classList.add('animate__animated');
        document.querySelector('.ALEXIS').classList.add('animate__fadeInUpBig');
        document.querySelector('.ALEXIS').classList.add('animate__slow');
        document.querySelector(  '.FAbout').classList.add('animate__slower');
        document.querySelector( '.SAbout').classList.add('animate__slower');
        document.querySelector('.FAbout').classList.add('animate__animated');
        document.querySelector('.FAbout').classList.add('animate__backInRight');
        document.querySelector('.SAbout').classList.add('animate__animated');
        document.querySelector('.SAbout').classList.add('animate__backInLeft');


        let count = 0;
        let v = [];
        
        let countElements = document.querySelectorAll(".count");
        console.log(countElements)
        
        for (let i = 0; i < countElements.length; i++) {
           v[i]= countElements[i].textContent; 
           console.log('Initial Value:', v[i]);
        }
        
        for (let i = 0; i < countElements.length; i++) {
           let count = 0;
           let interval = setInterval(function() {
              if (count <= v[i]) {
                 countElements[i].textContent = count;
                 count++;
                 console.log(count);
              } else {
                 clearInterval(interval);
              }
           }, 5);
        }
          
        
        
    },2000)
})
document.querySelector('.loading').style.transition ='1s';

// paraghraph typing
let text1 = "نهدف الى تشخيص و تأهيل ودمج الأطفال ذوي الرعاية الخاصة في بيئة تعليمية مناسبة ";
let text2 = "لتحسين جودة حياتهم";
let emptyString =  "&nbsp;".repeat(Math.max(text1.length, text2.length));

 
let direction = 1;
let i = 0;
let n = 0; 
let text ='';
setInterval(function () {

    
    document.getElementById("typeo").innerHTML = i > 0  ? text.substring(0, i) : emptyString;
    i += direction;
 
  
  if (i >= text.length ) {
    direction = -1;
  }

  if(i <= 0){
    direction = 1;
    
        n= n===0?1:0;
        i = direction > 0 ? 0 : text.length;
        text = n === 0 ? text1 : text2 ;
    
  }

}, 100);



$(document).ready(function(){
    $(".owl-carousel.ola").owlCarousel({
        center:true,
        margin:10,
        startPosition: 1,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:3,
            },
            1000:{
                items:3,
              
            }
        }
    });
  });

  $(document).ready(function(){
    $(".owl-carousel.aloosh").owlCarousel({
        autoplay:true,
        startPosition: 1,
        loop:true,
        dots:false,
        smartSpeed:1500,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            
            1000:{
                items:2,
              
            }
        }
    });
  });

  let contactForm =  document.getElementById('contactForm');
//   console.log(contactForm);
window.addEventListener('scroll', function(){
    let sPostion = document.getElementById('contactForms').offsetTop -30;
    if(window.scrollY > sPostion){
        // document.querySelector('.link-contact').classList.remove('active'); 
        // document.querySelector('.link-contact').classList.add('active');
        
        document.querySelector('#contactForm').style.opacity=1;
        document.querySelector('#contactForm').classList.add('animate__animated','animate__zoomIn', 'animate__slow');
    }
    
})





//   console.log(contactForm);
window.addEventListener('scroll', function(){
    let sPostion = document.getElementById('cv').offsetTop ;
    if(window.scrollY > sPostion){  
        document.querySelector('#testimonial').style.opacity=1;
        document.querySelector('#testimonial').classList.add('animate__animated','animate__zoomIn', 'animate__slow');
    


        document.querySelector('#testimonial1').style.opacity=1;
        document.querySelector('#testimonial1').classList.add('animate__animated', 'animate__fadeInLeftBig','animate__slow' );


        document.querySelector('#testimonial2').style.opacity=1;
        document.querySelector('#testimonial2').classList.add('animate__animated','animate__fadeInRightBig','animate__slow');
    }
    
})






//footer
window.addEventListener('scroll', function(){
    let fPostion = (document.querySelector('#for-last').offsetTop) - 500 ;
    
    if(window.scrollY > (fPostion)){  
        document.querySelector('.contact-p').style.opacity=1;
        document.querySelector('.contact-p').classList.add('animate__animated','animate__fadeInDownBig','animate__slower');
        document.querySelector('.F1').classList.add('animate__animated','animate__fadeInRightBig','animate__slower');
        document.querySelector('.F0').classList.add('animate__animated','animate__zoomInUp','animate__slower');
        document.querySelector('.F2').classList.add('animate__animated','animate__fadeInLeftBig','animate__slower');
        

    }
       
    
})














// get all the navigation links
const navLinks = document.querySelectorAll('nav a');


// get all the sections on the page
const sections = document.querySelectorAll('section');
 
// listen for the scroll event on the window
window.addEventListener('scroll', function() {
  // get the current scroll position
  const scrollPos = window.scrollY;

  // loop through the sections
  sections.forEach(function(section) {
    // get the top and bottom position of each section
   
    const sectionTop = section.offsetTop;
    const sectionBottom = section.offsetTop + section.offsetHeight;

    // check if the current scroll position is within the current section
    if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
      // remove the active class from all the navigation links
    //   console.log(section)
      navLinks.forEach(function(link) {
        link.classList.remove('active');
      });

      // find the corresponding navigation link for the current section
      const targetLink = document.querySelector(`nav a[href="#${section.id}"]`);

      // add the active class to the target link
      if (targetLink) {
        targetLink.classList.add('active');
      }
    }
  });
});



 

const contentLinks = document.querySelectorAll('.work .nav .nav-item button');

// listen for clicks on the navigation links
contentLinks.forEach(function(bt) {
  bt.addEventListener('click', function(event) {
    event.preventDefault();

    // get the target tab content item
    const targetTab = document.querySelector(bt.getAttribute('data-bs-target'));

    // apply the transition animation to the target tab content
    targetTab.classList.add('animate__animated','animate__zoomIn');
  });
});