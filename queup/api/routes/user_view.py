from flask import request, Response, redirect, jsonify, Blueprint
import json

user_view = Blueprint('home_page', __name__)

@user_view.route('/', methods=['GET'])
def current_queues():
    if  request.method == 'GET': 
        try:
            queue_items = Queue_item.query.order_by(Queue_item.time_joined).all()

            queue_items_dic = {}
            for item in queue_items:
                queue_items_dic[item.queue_id] = {'court_id': item.court_id, 'time_joined': item.time_joined.strftime('%Y-%m-%d %H:%M:%S')}

            response_data = {
                'status': "success",
                'data': queue_items_dic
            }
            return jsonify(response_data), 200
        
        except Exception as e:
            # Print the exception to see what went wrong
            print(e)
            return 'There was an issue fetching current queue_items data', 500
    else:
        return 'hello world'
    
@user_view.route('/add', methods=['GET', "POST"])
def join_the_queue():
    if request.method == 'POST':  # write a new queue_item to the db
        request_data = request.get_json()
        name = request_data.get('name')
        court_id = request_data.get('court_id')
        new_queue_item = Queue_item(name= name, court_id=court_id) # create a new queue_item instance

        try:
            db.session.add(new_queue_item) # write the newly created instance to db
            db.session.commit()
            response_data = {
                'status': 'success',
                'message': 'new queue_item added',
            }
            return jsonify(response_data), 200
        
        except Exception as e:
            print(e)
            return 'There was an issue adding you to the queue', 500
    else: 
        return "hello world"
    

'''
@app.route('/delete/<int:queue_id>')
def delete(queue_id):
    to_delete = Queue_item.query.get_or_404(queue_id)

    try:
        db.session.delete(to_delete)
        db.session.commit()
        return redirect('/')
    except:
        return 'There was an issue when removing this data entry'
'''
