// Liste de couleurs pour jour et nuit
const dayColors = ['#FAD02E', '#F28D35', '#D83367', '#602F6D', '#0D3B66'];
const nightColors = ['#1D1D1D', '#2C3E50', '#34495E', '#5D6D7E', '#1ABC9C'];

// Fonction pour générer une palette aléatoire avec plus de couleurs
function generateRandomColors(numColors = 20) {
    const colors = [];
    for (let i = 0; i < numColors; i++) {
        colors.push(randomColor());
    }
    return colors;
}

// Fonction pour générer une couleur aléatoire
function randomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Fonction pour changer la palette selon l'icône sélectionnée
function changePalette(theme) {
    const colorPalette = document.getElementById('colorPalette');
    colorPalette.innerHTML = ''; // Vider la palette actuelle

    let colors;

    // Choisir les couleurs en fonction du thème
    if (theme === 'day') {
        colors = dayColors;
        document.body.style.backgroundColor = '#FAD02E'; // Couleur de fond jour
    } else if (theme === 'night') {
        colors = nightColors;
        document.body.style.backgroundColor = '#1D1D1D'; // Couleur de fond nuit
    }

    // Ajouter les couleurs à la palette
    colors.forEach(color => {
        const colorDiv = document.createElement('div');
        colorDiv.classList.add('color');
        colorDiv.style.backgroundColor = color;
        colorDiv.innerText = color; // Afficher le code hexadécimal sur la couleur
        colorDiv.setAttribute('data-clipboard-text', color); // Pour pouvoir copier le code de couleur
        colorDiv.addEventListener('click', function() {
            copyColorToClipboard(colorDiv); // Copier la couleur lorsqu'on clique dessus
        });
        colorPalette.appendChild(colorDiv);
    });
}

// Fonction pour copier le code de couleur dans le presse-papier
function copyColorToClipboard(colorDiv) {
    const color = colorDiv.getAttribute('data-clipboard-text');
    navigator.clipboard.writeText(color).then(() => {
        alert(`Code de couleur ${color} copié dans le presse-papier`);
    }).catch(err => {
        console.error('Erreur lors de la copie dans le presse-papier:', err);
    });
}

// Fonction appelée par le bouton pour générer des couleurs aléatoires
function generateRandomPalette() {
    const colorPalette = document.getElementById('colorPalette');
    colorPalette.innerHTML = ''; // Vider la palette actuelle

    // Générer des couleurs aléatoires
    const randomColors = generateRandomColors();

    // Ajouter les couleurs à la palette
    randomColors.forEach(color => {
        const colorDiv = document.createElement('div');
        colorDiv.classList.add('color');
        colorDiv.style.backgroundColor = color;
        colorDiv.innerText = color; // Afficher le code hexadécimal sur la couleur
        colorDiv.setAttribute('data-clipboard-text', color); // Pour pouvoir copier le code de couleur
        colorDiv.addEventListener('click', function() {
            copyColorToClipboard(colorDiv); // Copier la couleur lorsqu'on clique dessus
        });
        colorPalette.appendChild(colorDiv);
    });
}

// Initialiser la palette avec des couleurs par défaut (jour)
document.addEventListener('DOMContentLoaded', () => {
    changePalette('day');  // Par défaut, utiliser le thème du jour
});
