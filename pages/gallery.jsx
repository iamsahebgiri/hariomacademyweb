import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Jumbotron from '../components/Jumbotron';
import Footer from '../components/Footer';
import images from '../content/gallery.json';

export default function gallery() {
  return (
    <div>
      <Head>
        <title>Our Gallery | Hari Om Academy</title>
        <link rel="icon" href="/logo.png" sizes="16x16 32x32" type="image/png" />
        <script src="https://code.iconify.design/1/1.0.7/iconify.min.js" />
      </Head>
      <Header />
      <Jumbotron title="Our Gallery" description="Capturing every happy moments." />
      <div className="container">
        {
          images.gallery.map((image) => <img key={image.imgage} src={image.image} alt="Hari om Academy" />)
        }
      </div>

      <Footer />
      <style jsx>
        {`
        .container {
          max-width: 1200px;
          margin: 10px auto;
          padding: 10px;
          display: grid;
          grid-template-columns: 580px 580px;
          grid-gap: 20px;
        }
        img {
          width: 580px;
          border-radius: 10px;
        }
        
        @media only screen and (max-width: 992px) {
          .container{
            grid-template-columns: 340px;
            grid-gap: 10px;
          }
          img {
            width: 340px;
            border-radius: 6px;
          }
        }
        `}
      </style>
    </div>
  );
}
