import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { ArrowLeft, Trash } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { collection, addDoc, getFirestore, updateDoc } from 'firebase/firestore';
import db from '../../firebase';

const Cart = () => {
    const { cart, removeItem, total } = useContext(CartContext);

    const createOrder = () => {
        const order = {
            buyer: {
                name: 'Maxi',
                phone: '35268769',
                email: 'maxi123@gmail.com'
            },
            items: cart,
            total: cart.reduce((acc, items) => (items.quantity * items.price) + acc, 0),
            date: new Date(),
        }
        const query = collection(db, 'orders');
        addDoc(query, order)
            .then(({id}) => {
                console.log(id);
                alert('Congratz');
            }) 
            .catch(() => 
                alert('Opps...')
            );
    };

    const updateOrder = () => {
        const idOrder = 'uRGaGRTDbgD9DnXSySXx';
        const order = {
            buyer: {
                name: 'Maxi',
                phone: '35268769',
                email: 'maxi123@gmail.com'
            },
            items: cart.pop(),
            total: cart.pop().reduce((acc, items) => (items.quantity * items.price) + acc, 0),
            date: new Date(),
        }
        const queryUpdate = doc(db, 'orders', idOrder);
        updateDoc(queryUpdate, order)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };
}


    return (
        <div>
            <h1 className='my-4'>Shopping Cart</h1>
            <Link to={'/'} className="d-flex justify-content-start ms-5 text-decoration-none">
                <h4 className="text-secondary"><ArrowLeft className="me-2" />Continue Shopping</h4>
            </Link>
            {cart.length === 0 ? (<h3 className="mt-4">There're no items in your Cart</h3>) : (
                <>
                    {cart.map((item) => (
                        <div key={item.id} style={{ display: 'flex', alignItems: 'center' }}>
                            <img className='m-3 ms-5' src={item.img} style={{ height: 150 }} alt={item.name} />
                            <h3 className='m-2'>{item.name}</h3>
                            <p className='m-2'>Qty: {item.quantity}</p>
                            <p className='m-2'>${item.price}</p>
                            <button type="button" className="btn btn-secondary" onClick={() => removeItem(item.id)}>
                                <Trash />
                            </button>
                        </div>
                    ))}

                    <hr className='mx-5' />
                    <h5>Total = ${total}</h5>

                </>
            )}
            <div>
                <button onClick={createOrder}>Go to Pay</button>
            </div>
        </div >);
};

export default Cart