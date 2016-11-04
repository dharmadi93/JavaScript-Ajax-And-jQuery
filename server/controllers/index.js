module.exports = {
    getColors: function (req, res) {
        var color = '';
        var randomColor = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];

        var x = Math.floor((Math.random() * 5));

        color = randomColor[x]

        res.json(color)
    }
}