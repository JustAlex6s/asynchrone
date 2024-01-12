
let btn = document.querySelector('button');

function myFunction() {
    
    fetch("test.json")// Étape 2: Effectue la requête
        .then(response => {
            console.log("Treating the response"); // Étape 3: Traite la réponse
            return response.json();
        })
        .then(data => {
            let element = document.getElementById('liste');

            data.members.forEach(member => {
                let li = document.createElement('li');
                li.textContent = `Name: ${member.name}`;
                element.appendChild(li);
            });
        
        })
    
    }

btn.addEventListener('click', myFunction);


