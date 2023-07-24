import setDateValue  from './table.js';


const dateSelector = document.getElementById('date-selector');
const dateBtn = document.getElementById('select-date-btn');

let SELECTED_DATE ;

dateBtn.addEventListener('click',() => {
    SELECTED_DATE = dateSelector.valueAsDate;

    console.log(SELECTED_DATE.getDate())
    setDateValue(SELECTED_DATE);
})