#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc
from datetime import datetime

from app import app, db
from models import Project, Education, Blog, Contact
# Local imports
projects = [
    Project(
        title='Indie Films',
        description='This was my first app, it is a solo Javascript app based on exploring Indie Films.',
        technologies='JavaScript, HTML, CSS, Json',
        features='Tongle side-bar, Functional video play',
        challenges='Getting the vedeos to show up and play on site.',
        demo='https://www.youtube.com/watch?v=1qlV-3ZA9WI&t=24s',
        github='https://github.com/Treneese/IndieFilms.git',
        image='/Indie_Films.png'
    ),
    Project(
        title='My Culture',
        description='This is a solo app and a React app based on Event finding.',
        technologies='React, CSS, Json',
        features='Chat, Eventcards, Event Form, Catigories',
        challenges='Getting the catigoriest to only pull specific card.',
        demo='https://www.youtube.com/watch?v=WbR-eHvrAOc',
        github='https://github.com/Treneese/MyCulture.git',
        image='/My_Culture.png'
    ),
    Project(
        title='YouFlix',
        description='This was a group project with myself and 3 other classmates. It is a Full-Slack project, React frontend and Flask Backend. It is a app that shows youtube shows and skits.',
        technologies='React, Flask, CSS, ',
        features='Functional video play, Self click Showcards, Catigories, Autherization.',
        challenges='Github merging for a team of 4.',
        demo='https://youtu.be/jxbZRaM9Klw?si=AEBwoR27SsG3Ms_z',
        github='https://github.com/Treneese/YouFlix.git',
        image='/YouFlix.png'
    ),
    Project(
        title='GreenBook - Bon Voyage',
        description='This is a solo app, Full-slack and it is an app that helps you create a safer tavel ass a community.',
        technologies='React, Flask, CSS, Mapbox, Bcrypt',
        features='Review community chat and Map navigation.',
        challenges='Completing Authentification and my map.',
        demo='https://youtu.be/nv83-ZK0gog?si=qpi0phUKFLrwuT7D',
        github='https://github.com/Treneese/MyGreenBook.git',
        image='/Bon_Voyage.png'
    ),
    # Project(
    #     title='Bank',
    #     description='A project done with two other classmates, this is a backend banking app.',
    #     technologies='Python, Sqlite, Bcrypt',
    #     features='hashed SSN',
    #     challenges='Communication',
    #     demo='http://example.com/demo2',
    #     github='http://github.com/example2',
    #     image='http://example.com/image2.jpg'
    # ),
]

education= [
   
    Education(
        name='Flatiron ',
        field='Software Engineering',
        degree_certification_type='Bootcamp Certificate',
        start_date='2024-04-01',
        end_date='2024-07-12',
        school_link='https://flatironschool.com/welcome-to-flatiron-school/?utm_source=Google&utm_medium=ppc&utm_campaign=12728169833&utm_content=127574238224&utm_term=flatiron%20online%20bootcamp&uqaid=513747011494&CjwKCAjwy8i0BhAkEiwAdFaeGFPRZHQ_lPyUdHs6g8ZRlI4yzFj3Z9SYEKIwgg7cwU7CEPNvEuY7FxoCF74QAvD_BwE&gad_source=1&gclid=CjwKCAjwy8i0BhAkEiwAdFaeGFPRZHQ_lPyUdHs6g8ZRlI4yzFj3Z9SYEKIwgg7cwU7CEPNvEuY7FxoCF74QAvD_BwE'
    ),
     Education(
        name='Clark Atlanta University',
        field='Mass Media Art',
        degree_certification_type='B.A.',
        start_date='2015-09-11',
        end_date='2021-06-13',
        school_link='https://www.cau.edu/'
    ),
]


blogs = [
    Blog(
        title='Adding a Menu to change the Content on A SPA',
        description='Using JavaScript, CSS, and HTLM to add a menu that changes the content on a single-page application (SPA).',
        image='https://miro.medium.com/v2/resize:fit:650/1*j2JhfQovnls1LyrVHlYy3w.png',
        link='https://medium.com/@treneesejohnson9012/adding-a-menu-to-change-the-content-on-a-spa-fed85fc3c506'
    ),
    Blog(
        title='Creating a secure Social Security Numbers (SSNs) in Python',
        description='To securely manage Social Security Numbers (SSNs) in a Python, you can use bcrypt for hashing and verification. This approach ensures that SSNs are stored securely and can be verified without exposing the original values.',
        image='https://qph.cf2.quoracdn.net/main-qimg-42849ea4983280758b12fc398605b938',
        link='https://medium.com/@treneesejohnson9012/creating-a-secure-social-security-numbers-ssns-in-python-49edf3179ae6'
    ),
       Blog(
        title='GET, POST, PATCH, and DELETE',
        description='We will be going over and explaining 4 important fetch requests in JavaScript(GET, POST, PATCH, and DELETE).',
        image='https://www.atatus.com/glossary/content/images/size/w960/2021/07/CRUD.jpeg',
        link='https://medium.com/@treneesejohnson9012/get-post-patch-and-delete-dc714722527f'
    ),
       Blog(
        title='To Becoming a Full-Stack Software Engineer',
        description='A Full-Stack Software Engineer is a versatile developer proficient in both front-end and back-end technologies, capable of creating complete web applications from scratch.',
        image='https://www.sovereignconsult.com/wp-content/uploads/2020/02/fullstack-copy-copy.jpg',
        link='https://medium.com/@treneesejohnson9012/to-becoming-a-full-stack-software-engineer-4178a1406dcb'
    ),
       Blog(
        title='What Makes Me Want to Be a Software Engineer',
        description='My desire to be a software engineer stems from a combination of passion.',
        image='https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/positive-work-enviornment-hero.jpg?d=500x500&f=inside',
        link='https://medium.com/@treneesejohnson9012/what-makes-me-want-to-be-a-software-engineer-5bd746e6715e'
    ),
]

contacts = [
    Contact(
        email='treneesejohnson9012@gmail.com',
        linkedin='https://www.linkedin.com/in/treneese-johnson-b55b3926a/',
        github='https://github.com/Treneese',
        blog='https://medium.com/@treneesejohnson9012',
        youtube='https://www.youtube.com/@treneesejohnson'
    ),
]

def seed_data():
    with app.app_context():
        db.drop_all()
        db.create_all()

        db.session.add_all(projects)
        db.session.add_all(education)
        db.session.add_all(blogs)
        db.session.add_all(contacts)

        db.session.commit()

if __name__ == '__main__':
    seed_data()
    print("Database seeded successfully!")

