from app import app
# from flask import request,redirect,url_for
# from flask import render_template
# from app import db


@app.route("/")
def index():
    return "Hello World!"

