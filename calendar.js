document.addEventListener('DOMContentLoaded', function() {
    let calendarEl = document.getElementById('calendar');
  
    let calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      events: [
        {
          title: 'Work on project',
          start: '2024-09-15',
          end: '2024-09-17'
        },
      ]
    });
  
    calendar.render();
  });
  