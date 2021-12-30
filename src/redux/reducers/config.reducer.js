import { CONFIG_TOGGLE_SIDEBAR } from "../actions/config/constant";

  
  const initialState = {
    isOpenSidebar: false
  };

  export const configReducer = (state = initialState, action) => {
    const { type, payload } = action;
    
    switch (type) {
      case CONFIG_TOGGLE_SIDEBAR:
        return {
          ...state,
          isOpenSidebar: payload,
        };
      default:
        return state;
    }
  };
  