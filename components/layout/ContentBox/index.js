/**
 *
 * ContentBox.js
 *
 * A Content Container with Props
 * Props: full [for full width and none for normal width]
 */
import React, { Component } from 'react';
import { Container } from 'reactstrap';

export const ContentBox = props => {
	const { full, children } = props;

	if (full) {
		return <Container fluid>{children}</Container>;
	} else {
		return <Container>{children}</Container>;
	}
};

export default ContentBox;
