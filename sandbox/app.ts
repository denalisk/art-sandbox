var eventHandler = function () {
    alert("Loaded");
}

if (document.readyState !== 'loading') {
    eventHandler();
} else {
    document.addEventListener('DOMContentLoaded', eventHandler);
}