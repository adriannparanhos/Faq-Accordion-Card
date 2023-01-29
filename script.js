function esconde(el) {
    document.getElementsByClassName(el).style.display = 'none';
}

function mostra(el) {
    document.getElementsByClassName(el).style.display = 'block';
}

function toggle(el) {
    var display = document.getElementsByClassName(el).style.display;
    if (display == 'none') {
        document.getElementsByClassName(el).style.display = 'block';
    } else {
        document.getElementsByClassName(el).style.display = 'none';
    }
}