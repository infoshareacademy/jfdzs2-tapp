window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("to-top-button").style.display = "block";
    } else {
        document.getElementById("to-top-button").style.display = "none";
    }
}

function topFunction() {
    document.documentElement.scrollTop = 0;
}
