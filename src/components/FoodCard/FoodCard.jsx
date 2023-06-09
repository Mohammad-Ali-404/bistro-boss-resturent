import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

const FoodCard = ({item}) => {
    const {name, recipe, image, price, _id} = item;
    const {user} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation()
    const handleAddToCart = (item)=>{
        console.log(item)
        if (user && user.email) {
            const orderItem = {MenuItemId: _id, name, image, price, email: user.email}
            fetch('http://localhost:5000/carts', {
                method: "POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(orderItem)
            })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Food added on the cart',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please Login to order the Food!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now!'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}})
                }
              })
        }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className='absolute right-0 bg-slate-800 px-2 text-white mr-5 mt-4 font-semibold'>{price}$</p>
            <div className="card-body text-center">
                <h2 className="text-2xl font-semibold">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                <button onClick={()=>handleAddToCart(item)} className="btn btn-outline border-0 bg-slate-100 border-orange-400 border-b-4 mt-4">ADD TO CART</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;