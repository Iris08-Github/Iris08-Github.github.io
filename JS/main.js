window.onscroll = function() {scrollFunction()};

function scrollFunction(){
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector('.header-1').style.height = "60px";} else {
      document.querySelector('.header-1').style.height = "90px";
    
    }
  
}

document.querySelector('.hamburger').addEventListener('click', openAside)

function openAside(){
 document.querySelector('.sidemenu-container').classList.add('show-menu');
}

document.querySelector('.close').addEventListener('click' , closeAside)

function closeAside(){
  document.querySelector('.sidemenu-container').classList.remove('show-menu');
}