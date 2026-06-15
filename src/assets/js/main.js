"use strict";
/*--
    sticky  menu js 
-----------------------------------*/
let header = document.querySelector('.header-area');
let scrollTimeout;

window.addEventListener('scroll', function () {
    clearTimeout(scrollTimeout); // timer clear

    scrollTimeout = setTimeout(() => {
        if (window.scrollY > 100) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    }, 200); // scroll stop howar 0.2s pore sticky hobe
});




// mobile menu js

const mobileMenu    = document.getElementById('mobileMenu');
const menuOverlay   = document.getElementById('menuOverlay');
const menuClose     = document.getElementById('menuClose');
const menuToggles   = document.querySelectorAll('[data-menu-toggle]');

const openMenu = () => {
    mobileMenu.classList.add('active');
    menuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
};

const closeMenu = () => {
    mobileMenu.classList.remove('active');
    menuOverlay.classList.remove('active');
    document.body.style.overflow = '';
};

menuToggles.forEach(btn => btn.addEventListener('click', openMenu));
menuClose.addEventListener('click', closeMenu);
menuOverlay.addEventListener('click', closeMenu);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
});

document.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', closeMenu);
});

// header search js
// Search Overlay
const searchTrigger = document.getElementById('searchTrigger');
const searchOverlay = document.getElementById('searchOverlay');
const searchClose   = document.getElementById('searchClose');
const searchInput   = document.getElementById('searchInput');

searchTrigger.addEventListener('click', () => {
    searchOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    setTimeout(() => searchInput.focus(), 350);
});

const closeSearch = () => {
    searchOverlay.classList.remove('active');
    document.body.style.overflow = '';
    searchInput.value = '';
};

searchClose.addEventListener('click', closeSearch);

searchOverlay.addEventListener('click', (e) => {
    if (e.target === searchOverlay) closeSearch();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeSearch();
});





// /*--
//     back to top js 
// -----------------------------------*/
// var btn = $('#button');

// $(window).scroll(function () {
//     if ($(window).scrollTop() > 300) {
//         btn.addClass('show');
//     } else {
//         btn.removeClass('show');
//     }
// });

// btn.on('click', function (e) {
//     e.preventDefault();
//     $('html, body').animate({ scrollTop: 0 }, '300');
// });


// Branding Swiper
const brandingSwiper = new Swiper('.branding-swiper', {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    speed: 3000,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    freeMode: {
        enabled: true,
        momentum: false,
    },
    allowTouchMove: false,
    breakpoints: {
        0: { slidesPerView: 2 },
        576: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        992: { slidesPerView: 5 },
    },
});


// swiper projects
const projectsSwiper = new Swiper('.projects-swiper', {
    slidesPerView: '2',
    spaceBetween: 30,
    initialSlide: 2,
    loop: true,
    breakpoints: {
        0: { slidesPerView: 1 },
        576: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        992: { slidesPerView: 2 },
    },
    navigation: {
        nextEl: '.projects-nav .next',
        prevEl: '.projects-nav .prev',
    },
});


// Team swiper
const teamSwiper = new Swiper('.team-swiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    initialSlide: 3,
    slidesPerView: '3',
    loop: true,
    breakpoints: {
        0: { slidesPerView: 1 },
        576: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        992: { slidesPerView: 3 },
    },
    coverflowEffect: {
        rotate: 0,
        stretch: 50,
        depth: 120,
        modifier: 2.5,
        slideShadows: false,
    },
    navigation: {
        nextEl: '.team-nav .next',
        prevEl: '.team-nav .prev',
    },
});



// Testimonials — Desktop/Tablet Map
const avatars = document.querySelectorAll('.testimonial-avatar');
const popup   = document.getElementById('testimonialPopup');

function showPopup(avatar) {
    popup.querySelector('.popup-text').textContent = `"${avatar.dataset.review}"`;
    popup.querySelector('.popup-brand-name').textContent = avatar.dataset.brand;

    const avatarRect = avatar.getBoundingClientRect();
    const mapRect    = avatar.closest('.testimonials-map').getBoundingClientRect();
    const left       = avatarRect.left - mapRect.left + avatarRect.width / 2;
    const top        = avatarRect.top  - mapRect.top;

    popup.style.left = `${left - 180}px`;
    popup.style.top  = `${top - 180}px`;
    popup.classList.add('show');
}

avatars.forEach(avatar => {
    avatar.addEventListener('click', () => {
        avatars.forEach(a => a.classList.remove('active'));
        avatar.classList.add('active');
        showPopup(avatar);
    });
});

if (avatars.length) showPopup(avatars[0]);

document.addEventListener('click', (e) => {
    if (!e.target.closest('.testimonial-avatar') && !e.target.closest('.testimonial-popup')) {
        popup.classList.remove('show');
        avatars.forEach(a => a.classList.remove('active'));
    }
});

// Testimonials — Mobile List
const mobileAvatars = document.querySelectorAll('.testimonial-avatar-mobile');
const mobilePopup   = document.getElementById('testimonialPopupMobile');

function showMobilePopup(avatar) {
    mobilePopup.querySelector('.popup-text').textContent = `"${avatar.dataset.review}"`;
    mobilePopup.querySelector('.popup-brand-name').textContent = avatar.dataset.brand;
}

mobileAvatars.forEach(avatar => {
    avatar.addEventListener('click', () => {
        mobileAvatars.forEach(a => a.classList.remove('active'));
        avatar.classList.add('active');
        showMobilePopup(avatar);
    });
});

if (mobileAvatars.length) showMobilePopup(mobileAvatars[0]);

gsap.registerPlugin(ScrollTrigger);

const st = {
    toggleActions: "play none none reset"
};

// =====================
// Hero Area
// =====================
const heroTl = gsap.timeline({ defaults: { ease: "power2.out" } });
heroTl
    .from(".hero-Subtitle",          { opacity: 0, y: 50,  duration: 1.0 })
    .from(".hero-title",             { opacity: 0, y: 60,  duration: 1.1 }, "-=0.6")
    .from(".hero-client-avatar",     { opacity: 0, x: -50, duration: 0.9 }, "-=0.5")
    .from(".hero-badges .badge-tag", { opacity: 0, y: 30,  stagger: 0.2, duration: 0.8 }, "-=0.4")
    .from(".hero-content-right",     { opacity: 0, x: 60,  duration: 1.0 }, "-=0.6");

// =====================
// Branding Area
// =====================
gsap.from(".branding-item", {
    scrollTrigger: { trigger: ".Branding-area", start: "top 70%", ...st },
    opacity: 0, y: 40, stagger: 0.15, duration: 0.9, ease: "power2.out"
});

// =====================
// About Area
// =====================
gsap.from(".about-large-img", {
    scrollTrigger: { trigger: ".about-area", start: "top 70%", ...st },
    opacity: 0, x: -70, duration: 1.2, ease: "power2.out"
});
gsap.from(".about-content-right > *", {
    scrollTrigger: { trigger: ".about-area", start: "top 70%", ...st },
    opacity: 0, y: 45, stagger: 0.2, duration: 0.9, ease: "power2.out"
});

// =====================
// About Solutions Area
// =====================
gsap.from(".about-solutions-content-left, .about-solutions-content-right", {
    scrollTrigger: { trigger: ".about-solutions-area", start: "top 70%", ...st },
    opacity: 0, y: 45, stagger: 0.25, duration: 0.9, ease: "power2.out"
});
gsap.from(".about-solutions-item-box", {
    scrollTrigger: { trigger: ".about-solutions-items", start: "top 70%", ...st },
    opacity: 0, y: 55, stagger: 0.18, duration: 0.9, ease: "power2.out"
});
gsap.from(".about-solution-item-box-center", {
    scrollTrigger: { trigger: ".about-solutions-items", start: "top 70%", ...st },
    opacity: 0, scale: 0.92, duration: 1.1, ease: "power2.out"
});

// =====================
// Why Choose Area
// =====================
gsap.from(".why-choose-left .section-content", {
    scrollTrigger: { trigger: ".why-choose", start: "top 70%", ...st },
    opacity: 0, y: 45, duration: 0.9, ease: "power2.out"
});
gsap.from(".why-choose-box, .why-choose-box-small", {
    scrollTrigger: { trigger: ".why-choose-left-content", start: "top 70%", ...st },
    opacity: 0, y: 50, stagger: 0.15, duration: 0.85, ease: "power2.out"
});
gsap.from(".why-choose-right-img img", {
    scrollTrigger: { trigger: ".why-choose-right", start: "top 70%", ...st },
    opacity: 0, x: 70, duration: 1.2, ease: "power2.out"
});
gsap.from(".why-choose-badges .badge-row:nth-child(1) .badge-tag", {
    scrollTrigger: { trigger: ".why-choose-right", start: "top 70%", ...st },
    opacity: 0, x: -60, stagger: 0.2, duration: 0.9, delay: 0.3, ease: "back.out(1.4)"
});
gsap.from(".why-choose-badges .badge-row:nth-child(2) .badge-tag", {
    scrollTrigger: { trigger: ".why-choose-right", start: "top 70%", ...st },
    opacity: 0, x: -60, duration: 0.9, delay: 0.6, ease: "back.out(1.4)"
});

// =====================
// Projects Area
// =====================
gsap.from(".projects-top .projects-label, .projects-top .projects-heading, .projects-top .projects-nav", {
    scrollTrigger: { trigger: ".projects-section", start: "top 70%", ...st },
    opacity: 0, y: 40, stagger: 0.18, duration: 0.9, ease: "power2.out"
});
gsap.from(".projects-swiper", {
    scrollTrigger: { trigger: ".projects-swiper", start: "top 75%", ...st },
    opacity: 0, y: 60, duration: 1.1, ease: "power2.out"
});

// =====================
// Testimonials Area
// =====================
gsap.from(".testimonials-left .section-content", {
    scrollTrigger: { trigger: ".testimonials", start: "top 70%", ...st },
    opacity: 0, y: 45, duration: 0.9, ease: "power2.out"
});
gsap.from(".testimonials-right img", {
    scrollTrigger: { trigger: ".testimonials", start: "top 70%", ...st },
    opacity: 0, x: 70, duration: 1.1, ease: "power2.out"
});
gsap.from(".testimonials-map .map-bg", {
    scrollTrigger: { trigger: ".testimonials-map", start: "top 70%", ...st },
    opacity: 0, scale: 0.96, duration: 1.2, ease: "power2.out"
});
gsap.from(".testimonial-avatar", {
    scrollTrigger: { trigger: ".testimonials-map", start: "top 65%", ...st },
    opacity: 0, scale: 0, stagger: 0.18, duration: 0.8, ease: "back.out(1.4)"
});

// =====================
// Team Area
// =====================
gsap.from(".team-top .team-label, .team-top .team-heading, .team-top .team-meet", {
    scrollTrigger: { trigger: ".team-section", start: "top 70%", ...st },
    opacity: 0, y: 40, stagger: 0.18, duration: 0.9, ease: "power2.out"
});
gsap.from(".team-swiper .team-card", {
    scrollTrigger: { trigger: ".team-swiper", start: "top 70%", ...st },
    opacity: 0, y: 60, stagger: 0.15, duration: 0.9, ease: "power2.out"
});
gsap.from(".team-nav", {
    scrollTrigger: { trigger: ".team-swiper", start: "top 70%", ...st },
    opacity: 0, y: 25, duration: 0.8, delay: 0.5, ease: "power2.out"
});

// =====================
// Blogs Area
// =====================
gsap.from(".blog-left .section-content", {
    scrollTrigger: { trigger: ".blogs", start: "top 70%", ...st },
    opacity: 0, y: 45, duration: 0.9, ease: "power2.out"
});
gsap.from(".blog-right", {
    scrollTrigger: { trigger: ".blogs", start: "top 70%", ...st },
    opacity: 0, x: 50, duration: 0.9, ease: "power2.out"
});
gsap.from(".blog-card", {
    scrollTrigger: { trigger: ".blog-cards", start: "top 70%", ...st },
    opacity: 0, y: 60, stagger: 0.2, duration: 0.95, ease: "power2.out"
});

// =====================
// CTA Section
// =====================
gsap.from(".cta-title", {
    scrollTrigger: { trigger: ".cta-section", start: "top 70%", ...st },
    opacity: 0, y: 50, duration: 1.0, ease: "power2.out"
});
gsap.from(".cta-tag", {
    scrollTrigger: { trigger: ".cta-section", start: "top 70%", ...st },
    opacity: 0, x: 50, stagger: 0.18, duration: 0.8, delay: 0.3, ease: "back.out(1.4)"
});

// =====================
// Footer CTA
// =====================
gsap.from(".footer-cta h2", {
    scrollTrigger: { trigger: ".footer-cta", start: "top 75%", ...st },
    opacity: 0, y: 60, duration: 1.1, ease: "power2.out"
});
gsap.from(".footer-cta .cta-form", {
    scrollTrigger: { trigger: ".footer-cta", start: "top 75%", ...st },
    opacity: 0, y: 40, duration: 1.0, delay: 0.2, ease: "power2.out"
});
gsap.from(".footer-cta-tags .badge-tag", {
    scrollTrigger: { trigger: ".footer-cta", start: "top 75%", ...st },
    opacity: 0, x: 50, stagger: 0.18, duration: 0.9, delay: 0.35, ease: "back.out(1.4)"
});

// =====================
// Footer Main
// =====================
gsap.from(".footer-widget-brand", {
    scrollTrigger: { trigger: ".footer-main", start: "top 80%", ...st },
    opacity: 0, y: 50, duration: 1.0, ease: "power2.out"
});
gsap.from(".footer-services, .footer-widget:not(.footer-widget-brand)", {
    scrollTrigger: { trigger: ".footer-main", start: "top 80%", ...st },
    opacity: 0, y: 50, stagger: 0.18, duration: 0.95, delay: 0.15, ease: "power2.out"
});
gsap.from(".footer-links li", {
    scrollTrigger: { trigger: ".footer-main", start: "top 75%", ...st },
    opacity: 0, x: -25, stagger: 0.09, duration: 0.65, delay: 0.35, ease: "power2.out"
});
gsap.from(".footer-contact li", {
    scrollTrigger: { trigger: ".footer-main", start: "top 75%", ...st },
    opacity: 0, x: 25, stagger: 0.12, duration: 0.7, delay: 0.4, ease: "power2.out"
});
gsap.from(".footer-socials a", {
    scrollTrigger: { trigger: ".footer-socials", start: "top 88%", ...st },
    opacity: 0, scale: 0, stagger: 0.12, duration: 0.65, ease: "back.out(1.4)"
});
gsap.from(".footer-bottom-inner", {
    scrollTrigger: { trigger: ".footer-bot", start: "top 92%", ...st },
    opacity: 0, y: 25, duration: 0.8, ease: "power2.out"
});

// =====================
// Smooth Scroll (Lenis)
// =====================
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);