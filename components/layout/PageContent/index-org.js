import React, { Component } from 'react';
import Link from 'next/link';
import { ContentSection, Section } from 'components/layout';
import {
	HomeSectionHeading,
	HomeSectionText,
	HomeButtonMain,
	HomeImageMain
} from 'components/general';
import {
	Container,
	Row,
	Col,
	Card,
	Button,
	CardImg,
	CardTitle,
	CardText,
	CardSubtitle,
	CardBody
} from 'reactstrap';

export class PageContent extends Component {
	render() {
		let template = <article />;
		const data = this.props.data;
		switch (this.props.data.layout) {
			case 'button':
				template = (
					<Section bgColor={data.theme} className="row">
						<Col className="mx-auto text-center">
							<Link href={data.link}>
								<HomeButtonMain color="danger">{data.title}</HomeButtonMain>
							</Link>
						</Col>
					</Section>
				);
				break;
			case 'left':
				template = (
					<ContentSection bgColor={data.theme} className="row">
						<Container>
							<Section className="row">
								<Col xs="12" sm="6" md="7" lg="9" className="order-sm-1">
									<HomeSectionHeading color={data.theme} className="px-5">
										{data.title}
									</HomeSectionHeading>
									<HomeSectionText color={data.theme} className="px-5">
										{data.description}
									</HomeSectionText>
								</Col>
								<Col xs="12" sm="6" md="5" lg="3" className="order-sm-2">
									<HomeImageMain
										className="img-fluid mx-auto my-auto"
										src={data.image}
										alt="dc earth 1"
									/>
								</Col>
							</Section>
						</Container>
					</ContentSection>
				);
				break;
			case 'right':
				template = (
					<ContentSection bgColor={data.theme} className="row">
						<Container>
							<Section className="row">
								<Col xs="12" sm="6" md="7" lg="7" className="order-sm-2">
									<HomeSectionHeading color={data.theme} className="px-5">
										{data.title}
									</HomeSectionHeading>
									<HomeSectionText color={data.theme} className="px-5">
										{data.description}
									</HomeSectionText>
								</Col>
								<Col xs="12" sm="6" md="5" lg="5" className="order-sm-1">
									<HomeImageMain
										className="img-fluid mx-auto my-auto"
										src={data.image}
										alt="dc earth 1"
									/>
								</Col>
							</Section>
						</Container>
					</ContentSection>
				);
				break;
			case 'title':
				template = (
					<ContentSection bgColor={data.theme} className="row">
						<Col xs="8" sm="5" md="5" lg="7" className="mx-auto text-center">
							<HomeSectionHeading color="red">{data.title}</HomeSectionHeading>
						</Col>
						<Col xs="9" sm="9" md="9" lg="6" className="mx-auto">
							<HomeSectionText>{data.description}</HomeSectionText>
						</Col>
					</ContentSection>
				);
				break;
			case 'tile':
				template = (
					<Col sm="6" md="4" lg="4">
						<Card className="mb-3">
							<CardImg
								top
								width="100%"
								src="https://via.placeholder.com/350x150"
								alt="Card image cap"
							/>
							<CardBody>
								<CardTitle>{data.group}</CardTitle>
								<CardSubtitle />
								<CardText>{data.title}</CardText>
								<Link href={`${data.link}?id=${data.id}`}>
									<Button color="primary">Read More</Button>
								</Link>
							</CardBody>
						</Card>
					</Col>
				);
				break;
			default:
				return <div />;
		}
		return template;
	}
}
export default PageContent;
