import { Avatar, Col, Collapse, Row, Typography } from 'antd'
import HTMLReactParser from 'html-react-parser'
import millify from 'millify'
import React from 'react'
import { useGetCryptoExchangesQuery } from '../services/cryptoApi'

const { Title, Text } = Typography
const { Panel } = Collapse

const Exchanges = () => {
    const { data, isFetching } = useGetCryptoExchangesQuery({});
    const exchangesList = data?.data?.exchanges

    if(isFetching) return <>Loading...</>
    return (
        <>
            <Row>
                <Col span={6}>Exchanges</Col>
                <Col span={6}>24h Trade Volume</Col>
                <Col span={6}>Markets</Col>
                <Col span={6}>Changes</Col>
            </Row>
            <Row>
                {exchangesList.map((exchange: any) => (
                    <Col span={24}>
                        <Collapse>
                            <Panel
                                key={exchange.id}
                                showArrow={false}
                                header={(
                                    <Row>
                                        <Col span={6}>
                                            <Text><strong>{exchange.rank}.</strong></Text>
                                            <Avatar className="exchange-image" src={exchange.iconUrl} />
                                            <Text><strong>{exchange.name}</strong></Text>
                                        </Col>
                                        <Col span={6}>${millify(exchange.volume)}</Col>
                                        <Col span={6}>${millify(exchange.numberOfMarkets)}</Col>
                                        <Col span={6}>${millify(exchange.marketShare)}</Col>
                                    </Row>
                                )}
                            >
                                {HTMLReactParser(exchange.description || '')}
                            </Panel>
                        </Collapse>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Exchanges
