
const inputEl = document.querySelector('#input');
const btnEl = document.querySelector('#btn')


btnEl.addEventListener('click', onBtnClick);

function onBtnClick (){
    const ul = document.querySelector('#list-ul')
    const li = document.createElement('li')
    if (inputEl.value !== '' ){
        li.textContent = inputEl.value
        ul.append(li);
        inputEl.value = '' ;
    }
}
