function setScores() {
    console.log(dataObj)
    // Symptom Assessment
    // 0 - 12
    var symp_score = 0;
    switch (dataObj.sym1_cough) {
        case true:
            // high risk condition
            symp_score += 1
            break;
    }
    switch (dataObj.sym2_stuffy_nose) {
        case true:
            // high risk condition
            symp_score += 1
            break;
    }
    switch (dataObj.sym3_short_breath) {
        case true:
            // high risk condition
            symp_score += 2
            break;
    }
    switch (dataObj.sym4_chest_pressure) {
        case true:
            // high risk condition
            symp_score += 2
            break;
    }
    switch (dataObj.sym5_fever) {
        case true:
            // high risk condition
            symp_score += 2
            break;
    }
    switch (dataObj.sym6_sore_throat) {
        case true:
            // high risk condition
            symp_score += 1
            break;
    }
    switch (dataObj.sym7_worsening_conditions) {
        case true:
            // high risk condition
            symp_score += 2
            break;
    }
    switch (dataObj.sym8_fatigue) {
        case true:
            // high risk condition
            symp_score += 1
            break;
    }


    // Condition assesment
    // 0 - 10
    var cond_score = 0;
    switch (dataObj.cond1_heart_disease) {
        case true:
            // high risk condition
            cond_score += 2
            break;
    }
    switch (dataObj.cond2_diabetes) {
        case true:
            // high risk condition
            cond_score += 2
            break;
    }
    switch (dataObj.cond3_lung_disease) {
        case true:
            // high risk condition
            cond_score += 2
            break;
    }
    switch (dataObj.cond4_resp_problems) {
        case true:
            // high risk condition
            cond_score += 1
            break;
    }
    switch (dataObj.cond5_cancer) {
        case true:
            // high risk condition
            cond_score += 1
            break;
    }
    switch (dataObj.cond6_smoking) {
        case true:
            // high risk condition
            cond_score += 1
            break;
    }
    switch (dataObj.cond7_other_issues) {
        case true:
            // high risk condition
            cond_score += 1
            break;
    }


    // Risk assesment
    // 0 - 4
    var risk_score = 0;
    switch (dataObj.outside_us_travel) {
        case "yes":
            // travelled outside us
            risk_score += 2
            break;
    }

    switch (dataObj.age_group) {
        case "50-60":
            // mid level of risk
            risk_score += 1
            break;
        case "60+":
            // high level of risk
            risk_score += 2
            break;
    }

    dataObj["symp_score"] = symp_score
    dataObj["cond_score"] = cond_score
    dataObj["risk_score"] = risk_score
}


function getRec() {
    // get scores
    var symp_score = dataObj["symp_score"]
    var cond_score = dataObj["cond_score"]
    var risk_score = dataObj["risk_score"]

    // Range- symp 0-12 | cond 0-10 | risk 0-4
    if (symp_score + cond_score > 10 && risk_score > 2) {
        // high risk, high symp+cond; medical help
        console.log("high risk, high symp+cond; medical help")
    } else if (symp_score + cond_score > 10 && risk_score <= 2) {
        // high symp+cond, low risk; home
        console.log("high symp+cond, low risk")
    } else if (symp_score + cond_score < 10 && risk_score > 2) {
        // low symp+cond, high risk; home
        console.log("low symp+cond, high risk")
    } else {
        // Low symp+cond, low risk; most probably not covid but..
        console.log("Low symp+cond, low risk")
    }

}
