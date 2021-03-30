const bgIntro = document.querySelector(".container__bgIntro");
const replay = document.querySelector(".replay__item");

const clearBgIntro = (interval) => {
    setTimeout(() => {
        clearInterval(interval);
        bgIntro.style.display = "none";
    }, 9000)
}

const switchImage = () => {

    const mediaQuery = window.matchMedia("(orientation: portrait)");
    const numberOfImgs = 6;
    let imgNumber = 0;

    if (mediaQuery.matches) {
        const interval = setInterval(() => {
            imgNumber = (imgNumber % numberOfImgs) + 1;
            bgIntro.style.backgroundImage = `url(img/${imgNumber}m.jpg)`
        }, 800);

        clearBgIntro(interval);

    } else {
        const interval = setInterval(() => {
            imgNumber = (imgNumber % numberOfImgs) + 1;
            bgIntro.style.backgroundImage = `url(img/${imgNumber}d.jpg)`
        }, 800);

        clearBgIntro(interval);
    }
}

switchImage();

replay.addEventListener("click", () => window.location.reload());