/* eslint-disable react/no-danger */
/* eslint-disable no-irregular-whitespace */
import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Jumbotron from '../components/Jumbotron';
import Footer from '../components/Footer';
import aboutData from '../content/about.json';

export default function about() {
  return (
    <div>
      <Head>
        <title>About us | Hari Om Academy</title>
        <link rel="icon" href="/logo.png" sizes="16x16 32x32" type="image/png" />
        <script src="https://code.iconify.design/1/1.0.7/iconify.min.js" />
      </Head>
      <Header />
      <Jumbotron title="About us" description="Hari om academy is built with passion." />
      <div className="container">
        <div className="box">
          <p dangerouslySetInnerHTML={{ __html: aboutData.description }} />
        </div>
        <div className="box">
          <h1>Our Vision</h1>
          <p dangerouslySetInnerHTML={{ __html: aboutData.vision }} />
        </div>
        <div className="box">
          <h1>Our Mission</h1>
          <p dangerouslySetInnerHTML={{ __html: aboutData.mission }} />
        </div>

      </div>
      <Footer />
      <style jsx>
        {`
          h1 {
            font-size: 28px;
            font-family: 'Rubik';
            font-weight: 500;
            margin-top: 10px;
            text-align: center;
            color: #172B4D;
          }
          p {
            margin-top: 10px;
            line-height: 24px;
            
          }
          .container {
            max-width: 1000px;
            margin: 30px auto;
            color: #172B4D;
          }
          .box {
          box-shadow: 0 2px 4px rgba(0,0,0,0.12);
          border-radius: 6px;
          padding: 20px;
          background: #fff;
          margin-bottom: 30px;
        }
        @media only screen and (max-width: 992px) {
          .container {
            margin: 10px auto;
            padding: 10px;
          }

          .box {
            border: 1px solid #EFF2F7;
            box-shadow: none;
            border-radius: 6px;
          }
        }
        `}
      </style>
    </div>
  );
}
