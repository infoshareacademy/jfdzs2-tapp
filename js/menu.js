
$('body').scrollspy({ target: '#bs-example-navbar-collapse-1' });
$('[data-spy="scroll"]').each(function () {
    var $spy = $(this).scrollspy('refresh')
});

