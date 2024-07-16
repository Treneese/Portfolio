#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, session, make_response, Flask
from flask_restful import Resource

# Local imports
from config import app, db, api
# Add your model imports
from models import Project, Education, Blog, Contact

@app.route('/api/projects', methods=['GET'])
def get_projects():
    projects = Project.query.all()
    return make_response([project.to_dict() for project in projects])

@app.route('/api/projects', methods=['POST'])
def add_project():
    data = request.get_json()
    new_project = Project(
        title=data['title'],
        about=data.get('about', ''),
        description=data.get('description', ''),
        technologies=data.get('technologies', ''),
        features=data.get('features', ''),
        challenges=data.get('challenges', ''),
        demo=data.get('demo', ''),
        github=data.get('github', ''),
        image=data.get('image', '')
    )
    db.session.add(new_project)
    db.session.commit()
    return make_response(new_project.to_dict()), 201

@app.route('/api/education', methods=['GET'])
def get_education():
    education = Education.query.all()
    return make_response(([edu.to_dict() for edu in education]))

@app.route('/api/education', methods=['POST'])
def add_education():
    data = request.get_json()
    new_education = Education(
        name=data['name'],
        field=data.get('field', ''),
        degree_certification_type=data.get('degree_certification_type', ''),
        start_date=data.get('start_date', None),
        end_date=data.get('end_date', None),
        school_link=data.get('school_link', '')
    )
    db.session.add(new_education)
    db.session.commit()
    return make_response(new_education.to_dict()), 201

@app.route('/api/blogs', methods=['GET'])
def get_blogs():
    blogs = Blog.query.all()
    return make_response(([blog.to_dict() for blog in blogs]))

@app.route('/api/blogs', methods=['POST'])
def add_blog():
    data = request.get_json()
    new_blog = Blog(
        title=data['title'],
        description=data.get('description', ''),
        image=data.get('image', ''),
        link=data.get('link', '')
    )
    db.session.add(new_blog)
    db.session.commit()
    return make_response(new_blog.to_dict()), 201

@app.route('/api/contacts', methods=['GET'])
def get_contacts():
    contacts = Contact.query.all()
    return make_response(([contact.to_dict() for contact in contacts]))

@app.route('/api/contacts', methods=['POST'])
def add_contact():
    data = request.get_json()
    new_contact = Contact(
        email=data['email'],
        linkedin=data.get('linkedin', ''),
        github=data.get('github', ''),
        blog=data.get('blog', '')
    )
    db.session.add(new_contact)
    db.session.commit()
    return make_response(new_contact.to_dict()), 201



@app.route('/')
def index():
    return '<h1>Welcome to my portfolio API</h1>'


if __name__ == '__main__':
    app.run(port=5555, debug=True)

