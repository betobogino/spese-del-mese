import { useState, useEffect } from 'react';
import { getCategories } from "../services/firebaseCRUD";

import styles from '../styles/Home.module.css';

import ContainerButton from './containers/ContainerButton';
import ContainerAmount from './containers/ContainerAmount';
import Button from './Button';
import Loader from './Loader';

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
					<ContainerAmount />
					<ContainerButton>
						{
							buttons.map(button => {
								return <Button key={button.id} id={button.id} icon={button.data.icon} name={button.data.name} />
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
