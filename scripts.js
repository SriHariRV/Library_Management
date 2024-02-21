const books = [
  { name: "The Hidden Gem", author: "Emma Smith", publishedDate: "01/01/2010", genre: "Adventure" },
  { name: "Echoes of Serenity", author: "Jacob Johnson", publishedDate: "02/02/2011", genre: "Fantasy" },
  { name: "The Midnight Detective", author: "Sophie Brown", publishedDate: "03/03/2012", genre: "Mystery" },
  { name: "Love's Journey", author: "Olivia White", publishedDate: "04/04/2013", genre: "Romance" },
  { name: "Whispers in the Shadows", author: "Michael Clark", publishedDate: "05/05/2014", genre: "Thriller" },
  { name: "Galactic Odyssey", author: "Ethan Turner", publishedDate: "06/06/2015", genre: "Science Fiction" },
  { name: "The Time Traveler's Wife", author: "Isabella Garcia", publishedDate: "07/07/2016", genre: "Historical Fiction" },
  { name: "Island Adventures", author: "Lucas Rodriguez", publishedDate: "08/08/2017", genre: "Adventure" },
  { name: "The Enchanted Forest", author: "Ava Martinez", publishedDate: "09/09/2018", genre: "Fantasy" },
  { name: "The Case of the Missing Heirloom", author: "Noah Harris", publishedDate: "10/10/2019", genre: "Mystery" },
  { name: "A Tale of Two Hearts", author: "Sophia Lee", publishedDate: "11/11/2020", genre: "Romance" },
  { name: "Darkness Falls", author: "Benjamin Taylor", publishedDate: "12/12/2021", genre: "Thriller" },
  { name: "The Quantum Paradox", author: "David Wilson", publishedDate: "01/01/2022", genre: "Science Fiction" },
  { name: "The Last Samurai", author: "Leo Kim", publishedDate: "02/02/2023", genre: "Historical Fiction" },
  { name: "Echoes of Destiny", author: "Grace Turner", publishedDate: "03/03/2024", genre: "Adventure" },
  { name: "The Lost City of Atlantis", author: "Liam Anderson", publishedDate: "04/04/2025", genre: "Adventure" },
  { name: "The Secret Garden", author: "Emily Wilson", publishedDate: "05/05/2026", genre: "Fantasy" },
  { name: "The Mysterious Affair at Styles", author: "Charlotte Christie", publishedDate: "06/06/2027", genre: "Mystery" },
  { name: "A Walk to Remember", author: "Daniel Miller", publishedDate: "07/07/2028", genre: "Romance" },
  { name: "The Girl on the Train", author: "Olivia Roberts", publishedDate: "08/08/2029", genre: "Thriller" },
  { name: "The Martian", author: "Lucas Scott", publishedDate: "09/09/2030", genre: "Science Fiction" },
  { name: "Pride and Prejudice", author: "Emma Thompson", publishedDate: "10/10/2031", genre: "Historical Fiction" },
  { name: "Treasure Island", author: "Nathan Harris", publishedDate: "11/11/2032", genre: "Adventure" },
  { name: "The Chronicles of Narnia", author: "Sophie Turner", publishedDate: "12/12/2033", genre: "Fantasy" },
  { name: "The Da Vinci Code", author: "Isaac Martinez", publishedDate: "01/01/2034", genre: "Mystery" },
  { name: "To Kill a Mockingbird", author: "Harper Lee", publishedDate: "01/01/1960", genre: "Classic" },
  { name: "The Catcher in the Rye", author: "J.D. Salinger", publishedDate: "07/07/1951", genre: "Literary Fiction" },
  { name: "1984", author: "George Orwell", publishedDate: "06/25/1949", genre: "Dystopian Fiction" },
  { name: "The Great Gatsby", author: "F. Scott Fitzgerald", publishedDate: "04/10/1925", genre: "Literary Fiction" },
  { name: "Brave New World", author: "Aldous Huxley", publishedDate: "01/01/1932", genre: "Dystopian Fiction" },
  { name: "Pride and Prejudice", author: "Jane Austen", publishedDate: "01/28/1813", genre: "Romantic Fiction" },
  { name: "To the Lighthouse", author: "Virginia Woolf", publishedDate: "05/05/1927", genre: "Modernist Fiction" },
  { name: "Moby-Dick", author: "Herman Melville", publishedDate: "10/18/1851", genre: "Adventure" },
  { name: "The Picture of Dorian Gray", author: "Oscar Wilde", publishedDate: "07/20/1890", genre: "Gothic Fiction" },
  { name: "Wuthering Heights", author: "Emily Brontë", publishedDate: "12/1847", genre: "Gothic Fiction" }
];



const booksPerPage = 10;
const bookTableBody = document.getElementById('bookTableBody');
const paginationButtons = document.getElementById('paginationButtons');

function displayBooks(pageNumber) {
  bookTableBody.innerHTML = ''; 
  const startIndex = (pageNumber - 1) * booksPerPage;
  const endIndex = startIndex + booksPerPage;
  const displayedBooks = books.slice(startIndex, endIndex);

  displayedBooks.forEach(book => {
    const row = createTableRow(book);
    bookTableBody.appendChild(row);
  });
}


function createTableRow(book) {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${book.name}</td>
    <td>${book.author}</td>
    <td>${book.publishedDate}</td>
    <td>${book.genre}</td>
  `;
  return row;
}

function searchBooks(query) {
  const filteredBooks = books.filter(book =>
    book.name.toLowerCase().includes(query.toLowerCase())
  );
  displayBooks(1, filteredBooks);
}


function filterBooks(genre) {
  const filteredBooks = genre ? books.filter(book => book.genre === genre) : books;
  displayBooks(1, filteredBooks);
}


function displayBooks(pageNumber, filteredBooks = books) {
  bookTableBody.innerHTML = ''; 
  const startIndex = (pageNumber - 1) * booksPerPage;
  const endIndex = startIndex + booksPerPage;
  const displayedBooks = filteredBooks.slice(startIndex, endIndex);

  displayedBooks.forEach(book => {
    const row = createTableRow(book);
    bookTableBody.appendChild(row);
  });
}


function generatePaginationButtons() {
  paginationButtons.innerHTML = ''; 
  const numPages = Math.ceil(books.length / booksPerPage);

  for (let i = 1; i <= numPages; i++) {
    const button = document.createElement('button');
    button.textContent = i;
    button.addEventListener('click', () => displayBooks(i));
    paginationButtons.appendChild(button);
  }
}


displayBooks(1); 
generatePaginationButtons(); 

const tableBody = document.querySelector('#bookTable tbody');
const newlyAddedBookTableBody = document.getElementById('newlyAddedBookTableBody');
const checkoutBtn = document.getElementById('checkoutBtn');
const checkoutForm = document.getElementById('checkoutForm');
const receiptDiv = document.getElementById('receipt');


books.forEach(book => {
  const row = createTableRow(book);
  tableBody.appendChild(row);
});

function addBook(bookName, bookAuthor, publishedDate,genre) {
  const newBook = { name: bookName, author: bookAuthor, publishedDate: publishedDate,genre: genre };
  
  
  const newRow = createTableRow(newBook, true); 
  newlyAddedBookTableBody.appendChild(newRow);
  checkoutBtn.disabled = false; 
}

function createTableRow(book, isNewlyAddedBook = false) {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${book.name}</td>
    <td>${book.author}</td>
    <td>${book.publishedDate}</td>
    ${!isNewlyAddedBook ? `<td>${book.genre}</td>` : ''}
    <td>${isNewlyAddedBook ? '':`<button onclick="addBook('${book.name}', '${book.author}', '${book.publishedDate}','${book.genre}')">Add</button>`}</td>
  `;
  return row;
}


function checkout() {
  checkoutForm.style.display = 'block';
}

function generateReceipt() {
    const userName = document.getElementById('userName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const checkoutDate = document.getElementById('checkoutDate').value;
    
    // Validate input fields
    if (userName.trim() === '' || phoneNumber.trim() === '' || checkoutDate.trim() === '') {
        alert('Please fill in all fields.');
        return;
    }

    
    const newlyAddedBooks = Array.from(newlyAddedBookTableBody.children).map(row => {
        return {
            name: row.cells[0].textContent,
            author: row.cells[1].textContent,
            publishedDate: row.cells[2].textContent,
            genre: row.cells[3].textContent
        };
    });
  }


  
