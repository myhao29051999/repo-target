import styled from "styled-components";
import variableStyles from "styles/variable-styles";

export const FilmCardStyle = styled.div`
  display: flex;
  cursor: pointer;
`;

export const InfoFilm = styled.div`
  margin-left: 16px;
`;

export const FilmName = styled.div`
  font-size: ${variableStyles.fontSize_14};
  font-weight: ${variableStyles.fwStrongBold};
  color: ${variableStyles.textBlack};
`;

// export const TheaterAddress = styled.div`
//   color: ${variableStyles.textGray};
//   font-size: ${variableStyles.fontSize_12};
//   font-weight: normal;
//   width: 200px;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   white-space: nowrap;
//   margin: 4px 0;
// `;

export const ButtonDetail = styled.div`
  color: ${variableStyles.primaryRed};
  font-size: ${variableStyles.fontSize_12};
  font-weight: normal;
  cursor: pointer;
`;

export const MoreInfo = styled.div`
  color: ${variableStyles.textGray};
  font-size: ${variableStyles.fontSize_12};
  font-weight: normal;
  width: 200px;
  max-width: 200px;
`;
