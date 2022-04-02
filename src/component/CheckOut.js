import React from 'react';

export const CheckOut = () => {
  return (
    <section className='check-out'>
      <div className='container border-dark border-bottom border-top my-5 py-4'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='row h-100'>
              <div className='d-none d-lg-flex col-lg-3 align-items-start'>
                <img
                  src='https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/spirit/check-out/50d8061c0434175f65976c3afbb8209c/tag.svg'
                  width='103'
                  height='167'
                  className='img-fluid'
                  alt=''
                ></img>
              </div>
              <div className='col-lg-9 d-flex flex-column mb-4 mb-lg-0'>
                <h3>See our pricing</h3>
                <p>
                  Whether you’re a team of 2 or 2,000, there’s a Trello
                  tailor-made for your organization.
                </p>
                <p className='m-0'>
                  <a
                    className='btn btn-outline-primary btn-sm px-4'
                    href='/pricing'
                  >
                    Trello pricing
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='row h-100'>
              <div className='d-none d-lg-flex col-lg-3 align-items-start'>
                <img
                  src='https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/spirit/check-out/0efeb9f898969b67a9b80dca30183b9d/compass.svg'
                  width='134'
                  height='161'
                  className='img-fluid'
                  alt=''
                ></img>
              </div>
              <div className='col-lg-9 d-flex flex-column'>
                <h3>Take a Trello tour</h3>
                <p>
                  Explore the world of boards and beyond in Trello. Dive deeper
                  into our most popular features.
                </p>
                <p className='m-0'>
                  <a
                    className='btn btn-outline-primary btn-sm px-4'
                    href='/tour'
                  >
                    Tour Trello
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
