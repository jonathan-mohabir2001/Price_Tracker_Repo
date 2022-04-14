import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function About() {
  return (
    <div>
      <Container>
        <h1 className="about-header">Our Group for the CPAN-144 Project</h1>
        <h2 className="about-header">Members</h2>
        <CardGroup>
          <Card style={{ width: '25rem' }} className="bg-dark about-card">
            <Card.Body>
              <Card.Title className="text-white">Jonathan Mohabir</Card.Title>
              <Card.Subtitle className="mb-2 text-white text-muted">
                Project Coordinator /App Programmer
              </Card.Subtitle>
              <Card.Text className="text-white">
                Coordinated group project, created home page focusing on react
                boostrap to create home page for brief information on
                cryptocurrency and what makes it unique.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '25rem' }} className="bg-dark about-card">
            <Card.Body>
              <Card.Title className="text-white">Joydeep Parth</Card.Title>
              <Card.Subtitle className="mb-2 text-white text-muted">
                App Programmer / Coin information
              </Card.Subtitle>
              <Card.Text className="text-white">
                Used API information to create table that displays coin
                information coming from the API.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '25rem' }} className="bg-dark about-card">
            <Card.Body>
              <Card.Title className="text-white">Zakaria Abdulkadir</Card.Title>
              <Card.Subtitle className="mb-2 text-white text-muted">
                App Programmer / Axios call{' '}
              </Card.Subtitle>
              <Card.Text className="text-white">
                Developed AXIOS call to retreive information from the CoinGetcko
                API in order to display coin information.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '25rem' }} className="bg-dark about-card">
            <Card.Body>
              <Card.Title className="text-white">Eilaf Aljundi</Card.Title>
              <Card.Subtitle className="mb-2 text-white text-muted">
                App programmer, about form page
              </Card.Subtitle>
              <Card.Text className="text-white">
                Worked on the contact us page. Made the contact us form with
                validation. As well as the main CSS design for the app.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
        <hr className="about-hr"></hr>
        <p className="about-p">
          The purpose of this app is to track the crypto coin prices. This app
          was done as the final project for the Adv. Front-End Programming
          course.
        </p>
      </Container>
    </div>
  );
}

export default About;
