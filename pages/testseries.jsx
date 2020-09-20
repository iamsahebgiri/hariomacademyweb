import React, { useState } from 'react';
import Head from 'next/head';
import clsx from 'clsx';
import Header from '../components/Header';
import Jumbotron from '../components/Jumbotron';
import Footer from '../components/Footer';
import CourseItem from '../components/CourseItem';
import testSeries from '../content/test_series.json';

export default function fees() {
  const [monthly, setMonthly] = useState(false);
  return (
    <div>
      <Head>
        <title>Test Series | Hari Om Academy</title>
        <link rel="icon" href="/logo.png" sizes="16x16 32x32" type="image/png" />
        <script src="https://code.iconify.design/1/1.0.7/iconify.min.js" />
      </Head>
      <Header />
      <Jumbotron
        title="Offline Test Series"
        description="Learn, Test, Sleep, Repeat."
      />
      <div className="container">
        <div className="segmented-buttons-container">
          <div className="buttons-container">
            <button className={clsx('reset-button', !monthly && 'active')} type="button" onClick={() => setMonthly(false)}>Monthly</button>
            <button
              className={clsx('reset-button', monthly && 'active')}
              type="button"
              onClick={() => setMonthly(true)}
            >
              Yearly
            </button>
          </div>
        </div>
        <div className="container-center">
          <div className="container-series">
            {testSeries.test_series.map((series) => (
              <CourseItem
                course={series}
                amount={monthly === false ? series.monthly_price : series.annually_price}
                period={monthly === false ? 'per month' : 'per year'}
                key={series.name}
                img={series.image}
                title={series.name}
              />
            ))}
          </div>
        </div>

        <Footer />

      </div>
      <style jsx>
        {`
          .container {
            background: #FFF;
          }
          .container-center {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .segmented-buttons-container {
            padding: 30px 0 10px 0;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .reset-button {
            border: none;
            outline: none;
            text-transform: uppercase;
            cursor: pointer;
            color: #000;
            padding: 10px 28px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            font-family: "Rubik";
            font-weight: bold;
            border-radius: 6px;
            background: #e2e8f0;
          }
          .buttons-container {
            background: #e2e8f0;
            border-radius: 6px;
            padding: 3px;
          }
          .active {
            background-color: #fff;
            box-shadow: 0 1px 2px rgba(0,0,0,0.12);
          }
          .container-series {
            margin: 0 auto;
            padding: 40px;
            display: grid;
            grid-template-columns: repeat(4, 300px);
            grid-gap: 1rem;
          }
          img {
            max-height: 500px;
            border-radius: 10px;
          }
          .note {
            margin: 20px 0;
          }
          b {
            font-family: "Proxima Nova Bold";
          }
          .item {
            height: 500px;
          }
          table {
            border-collapse: collapse;
            width: 100%;
          }
          th {
            font-family: "Proxima Nova Semibold";
          }
          tr:hover {
            background-color: #ebecf0;
          }
          th,
          td {
            text-align: left;
            padding: 8px;
          }

          tr:nth-child(even) {
            background-color: #f4f5f7;
          }
          @media only screen and (max-width: 992px) {
            .container-series {
              justify-content: center;
              grid-template-columns: repeat(1, 300px);
              grid-gap: 2rem;
              padding: 10px;
            }
          }
        `}
      </style>
    </div>
  );
}
