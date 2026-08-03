// No editing needed. Redirects for a url
function go(url) {
    location.href = url;
}

// No editing needed. Handles the openNew function for clean and concise code
function openNew(url) {
    window.open(url, '_blank').focus();
}

// Functions for redirects
function goober() { go('images/goobies.webp'); }
function instagram() { openNew('https://www.instagram.com/sit_orhs/'); }
function discord() { openNew('https://discord.gg/n4ngUWPA5v'); }
function contact() { alert('sit.orhs@gmail.com') }
function footerComissions() { openNew('https://docs.google.com/forms/d/e/1FAIpQLSfRCxJ9Ze56ej9-DBKNMAIvc-wO2iVONtDEPFUEInntmv4vBA/viewform'); }
function footerMediaLib() { go('media/medialibrary.html'); }
function footerLegacy() { go('#'); }
function footerFeedback() { openNew('https://forms.gle/yBRqjggKt3fBfRF56'); }
function footerSource() { openNew('https://github.com/8pairs/sit'); }
function footerCredit() { openNew('https://oversurge.nekoweb.org/'); }