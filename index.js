const nav=document.querySelector('.mobile-navbar-btn');
const nav_header=document.querySelector(".header");
function togglebtn(){
    
}
nav.addEventListener('click',()=>{
    nav_header.classList.toggle('active');
});


//fixed navbar//
window.onscroll = function() {
    scroll();
  };
  
  var header = document.querySelector("header");
  var sticky = header.offsetTop;
  
  function scroll() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }

  //screen size
  const screenWidth = window.innerWidth;
console.log(`ScreenWidth: ${screenWidth}`);
const screenRes=document.querySelector('.div2');
if(screenWidth>1400){
screenRes.classList.add("extra");
}
else if(screenWidth<1400){
  screenRes.classList.remove("extra");
}