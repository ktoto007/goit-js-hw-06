const allLi = document.querySelectorAll('.item-js');

console.log('Number of categories: ',allLi.length);

for (const element of allLi) {
    const title = element.querySelector('.title-js');
    const items = element.querySelectorAll('.categories-item-js');
    console.log('Category: ', title.textContent);
    console.log('Elements: ', items.length);
}
