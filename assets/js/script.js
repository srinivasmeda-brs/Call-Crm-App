
// Area Chart
var ctxArea = document.getElementById('areaChart').getContext('2d');
var areaChart = new Chart(ctxArea, {
    type: 'line', // Area chart is similar to a line chart with fill
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Sales',
            data: [30, 50, 40, 60, 70, 90],
            backgroundColor: 'rgba(75, 192, 192, 0.2)', // Area fill color
            borderColor: 'rgba(75, 192, 192, 1)', // Line color
            borderWidth: 2,
            fill: true // Enable fill for the area chart
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Column Chart
var ctxColumn = document.getElementById('columnChart').getContext('2d');
var columnChart = new Chart(ctxColumn, {
    type: 'bar', // Column chart is of type 'bar'
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Revenue',
            data: [50, 40, 60, 70, 80, 100],
            backgroundColor: 'rgba(153, 102, 255, 0.6)', // Column fill color
            borderColor: 'rgba(153, 102, 255, 1)', // Column border color
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

