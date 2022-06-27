


const changeWhenResized = () =>{
    let viewWidth = window.innerWidth;
    let homePage = document.getElementById('home');
    let nav = document.getElementById('nav');
    let nav_links = document.querySelectorAll('.nav-link');

    if(viewWidth > 991){
        homePage.style.height = '100vh';
        homePage.style.backgroundPositionY = 'center';
        // homePage.style.backgroundPosition = 'top top';
        nav.style.backgroundColor = 'inherit';
        nav.style.boxShadow = "none";
        nav_links.forEach(nav => {
          nav.style.color = "#f8f9fa";
        });
      }
      else{
        homePage.style.height = '100%';
        nav.style.backgroundColor = '#f8f9fa';
        nav_links[0].style.color = '#212529';
        for(let i=1; i<5; i++){
          nav_links[i].style.color = '#6c757d';
        }
      }
}


window.addEventListener("resize", changeWhenResized); 
window.addEventListener("load", changeWhenResized);
// for nav links when the page is relaoded

//function on scroll
const changeOnScroll = () => {
  let nav = document.getElementById('nav');
  let nav_links = document.querySelectorAll('.nav-link');
  // let viewWidth = obj.newViewWidth;
// let viewWidth = window.viewWidth;

  if(window.pageYOffset == 0){
   nav.style.backgroundColor = 'inherit';
   nav.style.boxShadow = "none";

   nav_links.forEach(nav => {
    nav.style.color = "#f8f9fa";
  }); 
  }
  
  else{
     nav.style.backgroundColor = '#f8f9fa'; 
    nav.style.boxShadow = "0 0px 25px rgba(150, 130, 115, 0.8)";
    nav_links.forEach(nav => {
      nav.style.color = "#212529";
    });
  }


}





window.addEventListener("scroll", changeOnScroll);



// const changeOnMouseHover = () =>{
//   let caption = document.querySelector('.capt');
//   caption.style.display = 'block';
// }

// let get_Started = document.getElementById('getStarted');
// console.log(get_Started.offsetTop);

/* this function changes the color of the nav items when the corresponding page is viewed */

const changeNavItemColor = () => {
   const getStartedPage = document.getElementById('getStarted');
   const servicesPage = document.getElementById('services');
   const portfolioPage = document.getElementById('portfolio');
   const getInTouchPage = document.getElementById('get-in-touch');
   let pages = [getStartedPage, servicesPage, portfolioPage, getInTouchPage];
   let nav_links = document.getElementsByClassName('nav-link');
   let windowDist = window.pageYOffset;


  

       let page1 = pages[0].getBoundingClientRect();
       let page2 = pages[1].getBoundingClientRect();
       let page3 = pages[2].getBoundingClientRect();
       let page4 = pages[3].getBoundingClientRect();

 

      if(page1.top >= -414 && page1.top <= 67 ){
        nav_links[1].style.color = '#f4623a';
      
      }
      if(page2.top > -488 && page2.top <= 67 ){
        nav_links[2].style.color = '#f4623a';
      
      }
      if(page3.top >= -670 && page3.top <= 74 ){
        nav_links[3].style.color = '#f4623a';
      
      }
      if(page4.top <= 61 ){
        nav_links[4].style.color = '#f4623a';
      
      }
 
  console.log(page2.top, windowDist);
   

   
}
window.addEventListener('scroll', changeNavItemColor);


