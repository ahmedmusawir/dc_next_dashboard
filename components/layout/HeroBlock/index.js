import styled from 'styled-components';
import { baseContainerStyles } from 'components/layout/base_styles';

export const HeroBlock = styled.section`
	${baseContainerStyles};
	background: ${props =>
		props.bgColor ? props.bgColor : props.theme.backgroundGradiant};
	padding-top: 4rem;
	padding-bottom: 8rem;
`;

export default HeroBlock;
