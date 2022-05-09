window.addEventListener('scroll',onScroll);

onScroll();

function onScroll(){
  showNavOnScroll();
  showBackToTopButtonOnScroll();
  activateMenuAtCurrentSection(home);
  activateMenuAtCurrentSection(services);
  activateMenuAtCurrentSection(about);
  activateMenuAtCurrentSection(contact);
}

function showBackToTopButtonOnScroll(){
    if(scrollY >500){
        backToTopButton.classList.add("show");
    }
    else{
        backToTopButton.classList.remove("show");
    }
}

function showNavOnScroll(){
 if(scrollY != 0){
       navigation.classList.add("scroll");
   }
   else{
       navigation.classList.remove("scroll");
   }
}
function openMenu(){
    document.body.classList.add("menu-extended")
}
function closeMenu(){
    document.body.classList.remove("menu-extended")
}

function activateMenuAtCurrentSection(section){
    const targetLine = scrollY + innerHeight/2;
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionTopReachOrPassedLine = targetLine >= sectionTop;
    const sectionEndsAt = sectionTop + sectionHeight;
   
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine
    const sectionBoundaries = sectionTopReachOrPassedLine && !sectionEndPassedTargetLine;
    const sectionId = section.getAttribute('id');
    const menuElement = document.querySelector(`.menu a[href *=${sectionId}]`)
    menuElement.classList.remove('active');
    if(sectionBoundaries){
        menuElement.classList.add('active');
    }

}   
ScrollReveal({
    orgin: 'top',
    distance: '30px',
    suration: '700ms'
}).reveal(`#home,
 #home img,
  #home .stats,
   #services,
    #services header,
     #services .card,
     #about,
     #about header,
     #about content`);
