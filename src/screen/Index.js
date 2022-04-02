import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../component/styles/style.css';
import { Navbar } from '../component/Navbar';
import { Hero } from '../component/Hero';
import { Product } from '../component/Product';
import { Feautures } from '../component/Feautures';
import { CheckOut } from '../component/CheckOut';
import { CustomerStories } from '../component/CustomerStories';
import { SignUp } from '../component/SignUp';
import { Apps } from '../component/Apps';
import { Footer } from '../component/Footer';
import '../component/animates';

export const Index = () => {
  return (
    <div>
      <header className='fixed-top'>
        <Navbar />
      </header>
      <Hero />
      <Product />
      <Feautures />
      <CheckOut />
      <CustomerStories />
      <SignUp />
      <Apps />
      <Footer />
    </div>
  );
};
