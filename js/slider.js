var stepSlider = document.getElementById('slider-step');

noUiSlider.create(stepSlider, {
    start: [4000],
    step: 1000,
    range: {
        'min': [2000],
        'max': [10000]
    }
});

var stepSliderValueElement = document.getElementById('slider-step-value');

stepSlider.noUiSlider.on('update', function (values, handle) {
    const value = values[handle];
    console.log(value)
    stepSliderValueElement.innerHTML = values[handle];
});
