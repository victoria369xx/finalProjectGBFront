import { REQUEST_STATUS } from "./reducer";

export const selectProfile = (state) => state.profile.profile;
export const selectProfileError = (state) => state.profile.error;

export const selectProfileLoading = (state) =>
  state.profile.statusRequest === REQUEST_STATUS.PENDING;
