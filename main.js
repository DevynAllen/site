//Load on student page
document.getElementById("photographer").style.display = 'none';
document.getElementById("developer").style.display = 'none';
document.getElementById("studentLabel").style.textDecoration = 'underline'
document.getElementById("studentLabel").style.color = 'rgb(220, 220, 220)'

function showContent(content) {
    if (content == 'student') {
        document.getElementById("student").style.display = '';
        document.getElementById("photographer").style.display = 'none';
        document.getElementById("developer").style.display = 'none';

        document.getElementById("studentLabel").style.textDecoration = 'underline'
        document.getElementById("studentLabel").style.color = 'rgb(220, 220, 220)'
        document.getElementById("photographerLabel").style.textDecoration = 'none'
        document.getElementById("photographerLabel").style.color = '#222'
        document.getElementById("developerLabel").style.textDecoration = 'none'
        document.getElementById("developerLabel").style.color = '#222'
    }
    if (content == 'photographer') {
        document.getElementById("student").style.display = 'none';
        document.getElementById("photographer").style.display = '';
        document.getElementById("developer").style.display = 'none';

        document.getElementById("photographerLabel").style.textDecoration = 'underline'
        document.getElementById("photographerLabel").style.color = 'rgb(220, 220, 220)'
        document.getElementById("studentLabel").style.textDecoration = 'none'
        document.getElementById("studentLabel").style.color = '#222'
        document.getElementById("developerLabel").style.textDecoration = 'none'
        document.getElementById("developerLabel").style.color = '#222'

    }
    if (content == 'developer') {
        document.getElementById("student").style.display = 'none';
        document.getElementById("photographer").style.display = 'none';
        document.getElementById("developer").style.display = '';

        document.getElementById("developerLabel").style.textDecoration = 'underline'
        document.getElementById("developerLabel").style.color = 'rgb(220, 220, 220)'
        document.getElementById("studentLabel").style.textDecoration = 'none'
        document.getElementById("studentLabel").style.color = '#222'
        document.getElementById("photographerLabel").style.textDecoration = 'none'
        document.getElementById("photographerLabel").style.color = '#222'
    }
}