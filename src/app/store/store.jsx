import { create } from "zustand";

const useStore = create((set) => ({
  data: [],
  addToCart: (addPro) => set((state) => {
    const x = state.data.find((val) => val.id === addPro.id);
    if (x) {
      return state;
    } else {
      return { data: [...state.data, addPro] };
    }
  }),
  updateBasket: (addPro) =>
    set((state) => {
      const x = state.data.find((val) => val.id === addPro.id);
      if (x) {
        return state;
      } else {
        return { data: [...state.data, addPro] };
      }
    }),

  myPlus: (i) =>
    set((state) => {
      const x = state.data.findIndex((val) => val.id === i);
      if (x !== -1) {
        state.data[x].number += 1;
        return { data: [...state.data] };
      }
    }),

  myMinus: (i) =>
    set((state) => {
      const x = state.data.findIndex((val) => val.id === i);
      if (x !== -1) {
        if (state.data[x].number > 1) {
          state.data[x].number -= 1;
          return { data: [...state.data] };
        } else {
          return { data: state.data.filter((item) => item.id !== i) };
        }
      }
    }),
}));
export default useStore;
