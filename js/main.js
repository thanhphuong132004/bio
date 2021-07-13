// init cursor
var cursors = [{
    cursor_id: "3",
    cursor_type: "0",
    cursor_shape: "11",
    cursor_image: "",
    default_cursor: "auto",
    hover_effect: "plugin",
    body_activation: "1",
    element_activation: "0",
    selector_type: "tag",
    selector_data: "body",
    color: "#cc3a3b",
    width: "30",
    blending_mode: "normal"
}];

/* ---------------- navigation menu ------------------- */
(() => {
    const hamburgerBtn = document.querySelector(".hamburger-btn"),
        navMenu = document.querySelector(".nav-menu"),
        closeNavBtn = document.querySelector(".close-nav-menu");

    hamburgerBtn.addEventListener("click", showNavMenu);
    closeNavBtn.addEventListener("click", hideNavMenu);

    function showNavMenu() {
        navMenu.classList.toggle("open");
        bodyScrollingToggle();
    }

    function hideNavMenu() {
        navMenu.classList.toggle("open");
        fadeOutEffect();
        bodyScrollingToggle();
    }

    function fadeOutEffect() {
        document.querySelector(".fade-out-effect").classList.add("active");
        setTimeout(() => {
            document.querySelector(".fade-out-effect").classList.remove("active");
        }, 300)
    }
    // acttach an event handler to document
    document.addEventListener("click", (event) => {
        if (event.target.classList.contains("link-item"))
            // make sure event.target.hash has a value before overridding default behavior
            if (event.target.hash !== "") {
                // prevent default anchor click behavior
                event.preventDefault();
                const hash = event.target.hash;
                // deactivate existing active navigation menu 'link-item'
                navMenu.querySelector(".active").classList.add("outer-shadow", "hover-in-shadow");
                navMenu.querySelector(".active").classList.remove("active", "inner-shadow");
                // if clicked 'link-item' is contained withing the navigation menu
                if (navMenu.classList.contains("open")) {
                    // activate new navigation menu 'link-item'
                    event.target.classList.add("active", "inner-shadow");
                    event.target.classList.remove("outer-shadow", "hover-in-shadow");
                    // hide navigation menu
                    hideNavMenu();
                } else {
                    let navItems = navMenu.querySelectorAll(".link-item");
                    navItems.forEach((item) => {
                        if (hash === item.hash) {
                            // activate new navigation menu 'link-item'
                            item.classList.add("active", "inner-shadow");
                            item.classList.remove("outer-shadow", "hover-in-shadow");
                        }
                    })
                    fadeOutEffect();
                }
                // add hash (#) to url
                window.location.hash = hash;
            }
    })
})();

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu-inner a[href*=' + sectionId + ']').classList.add('active', 'inner-shadow');
        } else {
            document.querySelector('.nav-menu-inner a[href*=' + sectionId + ']').classList.remove('active', 'inner-shadow');
        }
    })
}
window.addEventListener('scroll', scrollActive)

/* ---------------- homepage section ------------------- */
//typing name
new Typed(".typing", {
    strings: ["Thanh Phương"],
    typeSpeed: 80,
    backSpeed: 60,
    loop: !0
});

/* ------------------- about section tabs ---------------- */
// typing name 
new Typed(".typing-name", {
    strings: ["Nguyễn Thanh Phương"],
    typeSpeed: 80,
    backSpeed: 60,
    loop: !0
});

// load real time
function getAmoDate(day, month, year) {
    let amountDay = 0;
    const leap = new Date(year, 1, 29).getDate() === 29;
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            amountDay = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            amountDay = 30;
            break;
        default:
            amountDay = leap ? 29 : 28;
            break;
    };
    return amountDay - day;
};

function renderTime() {
    var myBD = new Date("03/01/2004"),
        currentDate = new Date();
    let hours = currentDate.getHours(),
        mins = currentDate.getMinutes(),
        sec = currentDate.getSeconds();

    myDay = Number.parseInt(myBD.getDate());
    myMonth = Number.parseInt(myBD.getMonth() + 1);
    myYear = Number.parseInt(myBD.getFullYear());

    currentDay = Number.parseInt(currentDate.getDate());
    currentMonth = Number.parseInt(currentDate.getMonth() + 1);
    currentYear = Number.parseInt(currentDate.getFullYear());

    diffDay = 0;
    diffMonth = 0;
    diffYear = 0;

    diffDay += getAmoDate(myDay, myMonth, myYear) + currentDay;

    if (++myMonth <= 12)
        diffMonth += 12 - myMonth + 1;
    if (--currentMonth >= 1)
        diffMonth += currentMonth;
    while (++myYear <= currentYear - 1)
        diffYear++;

    diffMonth += diffDay / 31;
    diffDay %= 31;
    diffYear += diffMonth / 12;
    diffMonth %= 12;

    diffYear = Math.floor(diffYear);
    diffMonth = Math.floor(diffMonth);

    24 == hours ? hours = 0 : hours > 12 && (hours -= 0),
        hours < 10 && (hours = "0" + hours),
        mins < 10 && (mins = "0" + mins), sec < 10 && (sec = "0" + sec);

    var yearInner = document.getElementById("years"),
        monthInner = document.getElementById("months"),
        dayInner = document.getElementById("days"),
        hourInner = document.getElementById("hours"),
        minInner = document.getElementById("minutes"),
        secInner = document.getElementById("seconds");

    yearInner.innerText = diffYear, monthInner.innerText = diffMonth, dayInner.innerText = diffDay,
        hourInner.innerText = hours, minInner.innerText = mins, secInner.innerText = sec,
        yearInner.style.color = "#ed4747", monthInner.style.color = "#ed4747", dayInner.style.color = "#ed4747",
        hourInner.style.color = "#0099ff", minInner.style.color = "#0099ff", secInner.style.color = "#0099ff";
    setTimeout("renderTime()", 1e3)
}

// preload page
window.addEventListener("load", () => {
    renderTime();
    document.body.classList.add("loaded");
});

// click about-tabs
(() => {
    const aboutSection = document.querySelector(".about-section"),
        tabsContainer = document.querySelector(".about-tabs");

    tabsContainer.addEventListener("click", (event) => {
        /* if event.target contains 'tab-item' class and not contains 'active' class */
        if (event.target.classList.contains("tab-item") &&
            !event.target.classList.contains("active")) {
            const target = event.target.getAttribute("data-target");
            // deactivate existing active 'tab-item'
            tabsContainer.querySelector(".active").classList.remove("outer-shadow", "active");
            // activate new 'tab-item'
            event.target.classList.add("active", "outer-shadow");
            // deactivate existing active 'tab-content'
            aboutSection.querySelector(".tab-content.active").classList.remove("active");
            // active new 'tab-content'
            aboutSection.querySelector(target).classList.add("active");
        }
    });
})();

function bodyScrollingToggle() {
    document.body.classList.toggle("hidden-scrolling");
}