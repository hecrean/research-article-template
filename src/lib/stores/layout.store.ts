import { writable } from 'svelte/store';

interface LayoutState {
	sidebarOpen: boolean;
}

const createLayoutState = () => {
	const { subscribe, set, update } = writable<LayoutState>({ sidebarOpen: false });

	return {
		subscribe,
		openLeftSidebar: () => update((state) => ({ ...state, sidebarOpen: true })),
		closeLeftSidebar: () => update((state) => ({ ...state, sidebarOpen: false })),
		toggleOpenLeftSidebar: () => update((state) => ({ ...state, sidebarOpen: !state.sidebarOpen }))
	};
};

export const layoutState = createLayoutState();
