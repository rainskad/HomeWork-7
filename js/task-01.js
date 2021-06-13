const itemsLi = document.querySelectorAll('.item');

const numberOfCategories = itemsLi.length;
console.log(`В списке ${numberOfCategories} категории`);

itemsLi.forEach(item => {
    console.log(`категория: ${item.querySelector('h2').textContent}`);
    console.log(`Количество элементов: ${item.querySelectorAll('li').length}`);

});


