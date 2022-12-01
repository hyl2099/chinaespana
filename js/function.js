$(function() {
    var requestApi = "http://locahost:8080";

    function LoadFunction() {
        $("#d1").html('Loading...');
    }
    function erryFunction() {
        alert("error...");
    }

    function etWeekDay(){
        var str = "";
        var week = new Date().getDay();
        if (week == 0) {
            str = "星期日";
        } else if (week == 1) {
            str = "星期一";
        } else if (week == 2) {
            str = "星期二";
        } else if (week == 3) {
            str = "星期三";
        } else if (week == 4) {
            str = "星期四";
        } else if (week == 5) {
            str = "星期五";
        } else if (week == 6) {
            str = "星期六";
        }str
    }

    var weekday =document.createElement("span");
    div1.className = 'text';
    document.getElementById("weekday").append(str);


});
