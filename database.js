const db = [];


function addToDB(data) {
    if(!db.length) {
        // db.push()
    }
}

function hasDate(date) {
    db.forEach(data => {
        if(data[0] == date) return true;
        return false ;
    });
    
}

function generate_dataBase(data) {
    db.push(data)
    console.log(db)
}

export default {db , addToDB, hasDate, generate_dataBase};