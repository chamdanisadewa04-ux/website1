document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const teamGrid = document.getElementById('teamGrid');

    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    team.forEach(member => {
        const memberCard = createTeamCard(member);
        teamGrid.appendChild(memberCard);
    });
});

function createTeamCard(member) {
    const card = document.createElement('div');
    card.className = 'team-card';
    
    card.innerHTML = `
        <div class="team-photo">
            <img src="${member.photo}" alt="${member.name}" loading="lazy">
        </div>
        <div class="team-info">
            <h3 class="team-name">${member.name}</h3>
            <p class="team-role">${member.role}</p>
            <p class="team-bio">${member.bio}</p>
            ${member.socialLinks && member.socialLinks.instagram ? 
                `<a href="${member.socialLinks.instagram}" target="_blank" rel="noopener" class="team-social">Instagram</a>` 
                : ''}
        </div>
    `;
    
    return card;
}
