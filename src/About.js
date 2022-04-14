import React from 'react'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'

function About() {
    return (
        <div>
            <Container>
                <h1 className='about-header'>Our Group for the CPAN-144 Project</h1>
                <h2 className='about-header'>Members</h2>
                <CardGroup>
                    <Card style={{ width: '25rem' }} className='bg-dark about-card'>
                        <Card.Body>
                            <Card.Title className='text-white'>Jonathan Mohabir</Card.Title>
                            <Card.Subtitle className="mb-2 text-white text-muted">Project Manager ?</Card.Subtitle>
                            <Card.Text className='text-white'>
                                Brief summary of what you worked on...
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '25rem' }} className='bg-dark about-card'>
                        <Card.Body>
                            <Card.Title className='text-white'>Joydeep Parth</Card.Title>
                            <Card.Subtitle className="mb-2 text-white text-muted">App Programmer ?</Card.Subtitle>
                            <Card.Text className='text-white'>
                                Brief summary of what you worked on...
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '25rem' }} className='bg-dark about-card'>
                        <Card.Body>
                            <Card.Title className='text-white'>Zakaria Abdulkadir</Card.Title>
                            <Card.Subtitle className="mb-2 text-white text-muted">App Programmer ?</Card.Subtitle>
                            <Card.Text className='text-white'>
                                Brief summary of what you worked on...
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '25rem' }} className='bg-dark about-card'>
                        <Card.Body>
                            <Card.Title className='text-white'>Eilaf Aljundi</Card.Title>
                            <Card.Subtitle className="mb-2 text-white text-muted">Customer Support ?</Card.Subtitle>
                            <Card.Text className='text-white'>
                                Worked on the contact us page. Made the contact us form with validation. As
                                well as some CSS for the app.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
                <hr className='about-hr'></hr>
                <p className='about-p'>The purpose of this app is to track the crypto coin prices. This app was done as the final 
                    project for the Adv. Front-End Programming course.</p>
            </Container>
        </div>
    )
}

export default About