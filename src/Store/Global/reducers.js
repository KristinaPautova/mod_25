import { createReducer } from "@reduxjs/toolkit";

import { defaultState } from './defaultState';
import * as actions from './actions';

export const global = createReducer( defaultState, {
    [actions.setUserBirthday]: (state, action) => { state.userBirthday = action.payload; },
    [actions.setUserPassportDate]: (state, action) => { state.userPassportDate = action.payload; },
    [actions.setUserDriverDate]: (state, action) => { state.userDriverDate = action.payload; },

    [actions.setDatePickerEnabled]: (state, action) => { state.datePickerEnabled = action.payload }
})