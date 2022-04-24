


//Menu bar toggle
function menuToggle(){
 let showbar = document.querySelector("#menuIcon");
 let hidebar = document.querySelector(".closebtn");

 showbar.addEventListener("click", showMenuItems);
 hidebar.addEventListener("click", hideMenuItems);

 function showMenuItems(e){
 let menuItem =document.querySelector(".lists");
  menuItem.style.width = "100%";
  e.preventDefault();
 }

 function hideMenuItems(e){
  let menuItem =document.querySelector(".lists");
   menuItem.style.width = "0";
   e.preventDefault();
  }
};
menuToggle(); 

//Animate on scroll founction

/* function animateOnScroll(){
 let targetedDiv= document.querySelector(".scrollMe");
 const scrollOffset = 100;


 const elementInvView = (el,  offset = 0 )=>{
   const elementTop =  el.getBoundingClientRect().top;
   return(
    elementTop <= ((Window.innerHeight || document.documentElement.clientHeight) - offset)
   );
 }
 const elementInView = (el, offset = 0) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <= 
    ((window.innerHeight || document.documentElement.clientHeight) - offset)
  );
};

 const displayScrollElement =()=>{
 targetedDiv.classList.add("scrolled");
 }

 const hideScrollElement =()=>{
  targetedDiv.classList.remove("scrolled");
  }

  const handleScrollAnimation=()=>{
   if( elementInView (targetedDiv, scrollOffset)){
    displayScrollElement();
   }else{
    hideScrollElement();
   }
  }

  window.addEventListener("scroll", ()=>{
   handleScrollAnimation();
  })
 
 
}
animateOnScroll(); */