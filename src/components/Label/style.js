import styled from "styled-components";
import variableStyles from "styles/variable-styles";

const Label = styled.label`
  color: ${variableStyles.textTertiary};
  font-size: ${variableStyles.fontSize_12} !important;
  margin-bottom: 4px;
  display: block;
`;

const Required = styled.span`
  color: ${variableStyles.iconError};
`;

export { Label, Required };
