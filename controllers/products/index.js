/* Response to /products route */
module.exports = (req, res) => {
  res.send(`
  <ul>
    <li>Product 1</li>
    <li>Product 2</li>
    <li>Product 3</li>
    <li>Product 4</li>
  </ul>
  `);
};
