import React from 'react';
import CourseItem from '../components/CourseItem';
import courses from '../content/courses.json';

export default function CourseSection() {
  return (
    <div className="course-section">
      <div className="container">
        {courses.courses.map((course) => (
          <CourseItem
            amount={course.amount}
            period={course.amount}
            course={course}
            key={course.name}
            img={course.image}
            title={course.name}
          />
        ))}
      </div>
      <style jsx>
        {`
          .course-section {
            display: flex;
            align-items: center;
            justify-content: center;
            background: #FFF;
          }
          .container {
            margin: 0 auto;
            padding: 40px;
            display: grid;
            grid-template-columns: repeat(4, 300px);
            grid-gap: 1rem;
            
          }
          .load {
            padding: 10px 20px;
            display: block;
            max-width: 200px;
            margin: 0px auto 30px;
            text-align: center;
            border-radius: 10px;
            font-family: 'Proxima Nova Semibold';
            text-decoration: none;
            color: #fff;
            background: #3ECF8E;
            text-transform: uppercase;
            transition: all 0.2s;
          }
          .load:hover {
            cursor: pointer;
            transform: scale(1.08);
          }
          @media only screen and (max-width: 992px)
          {
            .container{
              justify-content: center;
              grid-template-columns: repeat(1, 300px);
              grid-gap: 2rem;
              padding: 10px;
            }
            .load {
              margin-top: 2rem;
            }
          }
        `}
      </style>
    </div>
  );
}
