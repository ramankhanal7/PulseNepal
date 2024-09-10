document.addEventListener("DOMContentLoaded", () => {
    const numDateElement = document.querySelector(".big-number");
    const dayElement = document.querySelector(".day");
    const eventElement = document.querySelector(".events p");

    const timelinePoints = document.querySelectorAll('.timeline-point');
    const currentDate = new Date();

    const events = {
        "2025-01-04": "First Day of Event! Welcoming everyone, explaining the hackathon, uncovering the problem statement, final questions, and officially starting creation.",
        "2025-01-05": "Independent Team Work. Work with your own teams and reach us with any questions as we will be on standby for assistance.",
        "2025-01-06": "Independent Team Work. Work with your own teams and reach us with any questions as we will be on standby for assistance.",
        "2025-01-07": "Independent Team Work. Work with your own teams and reach us with any questions as we will be on standby for assistance.",
        "2025-01-08": "Independent Team Work. Work with your own teams and reach us with any questions as we will be on standby for assistance.",
        "2025-01-09": "Independent Team Work. Work with your own teams and reach us with any questions as we will be on standby for assistance.",
        "2025-01-10": "Independent Team Work. Work with your own teams and reach us with any questions as we will be on standby for assistance.",
        "2025-01-11": "Mid-Way Check-in Event. We will be meeting to see how much progress each team has made, address any blockers, meet and greet with a guest, and bounce ideas.",
        "2025-01-12": "Independent Team Work. Work with your own teams and reach us with any questions as we will be on standby for assistance.",
        "2025-01-13": "Independent Team Work. Work with your own teams and reach us with any questions as we will be on standby for assistance.",
        "2025-01-14": "Independent Team Work. Work with your own teams and reach us with any questions as we will be on standby for assistance.",
        "2025-01-15": "Independent Team Work. Work with your own teams and reach us with any questions as we will be on standby for assistance.",
        "2025-01-16": "Independent Team Work. Work with your own teams and reach us with any questions as we will be on standby for assistance.",
        "2025-01-17": "Final Day! Projects must be submitted by 11:59 PM local time.",
        "2025-01-18": "Presentation Day! We will start with presenations in the morning, everyone will be taken from lunch while judges score projects, then we will announce winners, distribute prizes, make final remarks, and wrap-up.",
    };

    timelinePoints.forEach(point => {
        const eventDate = new Date(point.getAttribute('data-date'));
        if (currentDate >= eventDate) {
            point.classList.add('current-point');
        }
    });


    document.querySelectorAll(".dates span").forEach(day => {
        day.addEventListener("click", () => {
            const dayNumber = day.textContent.trim();
            const selectedDate = `2025-01-${dayNumber.padStart(2, '0')}`;

            numDateElement.textContent = dayNumber;
            if (events[selectedDate]) {
                dayElement.textContent = `Planned Events`;
                eventElement.innerHTML = `${events[selectedDate]}`;
            } else {
                dayElement.textContent = `No Events Planned`;
                eventElement.innerHTML = "Click another date to see planned events.";
            }
        });
    });
});
