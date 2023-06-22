const app = require('./app');
const port = 5891;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
