import React from 'react'
import { useState, useEffect } from 'react'
import ItemList from "../../components/ItemList/ItemList";
import { getDocs, collection, query, where } from 'firebase/firestore';
import db from '../../firebase'
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
    const [loading, setLoading] = useState(true)
    const [list, setList] = useState([])
    const { id } = useParams();

    const getProducts = () => {
        const querySnapshot = collection(db, 'items');
        if (id) {
            const queryFilter = query(
                querySnapshot,
                where('category', '==', id)
            );
            getDocs(queryFilter).then((response) => {
                const data = response.docs.map((product) => {
                    return { id: product.id, ...product.data() }
                });
                setList(data);
                setLoading(false);
            })
        } else {
            getDocs(querySnapshot)
                .then((response) => {
                    const data = response.docs.map((product) => {
                        return { id: product.id, ...product.data() };
                    })
                    setList(data);
                    setLoading(false);
                })
                .catch((err) => console.log(err));
        }
    };

    useEffect(() => {
        getProducts();
    }, [id])

    return (
        <div className="container p-3">
            {id ? (<h1 className="mt-4">Categoría: {id}</h1>) : (<h1 className="mt-4">{greeting}</h1>)}
            {
                loading ? <h2 className="mt-4">Loading...</h2> :
                    <ItemList list={list} />
            }
        </div>
    )
}

export default ItemListContainer;