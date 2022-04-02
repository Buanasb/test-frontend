import React from 'react';

export const Footer = () => {
  return (
    <section className='footer'>
      <div className='select-menu d-flex justify-content-center mb-4'>
        <div className='square'>
          <p className='mb-0'>English (US)</p>
        </div>
      </div>
      <ul className='menu-list mb-3'>
        <li>
          <a href='#'>Templates</a>
        </li>
        <li>
          <a href='#'>Pricing</a>
        </li>
        <li>
          <a href='#'>Apps</a>
        </li>
        <li>
          <a href='#'>Jobs</a>
        </li>
        <li>
          <a href='#'>Blog</a>
        </li>
        <li>
          <a href='#'>Developers</a>
        </li>
        <li>
          <a href='#'>About</a>
        </li>
        <li>
          <a href='#'>Help</a>
        </li>
        <li>
          <a href='#'>Legal</a>
        </li>
        <li>
          <a href='#'>Cookie Settings</a>
        </li>
        <li>
          <a href='#'>Privacy</a>
        </li>
      </ul>
      <div className='logo'>
        <img
          src='https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/6cdbcb3dcf82bba860f1768d184161ee/atlassian-logo-gray-small.svg'
          width='150'
        ></img>
      </div>
      <p>© Copyright 2022. All rights reserved.</p>
    </section>
  );
};
