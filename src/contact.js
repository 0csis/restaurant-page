import './style.css';
import Silverware from './silverware.svg';
import Phone from './phone-classic.svg';
import Map from './map.png';

const contact = () => {
  const content = document.querySelector('#content');

  const backgroundContact = document.createElement('div');
  backgroundContact.classList.add('backgroundContact');

  const direction = document.createElement('div');
  direction.classList.add('direction');

  const silverwareImage = document.createElement('div');
  silverwareImage.classList.add('silverwareImage');
  const forkAndKnife = new Image();
  forkAndKnife.src = Silverware;
  silverwareImage.appendChild = forkAndKnife;
  direction.appendChild(silverwareImage);

  const address = document.createElement('div');
  address.textContent = '123 Main Street in the heart of downtown London, UK';
  direction.appendChild(address);

  const phone = document.createElement('div');
  phone.classList.add('phone');

  const phoneImage = document.createElement('div');
  phoneImage.classList.add('phoneImage');
  const phoneClassic = new Image();
  phoneClassic.src = Phone;
  phoneImage.appendChild = phoneClassic;
  phone.appendChild(phoneImage);

  const phoneNumber = document.createElement('div');
  phoneNumber.textContent = '55091029292';
  phone.appendChild(phoneNumber);

  const mapImage = document.createElement('div');
  mapImage.classList.add('mapImage');
  const map = new Image();
  map.src = Map;
  mapImage.appendChild = map;

  backgroundContact.appendChild(direction);
  backgroundContact.appendChild(phone);
  backgroundContact.appendChild(mapImage);

  content.appendChild(backgroundContact);
};

export { contact };
