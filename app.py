from flask import Flask, jsonify, request, render_template
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # 允许跨域访问

# 初始化爱心计数
love_count = 0

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get-love-count', methods=['GET'])
def get_love_count():
    return jsonify({'count': love_count})

@app.route('/add-love', methods=['POST'])
def add_love():
    global love_count
    love_count += 1
    return jsonify({'count': love_count})

if __name__ == '__main__':
    app.run(debug=True)
