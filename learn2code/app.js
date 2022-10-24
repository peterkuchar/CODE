function addMessage(elementId, message) {
    var browserList = document.getElementById(elementId),
        newItem = document.createElement('li');

    newItem.textContent = message;
    browserList.appendChild(newItem);
}

addMessage('browser', 'page loaded');    


document.body.addEventListener('click', function() {
    addMessage('user', 'page clicked');
});

document.body.addEventListener('keydown', function keyboardedIt(event) {

    var oldLeft = getComputedStyle(document.body).left,
    newLeft;

    var oldTop = getComputedStyle(document.body).top,
    newTop;

    oldTop = parseInt(oldTop, 10);

    oldLeft = parseInt(oldLeft, 10);
    
    if (event.key == 'ArrowLeft') {
        newLeft = oldLeft - 10;
    }

    else if (event.key == 'ArrowRight') {
        newLeft = oldLeft + 10;
    }

    else if (event.key == 'ArrowUp') {
        newTop = oldTop - 10;
    }
    else if (event.key == 'ArrowDown') {
        newTop = oldTop + 10;
    }

    document.body.style.left = newLeft + 'px';

    document.body.style.top = newTop + 'px';

});

window.addEventListener('beforeunload', function(event) {
    addMessage('browser', "Please don't leave me")

    event.returnValue = "Please don't leave";
    return "Please don't leave";
});