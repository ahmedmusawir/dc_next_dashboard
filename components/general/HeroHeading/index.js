import styled from 'styled-components';
import { H2 } from 'components/general';

export const HeroHeading = styled(H2)`
	padding-left: 10%;
	padding-right: 5%;
	padding-top: 10vh;

	@media (max-width: 500px) {
		font-size: 2rem;
	}
`;

export default HeroHeading;
