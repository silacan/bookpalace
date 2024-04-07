# Book Palace

## Project Description
Book Palace is an innovative online bookstore that enables users to explore, search for, and purchase their favorite books with ease. The project aims to provide a seamless and interactive shopping experience for book lovers, featuring a wide range of genres, authors, and best-selling titles.

## Usage Scenarios
1. **Exploring Books:** Users land on the homepage, where they can browse through various categories including genres, writers, and publishers.
2. **Searching for Books:** Users utilize the search bar to find specific books based on titles or authors.
3. **Viewing Book Details:** By clicking on a book, users can access detailed information about the book, such as synopsis, author, and price.
4. **Adding Books to Cart:** Users can add books to their shopping cart and proceed to checkout.
5. **Managing User Profile:** Users can create an account, log in, and manage their profile and order history.


## Instructions for Running the Project
To run Book Palace locally, follow these steps:
1. Clone the repository: `git clone https://github.com/silacan/bookpalace.git`
2. Navigate to the project directory: `cd bookpalace`
3. Install dependencies (if any): `npm install`
4. Start the application: open `index.html` in your web browser.

**External Libraries:**
- No external libraries specified. This project uses HTML, CSS, and JavaScript for its implementation. The decision to avoid external libraries was made to keep the project simple and straightforward for educational purposes.

## Additional Notes
- The search functionality in `index.html` is designed to filter books based on user input. Currently, this feature is simulated using JavaScript and does not connect to an actual backend service.
- When users click "Add to Cart" on a book's detail page, the book title is stored in `localStorage` and the user is redirected to `cart.html`, where the selected books are listed.

