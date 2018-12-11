import styled from 'styled-components';
import { Img } from 'components/general';

export const HomeImageMain = styled(Img)`
	display: block;
	margin: auto;
	padding-top: 6rem;
	@media (max-width: 575px) {
		padding-top: 0rem;
	}
	max-width: 100%;
`;

export default HomeImageMain;
