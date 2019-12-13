const goToAboutButton = document.getElementById('about');

goToAboutButton.onclick = function () {
    location.assign(`${location.origin}/pages/about.html`)
};
