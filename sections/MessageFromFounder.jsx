/* eslint-disable react/no-danger */
import React from 'react';
import config from '../content/site_config.json';

export default function MessageFromFounder() {
  return (
    <div className="outer-container">
      <div className="container">
        <div className="section-container">
          <div className="left">
            <h1 className="title">Message from founder</h1>
            <p dangerouslySetInnerHTML={{ __html: config.message_from_founder }} />
            <p className="founder">Chandan Kumar</p>
          </div>
          <div className="right">
            <img className="image" src="/founder.png" alt="Founder" />
          </div>
        </div>
      </div>
      <style jsx>
        {`
      .title {
        font-size: 36px;
        line-height: 40px;
        font-family: 'Rubik';
        font-weight: 500;
        color: #172B4D;
        padding: 20px 0;
        text-align: left;
      }
      .container {
        box-shadow: 0 2px 4px rgba(0,0,0,0.16);
        border-radius: 6px;
        padding-left: 30px;
        background: #fff;
        max-width: 1200px;
        margin: 30px auto 30px;
      }
      .section-container {
        display: flex;
      }
      p {
        margin-top: 10px;
      }
      .image {
        border-radius: 6px 0;
      }
      .left {
        margin-top: 20px;
        color: #6B778C;
        line-height: 20px;
      }
      .founder {
        font-weight: 500;
      }
      .right {
        background: rgb(255,255,255);
        background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 35%, rgba(26,242,127,1) 100%);
        border-radius: 6px;
      }
      @media only screen and (max-width: 992px) {
        .title  {
          font-size: 28px;
          text-align: center;
        }
        .section-container {
          flex-direction: column;
        }
        .image {
          width: 100%;
          border-radius: 6px;
        }
        .container {
          box-shadow: none;
          border-radius: 6px;
          padding: 0;
          border: 1px solid #eff2f7;
        }
        .outer-container {
          padding: 10px;
        }
        .right {
          background: rgb(255,255,255);
          background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 35%, rgba(26,242,127,1) 100%);
        }
        .left {
          padding: 20px;
        }
      }
      `}
      </style>
    </div>
  );
}
