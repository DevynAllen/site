function showContent(sectionParam, labelParam) {
    sectionOptions = ['student', 'founder', 'engineer']
    labelOptions = ['studentLabel', 'founderLabel', 'engineerLabel']

    sectionOptions.forEach(section => {
        if (section === sectionParam) {
            document.getElementById(section).style.display = '';
        } else {
            document.getElementById(section).style.display = 'none';
        }
    })

    labelOptions.forEach(label => {
        if (label === labelParam) {
            document.getElementById(label).style.textDecoration = 'underline'
            document.getElementById(label).style.color = 'rgb(220, 220, 220)'
        } else {
            document.getElementById(label).style.textDecoration = 'none'
            document.getElementById(label).style.color = '#222'
        }
    })
}