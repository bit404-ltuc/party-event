/* eslint-disable eol-last */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
const cookiesForm = document.getElementById('booking');

cookiesForm.addEventListener('submit', handleSubmitting);

function handleSubmitting(event) {
    event.preventDefault();
    let formData = event.target;
    let nameLocation = formData.date.value;
    console.log(nameLocation);
}