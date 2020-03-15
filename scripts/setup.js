function nextSection(currentSection) {
    nextSection = "section" + String(parseInt(currentSection) + 2);
    //console.log(nextSection)
    document.getElementById(nextSection).scrollIntoView();
}
