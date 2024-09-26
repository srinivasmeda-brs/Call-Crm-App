let currentStep = 1;

function showStep(step) {
    document.querySelectorAll('.form-step').forEach((stepDiv) => {
        stepDiv.classList.remove('active');
    });
    document.getElementById('step' + step).classList.add('active');
}

function nextStep(step) {
    if (validateStep(step)) {
        currentStep++;
        showStep(currentStep);
        highlightButton(currentStep);
    }
}

function prevStep(step) {
    currentStep--;
    showStep(currentStep);
    highlightButton(currentStep);
}

function highlightButton(step) {
    document.getElementById('button' + step).classList.add('active');
    if (step > 1) {
        document.getElementById('button' + (step - 1)).classList.add('active');
    }
}

function validateStep(step) {
    let isValid = true;
    document.querySelectorAll('#step' + step + ' [required]').forEach((input) => {
        if (!input.value) {
            document.getElementById(input.id + 'Error').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById(input.id + 'Error').style.display = 'none';
        }
    });
    return isValid;
}

function goToStep(step) {
    if (step <= currentStep) {
        showStep(step);
    }
}

function submitForm() {
    const popup = document.getElementById('popup');
    popup.style.display = 'block';
    setTimeout(() => {
        popup.style.display = 'none';
    }, 3000);
}

document.addEventListener('DOMContentLoaded', () => {
    highlightButton(currentStep);
});