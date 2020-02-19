import { Store } from 'vuex'
import { initializeStores } from '@/utils/vuex-accessor'

const initializer = (store: Store<any>) => initializeStores(store)
export const plugins = [initializer]

export * from '@/utils/vuex-accessor'
