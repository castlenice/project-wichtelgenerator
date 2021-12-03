
import './App.css';

function App() {
  const names_1 = ["Antje", "Thorsten", "Renate", "Rike", "Ole", "Ben", "Sonja"];
  const names_2 = ["Antje", "Thorsten", "Renate", "Rike", "Ole", "Ben", "Sonja"];

  const random_names_1 = names_1[Math.floor(Math.random() * names_1.length)];
  const random_names_2 = names_2[Math.floor(Math.random() * names_2.length)];

  return (
    <div className="App">
      <header className="App-header">
        <h2>{random_names_1 !== random_names_2 ? `${random_names_1} und ${random_names_2}`: "Try again"}</h2>
      </header>
    </div>
  );
}

export default App;
