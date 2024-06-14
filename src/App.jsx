import React from 'react';
import Services from './sections/Services';
import SpecialOffers from './sections/SpecialOffers';
import Subscribers from './sections/Subscribers';
import SuperQuality from './sections/SuperQuality';
import PopularProducts from './sections/PopularProducts';
import Hero from './sections/Hero';
import Footer from './sections/Footer';
import CustomerReviews from './sections/CustomerReviews';
import Nav from './components/Nav';

const App = () => (
  <main className='relative'>
    
      <Nav />
  
    <section className='xl:padding-1 wide:padding-r padding-b'>
      <Hero />
    </section>

    <section className='padding'>
      <PopularProducts />
    </section>

    <section className='padding'>
      <SuperQuality />
    </section>

    <section className='padding'>
      <Services />
    </section>

    <section className='padding'>
      <SpecialOffers />
    </section>

    <section className='bg-pale-blue padding'>
      <CustomerReviews />
    </section>

    <section className='padding-x sm:py-32 py-16 w-full'>
      <Subscribers />
    </section>

    <section className='bg-black padding-x padding-t pb-8'>
      <Footer />
    </section>
  </main>
);

export default App;
