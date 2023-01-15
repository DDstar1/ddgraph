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
    }, 30000);

}
turn()

setInterval(turn, 31000);