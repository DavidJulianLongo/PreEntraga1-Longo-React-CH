import { useState, useContext, useEffect } from 'react';
import { CartContext } from '../../../context/CartContext';
import { Link } from 'react-router-dom';
import './UserInfo.css';


export const UserInfo = ({carrito, createNewOrder}) => {
    const [, , , getTotal] = useContext(CartContext);
    const [userName, setUserName] = useState('');
    const [userLastName, setUserLastName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [completedForm , setCompletedForm] = useState(false);
    


    useEffect(() => {
        if (userName !== '' && userLastName !== '' && userEmail !== '' && userPhone !== '') {
            setCompletedForm(true);
        } else {
            setCompletedForm(false);
        }
    }, [userName, userLastName, userEmail, userPhone]);

    const checkoutBtn = completedForm ? 'checkout-btn' : 'checkout-btn disable';

    const handleSubmit = (e) => {
        e.preventDefault();
        const order = {
            buyer: {
                userName,
                userLastName,
                userEmail,
                userPhone,
            },
            items: carrito,
            create: new Date()
        }
        createNewOrder(order)
    }



    return (
        <>
            <div className='form-container'>
                <div className='form-group'>
                    <h3>Formulario de compra</h3>
                    <div className='form-row'>
                        <div className='form-group'>
                            <label htmlFor='name'>Nombre:</label>
                            <input type="text" id='name' placeholder='Nombre' value={userName} onChange={(e) => setUserName(e.target.value)} required />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='lastName'>Apellido:</label>
                            <input type='text' id='lastName' placeholder='Apellido' value={userLastName} onChange={(e) => setUserLastName(e.target.value)} required />
                        </div>
                    </div>

                    <div className='form-row'>
                        <div className='form-group'>
                            <label htmlFor='email'>Email:</label>
                            <input type='email' id='email' placeholder='email@domain.com' value={userEmail} onChange={(e) => setUserEmail(e.target.value)} required />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='phone'>Teléfono:</label>
                            <input type='tel' id='phone' placeholder='Teléfono' value={userPhone} onChange={(e) => setUserPhone(e.target.value)} required />
                        </div>
                    </div>
                </div>
            </div>
            <div className='cart-summary'>
                <h4>Resumen de la compra</h4>
                <h6>Total:</h6>
                <span>$ {getTotal()}</span>
                <p>* Los precios anunciados en la Web incluyen el IVA.</p>
                <p>* Completa el formulario para finalizar tu compra</p>
                <button className={checkoutBtn} onClick={handleSubmit} disabled={!completedForm}>Finalizar compra</button>
                <Link to={'/'}>
                    <p className='continue-shopping'>Elegir más productos</p>
                </Link>
            </div>
        </>
    );
};