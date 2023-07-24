const monthOfYear = [
    {month : 1 , days : 31},
    {month : 2 , days : 28},
    {month : 3 , days : 31},
    {month : 4 , days : 30},
    {month : 5 , days : 31},
    {month : 6 , days : 30},
    {month : 7 , days : 31},
    {month : 8 , days : 31},
    {month : 9 , days : 30},
    {month : 10 , days : 31},
    {month : 11 , days : 30},
    {month : 12 , days : 31}
];

function createDaysOfMonth(date) {
    const daysOfMonth = [];
    const month = thisMonth(monthOfYear , date);
 
    for(let i = 1; i <= month.days; i++) {
        daysOfMonth.push([new Date(`2023-${month.month}-${i}`),[]]);
    }
    const beginingOfMonth = (daysOfMonth[0][0].getDay() - 1 < 0) ? 6 :  daysOfMonth[0][0].getDay() - 1 ;
    const endingOfMonth = 7 - daysOfMonth[month.days-1][0].getDay() ;

    // console.log(daysOfMonth[month.days - 1][0])

    return [...generateEmptyItems(beginingOfMonth),...daysOfMonth,...generateEmptyItems(endingOfMonth)] ;
}

// return the details of the now month (month's number & days of month);
function thisMonth(months , date) {
    let nowMonth = null;
    if(!date) {
        nowMonth = (new Date()).getMonth() + 1;
    }else {
        nowMonth = date.getMonth() + 1;
    }

    for(let i = 0; i < months.length; i++) {
        if(nowMonth == months[i].month) {
            return months[i];
        }
    }
}

export function getWeekData(month) {
    const weekData = [];
    let now = (new Date()).getDate();
    let index = 0;
    
    for (let i = 0; i < month.length; i++) {
        if(month[i] !== null && now == month[i][0].getDate()) {
            index = i ;
            break;         
        }
        
    }
    const start = (new Date()).getDay() ==  0 ? 6 : (new Date()).getDay() - 1  ;
    const end = (new Date().getDay() == 0) ? 0 : 7 - (new Date().getDay()) ;
   
    for(let i = index - start; i <= index + end; i++) {
        weekData.push(month[i]);
    }
    
    return weekData ;
}

function generateEmptyItems(items) {
    const emptyItems = [];
    for(let i = 0; i < items; i++) {
        emptyItems.push(null);
    }
    return emptyItems;
}



export default createDaysOfMonth  ;