/**
 *
 * ContentRow.js
 *
 * A Row Container with Props
 * Props: classes [Utility Reactstrap Classes]
 *
 */
import React, { Component } from 'react';
import { Row } from 'reactstrap';

export const ContentRow = props => {
	const { classes, children } = props;
	return <Row className={classes}>{children}</Row>;
};

export default ContentRow;
