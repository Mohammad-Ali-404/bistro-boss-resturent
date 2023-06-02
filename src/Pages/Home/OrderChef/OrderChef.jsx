import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import image1 from '../../../assets/home/slide5.jpg'
import image2 from '../../../assets/home/slide5.jpg'
import image3 from '../../../assets/home/slide5.jpg'
const OrderChef = () => {
    return (
        <section className='mt-16 mb-16'>
            <SectionTitle
            heading={"---Should Try---"}
            subHeading={"CHEF RECOMMENDS"}
            ></SectionTitle>

            <div className='grid md:grid-cols-3 gap-4'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className='p-6'>
                        <img src={image1} alt="" className="rounded-xl w-[100%] h-[450px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                        <button className='btn btn-outline bg-slate-100 border-0 border-b-4 mt-4 text-yellow-400 btn-warning'>ADD TO CART</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className='p-6'>
                        <img src={image2} alt="" className="rounded-xl w-[100%] h-[450px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                        <button className='btn btn-outline text-yellow'>ADD TO CART</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className='p-6'>
                        <img src={image3} alt="" className="rounded-xl w-[100%] h-[450px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                        <button className='btn btn-outline border-0 bg-slate-100 border-b-4 mt-4 text-yellow-400 btn-warning'>ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrderChef;