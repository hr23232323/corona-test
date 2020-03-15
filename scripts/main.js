function buttonHandler(ele) {
    var btn = ele
    var form = ele.parentElement.parentElement




    currentSection = parseInt(form.id.slice(-1))
    if (currentSection < 10) {
        nextSection = "section" + String(currentSection + 2);
        document.getElementById(nextSection).scrollIntoView();
    } else {
        // end quiz
    }
}

function checkHandler(ele) {
    var btn = ele
    var form = ele.parentElement
    var checkboxes = form.querySelectorAll('input[type=checkbox]')




    currentSection = parseInt(form.id.slice(-1))
    if (currentSection < 10) {
        nextSection = "section" + String(currentSection + 2);
        document.getElementById(nextSection).scrollIntoView();
    } else {
        // end quiz
    }
}


function endQuiz() {

}
