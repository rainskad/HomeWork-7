const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const listEl = ingredients.forEach(ingredient => {
  const plaseForList = document.querySelector('#ingredients');
  const list = document.createElement('li');
  const text = document.createTextNode(ingredient);
  list.appendChild(text);
  plaseForList.appendChild(list);
});