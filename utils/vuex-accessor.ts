import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Todo from '@/store/todos'

// eslint-disable-next-line import/no-mutable-exports
let todoStore: Todo

/**
 * ストアを初期化する（型推論できるモジュールとして取得する）
 * @param store Vuex.Store
 */
function initializeStores(store: Store<any>): void {
  // 型推論できるストアモジュール化
  todoStore = getModule(Todo, store)
}

export { initializeStores, todoStore }
