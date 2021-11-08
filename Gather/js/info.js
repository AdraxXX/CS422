// Handle toggling for Week/Month buttons
const weekMonthButtons = document.querySelectorAll('#week-button, #month-button');
weekMonthButtons.forEach(button => {
    // On click, make clicked button active by applying Bootstrap's 'active' class
    button.addEventListener('click', e => {
        weekMonthButtons.forEach(button => button.classList.remove('active'));
        e.target.classList.add('active');
    });
});

// Handle toggling for Illinois/Country buttons
const illinoisCountryButtons = document.querySelectorAll('#illinois-button, #country-button');
illinoisCountryButtons.forEach(button => {
    // On click, make clicked button active by applying Bootstrap's 'active' class
    button.addEventListener('click', e => {
        illinoisCountryButtons.forEach(button => button.classList.remove('active'));
        e.target.classList.add('active');
    });
});

