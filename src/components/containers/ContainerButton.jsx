import { useState, useEffect } from "react";
import PuffLoader from "react-spinners/PuffLoader";

import Button from "../Button";
import { getCategories } from "../../services/firebaseCRUD";

const ContainerButton = () => {
    const [buttons, setButtons] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getCategories()
            .then(data => {
                setButtons(data)
                setLoading(false)
            })
    }, []);
    
    return (
        <div>
        {
            loading 
            ? 
            <PuffLoader color="#7c36d6" />
            :
            buttons.map(button => {
                return <Button key={button.id} id={button.id} icon={button.data.icon} name={button.data.name} amount={button.data.amount}/>
            })    
        }
        </div>
    )
}

export default ContainerButton