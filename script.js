document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector('.form');
    const eventCards = document.querySelector('.cards');
    const clearBtn = document.querySelector('.clearAll');
    const sampleBtn = document.querySelector('.sample');

    const titleInput = document.getElementById("eventTitle");
    const dateInput = document.getElementById("eventDate");
    const categoryInput = document.getElementById("category");
    const descriptionInput = document.getElementById("description");

    const keyText = document.querySelector('.keyText');
    const codeText = document.querySelector('.codeText');

    function createCard(title, date, category, description) {

        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <h3>${title}</h3>
            <p>Date: ${date}</p>
            <button>${category}</button>
            <p>${description}</p>
            <div class="dlt">X</div>
        `;

        eventCards.appendChild(card);

        card.querySelector('.dlt').addEventListener('click', function () {
            card.remove();
        });
    }

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

    clearBtn.addEventListener('click', function () {
        eventCards.innerHTML = "";
    });

    sampleBtn.addEventListener('click', function () {

        const sampleEvents = [
            {
                title: "HACKKRMU",
                date: "2026-02-18",
                category: "HACKATHON",
                description: "Built using HTML, CSS, JS."
            },
            {
                title: "HELLO WORLD",
                date: "2026-02-19",
                category: "Meetup",
                description: "Smart dashboard 2026"
            }
        ];

        sampleEvents.forEach(event => {
            createCard(event.title, event.date, event.category, event.description);
        });

    });

    document.addEventListener('keydown', function (e) {
        keyText.textContent = e.key;
        
    });

});
