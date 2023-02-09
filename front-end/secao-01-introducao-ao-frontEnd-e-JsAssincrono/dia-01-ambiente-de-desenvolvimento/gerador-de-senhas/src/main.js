import { nanoid } from 'nanoid';
import copy from 'clipboard-copy';
import './styles.css';


const generatePassword = document.getElementById('new-password-button');
const newPassword = document.getElementById('new-password-generated');

generatePassword.addEventListener('click', () => {
  const randomPassword = nanoid();
  newPassword.innerHTML = randomPassword;
});

newPassword.addEventListener('click', (event) => {
  copy(event.target.innerHTML);
  alert('Senha copiada com sucesso!');
});