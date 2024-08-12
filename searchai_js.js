document.addEventListener('DOMContentLoaded', function() {
    console.log("JavaScript loaded"); // Debugging message to confirm JS is loaded
    const freeFilter = document.getElementById('free-filter');
    const buttons = document.querySelectorAll('.button');

    freeFilter.addEventListener('change', function() {
        buttons.forEach(button => {
            if (freeFilter.checked) {
                if (button.getAttribute('data-free') === 'false') {
                    button.style.display = 'none';
                } else {
                    button.style.display = 'inline-block';
                }
            } else {
                button.style.display = 'inline-block';
            }
        });
    });
});








