
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/intern', (req, res) => {
  res.json({
    intern_name: 'Abhi Chauhan',
    referral_code: 'abhi2025',
    donations_raised: 12000,
  });
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
