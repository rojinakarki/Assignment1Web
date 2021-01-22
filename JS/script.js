//Slideshow
var slideIndex = 0;
showSlides();
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Image changes every 2 seconds
}

//Form Validation
function validateName() {
    var name = document.getElementById('contact-name').value;
    if(name.length === 0) {
        producePrompt('Name is required', 'name-error' , 'red')
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        producePrompt('First and last name, please.','name-error', 'red');
        return false;
    }
    producePrompt('Valid', 'name-error', 'green');
    return true;
}
function validateEmail () {
    var email = document.getElementById('contact-email').value;
    if(email.length == 0) {
        producePrompt('Email Invalid','email-error', 'red');
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {

        producePrompt('Email Invalid', 'email-error', 'red');
        return false;
    }
    producePrompt('Valid', 'email-error', 'green');
    return true;
}
function validateSubject() {
    var subject = document.getElementById('contact-subject').value;
    if(subject.length === 0) {

        producePrompt('Subject is required', 'subject-error' , 'red')
        return false;
    }
    if (!subject.match(/^[A-Za-z]*$/)) {

        producePrompt('Subject, please.','subject-error', 'red');
        return false;
    }
    producePrompt('Valid', 'subject-error', 'green');
    return true;
}
function validateMessage() {
    var message = document.getElementById('contact-message').value;
    var required = 30;
    var left = required - message.length;
    if (left > 0) {
        producePrompt(left + ' more characters required','message-error','red');
        return false;
    }
    producePrompt('Valid', 'message-error', 'green');
    return true;
}
function validateForm() {
    if (!validateName() || !validateSubject() || !validateEmail() || !validateMessage()) {
        jsShow('submit-error');
        producePrompt('Please fix errors to submit.', 'submit-error', 'red');
        setTimeout(function(){jsHide('submit-error');}, 2000);
        return false;
    }
}
function jsShow(id) {
    document.getElementById(id).style.display = 'block';
}
function jsHide(id) {
    document.getElementById(id).style.display = 'none';
}
function producePrompt(message, promptLocation, color) {
    document.getElementById(promptLocation).innerHTML = message;
    document.getElementById(promptLocation).style.color = color;

}
