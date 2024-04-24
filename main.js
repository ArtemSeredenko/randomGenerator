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
    memberElement.textContent = `${member} - ${numbers[index]}`;
  });
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

document.addEventListener('DOMContentLoaded', initList);
