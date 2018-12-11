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

export const ContentBtn = props => {
	const { link, title } = props;
	return (
		<Link href={link}>
			<HomeButtonMain color="danger">{title}</HomeButtonMain>
		</Link>
	);
};

export default ContentBtn;
