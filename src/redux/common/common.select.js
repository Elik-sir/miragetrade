import { createSelector } from 'reselect';

const selectUser = (state) => state.common;

export const selectAlert = createSelector([selectUser], (alert) => alert.alert);
