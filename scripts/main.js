function buttonHandler(ele) {
    var btn = ele
    var form = ele.parentElement





    nextSection(form.id.slice(-1));

}

function checkHandler(ele) {
    var btn = ele
    var form = ele.parentElement
    var checkboxes = form.querySelectorAll('input[type=checkbox]')



    nextSection(form.id.slice(-1));
}


function nextSection(currentSection) {
    nextSection = "section" + String(parseInt(currentSection) + 2);
    console.log(nextSection)
    window.location.href = '#' + nextSection
}

function endQuiz() {

}
