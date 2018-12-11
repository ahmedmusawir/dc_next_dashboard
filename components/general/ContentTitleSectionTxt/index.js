import React from 'react';
import { HomeSectionHeading, HomeSectionText } from 'components/general';
import { Col } from 'reactstrap';

export const ContentTitleSectionTxt = props => {
	const { title, description } = props;
	return (
		<React.Fragment>
			<Col xs="8" sm="5" md="5" lg="7" className="mx-auto text-center">
				<HomeSectionHeading color="red">{title}</HomeSectionHeading>
			</Col>
			<Col xs="9" sm="9" md="9" lg="6" className="mx-auto">
				<HomeSectionText>{description}</HomeSectionText>
			</Col>
		</React.Fragment>
	);
};

export default ContentTitleSectionTxt;
