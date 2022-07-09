import React from 'react';
import { useSelector } from 'react-redux';
import { Col, Layout, Row } from 'antd';
import { Content } from 'antd/lib/layout/layout';
// import Card from 'antd/lib/card/Card';

import Card from '../../components/Card/Card';
import style from './PageLayout.module.css';

const PageLayout = () => {
	const locations = useSelector(state => state.locations.locations);

	return (
		<div>
			<Layout style={{backgroundColor: '#FFFFFF'}}>
				<Content className="contentWrapper">
					<Row gutter={[16, 16]}>
						{
							locations.map(location => (
								<Col 
									key={location.id}
									xs={24} sm={12} md={8} xl={8} 
									// xxl={6} 
								>
									{/* <Card 
										className={style.card}
										title={loc.name}
										size="default"
										bordered={true}
										loading={true}
										extra
										// hoverable
										headStyle={{
											fontSize: '15px', 
											lineHeight: '140%', 
											fontWeight: '600',
											color: '#1E212A',
											padding: '20px'
										}}
									>
										
									</Card> */}
									<Card location={location} key={location.id} />
								</Col>
							))
						}
					</Row>
				</Content>
			</Layout>
		</div>
	)
}

export default PageLayout;