import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <p>Entorno inicializado correctamente.</p>
      </main>
    </div>
  );
}

export default App;