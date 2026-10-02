import { Container, Image } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from "react-redux";
import { Cleare, deleteFromCart } from "../rtk/slices/Cart-slice";

function Cart(){
    const cart = useSelector((state)=>state.cart)
    const dispatch= useDispatch()
    const totalPrice = cart.reduce((acc,product)=>{
        acc += product.price * product.quantity;
        return acc;
    },0)
    return (
    <Container>
        <h1 className="py-5">Welcome to Cart</h1>
        <button className="btn btn-primary" onClick={()=>dispatch(Cleare())}>Cleare Cart</button>
        <h5>Total Price: {totalPrice.toFixed(2)}$ </h5>
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                <th>#</th>
                <th>Title</th>
                <th>Img</th>
                <th>price</th>
                <th>Quantity</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {cart.map((product)=>(
                <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td><Image src={product.image} alt={product.title} style={{width:"100px",height:"100px"}}/></td>
                <td>{product.price} $</td>
                <td>{product.quantity} </td>
                <td>
                    <button className="btn btn-danger" onClick={()=>dispatch(deleteFromCart(product))}>Delete</button>
                </td>
                </tr>
                ))}
            </tbody>
        </Table>
    </Container>)
}

export default Cart;