# coding: utf-8

from sanic import response, Sanic
from sanic import Blueprint
from sanic_cors import CORS, cross_origin

v1_api = Blueprint('v1', url_prefix='/api/v1')


@v1_api.route('/hello_world', methods=['GET'])
async def hello_world(request):
    '''Return a friendly greeting.
    '''
    return response.json({'content': 'hello world!'})


app = Sanic(__name__)
CORS(app, resources=r'/api/*')

app.blueprint(v1_api)

if __name__ == '__main__':
    app.run(host='localhost', port=7474, debug=True)
