import React, { Component } from 'react';
import Link from 'next/link';
import {
	Col,
	Card,
	Button,
	CardImg,
	CardTitle,
	CardText,
	CardSubtitle,
	CardBody
} from 'reactstrap';

export const ContentMediaIndex = props => {
	const { title, group, link, id } = props;
	return (
		<React.Fragment>
			<Col sm="6" md="4" lg="4">
				<Card className="mb-3">
					<CardImg
						top
						width="100%"
						src="https://via.placeholder.com/350x150"
						alt="Card image cap"
					/>
					<CardBody>
						<CardTitle>{group}</CardTitle>
						<CardSubtitle />
						<CardText>{title}</CardText>
						<Link href={`${link}?id=${id}`}>
							<Button color="primary">Read More</Button>
						</Link>
					</CardBody>
				</Card>
			</Col>
		</React.Fragment>
	);
};

export default ContentMediaIndex;
