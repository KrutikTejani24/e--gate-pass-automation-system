
document.addEventListener('DOMContentLoaded', function() {
   
    var ctxAccess = document.getElementById('accessTrendsChart').getContext('2d');
    var accessChart = new Chart(ctxAccess, {
        type: 'line',
        data: {
            labels: ['6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00'],
            datasets: [
                {
                    label: 'Entry',
                    data: [5, 15, 78, 45, 18, 10, 25],
                    borderColor: '#3b82f6',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    tension: 0.4,
                    fill: true
                },
                {
                    label: 'Exit',
                    data: [2, 8, 12, 22, 10, 15, 35],
                    borderColor: '#ef4444',
                    backgroundColor: 'rgba(239, 68, 68, 0.1)',
                    tension: 0.4,
                    fill: true
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Number of People'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Time'
                    }
                }
            }
        }
    });


    const alertButtons = document.querySelectorAll('.pulse-alert');
    alertButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('You clicked on an active security alert!');
        });
    });

    const sidebarItems = document.querySelectorAll('.sidebar-item');
    sidebarItems.forEach(item => {
        item.addEventListener('click', function() {
            sidebarItems.forEach(el => el.classList.remove('active-nav-item'));
            this.classList.add('active-nav-item');
        });
    });

    const securityCameras = document.querySelectorAll('.security-camera');
    securityCameras.forEach(camera => {
        camera.addEventListener('click', function() {
            
            const cameraLabel = this.querySelector('.text-white').innerText;
            alert('Viewing camera: ' + cameraLabel);
        });
    });
});
