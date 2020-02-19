import createPersistedState from 'vuex-persistedstate'

interface MyWindow extends Window {
	onNuxtReady(obj: object): void
}
declare const window: MyWindow

export default (obj: { store: object; isHMR: object }) => {
	if (obj.isHMR) return

	if (process.client) {
		window.onNuxtReady((nuxt: object) => {
			createPersistedState()(obj.store) // vuex plugins can be connected to store, even after creation
		})
	}
}
