from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from config import db
from datetime import datetime


# Project Model
class Project(db.Model, SerializerMixin):
    __tablename__ = 'projects'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    description = db.Column(db.String)
    technologies = db.Column(db.String)
    demo = db.Column(db.String)
    github = db.Column(db.String)
    image = db.Column(db.String)

    def __repr__(self):
        return f'<Project id={self.id} title={self.title}>'


# Education Model
class Education(db.Model, SerializerMixin):
    __tablename__ = 'educations'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    image = db.Column(db.String)
    field = db.Column(db.String)
    degree_certification_type = db.Column(db.String)
    start_date = db.Column(db.Date)
    end_date = db.Column(db.Date)
    school_link = db.Column(db.String)

    def __init__(self, name, field, degree_certification_type, start_date, end_date, image, school_link):
        self.name = name
        self.field = field
        self.degree_certification_type = degree_certification_type
        self.start_date = datetime.strptime(start_date, '%Y-%m-%d').date()
        self.end_date = datetime.strptime(end_date, '%Y-%m-%d').date()
        self.image = image
        self.school_link = school_link

    def __repr__(self):
        return f'<Education id={self.id} name={self.name}>'


# Blog Model
class Blog(db.Model, SerializerMixin):
    __tablename__ = 'blogs'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    description = db.Column(db.String)
    image = db.Column(db.String)
    link = db.Column(db.String)

    def __repr__(self):
        return f'<Blog id={self.id} title={self.title}>'


# Contact Model
class Contact(db.Model, SerializerMixin):
    __tablename__ = 'contacts'

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String, nullable=False)
    linkedin = db.Column(db.String)
    github = db.Column(db.String)
    blog = db.Column(db.String)
    youtube = db.Column(db.String)

    def __repr__(self):
        return f'<Contact id={self.id} email={self.email}>'


