import { useState } from 'react';

import styles from './App.module.css'

import poweredImage from './assets/powered.png'

import { levels, calculateIMC } from './lib/imc'

function App() {
  const [heightInput, setHeightInput] = useState<number>(0);
  const [weightInput, setWeightInput] = useState<number>(0);

  function handleCalculateIMC() {
    if (heightInput && weightInput) {
      // code here
    } else {
      alert('Parece que algum campo está vazio. Verifique e depois tente novamente')
    }
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt="" width={150} />
        </div>
      </header>

      <div className={styles.container}>

        <div className={styles.leftSide}>
          <h1 className={styles.title}>Calcule seu IMC</h1>

          <p className={styles.description}>
            IMC é a sigla para índice de Massa Corpórea, parâmetro
            adotado pela Organização Mundial da Saúde para calcular o
            peso ideal de cada pessoa.
          </p>

          <input
            type="number"
            required
            placeholder="Digite a sua altura. Ex.: 1.5 (em metros)"
            value={heightInput > 0 ? heightInput : ''}
            onChange={event => setHeightInput(parseFloat(event.target.value))}
          />

          <input
            type="number"
            required
            placeholder="Digite o seu peso. Ex.: 75.3 (em kg)"
            value={weightInput > 0 ? weightInput : ''}
            onChange={event => setWeightInput(parseFloat(event.target.value))}
          />

          <button
            className={styles.buttonCalculate}
            onClick={handleCalculateIMC}>
            Calcular
          </button>
        </div>

        <div className={styles.rightSide}>
          RightSide
        </div>

      </div>
    </div>
  )
}

export default App
