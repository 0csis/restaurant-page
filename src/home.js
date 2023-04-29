import './style.css';

const home = () => {
  const content = document.querySelector('#content');

  const homepage = document.createElement('div');
  homepage.classList.add('homepage');
  const header = document.createElement('header');
  homepage.appendChild(header);

  header.textContent = 'Nane International';

  content.appendChild(homepage);
};

export { home };
