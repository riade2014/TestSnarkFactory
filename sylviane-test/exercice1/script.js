

/*
  On  a  une  div  "A"  qui  peut  prendre  dynamiquement  n'importe  quelle  taille  (en  fonction  d'autres  critères).  On  doit  créer  une  fonction  "resized"  qui  sera 
appelée à chaque changement de taille de cette div. Dans cette div, on veut afficher soit une image "portrait" soit une image "paysage" en fonction du ratio que prend 
le div. Cette image devra être affichée à l'intérieure de la div "A" avec un espace de 15 pixels entre les bords du div et l'image
 */

function resized() {

    const divA = document.querySelector('.A');
    const imgA = document.querySelector('#imgA');

    ratio =  divA.clientHeight / divA.clientWidth;

    console.log(ratio);

    // 2. écrivez le style CSS + l'intérieur de la fonction  "resized" pour avoir ce résultat
    if(ratio > 1){
        imgA.src ="./assets/paysage.jpg";
        imgA.style.width = 'calc(100% - 30px)';
        imgA.style.height = 'auto';
    }else{
        imgA.src ="./assets/portrait.jpg";
        imgA.style.height = 'calc(100% - 30px)';
        imgA.style.width = 'auto';
    }
}

// 1. indiquez comment vous feriez pour déclencher la fonction "resized" à chaque changement de taillde la div "A" 
window.addEventListener('resize', resized);