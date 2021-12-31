import {IGlobalState} from './state';

//Method #1;
// export const selectCurrencies = (state:IGlobalState) => state.currency.currencies;
// export const selectCurrentCurrency = (state:IGlobalState) => state.currency.currentCurrency;
// export const selectIsBuying = (state:IGlobalState) => state.currency.isBuying;
// export const selectAmountOfBYN = (state:IGlobalState) => state.currency.amountOfBYN;
// export const selectAmountOfCurrency = (state:IGlobalState) => state.currency.amountOfCurrency;

//Method #2;
export const selectFullState = (state:IGlobalState) => state.currency;