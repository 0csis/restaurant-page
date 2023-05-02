import { headerButtons } from './headerButtons';
import { home } from './home';
import { contact } from './contact';
import { menu } from './menu';

headerButtons();
home();

const content = document.querySelector('#content');
const buttons = document.querySelectorAll('button');

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (content.children[1]) {
      const secondChild = content.children[1];
      content.removeChild(secondChild);
    }
    if (btn.className == 'contactButton') {
      contact();
    } else if (btn.className == 'homeButton') {
      home();
    } else if (btn.className == 'menuButton') {
      menu();
    }
  });
});
