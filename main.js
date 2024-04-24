const projectMembers = [
  'Julia Priadka',
  'Natalia',
  'Pavlo',
  'Artem Seredenko',
  'Viacheslav But',
  'Yaroslav Matiash',
  'Valechka',
  'Lisa',
  'Julia Haretonchuk',
];

const sectionNames = [
  'Header', // 1
  'Hero', // 2
  'About me', // 3
  'Benefits', // 4
  'Projects', // 5
  'FAQ', // 6
  'Covers', // 7
  'Reviews', // 8
  'Work together', // 9
];

function initList() {
  const listElement = document.querySelector('#studentList');
  listElement.innerHTML = '';
  projectMembers.forEach((member, index) => {
    const li = document.createElement('li');
    li.textContent = member;
    li.id = `member-${index}`;
    listElement.appendChild(li);
  });

  document
    .querySelector('#generateButton')
    .addEventListener('click', assignNumbers);
}

function assignNumbers() {
  const numbers = Array.from(
    { length: projectMembers.length },
    (_, i) => i + 1
  );
  shuffleArray(numbers);

  projectMembers.forEach((member, index) => {
    const memberElement = document.querySelector(`#member-${index}`);
    const sectionText = sectionNames[numbers[index] - 1];
    memberElement.textContent = `${member} - ${sectionText}`;
  });
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initList();
  setTimeout(() => {
    const beaver = document.getElementById('beaver');
    beaver.style.opacity = '1';
    beaver.style.left = '5px';

    setTimeout(() => {
      beaver.style.left = '-150px';
      beaver.style.opacity = '0';
      beaver.addEventListener(
        'transitionend',
        () => {
          beaver.style.display = 'none';
        },
        { once: true }
      );
    }, 2000);
  }, 3000);
});
