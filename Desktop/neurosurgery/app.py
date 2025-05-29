from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key = 'secret_key'

@app.route('/', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        if username == 'your_username' and password == 'your_password':
            session['logged_in'] = True
            return redirect('/homepage')
        else:
            return render_template('login.html', error='Invalid credentials')
    return render_template('login.html')

@app.route('/homepage')
def homepage():
    if 'logged_in' in session:
        return render_template('homepage.html')
    else:
        return redirect('/')


