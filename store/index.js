import create from 'zustand';
import { mountStoreDevtool } from 'simple-zustand-devtools';

export const [useStore, store] = create((set, get) => ({
  areAtTop: true,
  setAreAtTop: (value) => {
    return set(() => ({ areAtTop: value }));
  },
  currentNavLink: '/',
  setCurrentNavLink: (newNavLink) => {
    return set(() => ({ currentNavLink: newNavLink }));
  },
}));

if (process.browser) {
  mountStoreDevtool('Store', store);
}
