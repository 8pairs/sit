alertBlock()
function alertBlock() {
    alert('Warning: This site may be blocked on the SUHSD network, please use a personal device with mobile cell service, or on a personal network.\n\nWe are working on getting our site unblocked as alternatives are not free. If you would like to contribute, please email [ it.help@sweetwaterschools.org ] following the email format listed in our announcements channel here [ https://discord.gg/w8wq64D7v5 ].\n\nThank You!\n\n0x04')
}

alertLegacy ()
function alertLegacy() {
    alert('Our site is currently unfinished, it may change as time goes on.')
}

function info() {
    alert('Version 3.1 STABLE\nMobile Support: n/a\nWebsite Revision Version: 3\n\nCurrent URL: https://8pairs.github.io/sit/\nNon-responsive, no forms or sql\n\nContact Isaac for changes')
}

function developer() {
    alert('Developer error codes\n\n0x01 · Gmail mailto: no longer works\n0x02 · Javascript disabled\n0x03 · Legacy website no longer works\n0x04 · Website blocked alert\n\nDeveloper attention needed\n\nCSS revision\nLogo revision\nMobile support\nRecoloring/Sat fix\nDark mode?\nMore / more refined information')
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
