import React from 'react';
import { Layout, PageContent, HeroBlock } from 'components/layout';
import { HeroHeading, HeroSubHeading } from 'components/general';
import data from 'static/constants';

class Home extends React.Component {
	static getInitialProps = async () => {
		const homeData = data.page.home;

		return {
			homePageData: homeData
		};
	};

	getArticles = () => {
		const articles = [];
		this.props.homePageData.articles.map(d => {
			articles.push(<PageContent key={d.id} data={d} />);
		});
		return articles;
	};

	render() {
		const { title, description } = this.props.homePageData;

		return (
			<Layout
				title="Deep Cast - Home"
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
				{this.getArticles()}
			</Layout>
		);
	}
}
export default Home;
