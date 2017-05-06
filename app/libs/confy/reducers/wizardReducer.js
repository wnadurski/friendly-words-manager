import {getDefaultModel} from "../libs/fields"

export const wizardReducer = model => {
    const defaultState = {
        model: model,
        activeConfig: getDefaultModel(model)
    }

    return (state = defaultState, action) => {
        return state
    }
}