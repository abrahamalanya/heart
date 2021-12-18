const dataHeartCont = [];
const dataHeart = {
    datasets: [
        {
            label: 'Latidos',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: dataHeartCont,
            tension: 0.5
        }
    ]
};
const configHeart = {
    type: 'line',
    data: dataHeart,
    options: {
        animations: false,
        scales: {
            y: {
                type: 'linear',
                min: 0,
                max: 1
            }
        },
        parsing: {
            xAxisKey: 'date',
            yAxisKey: 'number'
        },
    }
};