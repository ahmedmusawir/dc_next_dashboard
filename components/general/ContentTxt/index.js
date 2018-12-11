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

export const ContentTxt = props => {
	const { title, description, color } = props;
	return (
		<React.Fragment>
			<HomeSectionHeading color={color} className="px-5">
				{title}
			</HomeSectionHeading>
			<HomeSectionText color={color} className="px-5">
				{description}
			</HomeSectionText>
		</React.Fragment>
	);
};

export default ContentTxt;
