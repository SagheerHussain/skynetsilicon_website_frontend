import React from 'react';
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { testimonials } from '../testimonial';

const Testimonials = () => {

    const slideOne = testimonials.slice(0, 4);
    const slideTwo = testimonials.slice(5, 9);

    return (
        <>
            <section id="testimonials" className='py-20' style={{ background: 'linear-gradient(90deg, rgb(16,5,51) 3%, rgba(28,5,55) 50%, rgb(16,5,51) 75%)' }}>
                <div className="container mb-10">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="top-brands-info">
                                <h5 className='text-lg text-white uppercase font-bold'>Clients Acroos World</h5>
                                <h4 className='sm:text-5xl text-3xl text-white uppercase font-bold my-3 flex items-center justify-center'>Testimonials</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <InfiniteMovingCards bgColor='' pauseOnHover={true} speed={"slow"} items={slideOne} itemClass={'min-w-[600px]'} />
                <br />
                <InfiniteMovingCards bgColor='' direction={"right"} pauseOnHover={true} speed={"slow"} items={slideTwo} itemClass={'min-w-[600px]'} />
            </section>
        </>
    )
}

export default Testimonials
