// // WINheight = $(window).height()
// // WINwidth = $(window).width()

function turn() {
    console.log('NOW')
    $('.graphs').each(function() {
        $(this).addClass("turn")

    });
    setTimeout(function() {
        $('.graphs').each(function() {
            $(this).removeClass("turn")
        })
    }, 15000);

}
turn()

setInterval(turn, 16000);