const img = document.querySelectorAll('img');
window.addEventListener('scroll',function(){
    derniere_position_de_scroll_connue = window.scrollY;
    // img.forEach(element => {
    //     element.style.left = (Math.floor(window.scrollY / 10)) + '%';
    // })
    for(let index=0; index< img.length; index++){
        img[index].style.left = (Math.floor(window.scrollY / 10)) + '%'; 
        img[index].style.borderRadius = (Math.floor(window.scrollY / 10)) + '%';
    }
});

//exercice 1 et 2
//remplacer boucle for each par boucle for
// quand on scroll passe d'un rectangle à un cercle parfait

