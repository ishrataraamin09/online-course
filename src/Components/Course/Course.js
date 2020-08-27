import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import './Course.css'

const Course = (props) => {
    const {name, price, seatsAvailable} = props.courses;
    return (
        <div className="courses">
            <div className="individual-course">
               <h4 className="course-name">{name}</h4>
               <br/>
               <p>Price: ${price}</p>
               <p>Seats available: {seatsAvailable}</p>
               <button className="btn btn-primary" onClick={() => props.handleAddCourse(props.courses)}><FontAwesomeIcon icon={faPlusCircle} /> Enroll Now</button>
            </div>
        </div>
    );
};

export default Course;