const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('focus', function () {
        input.previousElementSibling.classList.add('active');
    })

    input.addEventListener('blur', function () {
        if (input.value === '') {
            input.previousElementSibling.classList.remove('active');
        }
    })

})