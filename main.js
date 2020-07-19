function showContent(sectionParam, labelParam, imgParam) {
    sectionOptions = ['student', 'founder', 'engineer']
    labelOptions = ['studentLabel', 'founderLabel', 'engineerLabel']
    imgOptions = ['student-img', 'founder-img', 'engineer-img']

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
            document.getElementById(label).style.color = 'rgb(80, 45, 127)'
        } else {
            document.getElementById(label).style.textDecoration = 'none'
            document.getElementById(label).style.color = '#222'
        }
    })

    imgOptions.forEach(img => {
        if (img === imgParam) {
            document.getElementById(img).style.display = '';
        } else {
            document.getElementById(img).style.display = 'none';
        }
    })

}