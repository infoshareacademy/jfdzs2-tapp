function showNotice() {
    if(localStorage.getItem('showCookieNotice') !== 'false') {
        document.querySelector('#cookie-notice').classList.remove('hide');
    }
}

function hideNotice() {
    document.querySelector('#cookie-notice').classList.add('hide');
    localStorage.setItem('showCookieNotice', 'false');
}

showNotice();

document.querySelector( '#cookie-notice-button' ).addEventListener( 'click', hideNotice );