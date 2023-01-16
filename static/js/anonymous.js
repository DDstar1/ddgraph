var msgForm = document.getElementById('msgForm');



$(msgForm).on("input", '#textarea', function(event) {
    /*code to check min amount */
    // alert('ascasc')
    if ($("#textarea").val().length < 10) {
        $('#btnForm').attr('disabled', true);
    } else if ($("#textarea").val().length > 10) {
        $('#btnForm').attr('disabled', false);
    }
});



/*code to check whether the err msg has the display class so it can be removed*/
function checkDisplay() {
    if ($('.funErr').hasClass("display")) {
        setInterval(
            function() {
                $('.funErr').fadeOut(3000)
            },
            1000);
    }
}

setInterval(checkDisplay, 1000)