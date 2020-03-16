var dataObj = {};


// Link to google sheet-
// https://docs.google.com/spreadsheets/d/1v1r_rlWf50q23dfASJ-erIgS4r3J2yvsn_FOJKfTJLs/edit#gid=0

var $form = $('form#test-form'),
    url = "https://script.google.com/macros/s/AKfycbw6i7GIDgpclcbWV8O231kwvdhJBeJB7to0S6igB6RvmdsWMTtT/exec"

dataObj["id"] = Math.random().toString(36).substr(2, 9);

function buttonHandler(ele) {
    var btn = ele
    var form = ele.parentElement.parentElement

    dataObj[btn.name] = btn.value

    currentSection = parseInt(form.id.slice(-1))
    if (currentSection < 2) {
        nextSection = "section" + String(currentSection + 2);
        document.getElementById(nextSection).scrollIntoView();
    } else {
        // end quiz
        endQuiz()
    }
}

function checkHandler(ele) {
    var btn = ele
    var form = ele.parentElement
    var checkboxes = form.querySelectorAll('input[type=checkbox]')
    for (var checkbox of checkboxes) {
        dataObj[checkbox.name] = checkbox.checked
    }


    currentSection = parseInt(form.id.slice(-1))
    if (currentSection < 2) {
        nextSection = "section" + String(currentSection + 2);
        document.getElementById(nextSection).scrollIntoView();
    } else {
        // end quiz
        endQuiz()
    }
}


function endQuiz() {
    console.log(dataObj)
    document.getElementById("quizResults").scrollIntoView();

    var jqxhr = $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        data: dataObj,
        success: function (ele) {
            console.log(dataObj)
            console.log("SENT!", ele)
        }
    })


}
