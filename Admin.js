
const ctxCategory = document.getElementById('categoryChart').getContext('2d');
const categoryChart = new Chart(ctxCategory, {
    type: 'doughnut',
    data: {
        labels: ['Staff', 'Vendors', 'Visitors', 'Admin'],
        datasets: [{
            data: [65, 15, 12, 8],
            backgroundColor: [
                '#3B82F6',
                '#10B981',
                '#F59E0B',
                '#EF4444'
            ],
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            }
        }
    }
});

const ctxAccess = document.getElementById('accessChart').getContext('2d');
const accessChart = new Chart(ctxAccess, {
    type: 'bar',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Entries',
            data: [150, 132, 180, 145, 138, 59, 42],
            backgroundColor: '#3B82F6',
            borderRadius: 4
        }, {
            label: 'Exits',
            data: [145, 128, 175, 140, 132, 56, 38],
            backgroundColor: '#10B981',
            borderRadius: 4
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
