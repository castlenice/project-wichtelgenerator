
import './App.css';
import { useState } from 'react';

let liste_beschenkerin = ["Antje", "Thorsten", "Renate", "Rike", "Leif", "Ole", "Ben", "Sonja"];
let liste_empfaenger = ["Antje", "Thorsten", "Renate", "Rike", "Leif", "Ole", "Ben", "Sonja"];

function App() {
  
  const [names, setNames] = useState(["Mensch", "Mensch"]) 
   
  function randomName() {
    if (liste_beschenkerin.length === 0 && liste_empfaenger.length === 0) {
      return
    }

    const random_names_1 = liste_beschenkerin[Math.floor(Math.random() * liste_beschenkerin.length)];
    let random_names_2 = liste_empfaenger[Math.floor(Math.random() * liste_empfaenger.length)];

    while (random_names_2 === random_names_1) {
        random_names_2 = liste_empfaenger[Math.floor(Math.random() * liste_empfaenger.length)]
    }

    liste_beschenkerin = liste_beschenkerin.filter(e => e !== random_names_1)
    liste_empfaenger = liste_empfaenger.filter(e => e !== random_names_2)
    setNames([random_names_1, random_names_2])
  }
 
  //arr = arr.filter(e => e !== 'B'); // will return ['A', 'C']
   

  return (
    <div className="App">
      <header className="App-header">
        <h2 className="Names">{`${names[0]} beschenkt ${names[1]}`}</h2>
        <button onClick={randomName}>Click to see names</button>
      </header>
    </div>
  );
}

export default App;
