$(document).ready(function () {
    $("#card1").on('click', function () {
        $("#card1").css({ "background": "#EDFDF9", "border": "1px solid #0EC098", "color": "#0EC098"});
        $("#card2").css({ "background": "", "border": "", "color": "" });
        $("#card3").css({ "background": "", "border": "", "color": "" });
        $("#card1 img").css({ content: 'url("../image/scale-1.svg")' });
        $("#card2 img").css({ content: 'url("../image/hot.svg")' });
        $("#card3 img").css({ content: 'url("../image/beaker\ -1.svg")' });
        $("#convert1").show(1000, () => {
            const optionValue = ["Meter", "Kilometre", "Centimeters", "Milemetre", "Micrometre", "Mile", "Foot", "Inch"]
            optionEnterSelectOne(optionValue);
        });
        $("#convert2").show(function () {
            const optionValue = ["Meter", "Kilometre", "Centimeters", "Milemetre", "Micrometre", "Mile", "Foot", "Inch"]
            optionEnterSelectTwo(optionValue);
        });
    });
    $("#card2").on('click', function () {
        $("#card2").css({ "background": "#FFEEF0", "border": "1px solid #FD5160", "color": "#FD5160"});
        $("#card1").css({ "background": "", "border": "", "color": "" });
        $("#card3").css({ "background": "", "border": "", "color": ""});
        $("#card2 img").css({ content: 'url("../image/hot\ -1.svg")' });
        $("#card1 img").css({ content: 'url("../image/scale.svg")' });
        $("#card3 img").css({ content: 'url("../image/beaker\ -1.svg")' });
        $("#convert1").show(1000, function () {
            const optionValue = ["Celsius", "Farenhite", "Kalvin"];
            optionEnterSelectOne(optionValue);
        });
        $("#convert2").show(1000, function () {
            const optionValue = ["Celsius", "Farenhite", "Kalvin"];
            optionEnterSelectTwo(optionValue);
        });
    });
    $("#card3").on('click', function () {
        $("#card3").css({ "background": "#E8DDFF", "border": "1px solid #7224FF", "color": "#7224FF"});
        $("#card1").css({ "background": "", "border": "", "color": ""});
        $("#card2").css({ "background": "", "border": "", "color": "" });
        $("#card3 img").css({ content: 'url("../image/beaker.svg")' });
        $("#card1 img").css({ content: 'url("../image/scale.svg")' });
        $("#card2 img").css({ content: 'url("../image/hot.svg")' });
        $("#convert1").show(1000, function () {
            const optionValue = ["Litres", "Mililitres", "Gallons"];
            optionEnterSelectOne(optionValue);
        });
        $("#convert2").show(1000, function () {
            const optionValue = ["Litres", "Mililitres", "Gallons"];
            optionEnterSelectTwo(optionValue);
        });
    });
});

optionEnterSelectOne = (optionValue) => {
    $('#convert1').empty();
    $.each(optionValue, function (index, value) {
        var addOption = `<option>${value}</option>`;
        $('#convert1').append(addOption);
    });
}
optionEnterSelectTwo = (optionValue) => {
    $('#convert2').empty();
    $.each(optionValue, function (index, value) {
        var addOption = `<option>${value}</option>`;
        $('#convert2').append(addOption);
    });
}
