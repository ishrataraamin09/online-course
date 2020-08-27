import React from 'react';
import './Window.css';
import fakeData from '../../fakeData';
import { useState } from 'react';
import Course from '../Course/Course';
import Cart from '../Cart/Cart';

const Window = () => {
    const first12 = fakeData.slice(0,12) ;
    const [course, setCourse] = useState(first12) ;
    const [cart, setCart] = useState([]) ;

    const handleAddCourse = (courses) => {
        const newCart = [...cart, courses] ;
        setCart(newCart) ;
    }
    
    return (
        <div className="full-container">
            <div className="course-container">
                {
                    course.map(cr => <Course
                        handleAddCourse = {handleAddCourse}
                        courses={cr}
                    ></Course>)
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Window;