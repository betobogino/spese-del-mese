import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getSpent } from '../services/firebaseCRUD';
import styles from '../styles/Button.module.css';

const Button = ({id, icon, name}) => {
	const [amount, setAmount] = useState(0);

	useEffect(() => {
		getSpent(name)
            .then(spentDB => {
				setAmount(spentDB)
            })
	}, []);

  	return (
    	<Link to={`/form/${id}`}>
      		<button className={styles.btnSpent}>
          		<img src={`/public/icons/${icon}`} alt="" />
          		<p className={styles.btnTitle}>{name}</p>
          		<span>${amount}</span>
      		</button>
    	</Link>
  	)
}

export default Button