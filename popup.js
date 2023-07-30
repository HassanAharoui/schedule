import createDaysOfMonth from "./month.js";
import database from './database.js';

const popupContainer = document.getElementById('pop-up-container');
const closeBtn = document.getElementById('pop-up-close-btn');
const registerBtn = document.getElementById('pop-up-btn');

const days = document.querySelectorAll('.day-data');
let dayID ;

const listDaysOfMonth = createDaysOfMonth() ;

days.forEach(day => {
    day.addEventListener('dblclick',(event) => {
        document.getElementById('pop-up-container').style.display = "block";
        dayID = +day.getAttribute('id');

        console.log(day.getAttribute('id'))
        
    })
})


closeBtn.addEventListener('click',() => {
    document.getElementById('pop-up-container').style.display = "none";
})

registerBtn.addEventListener('click',() => {
    const activityValue = document.querySelector('.pop-up-input')
    console.log(listDaysOfMonth)
    for(let i = 0; i < listDaysOfMonth.length; i++){
        if( listDaysOfMonth[i] && listDaysOfMonth[i][0].getDate() == dayID ) {
             console.log(true)
             listDaysOfMonth[i][1].push(activityValue.value)
             console.log(listDaysOfMonth)
            //  console.log(listDaysOfMonth[i][0].getFullYear())
             if(!database.hasDate(listDaysOfMonth[i][0].getFullYear())) {
                // database.addToDB()
             }
            
            
        }
     }
    
})