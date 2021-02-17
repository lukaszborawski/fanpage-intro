const switchImage = () => {
    const bg = document.querySelector(".background");
    let imgNumber = 0;

    const interval = setInterval(() => {
        imgNumber = (imgNumber % 9) + 1;
        bg.style.backgroundImage = `url(img/${imgNumber}.jpg)`
    }, 500);

    setTimeout(() => {
        clearInterval(interval);
    }, 6000)
}

switchImage();