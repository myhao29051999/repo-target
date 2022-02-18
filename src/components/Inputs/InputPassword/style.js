import styled from "styled-components";
import { Input } from "antd";
import variableStyles from "styles/variable-styles";
import { COLORS, SIZE } from "../common";

const InputPwdContainer = styled(Input.Password)`
  &.ant-input-affix-wrapper {
    border-radius: ${SIZE.BORDER_RADIUS};

    &.ant-input-affix-wrapper-lg {
      padding: 11px 16px;
      height: ${SIZE.HEIGHT_LG};
    }

    .ant-input {
      font-size: ${SIZE.TEXT};
      line-height: ${SIZE.LINE_HEIGHT};
      border-color: ${COLORS.BORDER_DEFAULT};
      caret-color: ${COLORS.CARET};
      background: transparent;
    }

    .ant-input-prefix,
    .ant-input-suffix {
      color: ${COLORS.ICON_DEFAULT};
    }

    &:hover {
      border-color: ${COLORS.BORDER_HOVER};
    }

    &.ant-input-affix-wrapper-focused {
      box-shadow: none;
      border-color: ${COLORS.BORDER_FOCUS};
    }

    &.input-affix-readonly {
      background: ${COLORS.BG_READONLY};
    }

    &.input-affix-disabled {
      background: ${COLORS.BG_DISABLED};
      color: ${COLORS.TEXT_DISABLED};

      .ant-input-prefix,
      .ant-input-suffix {
        color: ${COLORS.ICON_DISABLED};
      }
    }

    .ant-input-password-icon {
      color: ${COLORS.ICON_DEFAULT};

      &:hover {
        color: ${COLORS.ICON_HOVER};
      }
    }
  }

  .anticon {
    &.ant-input-clear-icon {
      font-size: ${variableStyles.fontSize_20};
      color: ${COLORS.ICON_DEFAULT};
    }
    &.ant-input-password-icon {
      font-size: ${variableStyles.fontSize_20};
    }
  }
`;

export { InputPwdContainer };
