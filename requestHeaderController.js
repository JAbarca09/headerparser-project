/*
Example Output
{"ipaddress":"159.20.14.100","language":"en-US,en;q=0.5",
"software":"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0"}
*/

exports.getHeaders = (req, res) => {
  try {
    const ipaddress = req.socket.remoteAddress;
    const language = req.headers['accept-language'];
    const software = req.headers['user-agent'];
    res.status(200).json({
      ipaddress,
      language,
      software,
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
