document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector('.form');
    const eventCards = document.querySelector('.cards');
    const clearBtn = document.querySelector('.clearAll');
    const sampleBtn = document.querySelector('.sample');

    const titleInput = document.getElementById("eventTitle");
    const dateInput = document.getElementById("eventDate");
    const categoryInput = document.getElementById("category");
    const descriptionInput = document.getElementById("description");

    function createCard(title, date, category, description) {

        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <h3>${title}</h3>
            <p>${date}</p>
            <button>${category}</button>
            <p>${description}</p>
            <div class="dlt">x</div>
        `;

        eventCards.appendChild(card);

        card.querySelector('.dlt').addEventListener('click', function () {
            card.remove();
        });
    }

    // Add Event
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const title = titleInput.value.trim();
        const date = dateInput.value;
        const category = categoryInput.value;
        const description = descriptionInput.value.trim();

        if (!title || !date) {
            alert("Please fill required fields");
            return;
        }

        createCard(title, date, category, description);
        form.reset();
    });

    // Clear All
    clearBtn.addEventListener('click', function () {
        eventCards.innerHTML = "";
    });

    // Add Sample Events
    sampleBtn.addEventListener('click', function () {

        const samples = [
            {
                title: "AI Conference",
                date: "2026-06-10",
                category: "Conference",
                description: "Conference about Artificial Intelligence."
            },
            {
                title: "Frontend Workshop",
                date: "2026-07-15",
                category: "Workshop",
                description: "Hands-on HTML CSS JS training."
            },
            {
                title: "Startup Meetup",
                date: "2026-08-20",
                category: "Meetup",
                description: "Networking for developers."
            }
        ];

        samples.forEach(event => {
            createCard(event.title, event.date, event.category, event.description);
        });

    });

});
