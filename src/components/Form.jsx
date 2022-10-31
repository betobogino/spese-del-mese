import { Link } from 'react-router-dom';
import styles from '../styles/Form.module.css';

const Form = ({name, icon}) => {
  return (
    <div className={styles.form}>
        <p className={styles.formTitle}>{name.toUpperCase()}</p>
        <img className={styles.formIcon} src={`/public/icons/${icon}`} alt="" />
        <label className={styles.formAmount}>
            <input type="text" placeholder='Monto'/>
        </label>
        <label className={styles.formObservations}>
            <textarea type="text" cols={"50"} rows={"5"}/>
        </label>
        <div className={styles.formControl}>
          <button>Guardar</button>
          <Link to="/">
            <button>Volver</button>
          </Link>
        </div>
    </div>
  )
}

export default Form