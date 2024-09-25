const scriptURL = 'https://script.google.com/macros/s/AKfycbz0NXJj_Sz-4F14MZBO0AMIRbDHU7WtoQ--6DG4Wipi5Gg_KPCsNmUnnTk2fP0Nt0DE/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank You! your form is submitted successfuly."))
    .then(() => {window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
})

// loader for submit
