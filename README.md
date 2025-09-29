# 🧾 Dev Guru Dyes - Responsive Invoice Generator

This is a single-file, responsive web application designed to help **Dev Guru Dyes** quickly generate and print/download detailed invoices for dye sales.  
Built using pure **HTML, CSS, and JavaScript**, the application is fast, reliable, and works seamlessly across desktop, tablet, and mobile devices.

---

## ✨ Features

- **Responsive Design (Mobile-First):** Layout adjusts automatically for smartphones, tablets, and large monitors (pure CSS media queries).
- **Dynamic Item Addition:** Input dye size, shape, type (Full/Half), quantity, and price → instantly adds to invoice table.
- **Automatic Calculation:** Calculates total per item and running **Grand Total**.
- **Invoice Preview:** Real-time, clean preview of invoice details.
- **Download/Print Functionality:** Uses `html2canvas` to render invoice as an image (like PDF) for easy downloading/printing.
- **Error Handling:** Input validation ensures required fields are filled before adding items.

---

## 🛠️ Technology Stack

This project is intentionally **lightweight and dependency-free** (except for one external library).

- **HTML5** – Structure of the application  
- **CSS3 (Pure CSS)** – Styling and responsiveness (mobile-first)  
- **JavaScript (Vanilla)** – Application logic, validation, state management, and calculations  

### External Library
- [`html2canvas`](https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js) – Converts invoice HTML into downloadable image

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
```

---

## 🚀 How to Run Locally

Since this is a **single, self-contained HTML file**, running the project is super simple:

1. **Save the Files**: Place `bill_generator.html` and `style.css` in the same folder.  
2. **Open in Browser**: Double-click `bill_generator.html` to open in Chrome/Firefox/Edge/etc.  
3. **Start Generating**: Enter customer + item details to build invoices instantly!  

---

## 💡 Key Design Decisions (Responsive CSS)

- **Mobile-First Approach**  
  Base styles defined globally; enhancements applied with media queries.  

- **Breakpoints Used:**
  ```css
  @media (max-width: 900px) { ... }   /* Tablets & smaller laptops */
  @media (max-width: 600px) { ... }   /* Smartphones */
  ```

- **Invoice Table Wrapping:** Prevents horizontal scrolling issues:
  ```css
  th, td {
      word-break: break-word; 
      overflow-wrap: break-word;
  }
  ```

---

## 👨‍💻 Contributing

If you’d like to enhance this project, feel free to **clone the repository** and suggest improvements via pull requests.

---
