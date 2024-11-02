import * as css from './style.css';

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
