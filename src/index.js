// eslint-disable-next-line
import * as css from './style.css';
import Ramen from './images/anime-food.jpg'

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