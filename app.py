from flask import Flask, render_template, request, jsonify
import mysql.connector
app = Flask(__name__)


books = [
    
]

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/add_book', methods=['POST'])
def add_book():
    data = request.get_json()
    name = data.get('name')
    author = data.get('author')
    published_date = data.get('publishedDate')

    
    books.append({'name': name, 'author': author, 'publishedDate': published_date})

    return jsonify({'success': True})

mysql_config = {
    'host': 'localhost',
    'user': 'user',
    'password': 'password',
    'database': 'lib_man'  
}

def connect_to_database():
    try:
        conn = mysql.connector.connect(**mysql_config)
        return conn
    except mysql.connector.Error as err:
        print(f"Error connecting to MySQL: {err}")
        return None
@app.route('/generate_receipt', methods=['POST'])
def generate_receipt():
    try:
        data = request.get_json()
        if data:
            conn = connect_to_database()
            if conn:
                cursor = conn.cursor()

                
                user_name = data.get('userName')
                phone_number = data.get('phoneNumber')
                checkout_date = data.get('checkoutDate')
                book_names = ', '.join(book['name'] for book in data['newlyAddedBooks'])

                
                query = "INSERT INTO checkout (`User Name`, `Phone Number`, `Checkout Date`, `Newly Added Books`) VALUES (%s, %s, %s, %s)"
                values = (user_name, phone_number, checkout_date, book_names)
                cursor.execute(query, values)

                conn.commit()

                
                print(f"User Name: {user_name}")
                print(f"Phone Number: {phone_number}")
                print(f"Checkout Date: {checkout_date}")
                print(f"Books: {book_names}")

                cursor.close()
                conn.close()
                return jsonify({'message': 'Receipt details added successfully'})
            else:
                return jsonify({'error': 'Failed to connect to the database'})
        else:
            return jsonify({'error': 'No data provided'})
    except Exception as e:
        return jsonify({'error': str(e)})


if __name__ == '__main__':
    app.run(debug=True)
