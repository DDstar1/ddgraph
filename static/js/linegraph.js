table = $("#table")
UserInputs = $("#UserInputs")
UserX = $("#UserX")
UserY = $("#UserY")
AddBtn = $("#AddBtn")
hiddenNum = $("#hidden_numbers")
$('form').hide()


$(AddBtn).on("click", function() {
    $('form').show()
    n = $("#table tr").length;
    tr_to_append = $(`<tr><td>(${n-1})</td><td>${UserX.val()}</td><td>${UserY.val()}</td><td><input value="edit" class="edit" type="button"></td></tr>`)
    tr_to_append.insertBefore(UserInputs);
    writeToHiddenNum()
});



$("table").on("click", "input[value='edit']", function(event) {
    target = $(event.target);
    target.val('save')
    X = target.parent().parent().children(':nth-child(2)')
    Y = target.parent().parent().children(':nth-child(3)')
    X.empty()
    Y.empty()
    X.append(`<input class="correctX inptNum" type="number">`)
    Y.append(`<input class="correctY inptNum" type="number">`)
    $("input[value='edit']").parent().fadeOut()
    AddBtn.parent().fadeOut()
    return false;
});



$("table").on("click", "input[value='save']", function(event) {
    target = $(event.target);
    $('form').show()
    target.val('edit')
    nw_X = target.parent().parent().children(':nth-child(2)').children().val()
    nw_Y = target.parent().parent().children(':nth-child(3)').children().val()
    X.empty().append(nw_X)
    Y.empty().append(nw_Y)
    if (nw_X == '' || nw_Y == '') {
        target.parent().parent().remove();
    }
    countIndex()
    writeToHiddenNum()
    $("input[value='edit']").parent().fadeIn()
    AddBtn.parent().fadeIn()
    return false;
});



function findrows(i) {
    nums = ''
    $(`table tbody tr :nth-child(${i})`).each(function(index, tr) {

        text = $(this).text()
        if ($.isNumeric(text) !== true) {
            return true;
        }
        nums = nums.concat(" ", text);


    });
    return nums
}



function writeToHiddenNum() {
    values = '';
    values = values.concat(`${findrows(2)}`)
    values = values.concat(`,`)
    values = values.concat(`${findrows(3)}`)
    hiddenNum.val(values)
}

function countIndex() {
    $('table tbody tr :nth-child(1):contains(()').each(function(index, tr) {
        index += 1
        $(this).text(`(${index})`)
    });
}