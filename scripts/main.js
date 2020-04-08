var dataObj = {};


var $form = $('form#test-form'),
    url = "https://script.google.com/macros/s/AKfycbw6i7GIDgpclcbWV8O231kwvdhJBeJB7to0S6igB6RvmdsWMTtT/exec"


function buttonHandler(ele) {
    var btn = ele
    var form = ele.parentElement.parentElement

    dataObj[btn.name] = btn.value

    currentSection = parseInt(form.id.slice(-1))
    if (currentSection < 4) {
        nextSection = "section" + String(currentSection + 2);
        document.getElementById(nextSection).scrollIntoView({
            behavior: 'smooth'
        });
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
    if (currentSection < 4) {
        nextSection = "section" + String(currentSection + 2);
        document.getElementById(nextSection).scrollIntoView({
            behavior: 'smooth'
        });
    } else {
        // end quiz
        endQuiz()
    }
}


function endQuiz() {
    document.getElementById("quizResults").scrollIntoView({
        behavior: 'smooth'
    });
    document.getElementById("section1").style.display = 'none';
    document.getElementById("section2").style.display = 'none';
    document.getElementById("section3").style.display = 'none';
    document.getElementById("section4").style.display = 'none';
    document.getElementById("section5").style.display = 'none';
    setScores()
    getRec()

    dataObj["id"] = Math.random().toString(36).substr(2, 9);
    dataObj["timestamp"] = new Date().toLocaleString()

    var jqxhr = $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        data: dataObj,
        success: function (ele) {
            //console.log("SENT!", ele)
        }
    })
}

$(document).ready(function () {
    $(".opt-button").click(function (e) {
        for (var btn of $(this).parent().children()) {
            $(btn).removeClass("btn-selected")
        }

        $(this).toggleClass("btn-selected")
    });
});
