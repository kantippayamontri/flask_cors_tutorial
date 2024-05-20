from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(
    app,
    resources={r"/*": {"origins": "*"}},
)


@app.route("/")
def user():
    return {"data": {"username": "Kan", "password": "1234"}}

@app.route("/hello")
def hello():
    return {"msg" : "Hello everyone my name is Kan Tippayamontri."}


if __name__ == "__main__":
    app.run(host="localhost", port=5000)