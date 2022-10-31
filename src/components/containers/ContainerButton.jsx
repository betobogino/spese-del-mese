import { useState, useEffect } from "react";

import Button from "../Button";
import { getCategories } from "../../services/firebaseCRUD";

const ContainerButton = () => {
    const [buttons, setButtons] = useState([]);

    useEffect(() => {
        getCategories()
            .then(data => setButtons(data))
    }, []);
    
    return (
        <div>
        {
            buttons.map(button => {
                return <Button key={button.id} id={button.id} icon={button.data.icon} name={button.data.name} amount={button.data.amount}/>
            })
        }
        </div>
    )
}

export default ContainerButton