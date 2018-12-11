import React from 'react';
import { Layout, PageContent, HeroBlock, Section } from 'components/layout';
import { HeroHeading, HeroSubHeading } from 'components/general';
import { Container, Row, Col } from 'reactstrap';
import data from 'static/constants';

class Media extends React.Component {
	static getInitialProps = async () => {
		const mediaData = data.page.media;

		return {
			mediaPageData: mediaData
		};
	};

	getArticles = () => {
		const articles = [];
		this.props.mediaPageData.articles.map(d => {
			articles.push(<PageContent key={d.id} data={d} />);
		});
		return articles;
	};

	render() {
		const { title, description } = this.props.mediaPageData;

		return (
			<Layout
				title="Deep Cast - Media"
				description="Artificial intelligence is changing how business works, but most companies don’t know how to make AI work for them. But here at Deep Cast, we do."
			>
				<HeroBlock className="d-flex flex-column row">
					<HeroHeading color="snow" size="3rem">
						{title}
					</HeroHeading>
					<HeroSubHeading color="snow" size="2.5rem">
						{description}
					</HeroSubHeading>
				</HeroBlock>
				<Container className="mt-5 mb-5">
					<Section className="row">{this.getArticles()}</Section>
				</Container>
			</Layout>
		);
	}
}
export default Media;
