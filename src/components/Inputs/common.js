import variableStyles from 'styles/variable-styles';

const COLORS = {
  // border
  BORDER_HOVER: variableStyles.borderHover,
  BORDER_FOCUS: variableStyles.borderFocus,
  BORDER_DEFAULT: variableStyles.borderDefault,

  // background
  BG_READONLY: variableStyles.surfaceGray,
  BG_DISABLED: variableStyles.surfaceGray,

  // text
  TEXT_DISABLED: variableStyles.textDisabled,

  // icon
  ICON_DEFAULT: variableStyles.iconDefault,
  ICON_DISABLED: variableStyles.iconDisabled,
  ICON_HOVER: variableStyles.iconActive,

  // caret
  CARET: variableStyles.borderFocus,
};

const SIZE = {
  // text
  TEXT: variableStyles.fontSize_14,
  LINE_HEIGHT: variableStyles.lineHeight_22,

  // border
  BORDER_RADIUS: '8px',

  // height
  HEIGHT_LG: '48px',
};

export { COLORS, SIZE };
