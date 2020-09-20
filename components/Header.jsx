import React from 'react';
import Link from 'next/link';
import Drawer from './Drawer';

export default function Header() {
  return (
    <div className="container">
      <div className="header">
        <div className="mob-navbar">
          <Link href="/">
            <a className="mob-link" href="/">
              <h1 className="mob-title">Hari Om Academy</h1>
            </a>
          </Link>
          <Drawer />
        </div>
        <div className="nav-container">
          <Link href="/">
            <a className="logo" href="/">Hari Om Academy</a>
          </Link>
          <ul className="left-nav">
            <li>
              <Link href="/courses">
                <a href="/courses">Courses</a>
              </Link>
            </li>
            <li>
              <Link href="/gallery">
                <a href="/gallery">Gallery</a>
              </Link>
            </li>
            <li>
              <Link href="/testseries">
                <a href="/testseries">Test Series</a>
              </Link>
            </li>
            {/* <li>
              <Link href="/fees">
                <a href="/fees">Fee Structure</a>
              </Link>
            </li> */}
            <li>
              <Link href="/faculties">
                <a href="/faculties">Faculties</a>
              </Link>
            </li>
          </ul>
          <ul className="right-nav">
            <li>
              <Link href="/contact">
                <a href="/contact">Contact</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a href="/about">About</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <style jsx>
        {`
        .container {
          background: var(--brand-color);
        }
        .header {
          display: flex;
          justify-content: space-between;
          padding: 40px 0;
          max-width: var(--width-desktop);
          margin: 0 auto;
        }
        .mob-navbar, .mob-nav {
          display: none;
        }
        .left-nav li, .right-nav li{
          display: inline-block;
        }
        .left-nav li {
          margin-right: 10px;
        }
        .right-nav li {
          margin-left: 20px;
        }
        .left-nav li a, .right-nav li a {
          text-decoration: none;
          text-transform: uppercase;
          font-family: 'Rubik';
          font-weight: 500;
          font-size: 14px;
          color: rgba(255,255,255,0.6);
          padding: 6px 10px;
          border-radius: 6px;
          transition: all 0.2s;
        }
        .left-nav li a:hover, .right-nav li a:hover{
          color: rgba(255,255,255,1);
          background: rgba(0,0,0,0.1);
        }
        .logo {
          text-decoration: none;
          text-transform: uppercase;
          font-family: 'Rubik';
          font-weight: 600;
          color: var(--brand-color);
          padding: 10px 18px;
          background: #fff;
          border-radius: 6px;
          margin-right: 30px;
        }
        .nav-container {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        @media only screen and (max-width: 992px) {

          .nav-container, .right-nav{
            display: none;
          }
          .header {
            padding: 0;
          }
          .mob-navbar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: var(--brand-color);
            width: 100%;
            padding: 15px 10px;
          }
          .mob-title {
            font-family: 'Rubik';
            font-weight: 600;
            //color: #172B4D;
            text-transform: uppercase;
            font-size: 16px;
            background: #fff;
            color: var(--brand-color);
            border-radius: 4px;
            padding: 10px 16px;
          }
          .block {
            display: block;
          }
          .mob-nav {
            display: none; /* Hidden by default */
            position: fixed; /* Stay in place */
            z-index: 100; /* Sit on top */
            left: 0;
            top: 0;
            width: 100%; /* Full width */
            height: 100%; /* Full height */
            overflow: auto; /* Enable scroll if needed */
            background-color: rgba(9,30,66); /* Fallback  */
            background-color: rgba(9,30,66,.42); /* color w/ opacity */
          }
          .mob-link {
            text-decoration: none;
          }
          
        }

      `}
      </style>
    </div>

  );
}
