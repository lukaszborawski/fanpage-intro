const bgIntro = document.querySelector(".container_bgIntro");
const mediaQuery = window.matchMedia("(max-width: 576px)");
const numberOfImgs = 5;


const switchImage = () => {
    let imgNumber = 0;
  
    if (mediaQuery.matches) {
        const interval = setInterval(() => {
            imgNumber = (imgNumber % numberOfImgs) + 1;
            bgIntro.style.backgroundImage = `url(img/${imgNumber}m.jpg)`
        }, 850);
        
        setTimeout(() => {
            clearInterval(interval);
            bgIntro.style.backgroundImage = "";
        }, 9000)
    } else {
        const interval = setInterval(() => {
            imgNumber = (imgNumber % numberOfImgs) + 1;
            bgIntro.style.backgroundImage = `url(img/${imgNumber}d.jpg)`
        }, 850);
        
        setTimeout(() => {
            clearInterval(interval);
            bgIntro.style.backgroundImage = "";
        }, 9000); 
    }
    
}

switchImage();