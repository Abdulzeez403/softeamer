console.log("testing.....");


//Menu bar toggle
function menuToggle(){
 let menubar = document.querySelector("#menuIcon");
 let menuItem =document.querySelector("nav");
 menubar.addEventListener("click", showMenuItems);
 function showMenuItems(e){
  if(menuItem.style.display === "none"){
  menuItem.style.display = "block";
  }else{
   menuItem.style.display = "none";
  }
  
  e.preventDefault();
 }
};
menuToggle();