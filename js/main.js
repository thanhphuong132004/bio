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
function renderTime() {
    var e = new Date,
        t = new Date("2004-03-01"),
        n = e.getTime() - t.getTime(),
        o = new Date(n),
        a = o.getFullYear() - 1970,
        l = o.getMonth(),
        s = o.getDate(),
        r = o.getHours(),
        c = o.getMinutes(),
        i = o.getSeconds();
    24 == r ? r = 0 : r > 12 && (r -= 0), r < 10 && (r = "0" + r), c < 10 && (c = "0" + c), i < 10 && (i = "0" + i);
    var d = document.getElementById("years"),
        u = document.getElementById("months"),
        m = document.getElementById("days"),
        y = document.getElementById("hours"),
        g = document.getElementById("minutes"),
        p = document.getElementById("seconds");
    d.innerText = a, u.innerText = l, m.innerText = s, y.innerText = r, g.innerText = c, p.innerText = i, d.style.color = "#ed4747", u.style.color = "#ed4747", m.style.color = "#ed4747", y.style.color = "#0099ff", g.style.color = "#0099ff", p.style.color = "#0099ff", setTimeout("renderTime()", 1e3)
}
window.onload = (event) => {
    renderTime();
};
document.body.onload(document.body.classList.add("loaded"));

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