import styled from 'styled-components';
import { P } from 'components/general';

export const HomeSectionText = styled(P)`
  padding: 3rem 1rem;
  text-align: left;
  font-size: 1.1rem;
  line-height: 1.7rem;
  font-weight: 400;
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
`;

export default HomeSectionText;
