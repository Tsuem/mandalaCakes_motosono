/* import { getFetch } from "../../data/Data"; */
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { doc, getDoc } from 'firebase/firestore';
import db from '../../firebase'

const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    const getProduct = () => {
        const queryDoc = doc(db, 'items', id)

        getDoc(queryDoc)
            .then((res) => {
                setItem({ id: res.id, ...res.data() })
                setLoading(false)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getProduct();
    }, [id]);

    return (
        <div className="container p-4">
            {
                loading ? <h2>Loading...</h2> :
                    <ItemDetail item={item} />
            }
        </div>
    )
}

export default ItemDetailContainer