
function getYear(){
    let today = new Date()
    console.log(today)
    let fullYear = today.getFullYear()
    let dayNow = today.getDay()
    console.log(fullYear)
    console.log(dayNow)
    if (fullYear > 2020) {
        document.write('<h3> YAY.  2020 is over!!!</h3>');
    } else {
        document.write('<h3>Can we be done with this already!</h3>');
    }
}

getYear();