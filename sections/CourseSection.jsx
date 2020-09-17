import React from 'react';
import CourseItem from '../components/CourseItem';

export default function CourseSection() {
  return (
    <div className="course-section">
      <div className="container">
        <CourseItem colorBottom="#D27200" colorTop="#FFD5A2" img="jee.png" title="JEE/NEET" />
        <CourseItem colorBottom="#6226DC" colorTop="#C88AFE" img="railway.png" title="Railways" />
        <CourseItem colorBottom="#00C54F" colorTop="#5CF9C9" img="defence.png" title="Defence" />
        <CourseItem colorBottom="#0068D4" colorTop="#81C0FF" img="ssc.png" title="SSC" />
        <CourseItem colorBottom="#FFAB00" colorTop="#FFE380" img="banking.png" title="Banking" />
        <CourseItem colorBottom="#00B1B1" colorTop="#9DF9F6" img="drdo.png" title="DRDO" />
        <CourseItem colorBottom="#00B1B1" colorTop="#9DF9F6" img="iti.png" title="ITI" />
        <CourseItem colorBottom="#BF008C" colorTop="#FFA8D9" img="cbse.png" title="Matriculation" />
        <CourseItem colorBottom="#BB0726" colorTop="#FF9B9B" img="jac.png" title="Intermediate" />
        <CourseItem colorBottom="#D5B205" colorTop="#F9FE76" img="cs.png" title="Computer" />
        <CourseItem colorBottom="#00C54F" colorTop="#5CF9C9" img="jac.png" title="Polytechnic" />
        <CourseItem colorBottom="#6226DC" colorTop="#C88AFE" img="en.png" title="English Special Class" />
      </div>
      <style jsx>
        {`
          .container {
            margin: 0 auto;
            padding: 40px;
            display: grid;
            grid-template-columns: repeat(4, 300px);
            grid-gap: 1rem;
            background: #FFF;
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
