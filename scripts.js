// alertBlock()
// function alertBlock() {
//     alert('Warning: This site may be blocked on the SUHSD network, please use a personal device with mobile cell service, or on a personal network.\n\nWe are working on getting our site unblocked as alternatives are not free. If you would like to contribute, please email [ it.help@sweetwaterschools.org ] following the email format listed in our announcements channel here [ https://discord.gg/w8wq64D7v5 ].\n\nThank You!\n\n0x04')
// }

// alertLegacy ()
// function alertLegacy() {
//     alert('Our site is currently unfinished, it may change as time goes on.')
// }

var versionNumber = "v5.2.61"
document.getElementById('footer-a4').innerHTML = versionNumber

function info() {
    alert('Version ' versionNumber ' OFFICIAL\nMobile Support: Avalible\nWebsite Revision Version: 3\n\nCurrent URL: https://8pairs.github.io/sit/\nNon-responsive, no forms or sql\n\nContact Isaac for changes')
}

function developer() {
    alert('Developer error codes\n\n0x01 · Gmail mailto: no longer works\n0x02 · Javascript disabled\n0x03 · Legacy website no longer works\n0x04 · Website blocked alert\n\nDeveloper attention needed\n\nCSS revision\nRecoloring/Sat fix\nMore / more refined information\n\noverride\nfixyourposture\nsuhsd\nmobile')
}

function gmailSorry() {
    alert('Sorry, the link to bring you to Gmail doesn\'t work anymore!\n\nPlease contact us through orhs.sit@gmail.com\n\n0x01')
}

function removeBanner() {
    document.getElementById('banner').style.display = "none"
    document.getElementById('x').style.display = "none"
    document.getElementById('banner-hr').style.display = "block"
}

function scrollHome() {
    document.getElementById('pre-header').scrollIntoView({ behavior: 'smooth' })
}

function scrollAboutUs() {
    document.getElementById('about-us').scrollIntoView({ behavior: 'smooth' })
}

function scrollQA() {
    document.getElementById('qna').scrollIntoView({ behavior: 'smooth' })
}

function scrollMarket() {
    document.getElementById('marketplace').scrollIntoView({ behavior: 'smooth' })
}

function scrollOfficers() {
    document.getElementById('officers').scrollIntoView({ behavior: 'smooth' })
}

function scrollOther() {
    document.getElementById('other').scrollIntoView({ behavior: 'smooth' })
}

var o1 = document.getElementById('footer-img-01');
var o2 = document.getElementById('footer-img-02');
var o3 = document.getElementById('footer-img-03');

function contactUs() {
    o1.classList.toggle('footer-alert');
    o2.classList.toggle('footer-alert');
    o3.classList.toggle('footer-alert');
    setTimeout(() => {
        o1.classList.toggle('footer-alert');
        o2.classList.toggle('footer-alert');
        o3.classList.toggle('footer-alert');
    }, 1000);
}

function linkedB() {
    document.getElementById('footer-img-01').scrollIntoView({ behavior: 'smooth' })
    setTimeout(() => {
        o1.classList.toggle('footer-alert');
        o2.classList.toggle('footer-alert');
        o3.classList.toggle('footer-alert');
    }, 1000);
    setTimeout(() => {
        o1.classList.toggle('footer-alert');
        o2.classList.toggle('footer-alert');
        o3.classList.toggle('footer-alert');
    }, 1800);
}

function applyTheme() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
}

applyTheme();

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyTheme);

let bufferF = "";

document.addEventListener("keydown", (event) => {

    bufferF += event.key;

    if (bufferF.length > 14) bufferF = bufferF.slice(-14);

    if (bufferF.endsWith("fixyourposture")) {

        replaceAllImages('images/FIX-YOUR-POSTURE.jpg')
        function replaceAllImages(newImageUrl) {
            const images = document.getElementsByTagName('img');

            for (let i = 0; i < images.length; i++) {
                images[i].src = newImageUrl;
            }
        }
        document.addEventListener('DOMContentLoaded', () => {
            const newImageSource = 'images/FIX-YOUR-POSTURE.jpg';
            replaceAllImages(newImageSource);
        });

        const elementsWithBackground = document.querySelectorAll('.iot, .sit, .community');

        elementsWithBackground.forEach(element => {
            element.style.backgroundImage = 'url("images/FIX-YOUR-POSTURE.jpg")';
        });
        bufferF = "";
    }
});

let bufferO = "";

document.addEventListener("keydown", (event) => {

    bufferO += event.key;

    if (bufferO.length > 8) bufferO = bufferO.slice(-8);

    if (bufferO.endsWith("override")) {

        const root = document.documentElement;

        toggleTheme()
        function toggleTheme() {
            if (root.dataset.theme === 'light') {
                root.dataset.theme = 'dark';
            } else {
                root.dataset.theme = 'light';
            }
        }
        bufferO = "";
    }
});

let bufferM = "";

document.addEventListener("keydown", (event) => {

    bufferM += event.key;

    if (bufferM.length > 6) bufferM = bufferM.slice(-6);

    if (bufferM.endsWith("mobile")) {

        location.href=('/sit/mobile.html')

        bufferM = "";
    }
});

let bufferS = "";

document.addEventListener("keydown", (event) => {

    bufferS += event.key;

    if (bufferS.length > 5) bufferS = bufferS.slice(-5);

    if (bufferS.endsWith("suhsd")) {

        location.href=('/sit/suhsd.html')

        bufferS = "";
    }
});








