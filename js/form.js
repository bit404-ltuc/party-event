/* eslint-disable eol-last */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
const cookiesForm = document.getElementById('booking');

cookiesForm.addEventListener('submit', handleSubmitting);

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

    console.log(formData);
}