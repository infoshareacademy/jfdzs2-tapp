window.onscroll = function onScroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("to-top-button").style.display = "block";
    } else {
        document.getElementById("to-top-button").style.display = "none";
    }
};

function scrollToTop() {
    $( 'html, body' ).animate( { scrollTop : 0 }, 800 );
    return false;
}

