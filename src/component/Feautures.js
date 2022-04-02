import React from 'react';

export const Feautures = () => {
  return (
    <section className='features'>
      <div className='container'>
        <div className='row py-4'>
          <div className='col-lg-6'>
            <h2>Features to help your team succeed</h2>
            <p>
              Powering a productive team means using a powerful tool (and plenty
              of snacks). From meetings and projects to events and goal setting,
              Trello’s intuitive features give any team the ability to quickly
              set up and customize workflows for just about anything.
            </p>
          </div>
        </div>
        <div className='row py-5'>
          <div className='col-md-5 mb-3 mb-md-0'>
            <img
              src='https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/spirit/features/5f90e4a913ac52092f2ac7ff308c45c4/view.svg'
              width='414.57'
              height='312.57'
              className='img-fluid w-100'
            ></img>
          </div>
          <div className='detail col-md-7'>
            <h5>Choose a view</h5>
            <h2>The board is just the beginning</h2>
            <p className='text-secondary'>
              Lists and cards are the building blocks of organizing work on a
              Trello board. Grow from there with task assignments, timelines,
              productivity metrics, calendars, and more.
            </p>
            <div className='accordion'>
              <div className='button'>
                <h3>
                  <a>Learn more</a>
                </h3>
              </div>
              <div className='content'>
                <p>
                  You and your team can start up a Trello board in seconds. With
                  the ability to view board data from many different angles, the
                  entire team stays up-to-date in the way that suits them best:
                </p>
                <ul>
                  <li>Use a Timeline view for project planning</li>
                  <li>Calendar helps with time management</li>
                  <li>Table view connects work across boards</li>
                  <li>See board stats with Dashboard, and more!</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='row py-5'>
          <div className='col-md-5 mb-3 mb-md-0 order-md-2'>
            <img
              src='https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/spirit/features/b845022d8d738ba8fa5e8b293e434149/card-back.svg'
              width='339.13'
              height='275.31'
              className='img-fluid w-100'
            ></img>
          </div>
          <div className='detail col-md-7'>
            <h5>Dive into the details</h5>
            <h2>Cards contain everything you need</h2>
            <p className='text-secondary'>
              Trello cards are your portal to more organized work—where every
              single part of your task can be managed, tracked, and shared with
              teammates. Open any card to uncover an ecosystem of checklists,
              due dates, attachments, conversations, and more.
            </p>
            <div className='accordion'>
              <div className='button'>
                <h3>
                  <a>Learn more</a>
                </h3>
              </div>
              <div className='content'>
                <p>
                  Spin up a Trello card with a click, then uncover everything it
                  can hold. Break down bigger card tasks into steps with file
                  attachment previews, reminders, checklists and comments—emoji
                  reactions included! Plus, gain powerful perspective by seeing
                  all cards by list and status at the board level.
                </p>
                <p>Your team can:</p>
                <ul>
                  <li>Manage deadlines</li> <li>Provide and track feedback</li>
                  <li>Assign tasks and hand off work</li>
                  <li>Connect work across apps</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='row py-5'>
          <div className='col-md-5 mb-3 mb-md-0'>
            <img
              src='https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/spirit/features/35366a300daac434fa02bc3ef83d8132/automation.png'
              width='979'
              height='740'
              className='img-fluid w-100'
            ></img>
          </div>
          <div className='detail col-md-7'>
            <h5>Meet your new Butler</h5>
            <h2>No-code automation</h2>
            <p className='text-secondary'>
              Let the robots do the work—so your team can focus on work that
              matters. With Trello’s built-in automation, Butler, reduce the
              number of tedious tasks (and clicks) on your project board by
              harnessing the power of automation across your entire team.
            </p>
            <div className='accordion'>
              <div className='button'>
                <h3>
                  <a>Learn more</a>
                </h3>
              </div>
              <div className='content'>
                <p>
                  Butler uses natural language commands to automate just about
                  any task in Trello:
                </p>
                <ul>
                  <li>Automate common actions like moving lists</li>
                  <li>Create custom buttons to build process quickly</li>
                  <li>Surface upcoming deadlines to the team</li>
                  <li>Schedule teammate assignments, and more!</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='row py-5'>
          <div className='col-md-5 mb-3 mb-md-0 order-md-2'>
            <img
              src='https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/spirit/features/7a11db312701af17abefa8e691cf124a/power-ups.png'
              width='753'
              height='678'
              className='img-fluid w-100'
            ></img>
          </div>
          <div className='detail col-md-7'>
            <h5>Power-Ups</h5>
            <h2>Integrate top work tools</h2>
            <p className='text-secondary'>
              Easily connect the apps your team already uses into your Trello
              workflow, or add a Power-Up that helps fine-tune one specific
              need. With hundreds of Power-Ups available, your team’s workflow
              wishes are covered.
            </p>
            <div className='accordion'>
              <div className='button'>
                <h3>
                  <a>Learn more</a>
                </h3>
              </div>
              <div className='content'>
                <p>
                  From Reporting to Custom Fields to your beloved software
                  integrations—we’ve got functionalities, your favorites, and
                  more!
                </p>
                <p>Such as:</p>
                <ul>
                  <li>Confluence</li> <li>Slack</li> <li>Dropbox</li>
                  <li>Google Drive</li> <li>Evernote</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
