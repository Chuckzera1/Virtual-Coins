import React from "react";
import { Line } from "react-chartjs-2";
import type { ChartProps } from "react-chartjs-2";
import { Col, Row, Typography } from "antd";

const { Title } = Typography;
// TODO: Type coinHistory
export const LineChart = ({
  coinHistory,
  currentPrice,
  coinName,
}: {
  coinHistory: any;
  currentPrice: string;
  coinName: string;
}) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinTimestamp.push(
      new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString()
    );
  }

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price In USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };
  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">
          {coinName} Price Chart
        </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">
            {coinHistory?.data?.change}
          </Title>
          <Title level={5} className="cuurent-price">
            Current {coinName} Price: $ {currentPrice}{" "}
          </Title>
        </Col>
      </Row>
      <Line data={data} />
    </>
  );
};
