function getAge(){
    let day = document.getElementById('day').value;
    let month = document.getElementById('month').value;
    let year = document.getElementById('year').value;

    const button = document.getElementById('btn');

    let dateOfBirth = new Date(year, month-1, day)

    let today = new Date();

    let age = today-dateOfBirth;

    
    let d = Math.floor(age/(1000*60*60*24));
    let y = Math.floor(d/365);
    let rd = d%365;
    let m = Math.floor(rd/30)

    let years = document.getElementById('years');
    let months = document.getElementById('months');
    let days = document.getElementById('days');

    years.innerHTML = y;
    months.innerHTML = m;
    days.innerHTML = rd%30;
   
}
