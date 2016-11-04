function getColor() {
    $.ajax({
        url: `http://localhost:3000/api/colors`,
        method: "get",
        contentType: 'application/x-www-form-urlencoded',
        success: function (data) {
            console.log(data)
        }
    })
}