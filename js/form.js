
/* eslint-disable semi */
/* eslint-disable new-cap */
/* eslint-disable no-trailing-spaces */
/* eslint-disable quotes */
/* eslint-disable no-undef */
/* eslint-disable eol-last */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
let btnSubmit = document.getElementById('booking');
let allSavingBooking = [];
if (localStorage.getItem('Booking') !== null) {
    allSavingBooking = JSON.parse(localStorage.getItem('Booking'));
}
console.log(allSavingBooking);

if (window.location.search !== '') {
    // window.location.search.substring(1)
    let text = JSON.parse(localStorage.getItem("PartyHalls"))[window.location.search.substring(1)].description;
    document.getElementById("section1").textContent = text;

    let options = '';
    let list = JSON.parse(localStorage.getItem("PartyHalls"))[window.location.search.substring(1)].dates
    console.log(list);
    for (let i = 0; i < list.length; i++) {
        options += '<option value="' + list[i] + '" />';
    }
    console.log(options);
    document.getElementById('times').innerHTML = options;
} else {

    document.getElementById("section1").textContent = "nothing";
}




function handleSubmitting(event) {
    event.preventDefault();
    let formData = event.target;
    let fullName = formData.fullName.value;
    let emailAddress = formData.emailAddress.value;
    let phone1 = formData.phone1.value;
    let phone2 = formData.phone2.value;
    let date = formData.date.value;
    let time = formData.time.value;
    let quantity = formData.quantity.value;

    let radios = document.getElementsByName('provided');
    let confirmation = document.getElementsByName('Confirmation');

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            radios = radios[i].value;
            break;
        }
    }
    for (let i = 0; i < confirmation.length; i++) {
        if (confirmation[i].checked) {
            confirmation = confirmation[i].value;
            break;
        }
    }
    console.log(confirmation, radios);
    new savingBooking(fullName, emailAddress, phone1, phone2, date, time, quantity, radios, confirmation);


    Swal.fire({

        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
    });
    setTimeout(function() { location.href = "/" }, 1500);



}


btnSubmit.addEventListener('submit', handleSubmitting);

function savingBooking(fullName, emailAddress, phone1, phone2, date, time, quantity, radios, confirmation) {
    this.fullName = fullName;
    this.emailAddress = emailAddress;
    this.phone1 = phone1;
    this.phone2 = phone2;
    this.date = date;
    this.time = time;
    this.quantity = quantity;
    this.radios = radios;
    this.confirmation = confirmation;
    this.nameHall = JSON.parse(localStorage.getItem("PartyHalls"))[window.location.search.substring(1)].name;

    allSavingBooking.push(this);
    savingInLocal();
}


function savingInLocal() {
    let convertedArr = JSON.stringify(allSavingBooking);
    localStorage.setItem('Booking', convertedArr);

}