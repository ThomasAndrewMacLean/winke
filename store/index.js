import create from 'zustand';
import { mountStoreDevtool } from 'simple-zustand-devtools';

export const [useStore, store] = create((set, get) => ({
  count: 0,
  countPlusOne: () => {
    const { count } = get();
    return set(() => ({ count: count + 1 }));
  },
  currentNavLink: '/',
  setCurrentNavLink: (newNavLink) => {
    return set(() => ({ currentNavLink: newNavLink }));
  },
}));

if (process.browser) {
  mountStoreDevtool('Store', store);
}
