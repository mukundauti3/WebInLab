const express = require('express');
const app = express();

// Set view engine
app.set('view engine', 'hbs');
app.set('views', './views');

// Route to render form
app.get('/', (req, res) => {
  res.render('calc');
});

// Route to handle calculation
app.get('/calculate', (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  const result = num1 + num2;

  res.render('calc', { result });
});

// Start server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
