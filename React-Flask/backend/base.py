from flask import Flask, request, jsonify, abort
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

users = []

@app.route("/getusers", methods=["GET"])
def getusers():
    return users

@app.route('/addppl', methods=['POST'])
def addppl(): 
    data = request.json

    users.append({
        "name" : data['name'],
        "age" : data["age"],
        "status" : data["status"]
    })

    return users

@app.route('/deluser/<index>', methods=['DELETE'])
def deluser(index):
    users.pop(int(index))
    return users

if __name__ == "__main__":
    app.run(debug=True)