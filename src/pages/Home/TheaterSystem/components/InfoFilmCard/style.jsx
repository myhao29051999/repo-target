import styled from "styled-components";
import variableStyles from "styles/variable-styles";

export const FilmCardStyle = styled.div`
  display: flex;
  align-items: center;
`;

export const InfoFilm = styled.div``;

export const FilmName = styled.div`
  font-size: ${variableStyles.fontSize_14};
  font-weight: ${variableStyles.fwStrongBold};
  color: ${variableStyles.textBlack};
  margin-bottom: 10px;
  margin-left: 16px;
`;

export const GroupFilmDate = styled.div`
  margin-left: 66px;
`;

export const FilmDate = styled.div`
  color: ${variableStyles.textGray};
  font-size: ${variableStyles.fontSize_12};
  font-weight: normal;
  border: 1px solid ${variableStyles.borderLighGray2};
  text-align: center;
  margin-right: 10px;
  padding: 10px 10px;
  border-radius: 8px;
  cursor: pointer;
`;

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
