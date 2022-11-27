import { Level } from '../../lib/imc';

import upIcon from '../../assets/up.png'
import downIcon from '../../assets/down.png'

import styles from './styles.module.css'

interface Props {
  data: Level
}

export function IMCItem({ data }: Props) {
  return (
    <div
      className={styles.main}
      style={{ backgroundColor: data.color }}
    >
      <div className={styles.icon}>
        <img
          src={data.icon === 'up' ? upIcon : downIcon}
          alt={data.icon === 'up' ? "Icone de like para cima" : "Icone de like para baixo"}
          width={30} />
      </div>

      <div className={styles.title}>
        {data.title}
      </div>

      {
        data.yourImc ?
        <div className={styles.yourIMC}>
          Seu IMC é de {data.yourImc} kg/m²
        </div> : ''
      }

      <div className={styles.info}>
        <>
          IMC está entre <strong>{data.imc[0]}</strong> e <strong>{data.imc[1]}</strong>
        </>
      </div>
    </div>
  );
}