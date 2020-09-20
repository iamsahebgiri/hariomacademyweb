import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Jumbotron from '../components/Jumbotron';
import Footer from '../components/Footer';
import User from '../components/User';
import facultiesData from '../content/faculty.json';

export default function faculties() {
  return (
    <div>
      <Head>
        <title>Our faculties | Hari Om Academy</title>
        <link
          rel="icon"
          href="/logo.png"
          sizes="16x16 32x32"
          type="image/png"
        />
        <script src="https://code.iconify.design/1/1.0.7/iconify.min.js" />
      </Head>
      <Header />
      <Jumbotron
        title="Our Ignited Minds"
        description="Best and Young faculties."
      />
      <div className="container">
        {facultiesData.faculties.map((faculty) => (
          <User
            key={faculty.name}
            color={faculty.color}
            name={faculty.name}
            designation={faculty.designation}
            email={faculty.email}
            pic={faculty.image}
          />
        ))}
      </div>
      <Footer />
      <style jsx>
        {`
          .container {
            max-width: 1200px;
            margin: 30px auto;
            display: grid;
            grid-template-columns: repeat(4, 300px);
            grid-gap: 30px;
            justify-content: center;
          }
          @media only screen and (max-width: 992px) {
            .container {
              grid-template-columns: 340px;
              justify-content: center;
            }
          }
        `}
      </style>
    </div>
  );
}
