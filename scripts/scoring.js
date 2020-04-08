function setScores() {
    //console.log(dataObj)
    // Symptom Assessment
    // 0 - 13
    var symp_score = 0;
    switch (dataObj.outside_us_travel) {
        case "yes":
            // travelled outside us
            symp_score += 1
            break;
    }
    switch (dataObj.sym1_cough) {
        case true:
            // high risk
            symp_score += 2
            break;
    }
    switch (dataObj.sym2_stuffy_nose) {
        case true:
            // low risk
            symp_score += 1
            break;
    }
    switch (dataObj.sym3_short_breath) {
        case true:
            // high risk
            symp_score += 2
            break;
    }
    switch (dataObj.sym4_chest_pressure) {
        case true:
            // high risk
            symp_score += 2
            break;
    }
    switch (dataObj.sym5_fever) {
        case true:
            // high risk
            symp_score += 2
            break;
    }
    switch (dataObj.sym6_sore_throat) {
        case true:
            // low risk
            symp_score += 1
            break;
    }
    switch (dataObj.sym7_worsening_conditions) {
        case true:
            // high risk
            symp_score += 2
            break;
    }
    switch (dataObj.sym8_fatigue) {
        case true:
            // low risk
            symp_score += 1
            break;
    }
    switch (dataObj.sym9_runny_nose) {
        case true:
            // low risk
            symp_score += 1
            break;
    }


    // Risk assesment
    // 0 - 12
    var risk_score = 0;
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
    switch (dataObj.cond1_heart_disease) {
        case true:
            // high risk
            risk_score += 2
            break;
    }
    switch (dataObj.cond2_diabetes) {
        case true:
            // high risk
            risk_score += 2
            break;
    }
    switch (dataObj.cond3_lung_disease) {
        case true:
            // high risk
            risk_score += 2
            break;
    }
    switch (dataObj.cond4_resp_problems) {
        case true:
            // high risk
            risk_score += 2
            break;
    }
    switch (dataObj.cond5_cancer) {
        case true:
            // high risk
            risk_score += 1
            break;
    }
    switch (dataObj.cond6_smoking) {
        case true:
            // high risk
            risk_score += 1
            break;
    }
    switch (dataObj.cond7_other_issues) {
        case true:
            // high risk
            risk_score += 1
            break;
    }
    dataObj["symp_score"] = symp_score
    dataObj["risk_score"] = risk_score
}


function getRec() {
    // get scores
    var symp_score = dataObj["symp_score"]
    var risk_score = dataObj["risk_score"]

    var header
    var links

    // Range- symp 0-14 | risk 0-12
    if (symp_score > 4 && risk_score > 3) {
        // high risk, high symp+cond; medical help
        //console.log("high risk, high symp+cond; medical help")
        header = "You are at high risk for serious illness from COVID-19"
        links = `Please check out the following page for more information: <a href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/steps-when-sick.html">CDC Guidelines</a>`
    } else if (symp_score > 4 && risk_score <= 3) {
        // high symp+cond, low risk; home
        //console.log("high symp, low risk")
        header = "You are at low risk for serious illness from COVID-19, but might be infected by the virus"
        links = `Please check out the following page for more information: <a href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/caring-for-yourself-at-home.html">CDC Guidelines</a>`
    } else if (symp_score <= 4 && risk_score > 3) {
        // low symp+cond, high risk; home
        //console.log("low symp, high risk")
        header = "You are at a high risk for serious illness from COVID-19, but are not showing concerning symptoms"
        links = `Please check out the following page for more information: <a href="https://www.cdc.gov/coronavirus/2019-ncov/specific-groups/high-risk-complications.html">CDC Guidelines</a>`
    } else {
        // Low symp+cond, low risk; most probably not covid but..
        //console.log("Low symp+cond, low risk")
        header = "You are at a low risk for serious illness from COVID-19 and are not showing concerning symptoms"
        links = `Please check out the following page for more information: <a href="https://www.cdc.gov/coronavirus/2019-ncov/prepare/prevention.html">CDC Guidelines</a>`
    }

    document.getElementById('result-header').textContent = header
    document.getElementById('result-more-info').innerHTML = links

}
