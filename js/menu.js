
$('body').scrollspy({ target: '#bs-tapp-navbar-collapse-1' });
$('[data-spy="scroll"]').each(function () {
    var $spy = $(this).scrollspy('refresh')
});

