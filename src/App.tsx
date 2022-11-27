import { useState } from 'react';

import styles from './App.module.css'

import poweredImage from './assets/powered.png'
import leftArrowIcon from './assets/leftArrow.png'

import { IMCItem } from './components/IMCItem';

import { levels, calculateIMC, Level } from './lib/imc'

function App() {
  const [heightInput, setHeightInput] = useState<number>(0);
  const [weightInput, setWeightInput] = useState<number>(0);

  const [toShow, setToShow] = useState<Level | null>(null);

  function handleCalculateIMC() {
    if (heightInput && weightInput) {
      setToShow(calculateIMC(heightInput, weightInput))
    } else {
      alert('Parece que algum campo está vazio. Verifique e depois tente novamente')
    }
  }

  function handleGoBack() {
    setToShow(null)
    setHeightInput(0)
    setWeightInput(0)
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt="Logo da aplicação" width={150} />
        </div>
      </header>

      <main className={styles.container}>

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
          {!toShow ? (
            <div className={styles.containerGrid}>
              {levels.map((item, key) => (
                <IMCItem key={key} data={item} />
              ))}
            </div>
          ) : (
            <div className={styles.showInfo}>

              <div className={styles.arrowIcon} onClick={handleGoBack}>
                <img src={leftArrowIcon}
                  alt="Icone de seta virada para a esquerda"
                  width={25}
                />
              </div>

              <IMCItem data={toShow} />
            </div>
          )}
        </div>

      </main>
    </div>
  )
}

export default App
