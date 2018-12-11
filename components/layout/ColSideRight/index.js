/**
 *
 * ColSideRight.js
 *
 * A Right Side Column Container with Props
 * Props: reverse [for opposite layout direction]
 *
 */
import React, { Component } from 'react';
import { Col } from 'reactstrap';

export const ColSideRight = props => {
	const { reverse, children } = props;

	if (reverse) {
		return (
			<Col xs="12" sm="12" md="5" lg="3" className="order-md-1">
				{children}
			</Col>
		);
	} else {
		return (
			<Col xs="12" sm="12" md="5" lg="3" className="order-md-2">
				{children}
			</Col>
		);
	}
};

export default ColSideRight;
