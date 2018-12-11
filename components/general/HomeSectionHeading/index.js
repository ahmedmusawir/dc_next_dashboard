import styled from 'styled-components';
import { H2 } from 'components/general';

export const HomeSectionHeading = styled(H2)`
	padding-top: 1rem;
	border-top: 2px solid red;
	font-weight: 300;
	display: inline-block;
	text-transform: uppercase;

	color: ${props => {
		let textColor;
		if (props.color === 'light') {
			textColor = props.theme.textDark;
		} else if (props.color === 'dark') {
			textColor = props.theme.textLight;
		} else {
			textColor = props.color;
		}
		return textColor;
	}};
	margin-top: 5rem;

	@media (max-width: 500px) {
		font-size: 1.7rem;
	}
`;

export default HomeSectionHeading;
