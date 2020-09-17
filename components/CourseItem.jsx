import React from 'react';

export default function CourseItem({
  img, title, course,
}) {
  return (
    <div className="course-item">
      <div className="group">
        <img src={`/${img}`} alt={title} />
        <h2 className="title">{title}</h2>
        <div className="price">
          <span className="rupee">₹</span>
          <span className="amount">{course.amount}</span>
          <span className="period">{course.period}</span>
        </div>
      </div>

      <div className="description">
        <h2 className="what-will-you-get">What will you get</h2>
        <ul>
          {
            course.what_will_you_get.map((item) => (
              <li key={item}>
                <svg className="tick" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))
          }
        </ul>
      </div>
      <style jsx>
        {`
        .price {
          margin: 20px;
          display: flex;
          align-items: center;
        }
        .rupee {
          font-size: 32px;
          font-weight: 500;
        }
        .amount {
          font-size: 32px;
          font-weight: 500;
        }
        .period {
          margin-left: 10px;
        }
        .tick {
          margin: 6px;
          height: 20px;
          width: 20px;
          stroke: #24b47e;
        }
        .course-item {
          height: 400px;
          width: 300px;
          background: #f7fafc;
          border-radius: 10px;
          border: 1px solid #edf2f7;
          // box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        }
        ul li {
          display: flex;
          align-items: center;
        }
        img {
          height: 40px;
        }
        .title {
          font-size: 18px;
          font-family: 'Rubik';
          font-weight: 500;
          margin-top: 10px;
        }
        .what-will-you-get {
          margin: 12px 32px;
          text-transform: uppercase;
          color: #9fa6b2;
        }
        .group {
          display: flex;
          flex-direction: column;
          align-items: center;
          background: #fff;
          padding: 20px 0 0 10px;
          border-radius: 10px 10px 0 0;
        }
        .description {
          padding: 10px;
          
        }
        `}
      </style>
    </div>
  );
}
