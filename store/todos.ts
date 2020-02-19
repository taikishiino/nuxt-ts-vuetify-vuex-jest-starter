import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import Todo from '@/models/Test'
import * as Services from '~/services/todos'

// stateFactory: true → Vuex をモジュールモードで扱うために指定
@Module({ stateFactory: true, namespaced: true, name: 'todos' })
export default class Todos extends VuexModule {
  todos: Todo[] = []

  /**
   * todos を初期化
   * @param text Todo テキスト
   */
  @Mutation
  init() {
    this.todos = []
  }

  /**
   * Todo を追加する
   * @param text Todo テキスト
   */
  @Mutation
  add(text: string) {
    const todos: Todo[] = this.todos
    // Todo を作成
    const todo: Todo = {
      // リストがない場合、id = 1
      // リストがある場合、id = リストの最終要素の id + 1
      id: todos.length === 0 ? 1 : todos[todos.length - 1].id + 1,
      text,
      done: false
    }
    // リストに Todo を追加
    this.todos.push(todo)
  }

  @Mutation
  addTodos(todo: Todo) {
    // 積み上げ（スクロールローディングの時に有効）
    this.todos = [...this.todos, todo]
  }

  /**
   * Todo を削除する
   * @param todo 削除する Todo インスタンス
   */
  @Mutation
  remove(todo: Todo) {
    this.todos.splice(this.todos.indexOf(todo), 1)
  }

  /**
   * Todo の done（完了状態）を切り替える
   * @param todo 完了状態を切り替える対象の Todo インスタンス
   */
  @Mutation
  toggle(todo: Todo) {
    todo.done = !todo.done
  }

  /**
   * todos を初期化
   * @param text Todo テキスト
   */
  @Action
  initVuex() {
    this.init()
  }

  /**
   * Todosの初期データをロードする
   * @param todo 完了状態を切り替える対象の Todo インスタンス
   */
  @Action
  async loadTodos() {
    const todos = await Services.fetchTodos()
    todos.forEach((todo) => {
      this.addTodos(todo)
    })
  }
}
