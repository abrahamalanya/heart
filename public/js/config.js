var html = '<canvas id="myHeartChart" width="100" height="100" aria-label="Grafico de mi corazón"></canvas>'
function fnChart() {
    document.getElementById('container-heart').innerHTML = html;
    const myHeartChart = new Chart(
        document.getElementById('myHeartChart'),
        configHeart
    );
}