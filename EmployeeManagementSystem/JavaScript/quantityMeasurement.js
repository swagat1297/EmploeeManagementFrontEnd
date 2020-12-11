
$(document).ready(function () {
    $("#card1").on('click', function () {
        $("#card1").css( {"background":"#EDFDF9", "border":"1px solid #0EC098"});
        $("#card2").css( {"background":"", "border":""});
        $("#card3").css( {"background":"", "border":""});
        $("#card1 img").css( {content: 'url("../image/scale-1.svg")'});
        $("#card2 img").css( {content: 'url("../image/hot.svg")'});
        $("#card3 img").css( {content: 'url("../image/beaker\ -1.svg")'});
        $("#convert1").show(function () {
            (document.getElementById("field1").innerHTML = "Meter");
            (document.getElementById("field2").innerHTML = "Kilometre");
            (document.getElementById("field3").innerHTML = "Centimeters");
            (document.getElementById("field4").innerHTML = "Milemetre");
            (document.getElementById("field5").innerHTML = "Micrometre");
            (document.getElementById("field6").innerHTML = "Mile");
            (document.getElementById("field7").innerHTML = "Foot");
            (document.getElementById("field8").innerHTML = "Inch");
        });
        $("#convert2").show(1000, function () {
            (document.getElementById("field9").innerHTML = "Meter");
            (document.getElementById("field10").innerHTML = "Kilometre");
            (document.getElementById("field11").innerHTML = "Centimeters");
            (document.getElementById("field12").innerHTML = "Milemetre");
            (document.getElementById("field13").innerHTML = "Micrometre");
            (document.getElementById("field14").innerHTML = "Mile");
            (document.getElementById("field15").innerHTML = "Foot");
            (document.getElementById("field16").innerHTML = "Inch");
        });
    });
    $("#card2").on('click', function () {
        $("#card2").css( {"background":"#FFEEF0", "border":"1px solid #FD5160"});
        $("#card1").css( {"background":"", "border":""});
        $("#card3").css( {"background":"", "border":""});
        $("#card2 img").css( {content: 'url("../image/hot\ -1.svg")'});
        $("#card1 img").css( {content: 'url("../image/scale.svg")'});
        $("#card3 img").css( {content: 'url("../image/beaker\ -1.svg")'});
        $("#convert1").show(1000, function () {
            
            (document.getElementById("field1").innerHTML = "Celsius");
            (document.getElementById("field2").innerHTML = "Farenhite");
            (document.getElementById("field3").innerHTML = "Kalvin");
            (document.getElementById("field4").innerHTML = " ");
            (document.getElementById("field5").innerHTML = " ");
            (document.getElementById("field6").innerHTML = " ");
            (document.getElementById("field7").innerHTML = " ");
            (document.getElementById("field8").innerHTML = " ");
        });
        $("#convert2").show(1000, function () {
            (document.getElementById("field9").innerHTML = "Celsius");
            (document.getElementById("field10").innerHTML = "Farenhite");
            (document.getElementById("field11").innerHTML = "Kalvin");
            (document.getElementById("field12").innerHTML = " ");
            (document.getElementById("field13").innerHTML = " ");
            (document.getElementById("field14").innerHTML = " ");
            (document.getElementById("field15").innerHTML = " ");
            (document.getElementById("field16").innerHTML = " ");
        });
    });
    $("#card3").on('click', function () {
        $("#card3").css( {"background":"#E8DDFF", "border":"1px solid #7224FF"});
        $("#card1").css( {"background":"", "border":""});
        $("#card2").css( {"background":"", "border":""});
        $("#card3 img").css( {content: 'url("../image/beaker.svg")'});
        $("#card1 img").css( {content: 'url("../image/scale.svg")'});
        $("#card2 img").css( {content: 'url("../image/hot.svg")'});
        $("#convert1").show(1000, function () {
            (document.getElementById("field1").innerHTML = "Litres");
            (document.getElementById("field2").innerHTML = "Mililitres");
            (document.getElementById("field3").innerHTML = "Gallons");
            (document.getElementById("field4").innerHTML = null);
            (document.getElementById("field5").innerHTML = null);
            (document.getElementById("field6").innerHTML = null);
            (document.getElementById("field7").innerHTML = null);
            (document.getElementById("field8").innerHTML = null);
        });
        $("#convert2").show(1000, function () {
            (document.getElementById("field9").innerHTML = "Litres");
            (document.getElementById("field10").innerHTML = "Mililitres");
            (document.getElementById("field11").innerHTML = "Gallons");
            (document.getElementById("field12").innerHTML = null);
            (document.getElementById("field13").innerHTML = null);
            (document.getElementById("field14").innerHTML = null);
            (document.getElementById("field15").innerHTML = null);
            (document.getElementById("field16").innerHTML = null);
        });
    });

});