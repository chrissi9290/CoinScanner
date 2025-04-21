export default async function handler(req, res) {
  const response = await fetch('https://api.dexscreener.com/latest/dex/pairs');
  const data = await response.json();

  // Nur Solana-Pairs filtern
  const solanaPairs = data.pairs.filter(pair => pair.chainId === "solana");
  
  // CORS Header hinzufügen
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.status(200).json(solanaPairs);
}