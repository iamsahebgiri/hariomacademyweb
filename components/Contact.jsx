/* eslint-disable react/no-danger */
import React from 'react';
import contacts from '../content/contacts.json';

export default function Contact() {
  return (
    <div className="container">
      {contacts.contacts.map((contact) => (
        <div className="box" key={contact.campus_name}>
          <h2>{contact.campus_name}</h2>
          <a className="tel" href={`tel:${contact.whatsapp_no}`}>{contact.whatsapp_no}</a>
          <a className="wa" href={`https://api.whatsapp.com/send?phone=${contact.whatsapp_no}&text=Hi`} target="_blank" rel="noopener noreferrer">Whatsapp</a>
          <p dangerouslySetInnerHTML={{ __html: contact.address }} />
        </div>
      ))}
      <style jsx>
        {`
        .container {
          max-width: 1200px;
          margin: 23px auto;
          display: grid;
          grid-template-columns: 380px 380px 380px;
          grid-gap: 20px;
          justify-items: center;
          color: #172B4D;
        }
        .box {
          box-shadow: 0 1px 2px rgba(0,0,0,0.12);
          border-radius: 6px;
          padding: 20px;
          background: #fff;
          width: 90%;
        }
        a {
          display: block;
          text-decoration: none;
          font-family: 'Rubik';
          font-weight: 500;
          color:  #4c9aff;
        }
        a:hover  {
          text-decoration: underline;
        }
        .tel{
          margin-bottom: 10px;
        }
        .wa {
          margin-bottom: 10px;
        }
        h2 {
          font-family: 'Rubik';
          font-weight: 500;
          font-size: 21px;
          margin-bottom: 10px;
        }
        @media only screen and (max-width: 992px) { 
          .container {
            grid-template-columns: 320px;
            grid-gap: 10px;
            margin: 16px;
          }
          .box {
            border: 1px solid #EFF2F7;
            box-shadow: none;
            border-radius: 6px;
            margin: 0 auto;
          }
        }
        `}
      </style>
    </div>
  );
}
