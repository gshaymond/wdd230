const showBanner = () => {
    const today = new Date().getDay();
    const banner = document.getElementById('meet-greet-banner');
    if (today >= 1 && today <= 3) {
        banner.style.display = 'block';
    }
};

window.closeBanner = () => {
    document.getElementById('meet-greet-banner').style.display = 'none';
};

showBanner();
