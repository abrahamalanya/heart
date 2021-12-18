// Titulo General
var dateText = new Date().toLocaleDateString();
const titleText = "Mis latidos por ti, hoy " + dateText;
document.getElementById('titleChart').innerHTML = titleText;

// Reloj
function nowTime() {
    const nowDate = new Date();
    var hour = nowDate.getHours();
    var minute = nowDate.getMinutes();
    var second = nowDate.getSeconds();
    var nowTimePrint = hour + ":" + minute + ":" + second;
    document.getElementById('timeChart').innerHTML = nowTimePrint;

    // Agregando datos para el myHeartChart
    var z = nowTimePrint + " Hrs";
    var x = Math.random();
    dataHeartCont.push(
        {
            date: z,
            number: x
        }
    );
    document.getElementById('container-heart').innerHTML = "";
    setTimeout("nowTime()", 1000);
    fnChart();
}
nowTime();