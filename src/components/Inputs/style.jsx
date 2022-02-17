/* eslint-disable indent */
import styled from "styled-components";
import { Input } from "antd";
import variableStyles from "styles/variable-styles";
const InputGroup = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  &:focus-within {
    .subdued {
      color: ${variableStyles.primaryColor600};
    }
  }
`;
const Label = styled("label")`
  position: absolute;
  left: 0;
  z-index: 1;
  padding-left: 18px;
  font-family: Inter;
  font-size: 10px;
  line-height: ${variableStyles.lineHeight_14};
  font-weight: ${variableStyles.fwBold};
  display: block;
  color: ${variableStyles.neutral400};
  margin-top: 9px;
  margin-bottom: 0px;
`;
const RequiredText = styled("span")`
  color: "#DC4B41";
  font-family: "Inter";
  line-height: 16px;
  font-style: ${variableStyles.fsNormal};
  font-weight: ${variableStyles.fwNormal};
`;
const InputCustom = styled(Input)`
  position: relative;
  border-radius: 12px;
  border: 1.5px solid ${variableStyles.innerBoderGray};
  font-family: Inter;
  height: 56px;
  color: ${variableStyles.neutral600} !important;
  font-weight: ${variableStyles.fwSemiBold};
  font-size: ${variableStyles.fontSize_14};
  line-height: ${variableStyles.lineHeight_20};
  padding: 18px 16px;
  .ant-input {
    border-radius: 0px;
  }
  &::placeholder {
    color: ${variableStyles.textTertiary};
    font-size: ${variableStyles.fontSize_14};
    line-height: ${variableStyles.lineHeight_20};
    font-family: "Lalezar";
    font-style: ${variableStyles.fsNormal};
    font-weight: ${variableStyles.fwSemiBold};
  }

  &.ant-input-affix-wrapper {
    box-shadow: none !important;
    .ant-input-clear-icon {
      font-size: ${variableStyles.fontSize_20};
    }
    .ant-input-prefix {
      .icon-search {
        font-size: ${(props) =>
          props["data-detectmobile"]
            ? variableStyles.fontSize_16
            : variableStyles.fontSize_24};
        color: gray;
      }
    }
  }

  &.ant-input-affix-wrapper-lg {
    padding: 18px 16px;
    height: 56px;
  }

  &.ant-input-lg {
    padding: 18px 16px;
    height: 56px;
  }
  &:hover {
    border-color: ${variableStyles.innerBoderGray};
  }
  &:focus {
    border-color: ${variableStyles.primaryColor500};
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    caret-color: ${variableStyles.primaryColor600};
  }
`;

export { InputGroup, InputCustom, Label, RequiredText };
