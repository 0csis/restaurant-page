import './style.css';

const headerButtons = () => {
  const content = document.querySelector('#content');

  const headerButtons = document.createElement('div');
  headerButtons.classList.add('headerButtons');
  const menuButton = document.createElement('button');
  menuButton.textContent = 'Menu';
  menuButton.classList.add('menuButton');
  const homeButton = document.createElement('button');
  homeButton.textContent = 'Home';
  homeButton.classList.add('homeButton');
  const contactButton = document.createElement('button');
  contactButton.textContent = 'Contact';
  contactButton.classList.add('contactButton');
  headerButtons.appendChild(menuButton);
  headerButtons.appendChild(homeButton);
  headerButtons.appendChild(contactButton);

  content.appendChild(headerButtons);
};

export { headerButtons };
