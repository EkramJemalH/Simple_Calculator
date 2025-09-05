# Simple Calculator

A simple web-based calculator built with **HTML, CSS, and JavaScript**. This project allows users to perform basic arithmetic operations including addition, subtraction, multiplication, division, and modulo. It also supports clearing the screen and deleting the last digit entered.

---

## Features

- **Basic Arithmetic:** Addition (`+`), Subtraction (`-`), Multiplication (`*`), Division (`/`), and Modulo (`%`).  
- **Clear Button (AC):** Resets the calculator to `0`.  
- **Delete Button (DEL):** Deletes the last entered digit.  
- **Chained Calculations:** Allows calculations without resetting the screen after each operation.  
- **Decimal Support:** Users can input numbers with decimals.  
- **Responsive Design:** Works on both desktop and mobile screens.

---

## Project Structure

simple-calculator/
│
├── calc.html # Main HTML file
├── calc.css # Styling for the calculator
├── calc.js # JavaScript logic for calculator functionality
└── README.md # Project documentation


---

## HTML Structure

- `.container` – Main wrapper for the calculator.  
- `.screen` – Displays the current input and results.  
- `.number-holder` – Contains all buttons for numbers, operators, and actions.  
- Buttons are categorized with classes and unique IDs:  
  - `.btn` – Number buttons  
  - `.btn_operation` – Operator buttons (`+`, `-`, `*`, `/`, `%`)  
  - `#btn_clear` – Clear button  
  - `#btn_delete` – Delete button  
  - `#btn_equal` – Equal button  

---

## JavaScript Logic

1. **Variables:**
   - `currentInput` – Stores the number currently being typed.  
   - `previousInput` – Stores the previous number before the operator.  
   - `operator` – Stores the selected operator.

2. **Functions:**
   - `updateScreen(value)` – Updates the calculator display with the given value.  
   - `calculate()` – Performs the calculation based on `previousInput`, `currentInput`, and `operator`.  
   - Event listeners handle button clicks for numbers, operators, clear, delete, and equal.

3. **Delete Button Behavior:**  
   - Removes the last digit of `currentInput`.  
   - If `currentInput` is empty, it falls back to display `previousInput`.

4. **Clear Button Behavior:**  
   - Resets all inputs and the operator.  
   - Displays ` ` on the screen.

---

## How to Use

1. Open `index.html` in a web browser.  
2. Click number buttons to enter values.  
3. Click operator buttons to perform operations.  
4. Press `=` to calculate the result.  
5. Use `DEL` to remove the last digit typed.  
6. Use `AC` to reset the calculator.

---


## License

This project is open-source and free to use.

---

## Author

- Name:Ekram Jemal Hassen
- Contact: ekramjemalh@gmail.com
## Socials
linkdin:https://www.linkedin.com/in/ekram-jemalh-446978317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app

twitter:https://x.com/ekjemal?t=S8ljJZ5ZJmvjcA97diWW0g&s=35
