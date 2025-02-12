// scripts.js

// Initialize the full calendar for festivals
$(document).ready(function() {
    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        events: [
            {
                title: 'Diwali at Kashi Vishwanath',
                start: '2025-11-12',
                description: 'Grand Diwali celebration with lighting of lamps and special poojas.',
                location: 'Kashi Vishwanath Temple, Varanasi'
            },
            {
                title: 'Navaratri at Somnath Temple',
                start: '2025-09-17',
                description: 'Nine-day festival with Durga Aarti and cultural events.',
                location: 'Somnath Temple, Gujarat'
            }
        ],
        eventClick: function(event) {
            alert('Festival: ' + event.title + '\nLocation: ' + event.location + '\nDate: ' + event.start.format());
        }
    });
});

// Handle notifications opt-in
document.getElementById('notifyCheckbox').addEventListener('change', function() {
    if (this.checked) {
        alert('You will now receive notifications for upcoming festivals!');
    } else {
        alert('You have unsubscribed from festival notifications.');
    }
});
