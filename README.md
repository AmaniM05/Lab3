# Shopping List

This Angular application lets a user add items to a shopping list and remove them when they are no longer needed.

## Requirements

- Node.js
- npm

## Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/AmaniM05/Lab3.git
cd Lab3
npm install
```

## Running the application

Start the development server:

```bash
npm start
```

Open `http://localhost:4200` in a browser.

## Tests

Run the tests once:

```bash
npm test -- --watch=false
```

## Production build

Create a production build:

```bash
npm run build
```

The completed build is saved in `dist/lab3-shopping-list`.

## Application structure

- `App` stores the shopping list and connects the two child components.
- `AddItem` accepts a new item and sends it to the parent component.
- `ShoppingList` displays the items and sends deletion requests to the parent component.
