import { create } from "zustand";

// this is our useStore hook that we can use in our components to get parts of the store and call actions
const useStore = create((set, get) => ({
  raw_csv: '',
  holdings: {},
  tickers: [],
  trades: [],
  setRawCsv: (csv) => set({ raw_csv: csv }),
}));

export default useStore;
