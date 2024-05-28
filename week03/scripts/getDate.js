function getCurrentYear() {
    return new Date().getFullYear();
}

function getLastModifiedDate() {
    return document.lastModified;
}

function updateFooter() {
    var currentYear = getCurrentYear();
    document.querySelector('footer p span').textContent = currentYear;

    var lastModifiedDate = getLastModifiedDate();
    document.getElementById('lastModified').textContent = 'Last modified: ' + lastModifiedDate;
}

window.onload = updateFooter;