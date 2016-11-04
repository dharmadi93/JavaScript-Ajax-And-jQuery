function getColor() {
    $.ajax({
        url: `http://localhost:3000/api/colors`,
        method: "get",
        contentType: 'application/x-www-form-urlencoded',
        success: function (data) {
            console.log(data)
            selectCol(data)
        }
    })
}

function selectCol(data) {
    var x = Math.floor((Math.random() * 9) + 1);
    if($("div").find(`#col${x}`).hasClass("red")) {
        $("div").find(`#col${x}`).removeClass("red")
    }
    else if($("div").find(`#col${x}`).hasClass("green")) {
        $("div").find(`#col${x}`).removeClass("green")
    }
    else if($("div").find(`#col${x}`).hasClass("blue")) {
        $("div").find(`#col${x}`).removeClass("blue")
    }
    else if($("div").find(`#col${x}`).hasClass("yellow")) {
        $("div").find(`#col${x}`).removeClass("yellow")
    }
    else if($("div").find(`#col${x}`).hasClass("pink")) {
        $("div").find(`#col${x}`).removeClass("pink")
    }
    else if($("div").find(`#col${x}`).hasClass("orange")) {
        $("div").find(`#col${x}`).removeClass("orange")
    }

    $("div").find(`#col${x}`).addClass(data)
}