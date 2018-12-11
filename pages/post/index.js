import React from 'react';
import { withRouter } from 'next/router';
import {
	Container,
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	Button
} from 'reactstrap';
import { Layout, PageContent, HeroBlock } from 'components/layout';
import { HeroHeading, HeroSubHeading } from 'components/general';
import data from 'static/constants';
import { find } from 'lodash';
var moment = require('moment');

const getParaContent = (article, date) => {
	let section = [];

	article.content.sections.map((d, i) => {
		let para = [];
		d.paragraphs.map((p, j) => {
			para.push(
				<p key={j}>
					{' '}
					{i === 0 && j === 0 && (
						<span className="date-place">{`${article.content.location.city} ${
							article.content.location.state
						} - ${date} -`}</span>
					)}
					{p.test}
				</p>
			);
		});
		section.push(
			<div className="paragraphs" key={i}>
				{d.title && <h3>{d.title}</h3>}
				{para}
			</div>
		);
	});
	return section;
};

const Content = withRouter(props => {
	let id = props.router.query.id;
	let article = id && find(props.data.articles, { id });
	let date = moment(article.content.date).format('MMMM, DD YYYY');
	console.log(article);

	return (
		<div>
			<HeroBlock className="d-flex flex-column row">
				<HeroHeading color="snow" size="2rem">
					{props.router.query.id}
				</HeroHeading>
				<HeroSubHeading color="snow" size="1.5rem">
					{article.title}
				</HeroSubHeading>
			</HeroBlock>
			<Container>
				<Card className="mb-5 mt-5">
					<CardImg top width="100%" src={article.image} alt="Card image cap" />
					<CardBody>
						<CardTitle className="display-4">{article.content.title}</CardTitle>
						<CardSubtitle className="h5 mb-5 mt-2">{date}</CardSubtitle>
						<CardText>{getParaContent(article, date)}</CardText>
					</CardBody>
				</Card>
			</Container>
		</div>
	);
});

class Post extends React.Component {
	static getInitialProps = async () => {
		const mediaData = data.page.media;

		return {
			data: mediaData
		};
	};
	render() {
		// console.log(this.props);
		const data = this.props.data;
		return (
			<Layout
				title="Deep Cast - Single Post"
				description="Artificial intelligence is changing how business works, but most companies don’t know how to make AI work for them. But here at Deep Cast, we do."
			>
				<Content data={data} />
			</Layout>
		);
	}
}

export default Post;
