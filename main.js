const switchImage = () => {
    const bg = document.querySelector(".background");
    let imgNumber = 0;

    const interval = setInterval(() => {
        imgNumber = (imgNumber % 12) + 1;
        bg.style.backgroundImage = `url(img/${imgNumber}.jpg)`
    }, 300);

    setTimeout(() => {
        clearInterval(interval);
        bg.style.display = "none";
    }, 4000)
}

switchImage();