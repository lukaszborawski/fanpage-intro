const switchImage = () => {
    const bg = document.querySelector(".background");
    let imgNumber = 0;

    const interval = setInterval(() => {
        imgNumber = (imgNumber % 10) + 1;
        bg.style.backgroundImage = `url(img/${imgNumber}.jpg)`
    }, 850);

    setTimeout(() => {
        clearInterval(interval);
        bg.style.display = "none";
    }, 9000)
}

switchImage();