// Fonction asynchrone pour effectuer la requête à l'API agify
const fetchName = async (name) => {
    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${name}`);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  };
  
  // Fonction pour créer une nouvelle div avec les résultats
  const createResultDiv = (result) => {
    const div = document.createElement('div');
    div.textContent = result;
    document.getElementById('resultsContainer').appendChild(div);
  };
  
  // Ajout de l'écouteur d'événements sur le bouton
  document.getElementById('fetchButton').addEventListener('click', async () => {
    const input = document.getElementById('nameInput');
    const name = input.value.trim();
  
    if (name !== '') {
      try {
        // Effectuer la requête et obtenir les résultats
        const data = await fetchName(name);
  
        // Créer une nouvelle div avec les résultats et l'ajouter à la page
        createResultDiv(`Résultats pour "${name}": ${JSON.stringify(data)}`);
      } catch (error) {
        console.error('Erreur:', error.message);
        createResultDiv(`Erreur: ${error.message}`);
      }
    } else {
      console.log("Veuillez saisir un nom avant de cliquer sur le bouton.");
    }
  });