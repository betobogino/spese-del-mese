import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import styles from '../styles/Form.module.css';
import { insertSpent } from '../services/firebaseCRUD';
import Swal from 'sweetalert2';

const Form = ({name, icon}) => {
	const { register, handleSubmit, formState:{ errors } } = useForm();

	const addSpent = (event) => {
		insertSpent(event)
			.then(data => {	
				Swal.fire({
					position: 'center',
					icon: 'success',
					title: 'Gasto cargado con éxito',
					showConfirmButton: false,
					timer: 1000
				})
			})
			.catch(err => {
				console.log(err)
				Swal.fire({
					position: 'center',
					icon: 'danger',
					title: 'Ocurrio un problema al intentar cargar el gasto',
					showConfirmButton: false,
					timer: 1000
				})
			})
	}

  	return (
		<form className={styles.form} onSubmit={handleSubmit(addSpent)}>
			<input {...register("nameCategory")} className={styles.formTitle} defaultValue={name} readOnly={true}/>
			<img className={styles.formIcon} src={`/public/icons/${icon}`} alt="" />
			<label className={styles.formAmount}>
				<input {...register("amount", { required: true }) } type="number" placeholder='Monto'/>
				<p className={styles.formErrorMsj}>{errors.amount && 'Debe ingresar el monto del gasto'}</p>
			</label>
			<input {...register("date", { required: true })} className={styles.formDate} type="datetime-local"/>
			<p className={styles.formErrorMsj}>{errors.date && 'Debe ingresar la fecha del gasto'}</p>
			<label className={styles.formObservations}>
				<textarea {...register("observations", { required: true })} type="text" cols={"50"} rows={"5"}/>
				<p className={styles.formErrorMsj}>{errors.observations && 'Debe ingresar una observación del gasto'}</p>
			</label>
			<div className={styles.formControl}>
				<button>Guardar</button>
				<Link to="/">
					<button>Volver</button>
				</Link>
			</div>
		</form>
  	)
}

export default Form