import React, { useEffect, useState } from "react";

import { useGetCryptosQuery } from "../services/cryptoApi";
import { IGlobalCoin } from "../interface/GlobalStats";
import { Col, Row, Card, Input } from "antd";
import { Link } from "react-router-dom";
import millify from "millify";
import { removeAccents } from "../utils/removeAccents";

const Cryptocurrencies = ({ simplified }: { simplified: boolean }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptoList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState<IGlobalCoin[]>(
    cryptoList?.data.coins || []
  );
  const [searchTerm, setSearchTerm] = useState("");

  const filterCoins = (coins: Array<IGlobalCoin>) => {
    let dataCoins = coins;
    const searchSplits = removeAccents(searchTerm)
      .split(" ")
      .filter((f) => f || null);
    searchSplits.map(
      (s) =>
        (dataCoins = dataCoins.filter(
          (d) => d.name!.toLowerCase().indexOf(s.toLocaleLowerCase()) > -1
        ))
    );

    return dataCoins;
  };

  useEffect(() => {
    setCryptos(cryptoList?.data.coins || []);

    const filteredData = filterCoins(cryptoList?.data.coins || []);

    setCryptos(filteredData);
  }, [cryptoList, searchTerm]);

  if (isFetching) return <>Loading...</>;

  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}

      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
            <Link to={`/crypto/${currency.id}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={
                  <img className="crypto-image" src={currency.iconUrl} alt="" />
                }
                hoverable
              >
                <p>Price: {millify(Number(currency.price))}</p>
                <p>Market Cap: {millify(currency.marketCap!)}</p>
                <p>Daily Change: {millify(currency.change!)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
