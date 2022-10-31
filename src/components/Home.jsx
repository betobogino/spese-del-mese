import styles from '../styles/Home.module.css';
import ContainerButton from './containers/ContainerButton';

function Home() {
	return (
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
				<div className={styles.btnContainer}>
					<ContainerButton />
				</div>
			</div>
		</div>
	);
}

export default Home;
