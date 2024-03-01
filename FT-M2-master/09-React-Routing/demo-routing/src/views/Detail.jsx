import { useEffect } from 'react';
import { useParams } from 'react-router-dom'

const Detail = () => {
    const { id } = useParams();

    useEffect(() => {
        console.log(id)
    },[])

    return(
        <div>
            <h1>Detail ID: {id}</h1>
        </div>
    )
}

export default Detail;