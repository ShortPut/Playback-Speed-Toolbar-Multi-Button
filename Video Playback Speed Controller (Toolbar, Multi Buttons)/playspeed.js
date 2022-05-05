document.getElementById('decrease').onclick = function () {
    browser.tabs.executeScript({
        code: "document.querySelector('video').playbackRate -= 0.25;"
    });
};

document.getElementById('increase').onclick = function () {
    browser.tabs.executeScript({
        code: "document.querySelector('video').playbackRate += 0.25;"
    });
};

document.getElementById('reset-speed').onclick = function () {
    browser.tabs.executeScript({
        code: "document.querySelector('video').playbackRate = 1;"
    });
};

document.getElementById('speed225').onclick = function () {
    browser.tabs.executeScript({
        code: "document.querySelector('video').playbackRate = 2.25;"
    });
};

document.getElementById('speed250').onclick = function () {
    browser.tabs.executeScript({
        code: "document.querySelector('video').playbackRate = 2.5;"
    });
};

document.getElementById('speed275').onclick = function () {
    browser.tabs.executeScript({
        code: "document.querySelector('video').playbackRate = 2.75;"
    });
};

document.getElementById('speed300').onclick = function () {
    browser.tabs.executeScript({
        code: "document.querySelector('video').playbackRate = 3;"
    });
};

document.getElementById('speed325').onclick = function () {
    browser.tabs.executeScript({
        code: "document.querySelector('video').playbackRate = 3.25;"
    });
};

document.getElementById('speed350').onclick = function () {
    browser.tabs.executeScript({
        code: "document.querySelector('video').playbackRate = 3.5;"
    });
};

document.getElementById('speed375').onclick = function () {
    browser.tabs.executeScript({
        code: "document.querySelector('video').playbackRate = 3.75;"
    });
};

document.getElementById('speed400').onclick = function () {
    browser.tabs.executeScript({
        code: "document.querySelector('video').playbackRate = 4;"
    });
};