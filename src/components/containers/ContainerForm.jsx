import Form from '../Form';
import styles from '../../styles/Form.module.css';
import { useParams } from 'react-router-dom';
import { getCategory } from '../../services/firebaseCRUD';
import { useEffect, useState } from 'react';

const ContainerForm = () => {
  const {id} = useParams();
  const [category, setCategory] = useState({});

  useEffect(() => {
    getCategory(id)
      .then(data => setCategory(data))  
  }, [id]);
  
  return (
    <div className={styles.formContainer}>
        <Form name={category.name} icon={category.icon}/>
    </div>
  )
}

export default ContainerForm