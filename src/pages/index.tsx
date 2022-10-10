import type { NextPage } from 'next';

export const getServerSideProps = async () => {
  const res = await fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
  );
  const json = await res.json();
  return {
    props: {
      data: json,
    },
  };
};

const Home: NextPage = ({ data }) => {
  return (
    <div>
      <h1>Top 10 Cryptocurrencies by Market Capitalization</h1>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Image</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>Market Cap</th>
            <th>24h Change</th>
          </tr>
        </thead>
        <tbody>
          {data.map((coin: any) => (
            <tr key={coin.id}>
              <td>{coin.market_cap_rank}</td>
              <td>
                <img src={coin.image} alt={coin.name} width="20" />
              </td>
              <td>{coin.name}</td>
              <td>{coin.symbol}</td>
              <td>{coin.current_price}</td>
              <td>{coin.market_cap}</td>
              <td>{coin.price_change_percentage_24h}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
