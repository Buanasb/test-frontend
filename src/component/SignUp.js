import React from 'react';

export const SignUp = () => {
  return (
    <section className='sign-up'>
      <div className='container py-5'>
        <div className='inner text-center py-5 px-3 py-lg-6'>
          <div className='row'>
            <div className='col-md-8 offset-md-2'>
              <h3 className='m-0 mb-5'>
                Sign up and get started with Trello today. A world of productive
                teamwork awaits!
              </h3>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6 offset-md-3'>
              <form className='row'>
                <div className='d-none d-md-block col-md-8 pr-md-1'>
                  <input
                    name='email'
                    className='form-control h-100'
                    type='email'
                    placeholder='Email'
                  ></input>
                </div>
                <div className='col-md-4 pl-md-1'>
                  <button type='submit' className='btn btn-block btn-secondary'>
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
