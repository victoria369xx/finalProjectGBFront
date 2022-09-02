import { REQUEST_STATUS } from "../storeConstants";

export const selectAccount = (state) => state.account.account;
export const selectAccountError = (state) => state.account.error;

export const selectAccountLoading = (state) =>
  state.account.statuRequest === REQUEST_STATUS.PENDING;
