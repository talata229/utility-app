import { createSelector } from 'reselect';

export const currentUser = (state) => state?.auth?.currentUser;
export const selectCurrentUser = createSelector(currentUser);
