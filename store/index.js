import create from 'zustand';

export const [useStore] = create((set, get) => ({
  count: 0,
  countPlusOne: () => {
    const { count } = get();
    return set(() => ({ count: count + 1 }));
  },
  currentNavLink: '/about',
  setCurrentNavLink: (newNavLink) => {
    return set(() => ({ currentNavLink: newNavLink }));
  },
}));
