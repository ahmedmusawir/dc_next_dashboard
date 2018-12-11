import React, { Component } from 'react';
import {
	ContentSection,
	Section,
	ColMiddle,
	ColSideLeft,
	ColSideRight,
	ContentBox,
	ContentRow
} from 'components/layout';
import {
	HomeImageMain,
	ContentBtn,
	ContentTxt,
	ContentTitleSectionTxt,
	ContentMediaIndex
} from 'components/general';

export class PageContent extends Component {
	render() {
		let template = <article />;
		const data = this.props.data;
		switch (this.props.data.layout) {
			case 'button':
				template = (
					<Section bgColor={data.theme}>
						<ColMiddle>
							<ContentBtn link={data.link} title={data.title} />
						</ColMiddle>
					</Section>
				);
				break;
			case 'left':
				template = (
					<ContentSection bgColor={data.theme}>
						<ContentBox>
							<ContentRow>
								<ColSideLeft>
									<ContentTxt
										title={data.title}
										description={data.description}
										color={data.theme}
									/>
								</ColSideLeft>
								<ColSideRight>
									<HomeImageMain src={data.image} alt="dc earth 1" />
								</ColSideRight>
							</ContentRow>
						</ContentBox>
					</ContentSection>
				);
				break;
			case 'right':
				template = (
					<ContentSection bgColor={data.theme}>
						<ContentBox>
							<ContentRow>
								<ColSideLeft reverse>
									<ContentTxt
										title={data.title}
										description={data.description}
										color={data.theme}
									/>
								</ColSideLeft>
								<ColSideRight reverse>
									<HomeImageMain src={data.image} alt="dc earth 1" />
								</ColSideRight>
							</ContentRow>
						</ContentBox>
					</ContentSection>
				);
				break;
			case 'title':
				template = (
					<ContentSection bgColor={data.theme}>
						<ContentTitleSectionTxt
							title={data.title}
							description={data.description}
						/>
					</ContentSection>
				);
				break;
			case 'tile':
				template = (
					<ContentMediaIndex
						group={data.group}
						title={data.title}
						link={data.link}
						id={data.id}
					/>
				);
				break;
			default:
				return <div />;
		}
		return template;
	}
}
export default PageContent;
