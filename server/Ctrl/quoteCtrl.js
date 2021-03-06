const getQuotes = (req, res) => {
  const db = req.app.get('db');

  db.quotes
    .get_quotes()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => {
      res.status(500).send(err);
      console.log(`Something went wrong!`);
    });
};

const getRandomQuote = (req, res) => {
  const db = req.app.get('db');

  db.quotes
    .get_random_quote()
    .then(resp => {
      res.status(200).send(resp);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

module.exports = {
  getQuotes,
  getRandomQuote
};
