import { CONFIG_TOGGLE_SIDEBAR } from "./constant"

export const toggleSidebar =  (value) => {
    return {
        type: CONFIG_TOGGLE_SIDEBAR,
        payload: value
    }
}