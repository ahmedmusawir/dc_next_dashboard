/**
 *
 * ColMiddle.js
 *
 * A Middle Column with Props
 * Props: classes [Utility Reactstrap Classes]
 *
 */
import React, { Component } from 'react';
import { Col } from 'reactstrap';

export const ColMiddle = props => {
	const { children } = props;
	return <Col className="mx-auto text-center">{children}</Col>;
};

export default ColMiddle;
