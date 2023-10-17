const handler = async (req, res) => {
  const response = await fetch(
    `https://api.sunrise-sunset.org/json?lat=-31.01533&lng=-64.07350&formatted=0`
  ).then((res) => res.json());
  res.status(200).json(response);
};

export default handler;