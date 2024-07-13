document.addEventListener('DOMContentLoaded', function() {
    const membersContainer = document.getElementById('members-container');
    const gridViewButton = document.getElementById('grid-view');
    const listViewButton = document.getElementById('list-view');

    fetch('/data/members.json')
        .then(response => response.json())
        .then(data => {
            displayMembers(data, 'grid');
        })
        .catch(error => console.error('Error fetching member data:', error));

    gridViewButton.addEventListener('click', () => {
        membersContainer.classList.add('grid-view');
        membersContainer.classList.remove('list-view');
        fetch('data/members.json')
            .then(response => response.json())
            .then(data => {
                displayMembers(data, 'grid');
            });
    });

    listViewButton.addEventListener('click', () => {
        membersContainer.classList.add('list-view');
        membersContainer.classList.remove('grid-view');
        fetch('/data/members.json')
            .then(response => response.json())
            .then(data => {
                displayMembers(data, 'list');
            });
    });

    function displayMembers(members, view) {
        membersContainer.innerHTML = '';
        members.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.classList.add('member-card');
            memberCard.innerHTML = `
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <p>Membership Level: ${member.membership_level}</p>
            `;
            membersContainer.appendChild(memberCard);
        });
    }
});

const getSpotlightMembers = () => {
    fetch('/data/members.json')
        .then(response => response.json())
        .then(data => {
            const qualifiedMembers = data.filter(member => member.membership_level === 'Silver' || member.membership_level === 'Gold');
            displaySpotlight(qualifiedMembers);
        })
        .catch(error => console.error('Error fetching spotlight members:', error));
};

const displaySpotlight = (members) => {
    const spotlightContainer = document.getElementById('spotlight');
    spotlightContainer.innerHTML = '';
    const randomMembers = shuffleArray(members).slice(0, 3);
    randomMembers.forEach(member => {
        spotlightContainer.innerHTML += `
            <div class="spotlight-member">
                <h3>${member.name}</h3>
            </div>
        `;
    });
};

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

getSpotlightMembers();