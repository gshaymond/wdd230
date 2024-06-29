document.addEventListener('DOMContentLoaded', function() {
    const membersContainer = document.getElementById('members-container');
    const gridViewButton = document.getElementById('grid-view');
    const listViewButton = document.getElementById('list-view');

    fetch('data/members.json')
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
        fetch('data/members.json')
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
                <img src="images/${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">${member.website}</a>
                <p>Membership Level: ${member.membership_level}</p>
                <p>${member.description}</p>
            `;
            membersContainer.appendChild(memberCard);
        });
    }
});