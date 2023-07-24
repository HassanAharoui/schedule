import createDaysOfMonth  from "./month.js";
import {getWeekData} from './month.js';


function displayDays(daysOfMonth , container) {
    // const tableContainer = document.getElementById('table-month');
    let weekRow = [] ;
    let tableRow = "";
    let tableData = "";
    // initialize the table :
    container.innerHTML = `
        <tr>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wen</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
            <th>Sun</th>
        </tr>`;
    
    for(let i = 0; i < daysOfMonth.length; i++) {
        
        weekRow = daysOfMonth.splice(0,7);
        // fill every week :
        for(let i = 0; i < weekRow.length; i++) {
            if(weekRow[i] !== null) {
                tableData += `<td id="${weekRow[i][0].getDate()}" class="day-data">${weekRow[i][0].getDate()}</td>`
            }else {
                tableData += `<td>X</td>`;
            }
        } 
        tableRow += `<tr>${tableData}</td>`;
        tableData = "";
    }

    container.innerHTML += tableRow;
}



// change the date by selector
function setDateValue(date) {
    displayDays(createDaysOfMonth(date),document.getElementById('table-month'))
}

const listDaysOfMonth = createDaysOfMonth();
// console.log(listDaysOfMonth)
if(window.location.pathname == '/') {
    displayDays(listDaysOfMonth,document.getElementById('table-month'));
} else if(window.location.pathname == '/week.html') {
    console.log("LOCATION HAS BEEN CHANGE ==> WEEK.HTML")
    displayDays(getWeekData(listDaysOfMonth),document.getElementById('table-week'))
}

export default setDateValue ;
