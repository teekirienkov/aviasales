// Получение html элементов со страницы
const formSearch = document.querySelector('.form-search'),
    inputCitiesFrom = document.querySelector('.input__cities-from'),
    dropdownCitiesFrom = document.querySelector('.dropdown__cities-from'),
    inputCitiesTo = document.querySelector('.input__cities-to'),
    dropdownCitiesTo = document.querySelector('.dropdown__cities-to'),
    inputDateDepart = document.querySelector('.input__date-depart'),
    buttonSearch = document.querySelector('.button__search');


// API в json формате (города) и прокси
const CitiesApi = 'database/cities.json',
    proxy = 'https://cors-anywhere.herokuapp.com/';
// Массив с городами
const city = ['Москва', 'Санкт-Петербург', 'Минск', 'Караганда', 'Челябинск',
    'Керчь', 'Волгоград', 'Самара', 'Днепропетровск', 'Екатеринбург', 'Одесса',
    'Ухань', 'Шымкент', 'Нижний Новгород', 'Калининград', 'Вроцлав', 'Ростав-на-Дону'];


// Функция получения данных с сервера (запросы) УНИВЕРСАЛЬНАЯ ФУНКЦИЯ!
const getData = (url, callback) => {
    const request = new XMLHttpRequest();

    request.open('GET', url);

    request.addEventListener('readystatechange', ()=>{
        if(request.readyState !== 4) {return;} // Сделал так потому что JSHint ругается
        
        if(request.status === 200) {
            callback(request.response);
        } else {
            console.error(request.status);
        }
    });
    request.send();
};
// Функция с алгоритмом живого поиска
const showCity = (input, list) => {
    list.textContent = '';
    if (input.value !== '' && inputCitiesFrom.value !== null) {
        const filterCity = city.filter((item)=> {
            const fixItem = item.toLowerCase();
            return fixItem.includes(input.value.toLowerCase());
        });
        filterCity.forEach((item) => {
            const li = document.createElement('li');
            li.classList.add('dropdown__city');   // добавления класса в DOM 
            li.textContent = item;
            list.append(li);
        });
    }
};
// Функция выбора города из выпадающего списка (и удаление списка после выбора)
const selectCity = (event, input, list) => {
    const target = event.target;
    if (target.tagName.toLowerCase() === 'li') {
        input.value = target.textContent;
        list.textContent = '';
    }
};
// Обработчики событий ввода названия города (функция с живым поиском)
inputCitiesFrom.addEventListener('input', ()=>{
    showCity(inputCitiesFrom, dropdownCitiesFrom);
});
inputCitiesTo.addEventListener('input', ()=>{
    showCity(inputCitiesTo, dropdownCitiesTo);
});
// Обработчики событий выбора города (функция с выбором из списка и удалением списка)
dropdownCitiesFrom.addEventListener('click', (event) => {
    selectCity(event, inputCitiesFrom, dropdownCitiesFrom);
});
dropdownCitiesTo.addEventListener('click', (event) => {
    selectCity(event, inputCitiesTo, dropdownCitiesTo);
});


getData(CitiesApi, (data)=>{
    console.log(data);
});