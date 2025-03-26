document.querySelectorAll('.form-group').forEach(input => {
    input.addEventListener('focus', function() {
        this.nextElementSibling.classList.add('input-label-active');
    });

    input.addEventListener('blur', function() {
        if (this.value === '') {
            this.nextElementSibling.classList.remove('input-label-active');
        }
    });
});