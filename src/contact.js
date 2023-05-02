import './style.css';
import Map from './map.png';

const contact = () => {
  const content = document.querySelector('#content');

  const backgroundContact = document.createElement('div');
  backgroundContact.classList.add('backgroundContact');
  backgroundContact.textContent = 'test';

  content.appendChild(backgroundContact);
};

export { contact };
