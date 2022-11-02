import { useState, useEffect } from 'react';
import { getCategories } from "../services/firebaseCRUD";

import styles from '../styles/Home.module.css';
import ContainerButton from './containers/ContainerButton';
import Loader from './Loader';

import Button from './Button';

function Home() {
	const [loading, setLoading] = useState(true);
	const [buttons, setButtons] = useState([]);

	useEffect(() => {
        getCategories()
            .then(data => {
                setButtons(data)
                setLoading(false)
            })
    }, []);

	return (
		<>
		{ 
			loading 
			? 
			<div className={styles.homeLoading}>
				<Loader /> 
			</div>
			: 
			<div className={styles.home}>
				<div className={styles.navTop}>
					<div>
						<button className={styles.btnControl}>|||</button>
						<button className={styles.btnControl}>{`<`}</button>
						<p>Díario</p>
						<button className={styles.btnControl}>{`>`}</button>
						<button className={styles.btnControl}>|||</button>
					</div>
				</div>
				<div className={styles.body}>
					<div className={styles.totalContainer}>
						<div className={styles.accumulate}>
							<p>Ingresos</p>
							<p>Gastos</p>
						</div>
						<div className={styles.balance}>
							<p>Saldo</p>
						</div>
					</div>
					<ContainerButton>
						{
							buttons.map(button => {
								return <Button key={button.id} id={button.id} icon={button.data.icon} name={button.data.name} amount={button.data.amount}/>
							})
						}
					</ContainerButton>
				</div>
			</div>
		}
		</>
	);
}

export default Home;
