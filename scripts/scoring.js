function setScores() {
    console.log(dataObj)
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
            // high risk condition
            risk_score += 2
            break;
    }
    switch (dataObj.cond2_diabetes) {
        case true:
            // high risk condition
            risk_score += 2
            break;
    }
    switch (dataObj.cond3_lung_disease) {
        case true:
            // high risk condition
            risk_score += 2
            break;
    }
    switch (dataObj.cond4_resp_problems) {
        case true:
            // high risk condition
            risk_score += 1
            break;
    }
    switch (dataObj.cond5_cancer) {
        case true:
            // high risk condition
            risk_score += 1
            break;
    }
    switch (dataObj.cond6_smoking) {
        case true:
            // high risk condition
            risk_score += 1
            break;
    }
    switch (dataObj.cond7_other_issues) {
        case true:
            // high risk condition
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
    var body
    var links

    // Range- symp 0-14 | risk 0-12
    if (symp_score > 6 && risk_score > 5) {
        // high risk, high symp+cond; medical help
        console.log("high risk, high symp+cond; medical help")
        header = "You are at high risk for serious illness from COVID-19"
        body = "Given a combination of your travel history, age, symptoms and/or serious long-term health problems, we suggest calling your healthcare provider for medical advice. Tell them you have or may have COVID-19, to help the office protect themselves and other patients, while best assisting you."
        links = `Please checkout the following page for more information: <a href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/steps-when-sick.html">CDC Guidelines</a>`
    } else if (symp_score > 5 && risk_score <= 5) {
        // high symp+cond, low risk; home
        console.log("high symp, low risk")
        header = "You are at low risk for serious illness from COVID-19, but might be infected by the virus"
        body = "Stay home: People who are mildly ill with COVID-19 are able to recover at home. Do not leave, except to get medical care. Do not visit public areas. If your symptoms get worse, call your doctor’s office or emergency department, and tell them you have or may have COVID-19. Be sure to get care if you feel worse or you think it is an emergency."
        links = `Please checkout the following page for more information: <a href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/caring-for-yourself-at-home.html">CDC Guidelines</a>`
    } else if (symp_score <= 5 && risk_score > 4) {
        // low symp+cond, high risk; home
        console.log("low symp, high risk")
        header = "You are at a high risk for serious illness from COVID-19, but are not showing concering symptoms"
        body = "Given a combination of your travel history, age, symptoms and/or serious long-term health problems, you are at higher risk for serious illness from COVID-19. It is extra important for you to take actions to reduce your risk of getting sick with the disease. Take extra measures to put distance between yourself and other people to further reduce your risk of being exposed to this new virus."
        links = `Please checkout the following page for more information: <a href="https://www.cdc.gov/coronavirus/2019-ncov/specific-groups/high-risk-complications.html">CDC Guidelines</a>`
    } else {
        // Low symp+cond, low risk; most probably not covid but..
        console.log("Low symp+cond, low risk")
        header = "You are at a low risk for serious illness from COVID-19 and are not showing concering symptoms"
        body = "There is currently no vaccine to prevent coronavirus disease 2019 (COVID-19). The best way to prevent illness is to avoid being exposed to this virus. Put distance between yourself and other people if COVID-19 is spreading in your community. Practice good hygiene such as regularly washing your hands, covering your face if you need to sneeze and clean/disinfect frequently touched surfaces daily."
        links = `Please checkout the following page for more information: <a href="https://www.cdc.gov/coronavirus/2019-ncov/prepare/prevention.html">CDC Guidelines</a>`
    }

    document.getElementById('result-header').textContent = header
    document.getElementById('result-body').textContent = body
    document.getElementById('result-more-info').innerHTML = links

}
