import React from 'react';

export const CustomerStories = () => {
  return (
    <section className='customer-stories'>
      <div id='carousel' className='carousel slide' data-bs-ride='carousel'>
        <span></span>
        <div className='carousel-controls'>
          <ol className='carousel-indicators'>
            <li
              type='button'
              data-bs-target='#carousel'
              data-bs-slide-to='0'
              className='active'
              aria-current='true'
              aria-label='Slide 1'
            ></li>
            <li
              type='button'
              data-bs-target='#carousel'
              data-bs-slide-to='1'
              aria-label='Slide 2'
            ></li>
            <li
              type='button'
              data-bs-target='#carousel'
              data-bs-slide-to='2'
              aria-label='Slide 3'
            ></li>
            <li
              type='button'
              data-bs-target='#carousel'
              data-bs-slide-to='3'
              aria-label='Slide 4'
            ></li>
          </ol>
          <button
            className='carousel-control-prev'
            type='button'
            data-bs-target='#carousel'
            data-bs-slide='prev'
          >
            <span
              className='carousel-control-prev-icon'
              aria-hidden='true'
            ></span>
            <span className='visually-hidden'>Previous</span>
          </button>
          <button
            className='carousel-control-next'
            type='button'
            data-bs-target='#carousel'
            data-bs-slide='next'
          >
            <span
              className='carousel-control-next-icon'
              aria-hidden='true'
            ></span>
            <span className='visually-hidden'>Next</span>
          </button>
        </div>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <div className='row cont'>
              <div className='image col-md-3'>
                <div>
                  <img src='https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/spirit/customer-stories/4c529ec1377a131a1ae1772cb57b5ab2/ebay.svg'></img>
                </div>
                <div className='d-none d-md-block mb-md-5'>
                  <h5>Industry</h5> <h3 className='m-0'>eCommerce</h3>
                </div>
              </div>
              <div className='text col-md-9 text-md-left'>
                <p>
                  Everyone loves it; it has democratized our finance function.
                  In some ways Trello shattered hierarchy and brought us
                  together.
                </p>
                <div className='user'>
                  <h5 className='m-0'>Bharath Sundar</h5>
                  <h4> Finance, eBay </h4>
                </div>
              </div>
            </div>
          </div>
          <div className='carousel-item'>
            <div className='row cont'>
              <div className='image col-md-3'>
                <div>
                  <img src='https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/spirit/customer-stories/92d313945b0328e62cd9968ea7026700/egencia.svg'></img>
                </div>
                <div className='d-none d-md-block mb-md-5'>
                  <h5>Industry</h5> <h3 className='m-0'>Travel</h3>
                </div>
              </div>
              <div className='text col-md-9 text-md-left'>
                <p>
                  Very simple to use, great automation and keeps me on track
                  with all I need to do. I also like that it can be shared with
                  others.
                </p>
                <div className='user'>
                  <h5 className='m-0'>Kerry Parker-Evans</h5>
                  <h4> IT Project Manager, Egencia </h4>
                </div>
              </div>
            </div>
          </div>
          <div className='carousel-item'>
            <div className='row cont'>
              <div className='image col-md-3'>
                <div>
                  <img src='https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/spirit/customer-stories/2f3fc11945305a393eec0b6f8fe97531/detroit-red-wings.svg'></img>
                </div>
                <div className='d-none d-md-block mb-md-5'>
                  <h5>Industry</h5> <h3 className='m-0'>Sport</h3>
                </div>
              </div>
              <div className='text col-md-9 text-md-left'>
                <p>
                  Trello makes it easy to keep everyone on the same page. As
                  changes happen, the real-time updates with email notifications
                  have been key.
                </p>
                <div className='user'>
                  <h5 className='m-0'>Haydon Dotson</h5>
                  <h4> Sales Manager, Detroit Red Wings </h4>
                </div>
              </div>
            </div>
          </div>
          <div className='carousel-item'>
            <div className='row cont'>
              <div className='image col-md-3'>
                <div>
                  <img src='https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/spirit/customer-stories/f93e7c80e565d256f80d72ef924f18c8/sprout-social.svg'></img>
                </div>
                <div className='d-none d-md-block mb-md-5'>
                  <h5>Industry</h5> <h3 className='m-0'>Marketing</h3>
                </div>
              </div>
              <div className='text col-md-9 text-md-left'>
                <p>
                  Now that we've switched to a remote environment, with the use
                  of Trello, we can now limit the number of meetings we have
                  regarding specific projects and turn to Trello for updates
                  instead.
                </p>
                <div className='user'>
                  <h5 className='m-0'>Haley Ennes</h5>
                  <h4> HR Manager, Sprout Social </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
