// eslint-disable-next-line
import * as css from './style.css';
import Ramen from './images/anime-food.jpg'
import Logo from './images/logo.png'
import socials1 from './images/socials1.jpg'
import socials2 from './images/socials2.jpg'
import socials3 from './images/socials3.jpg'
import socials4 from './images/anime-food.jpg'

const content = document.querySelector('#content');

// MAIN SECTION
const main = document.createElement('section');
main.classList.add('main');
content.appendChild(main);
(function() {
  const mainButtons = document.createElement('div');
  mainButtons.classList.add('main-buttons');
  main.appendChild(mainButtons);
  const btn1 = document.createElement('button')
  btn1.textContent = 'Book a Table';
  mainButtons.appendChild(btn1);
  const btn2 = document.createElement('button')
  btn2.textContent = 'Explore Menu'
  mainButtons.appendChild(btn2);
})();

// BROWSE SECTION
const browse = document.createElement('section');
browse.classList.add('browse');
content.appendChild(browse);
(function() {
  const h1 = document.createElement('h1');
  h1.textContent = 'Browse Our Menu';
  browse.appendChild(h1);
  const container = document.createElement('div');
  container.classList.add('container');
  browse.append(container);
  const addCard = (title) => {
    const card = document.createElement('div');
    container.append(card);
    card.classList.add('card');
    const cardTitle = document.createElement('h1');
    cardTitle.classList.add('section-title');
    cardTitle.textContent = title;
    card.append(cardTitle);
    const innerContainer = document.createElement('div')
    card.append(innerContainer);
    const sectionText = document.createElement('p');
    sectionText.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, esse.'
    innerContainer.append(sectionText)
    sectionText.classList.add('section-text');
    const button = document.createElement('button');
    card.append(button);
    button.textContent = 'Explore Menu';
  }
  addCard('Breakfast');
  addCard('Main Dishes');
  addCard('Drinks');
  addCard('Desserts');
})();

// ABOUT SECTION
const about = document.createElement('section');
content.append(about);
about.classList.add('about');
(function() {
  const sideImg = document.createElement('img');
  sideImg.src = Ramen;
  sideImg.alt = 'Delicious ramen';
  about.append(sideImg);
  const container = document.createElement('div');
  about.append(container);
  const h1 = document.createElement('h1');
  h1.classList.add('section-title');
  h1.textContent = 'We provide healthy food for your family.';
  container.append(h1);
  const p1 = document.createElement('p');
  p1.classList.add('section-text');
  p1.textContent = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptatem quisquam magnam. Eligendi recusandae ducimus necessitatibus architecto aperiam veniam fugit ut obcaecati sapiente esse aliquam perspiciatis dolorem odit non enim nihil quam, a omnis inventore.'
  container.append(p1);
  const p2 = document.createElement('p');
  p2.classList.add('section-text');
  p2.textContent = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptatem quisquam magnam. Eligendi recusandae ducimus necessitatibus architecto aperiam veniam fugit ut obcaecati sapiente esse aliquam perspiciatis dolorem odit non enim nihil quam, a omnis inventore.'
  container.append(p2);
  const button = document.createElement('button');
  button.textContent = 'More About Us';
  container.append(button);
})();

// FOOTER
const footer = document.createElement('footer');
content.append(footer);
(function () {
  (function() {
    const footerSection = document.createElement('div');
    footerSection.classList.add('footer-section');
    footer.append(footerSection);
    const logoContainer = document.createElement('div');
    logoContainer.classList.add('logo-container');
    const img = document.createElement('img');
    img.src = Logo;
    img.alt = 'Ramen logo';
    img.classList.add('logo');
    const h1 = document.createElement('h1');
    h1.textContent = 'animeats';
    logoContainer.append(img, h1);
    footerSection.append(logoContainer);
    const textContainer = document.createElement('div');
    textContainer.classList.add('footer-text-container');
    footerSection.append(textContainer);
    const p = document.createElement('p');
    p.textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, quaerat.';
    textContainer.append(p);
  })();
  (function () {
    const footerSection = document.createElement('div');
    footerSection.classList.add('footer-section');
    footer.append(footerSection);
    const h1 = document.createElement('h1');
    h1.textContent = 'Contact Us';
    footerSection.append(h1);
    const textContainer = document.createElement('div');
    textContainer.classList.add('footer-text-container');
    const p1 = document.createElement('p');
    p1.textContent = 'animeats - Paddington';
    const p2 = document.createElement('p');
    p2.textContent = 'yummy@animeats.com.au';
    const p3 = document.createElement('p');
    p3.textContent = '(02) 1234 5678';
    textContainer.append(p1, p2, p3);
    footerSection.append(textContainer);
  }) ();
  (function () {
    const footerSection = document.createElement('div');
    footerSection.classList.add('footer-section');
    footer.append(footerSection);
    const h1 = document.createElement('h1');
    h1.textContent = 'Follow Us On Instagram';
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('socials-img-container');
    const img1 = document.createElement('img');
    img1.src = socials1;
    const img2 = document.createElement('img');
    img2.src = socials2;
    const img3 = document.createElement('img');
    img3.src = socials3;
    const img4 = document.createElement('img');
    img4.src = socials4;
    imgContainer.append(img1, img2, img3, img4);
    footerSection.append(h1, imgContainer);
  })()
}())