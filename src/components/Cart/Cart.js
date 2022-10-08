import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { ArrowLeft, Trash } from 'react-bootstrap-icons';
import { Link, useNavigate } from 'react-router-dom';
import { collection, addDoc, doc, updateDoc } from 'firebase/firestore';
import db from '../../firebase';
import moment from 'moment'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Cart = () => {
    const { cart, removeItem, total, clearCart } = useContext(CartContext);
    const [show, setShow] = useState(false);
    const [info, setInfo] = useState({ name: "", phone: "", email: "" })
    const navigate = useNavigate();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const MySwal = withReactContent(Swal)

    const handleChange = (e) => {
        const { value, id } = e.target
        setInfo({ ...info, [id]: value })
    }

    const handleSubmit = (e) => {
        console.log("holis");
        e.preventDefault()
        if (info.name.trim() === "" || info.phone.length !== 10 || info.email.trim() === "") {
            return MySwal.fire({
                title: <p>Verify again!</p>,
                html: <i>Some field is wrong.</i>,
                icon: 'error'
            }).then(() => {
                return
            })

        }
        createOrder()
        console.log("hola");
    }

    const createOrder = () => {

        const order = {
            buyer: {
                name: info.name,
                phone: info.phone,
                email: info.email
            },
            items: cart,
            total: cart.reduce((acc, items) => (items.quantity * items.price) + acc, 0),
            date: moment().format(),
        }
        const query = collection(db, 'orders');
        addDoc(query, order)
            .then(({ id }) => {
                handleClose();
                MySwal.fire({
                    title: <p>Purchase Successful!</p>,
                    html: <i>Your order ID is {id}</i>,
                    icon: 'success'
                }).then(() => {
                    clearCart();
                    navigate('/')
                })
            })
            .catch(() =>
                alert('Opps... Try it again')
            );
    };

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
                    <h5 className='mt-2'>Total = ${total}</h5>
                    <div className="d-grid gap-2 d-md-flex justify-content-center">
                        <Button className ='mt-2' variant="secondary" onClick={handleShow}>
                            Go to Pay
                        </Button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>User Info</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group className="mb-3" controlId="name">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control
                                            onChange={handleChange}
                                            value={info.name}
                                            type="text"
                                            placeholder="Name"
                                            autoFocus
                                            required
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="email">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control
                                            onChange={handleChange}
                                            value={info.email}
                                            type="email"
                                            placeholder="name@example.com"
                                            required
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="phone">
                                        <Form.Label>Phone number</Form.Label>
                                        <Form.Control
                                            onChange={handleChange}
                                            value={info.phone}
                                            type="number"
                                            placeholder="11223344556"
                                            required
                                        />
                                    </Form.Group>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleSubmit}>
                                    Submit
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </>
            )}

        </div >
    );
};

export default Cart