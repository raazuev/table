export function renderChart(metric, data) {
    
    Highcharts.chart('chart', {
        chart: {
            type: 'line',
            animation: {
                duration: 1000,
                easing: 'easeOutBounce'
            }
        },
        title: {
            text: `Данные по ${metric}`
        },
        xAxis: {
            categories: ['Текущий день', 'Вчера', 'Этот день недели']
        },
        yAxis: {
            title: {
                text: 'Значение'
            }
        },
        series: [{
            name: metric,
            data: [data.currentDay, data.yesterday, data.weekday]
        }]
    });
    
}
