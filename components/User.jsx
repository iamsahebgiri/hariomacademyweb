import React from 'react';

export default function User(props) {
  const {
    name, designation, pic, email, color,
  } = props;
  return (
    <div className="container">
      <div className="cover-image" />
      <div className="avatar mx-auto">
        <img
          src={'pic' in props ? `${pic}` : '/images/uploads/default.png'}
          className="rounded-circle"
          alt={name}
        />
      </div>
      <h5 className="font-weight-bold mt-4 mb-3">{name}</h5>
      <p className="designation">{designation}</p>
      {
        email.length === 0 ? null : <a href={`mailto:${email}?subject=Hello`} className="email">Lets Talk</a>
      }
      <style jsx>
        {`
        .container {
          height: 300px;
          width: 250px;
          box-shadow: 0 1px 2px rgba(0,0,0,0.12);
          border-radius: 6px;
          padding: 16px;
          background: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #172B4D;
          margin: 0 auto;
        }
        .cover-image {
          height: 80px;
          width: 250px;
          background: ${color};
        }
        .avatar {
          margin-top: -50px;
        }
        .avatar img{
          z-index: 10;
          height: 120px;
          width: 120px;
        }
        .rounded-circle {
            border-radius: 50% !important;
        }
        .designation {
          color: #6B778C;
          margin: 6px;
        }
        .email {
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
          margin-top: 40px;
          text-decoration: none;
        }
        .font-weight-bold {
          font-family: "Rubik";
          font-weight: 500;
          margin-top: 20px;
        }
        
        @media only screen and (max-width: 990px){
          .container {
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
