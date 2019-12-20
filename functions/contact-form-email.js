/* eslint-disable */
exports.sendEmail = (req, res) => {
  let message = req.query.message || req.body.message || 'Hello Robin!';
  res.status(200).send(message);
};
