// ################################
//       GENERAL SITE UPKEEP
// ################################

// Version counter (prints to footer automatically)
// Follow this general format for version upkeep for this site:  v3.x.x Official
// [Big updates, wont change unless you write an entirely new site] . [Minimal updates like refractoring, changing UI, etc] . [Hotfixes or similar small updates]     [We're no longer in beta, so Official remains.]
const versionNumber = "v3.12.3 Official"
document.getElementById('footer-a4').innerHTML = versionNumber

// Alert popup called by footer button. (change or add Email to yours or an apropriate email)
function info() {
    alert('Version ' + versionNumber + '\n' +
        'Mobile Support: Avalible\n\n' +
        'Current Suggested URL: https://sit.8pairs.net/\n' + // Remove if you choose to not use sit.8pairs.net (Please tell me if you decide to stop using my domain so I can shut down the subdomain)
        'Current Developer URL: https://8pairs.github.io/sit/\n' +
        'Contact isaac@8pairs.net for inquiries or changes.') // Add your contacts here if you would like to
}

// Ignore this code, I may come back to it.
//function developer() {
//    fetch(window.location.href, { method: "HEAD" })
//        .then(res => {
//            alert("You are connected to server: " + res.headers.get("X-Server-ID") + " \n\nfixyourposture\noverride\nmobile\nsuhsd\nneh\niceberg\nss");
//        });
//}

// Non server header reliant version of the developer popup
// Remove "proxied" if you devide to no longer use my domain
function developer() {
    alert("fixyourposture\noverride\nmobile\suhsd\nneh\niceberg\nss");
}

// Changelog, good to keep updated for your own sake. \u00B7 is a missing UTF-8 tag friendly mid-dot.
function changelog() {
    alert('Changelog:\n' +
        '11/12/25 \u00B7 Added 3 new banners\n' +
        '11/14/25 \u00B7 Redesigned banners to include SIT mascot\n' +
        '11/15/25 \u00B7 Removed Herobrine\n' +
        '11/16/25 \u00B7 General bug fixes, icon redesign, javascript optimization\n' +
        '1/25/26 \u00B7 Removed error codes, cleaned up scripts.css, media library edits\n' +
        '2/25/26 \u00B7 General fixes and THE GREAT COMMENTING\n' +
	    '3/5/26 \u00B7 Fixed corrupted banner.\n' +
        '8/2/26 \u00b7 Github site updated to reflect sit.8pairs.net - Prepperation for further development. Added warning header.\n' +
		'8/11/26 \u00b7 Bug fixes and removed "Connected to server: x" from developer popup.\n' +
		'8/16/26 \u00B7 Updated officer profiles and footer to reflect the present\n' +
		'8/16/26 \u00b7 Fix mobile.html link functions'
    )
}


// ################################
//   CHANGEABLE IF SITE IS EDITED
// ################################

// Scrolls users to their selected <div>
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
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

// Banner sliding function, does not need editing if banners images are changed
let index = 0;
const slides = document.querySelector(".slides");
const total = document.querySelectorAll(".banner").length;

function slide() {
    index++;
    if (index >= total) index = 0;
    slides.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(slide, 4500);


// ################################
//        NO UPKEEP NEEDED
// ################################

// Applies the appropriate users device theme
function applyTheme() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
}
applyTheme();

// Buffer codes to trigger an event on typing
// Remove if you no longer want these functions
// Contact me if you would like to add a new typable code and dont know how
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyTheme);

let typedBuffer = "";
const MAX_BUFFER = 20;

const cheats = [
    {
        code: "fixyourposture",
        action: () => {
            const newImage = "images/FIX-YOUR-POSTURE.webp";
            document.querySelectorAll("img").forEach(img => img.src = newImage);

            document.querySelectorAll(".iot, .sit, .community")
                .forEach(el => el.style.backgroundImage = 'url("images/FIX-YOUR-POSTURE.webp")');
        }
    },
    {
        code: "override",
        action: () => {
            const root = document.documentElement;
            root.dataset.theme = root.dataset.theme === "light" ? "dark" : "light";
        }
    },
    {
        code: "mobile",
        action: () => location.href = "mobile.html"
    },
    {
        code: "suhsd",
        action: () => location.href = "suhsd.html"
    },
    {
        code: "neh",
        action: () => {
            const el = document.getElementById("containerNEH");
            if (el) el.style.display = "inline-table";
        }
    },
    {
        code: "iceberg",
        action: () => location.href = "iceberg/iceberg.html"
    },
    {
        code: "ss",
        action: () => slide()
    }
];

document.addEventListener("keydown", (event) => {
    typedBuffer += event.key.toLowerCase();

    if (typedBuffer.length > MAX_BUFFER) {
        typedBuffer = typedBuffer.slice(-MAX_BUFFER);
    }

    for (const cheat of cheats) {
        if (typedBuffer.endsWith(cheat.code)) {
            cheat.action();
            typedBuffer = "";
            console.info('Triggered ' + cheat.code + '!')
            break;
        }
    }
});

// Buffer cheat sheet
// fixyourposture: replaces every image with a funny picture of hatsune miku and kasane teto <3
// override: changes your theme (temporary until reload)
// mobile: transfers you to the mobile site
// suhsd: transfers you to a secret user search I scraped from the suhsd domain :3
// neh: shows our beloved NEH officer Jeremiah (now graduated... fly high)
// iceberg: brings you to the ORHS iceberg
// ss: triggers a slide change
