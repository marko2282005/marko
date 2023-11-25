document.addEventListener('DOMContentLoaded', function () {
    var numberElements = document.querySelectorAll('.number');

    numberElements.forEach(function (element) {
        var input = element.querySelector('.number-text');
        var minusButton = element.querySelector('.number-minus');
        var plusButton = element.querySelector('.number-plus');

        minusButton.addEventListener('click', function () {
            var currentValue = parseInt(input.value, 10);
            if (currentValue > parseInt(element.getAttribute('data-min'), 10)) {
                input.value = currentValue - parseInt(element.getAttribute('data-step'), 10);
            }
        });

        plusButton.addEventListener('click', function () {
            var currentValue = parseInt(input.value, 10);
            if (currentValue < parseInt(element.getAttribute('data-max'), 10)) {
                input.value = currentValue + parseInt(element.getAttribute('data-step'), 10);
            }
        });
    });
});

