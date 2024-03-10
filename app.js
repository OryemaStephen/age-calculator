function getAge(){
    //Acces input values
    let day = document.getElementById('day').value;
    let month = document.getElementById('month').value;
    let year = document.getElementById('year').value;

    //Get date of birth from input
    let dateOfBirth = new Date(year, month-1, day)

    //Access today's date
    let today = new Date();

    //Calculate age in ms
    let age = today-dateOfBirth;

    //Convert age into years, months and days
    let d = Math.floor(age/(1000*60*60*24));
    let y = Math.floor(d/365);
    let remainingDays = d%365;
    let m = Math.floor(remainingDays/30)

    //Access display elements
    let years = document.getElementById('years');
    let months = document.getElementById('months');
    let days = document.getElementById('days');

    //Show age in years, months and days
    years.innerHTML = y;
    months.innerHTML = m;
    days.innerHTML = remainingDays%30;
   
}
