import { CHANGE_STYLES, CHANGE_THEME } from "../../constants/ActionType"

const initialState = {
  controlPad: {
    backgroundColor: '#fffff',
    buttonSize: 'sm',
    textColor: '#55555'
  }
}

const resolveTheme = (obj, state) => {
  Object.keys(obj).forEach((key) => {
    if (state[key]){
      state[key] = obj[key]
    }
  })
  return state
}


export default function app(state = initialState, {type, payload}) {
  switch (type) {
    case CHANGE_THEME:
      let temp = resolveTheme(payload?.theme, state)
      return {
        ...temp
      }
      case CHANGE_STYLES:
        return {
          ...state?.controlPad,
          backgroundColor: payload?.styles?.backgroundColor,
          buttonSize: payload?.styles?.buttonSize,
          textColor: payload?.styles?.textColor
        }
    default:
      return {
        ...state
      }
  }
}