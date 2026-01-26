// Points system
let totalPoints = 20;
const maxPoints = 20;

// Point values for each tile
const pointValues = {
    'Le Contexte Lumeto': 1,
    'Collaboration': 5,
    'Communication': 10,
    'Travail à Distance': 3,
    'Diversité et Culture': 5,
    'Équipe': 8,
    'Solitude': 4,
    'Facteur Externe': 10
};

// Get modal elements
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const pointsCount = document.getElementById('pointsCount');

// Descriptions for each tile
const descriptions = {
    'Le Contexte Lumeto': '',
    'Collaboration': 'Selon St-Arnaud, un groupe ne peut croître que s\'il convertit l\'énergie individuelle en énergie groupale par l\'interaction avec une cible commune. En remote, les outils ne sont que des médiateurs. Chevrier souligne que sans "coprésence", le sentiment d\'appartenance est dilué par l\'éloignement.',
    'Communication': 'Chevrier note que l\'usage de l\'anglais comme lingua franca favorise les anglophones et peut marginaliser ceux qui maîtrisent moins la langue, créant un sentiment d\'exclusion. Cela augmente l\'énergie résiduelle (pensées de frustration non productives) au détriment de l\'énergie de production.',
    'Travail à Distance': 'Ces obstacles techniques sont des "éclairs" dans le modèle de St-Arnaud (Figure 2.1) qui entravent la progression. Ils nécessitent une énergie d\'entretien constante pour prévenir et lever les obstacles afin de ne pas paralyser la production.',
    'Diversité et Culture': 'Chevrier explique que la perception de l\'engagement contractuel varie selon les cultures (interprétation littérale vs souple)',
    'Équipe': 'Pour St-Arnaud, plus les ressources de chacun sont mises à profit pour la cible commune, plus le système dispose d\'énergie pour fonctionner.',
    'Solitude': 'Le Playbook recommande des activités de "Team Building" et des moments informels (virtuels ou physiques) pour recréer la "proximité psychologique" qui compense la distance géographique.',
    'Facteur Externe': 'Ces éléments définissent la cible commune. St-Arnaud affirme que pour mobiliser l\'énergie, la cible doit être une source de motivation importante.'
};

// Get all tiles
const tiles = document.querySelectorAll('.tile');

// Add click event listeners to tiles
tiles.forEach(tile => {
    tile.addEventListener('click', function() {
        // Check if tile is already clicked (disabled)
        if (this.classList.contains('clicked')) {
            alert('Vous avez déjà cliqué sur cette tuile!');
            return;
        }
        
        const imageSrc = this.getAttribute('data-image');
        const title = this.getAttribute('data-title');
        const cost = pointValues[title] || 0;
        
        // Check if user has enough points
        if (totalPoints >= cost) {
            // Mark tile as clicked/disabled
            this.classList.add('clicked');
            
            // Deduct points with animation
            totalPoints -= cost;

            // Add bounce animation
            pointsCount.style.transform = 'scale(1.3)';
            setTimeout(() => {
                pointsCount.textContent = totalPoints;
                pointsCount.style.transform = 'scale(1)';
            }, 150);

            // Update points display gradient based on remaining points
            if (totalPoints === 0) {
                pointsCount.style.background = 'linear-gradient(135deg, #95a5a6 0%, #7f8c8d 100%)';
                pointsCount.style.webkitBackgroundClip = 'text';
                pointsCount.style.backgroundClip = 'text';
            } else if (totalPoints <= 5) {
                pointsCount.style.background = 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)';
                pointsCount.style.webkitBackgroundClip = 'text';
                pointsCount.style.backgroundClip = 'text';
            } else if (totalPoints <= 10) {
                pointsCount.style.background = 'linear-gradient(135deg, #f39c12 0%, #e67e22 100%)';
                pointsCount.style.webkitBackgroundClip = 'text';
                pointsCount.style.backgroundClip = 'text';
            } else {
                pointsCount.style.background = 'linear-gradient(135deg, #27ae60 0%, #229954 100%)';
                pointsCount.style.webkitBackgroundClip = 'text';
                pointsCount.style.backgroundClip = 'text';
            }
            
            // Set modal content
            modalImage.src = imageSrc;
            modalTitle.textContent = title;
            modalDescription.textContent = descriptions[title] || '';
            
            // Show modal with animation
            modal.classList.add('show');
        } else {
            // Not enough points
            alert(`Pas assez de points! Cette tuile coûte ${cost} points, mais vous n'en avez que ${totalPoints}.`);
        }
    });
});

// Close modal when clicking outside the content
modal.addEventListener('click', function(event) {
    if (event.target === modal) {
        closeModal();
    }
});

// Close modal function
function closeModal() {
    modal.classList.remove('show');
}

// Optional: Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

console.log('✨ Tuiles interactives chargées! Cliquez sur une tuile pour voir l\'image.');
