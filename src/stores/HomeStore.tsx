import create from 'zustand';

interface HomeStore {
  count: number;
  inc: () => void;
  dec: () => void;
}

const useHomeStore = create<HomeStore>((set) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: state.count - 1 })),
}));

export default useHomeStore;
