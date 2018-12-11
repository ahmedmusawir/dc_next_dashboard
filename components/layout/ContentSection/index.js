/**
 *
 * ContentSection.js
 *
 * Renders a Content Section with styles and props
 */

import styled from 'styled-components';
import { baseContainerStyles } from 'components/layout/base_styles';

export const ContentSection = styled.section`
	${baseContainerStyles};
	background: ${props => {
		let bgColor;
		if (props.bgColor === 'dark') {
			bgColor = props.theme.backgroundGradiant;
		} else if (props.bgColor === 'grey') {
			bgColor = props.theme.backgroundGrey;
		} else if (props.bgColor === 'light') {
			bgColor = props.theme.backgroundImage;
		}
		return bgColor;
	}};
	padding-bottom: 4rem;
`;

export default ContentSection;
