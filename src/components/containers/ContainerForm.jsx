import Form from '../Form';
import styles from '../../styles/Form.module.css';
import { useParams } from 'react-router-dom';
import { getCategory } from '../../services/firebaseCRUD';
import { useEffect, useState } from 'react';
import Loader from '../Loader';

const ContainerForm = () => {
  const {id} = useParams();
  const [category, setCategory] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCategory(id)
      .then(data => {
        setCategory(data)
        setLoading(false)
      })  

  }, [id]);
  
  return (
    <div className={styles.formContainer}>
        {
          loading
            ?
            <Loader />
            :
            <Form name={category.name} icon={category.icon}/>
        }
    </div>
  )
}

export default ContainerForm