/* eslint-disable react/no-danger */
import React from 'react';
import Link from 'next/link';
import config from '../content/site_config.json';

export default function MainHome() {
  return (
    <div className="container">
      <div className="main-home-container">
        <div className="left-section">
          <h1 dangerouslySetInnerHTML={{ __html: config.site_tagline }} />
          <p className="tagline">{config.site_description}</p>
          <img className="underline" src="/underline.svg" alt="underline" />
          <a href="https://forms.gle/ehbndM8xZ1KMSUER6" target="_blank" rel="noopener noreferrer" className="get-started">Start Now</a>
          <div className="popular-courses-container">
            <p className="popular-courses">Popular courses:</p>
            <ul className="popular-courses-ul">
              { config.popular_courses.map((course) => (
                <li key={course.course}>
                  <Link href="/courses">
                    <a href="/courses">{course.course}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="right-section">
          <img width="450" src="/girl.png" alt="girl" />
        </div>
      </div>
      <style jsx>
        {`
        .container {
          width: 100%;
          background-color: var(--brand-color);
        }
        h1 {
          font-size: 48px;
          line-height: 62px;
          font-family: 'Rubik';
          font-weight: 500;
        }
        .tagline {
          font-size: 18px;
          margin-top: 16px;
          opacity: 0.8;
        }
        h1, p {
          color: #fff;
        }
        .underline {
          position: absolute;
          margin-top: -104px;
        }
        .main-home-container {
          display: flex;
          max-width: 1200px;
          margin: 0 auto;
          justify-content: space-between;
          padding: 75px 0;
        }
        .popular-courses-container {
          display: flex;
          align-items: center;
          margin-top: 30px;
        }
        .popular-courses-ul li{
          display: inline-block;
          margin-left: 20px;
        }
        .popular-courses-ul li a {
          text-decoration: none;
          color: #fff;
          opacity: 0.6;
          text-transform: uppercase;
          font-family: 'Rubik';
        }
        .popular-courses-ul li a:hover {
          opacity: 1;
        }
        .get-started{
          display: inline-block;
          padding: 10px 20px;
          margin:0 0.1em 0.1em 0;
          border: none;
          border-radius: 20px;
          box-sizing: border-box;
          color:#FFF;
          font-size: 16px;
          text-align:center;
          transition: all 0.2s;
          outline: none;
          background: #311d3f;
          font-family: 'Rubik';
          margin-top: 80px;
          text-decoration: none;
        }
        .get-started:hover{
          cursor: pointer;
          transform: scale(1.05);
        }
        @media only screen and (max-width: 992px) { 
          .main-home-container {
            flex-direction: column;
            padding: 50px 20px;
          }
          .right-section {
            display: flex;
            justify-content: center;
          }
          .right-section img {
            display:none;
          }
          h1 {
            font-size: 34px;
            line-height: 40px;
            text-align: left;
          }
          .tagline {
            font-size: 15px;
          }
          .get-started {
            width: 100%;
            margin-top: 60px;
          }
          .underline {
            display: none;
          }
          .popular-courses. .popular-courses-ul li a {
            font-size: 14px;
          }
          .popular-courses-ul .none {
            display: none;
          }
        }
      `}
      </style>
    </div>
  );
}
