import React from 'react';
import config from '../content/site_config.json';

export default function Stats() {
  return (
    <div className="stats-container">
      <h1 className="title">Our collective efforts over years</h1>
      <div className="stats-content">
        {config.site_stats.map((stat) => (
          <div className="stats-item" key={stat.name}>
            <h1>{stat.count}</h1>
            <p>{stat.name}</p>
          </div>
        ))}
      </div>
      <style jsx>
        {`
          .stats-container {
            padding: 80px 20px;
            max-width: 1200px;
            margin: 0 auto;
          }
          .title, .stats-item h1 {
            font-family: 'Rubik';
            font-weight: 500;
            font-size: 36px;
            color: #172B4D;
          }
          .title {
            margin: 30px 0 50px 0;
            text-align:center;
          }
          .stats-content {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            grid-gap: 1.3rem;
            margin: 0 auto;
            text-align: center;
          }
          .stats-item h1 {
            font-family: 'Rubik';
            margin-bottom: 6px;
          }
          .stats-item p {
            color: #6B778C;
          }
          @media only screen and (max-width: 992px) {
            .title, .stats-item h1 {
              font-size: 28px;
            }
            .stats-container {
              padding: 20px;
            }
            .title {
              margin: 30px 0;
            }
         }
        `}
      </style>
    </div>
  );
}
