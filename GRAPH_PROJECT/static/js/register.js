$('body').on("input", 'input[type="password"]', function(event) {

    if ($("#password2").val() != $("#password").val()) {
        $('#pass-err').css("display", "inline-block");
        $('#pass-err').addClass('flicker');
        setTimeout(() => { $('#pass-err').removeClass('flicker') }, 200);
        $('#pass-cr').css("display", "none");
        $('#submit').attr('disabled', 'true');
    } else {
        $('#pass-err').css("display", "none");
        $('#pass-cr').css("display", "inline-block");
        $('#submit').removeAttr('disabled');
    }
});

setInterval(checkUserErr, 100)


function checkUserErr() {
    // console.log($('#user-err').text());
    if ($('#user-err').text() != '') {
        setTimeout(() => {
            $('#user-err').fadeOut();
            $('#user-err').css('display', 'none')
            $('#dis-br').css('display', 'none')
            console.log($('#user-err').text())
        }, 4000)
    }
}