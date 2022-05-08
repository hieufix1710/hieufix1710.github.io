import { CHANGE_THEME, CHANGE_STYLES } from "../../constants/ActionType"

export const changeAppTheme = (theme) => dispatch => {
  if (dispatch({type: CHANGE_THEME, payload: {theme}})) {
    return true;
  }else {
    return false;
  }
}

export const changeStylePadControl = (styles) => dispatch => {
  dispatch({type: CHANGE_STYLES, payload: {styles}})
}