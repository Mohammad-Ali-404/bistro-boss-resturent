import React from 'react';

const FoodCard = ({item}) => {
    const {name, recipe, image, price} = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className='absolute right-0 bg-slate-800 px-2 text-white mr-5 mt-4 font-semibold'>{price}$</p>
            <div className="card-body text-center">
                <h2 className="text-2xl font-semibold">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                <button className="btn btn-outline border-0 bg-slate-100 border-orange-400 border-b-4 mt-4">ADD TO CART</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;