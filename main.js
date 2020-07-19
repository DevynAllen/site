function showContent(sectionParam, labelParam, imgParam, achievementParam) {
    sectionOptions = ['student', 'entrepreneur', 'developer']
    labelOptions = ['studentLabel', 'entrepreneurLabel', 'developerLabel']
    imgOptions = ['student-img', 'entrepreneur-img', 'developer-img']
    achievementOptions = ['studentAchievements', 'entrepreneurAchievements', 'developerAchievements']

    sectionOptions.forEach(section => {
        if (section === sectionParam)
            document.getElementById(section).style.display = '';
        else
            document.getElementById(section).style.display = 'none';

    })

    labelOptions.forEach(label => {
        if (label === labelParam) {
            // document.getElementById(label).style.textDecoration = 'underline'
            document.getElementById(label).style.color = 'rgb(80, 45, 127)'
            document.getElementById(label).style.fontWeight = '800'
        } else {
            document.getElementById(label).style.textDecoration = 'none'
            document.getElementById(label).style.color = '#222'
            document.getElementById(label).style.fontWeight = '300'
        }
    })

    imgOptions.forEach(img => {
        if (img === imgParam) {
            document.getElementById(img).style.display = '';
        } else {
            document.getElementById(img).style.display = 'none';
        }
    })

    achievementOptions.forEach(achievement => {
        if (achievement === achievementParam)
            document.getElementById(achievement).style.display = '';
        else
            document.getElementById(achievement).style.display = 'none';
    })

}