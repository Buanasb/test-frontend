import React from 'react';

export const Hero = () => {
  return (
    <section className='hero'>
      <div className='container content text-center text-md-start'>
        <div className='row d-flex justify-content-between'>
          <div className='content-left col-lg-7'>
            <h1>Trello helps teams move work forward.</h1>
            <p className='mb-5'>
              Collaborate, manage projects, and reach new productivity peaks.
              From high rises to the home office, the way your team works is
              unique—accomplish it all with Trello.
            </p>
            <form className='row d-flex justify-content-between'>
              <div className='col-md-7'>
                <input
                  className='input d-none d-md-block'
                  type='text'
                  placeholder='Email'
                />
              </div>
              <div className='col-md-5'>
                <button className='submit btn btn-primary'>
                  Sign up—it’s free!
                </button>
              </div>
            </form>
          </div>
          <div className='content-right col-lg-5'>
            <img
              src='https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/spirit/hero/6a3ccd8e5c9a0e8ebea4235d12da6b24/hero.png'
              width='931'
              height='1205'
              className='img-fluid d-none d-lg-block'
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
};
