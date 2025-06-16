
import React, { useState } from 'react';
import './style.css';

function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcularIMC = () => {
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);

    if (!pesoNum || !alturaNum || alturaNum === 0) {
      setResultado('Por favor, insira valores válidos.');
      return;
    }

    const imc = pesoNum / (alturaNum * alturaNum);
    let classificacao = '';

    if (imc < 18.5) {
      classificacao = 'Abaixo do peso';
    } else if (imc < 24.9) {
      classificacao = 'Peso normal';
    } else if (imc < 29.9) {
      classificacao = 'Sobrepeso';
    } else {
      classificacao = 'Obesidade';
    }

    setResultado(`Seu IMC é ${imc.toFixed(2)} (${classificacao})`);
  };

  return (
    <div className="container">
      <div className="content">
        <h1>Calculadora de IMC</h1>
        <div>
          <label>Peso (kg): </label>
          <input
            type="number"
            step="any"
            value={peso}
            onChange={(e) => {
              setPeso(e.target.value);
              setResultado(null);
            }}
          />
        </div>
        <div>
          <label>Altura (m): </label>
          <input
            type="number"
            step="any"
            value={altura}
            onChange={(e) => {
              setAltura(e.target.value);
              setResultado(null);
            }}
          />
        </div>
        <button onClick={calcularIMC}>Calcular IMC</button>
        {resultado && <p className="resultado">{resultado}</p>}
      </div>
    </div>
)
}

export default App