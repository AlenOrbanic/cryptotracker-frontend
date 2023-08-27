const allowCors = fn => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  return await fn(req, res);
};

const getCoinData = async (req, res) => {
  const coinId = req.query.coinId;
  const url = `https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=usd`;

  try {
    const fetchResponse = await fetch(url);
    const fetchJson = await fetchResponse.json();
    res.status(200).json(fetchJson);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching data.' });
  }
};

export default allowCors(getCoinData);
