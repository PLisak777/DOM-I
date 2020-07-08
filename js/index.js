const siteContent = {
    "nav": {
        "nav-item-1": "Services",
        "nav-item-2": "Product",
        "nav-item-3": "Vision",
        "nav-item-4": "Features",
        "nav-item-5": "About",
        "nav-item-6": "Contact",
        "img-src": "img/logo.png"
    },
    "cta": {
        "h1": "DOM Is Awesome",
        "button": "Get Started",
        "img-src": "img/header-img.png"
    },
    "main-content": {
        "features-h4": "Features",
        "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "about-h4": "About",
        "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "middle-img-src": "img/mid-page-accent.jpg",
        "services-h4": "Services",
        "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "product-h4": "Product",
        "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "vision-h4": "Vision",
        "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    "contact": {
        "contact-h4": "Contact",
        "address": "123 Way 456 Street Somewhere, USA",
        "phone": "1 (888) 888-8888",
        "email": "sales@greatidea.io",
    },
    "footer": {
        "copyright": "Copyright Great Idea! 2018"
    },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// BEHOLD: MY STUFF

// NAV Section

let navList = document.querySelectorAll('nav a');
navList[0].textContent = siteContent["nav"]["nav-item-1"];
navList[1].textContent = siteContent["nav"]["nav-item-2"];
navList[2].textContent = siteContent["nav"]["nav-item-3"];
navList[3].textContent = siteContent["nav"]["nav-item-4"];
navList[4].textContent = siteContent["nav"]["nav-item-5"];
navList[5].textContent = siteContent["nav"]["nav-item-6"];

navList.forEach(a => {
    a.style.color = 'green'
})

let ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

let ctaHead = document.querySelector('h1');
ctaHead.textContent = siteContent["cta"]["h1"];

let ctaBtn = document.querySelector('button');
ctaBtn.textContent = siteContent["cta"]["button"];

// Append/Prepend Section Start

const newNavElement = document.createElement('a');
newNavElement.textContent = 'Prepend';
newNavElement.style.color = 'green';

const newNavEl = document.createElement('a');
newNavEl.textContent = 'Append';
newNavEl.style.color = 'green';

const parentElement = document.querySelector('nav');
parentElement.prepend(newNavElement);
parentElement.appendChild(newNavEl);

// Append/Prepend Section End

// Main Content

let midImg = document.querySelector('.middle-img');
midImg.src = siteContent["main-content"]["middle-img-src"];

let topContent = document.querySelectorAll('.top-content h4')
topContent[0].textContent = siteContent["main-content"]["features-h4"];
topContent[1].textContent = siteContent["main-content"]["about-h4"];

const topText = document.querySelectorAll('.text-content p');
topText[0].textContent = siteContent["main-content"]["features-content"];
topText[1].textContent = siteContent["main-content"]["about-content"];

const bottomContent = document.querySelectorAll('.bottom-content h4');
bottomContent[0].textContent = siteContent["main-content"]["services-h4"];
bottomContent[1].textContent = siteContent["main-content"]["product-h4"];
bottomContent[2].textContent = siteContent["main-content"]["vision-h4"];

const bottomText = document.querySelectorAll('.bottom-content p');
bottomText[0].textContent = siteContent["main-content"]["services-content"];
bottomText[1].textContent = siteContent["main-content"]["product-content"];
bottomText[2].textContent = siteContent["main-content"]["vision-content"];

// Contact Section

const contactHead = document.querySelector('.contact h4');
contactHead.textContent = siteContent["contact"]["contact-h4"];

const contactInfo = document.querySelectorAll('.contact p');
contactInfo[0].textContent = siteContent["contact"]["address"];
contactInfo[1].textContent = siteContent["contact"]["phone"];
contactInfo[2].textContent = siteContent["contact"]["email"];

// Footer Section

const footer = document.getElementsByTagName('footer');
const footerText = document.querySelector('footer p');

footerText.textContent = siteContent["footer"]["copyright"];