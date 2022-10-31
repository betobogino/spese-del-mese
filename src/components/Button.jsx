import { Link } from 'react-router-dom';
import styles from '../styles/Button.module.css';

const Button = ({id, icon, name, amount}) => {
  return (
    <Link to={`/form/${id}`}>
      <button className={styles.btnSpent}>
          <img src={`/public/icons/${icon}`} alt="" />
          <p className={styles.btnTitle}>{name}</p>
          <span>{amount}</span>
      </button>
    </Link>
  )
}

export default Button