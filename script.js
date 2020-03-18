const formSearch = document.querySelector('.form-search'),
    inputCitiesFrom = document.querySelector('.input__cities-from'),
    dropdownCitiesFrom = document.querySelector('.dropdown__cities-from'),
    inputCitiesTo = document.querySelector('.input__cities-to'),
    dropdownCitiesTo = document.querySelector('.dropdown__cities-to'),
    inputDateDepart = document.querySelector('.input__date-depart'),
    buttonSearch = document.querySelector('.button__search');


const city = ['Москва', 'Санкт-Петербург', 'Минск', 'Караганда', 'Челябинск',
    'Керч', 'Волгоград', 'Самара', 'Днепропетровск', 'Екатеринбург', 'Одесса',
    'Ухань', 'Шымкен', 'Нижний Новгород', 'Калининград', 'Вроцлав', 'Ростав-на-Дону'];


inputCitiesFrom.addEventListener('input', function(){
    const filterCity = city.filter((item)=> {
        const fixItem = item.toLowerCase();
        return fixItem.includes(inputCitiesFrom.value.toLowerCase());
    });

    filterCity.forEach((item) => {
        const li = document.createElement('li');
        li.classList.add('dropdown__city');
        li.textContent = item;
        console.log(li);
    });
});