<template>
  <v-layout>
    <div id="app">
      <nuxt-link to="/post">Home</nuxt-link>
      <h1>Todo List</h1>
      <ul>
        <li v-for="(todo, i) in todos" :key="i">
          <input type="checkbox" :checked="todo.done" @change="toggle(todo)" />
          <span :class="{ done: todo.done }">{{ todo.text }}</span>
          <button @click="remove(todo)">削除</button>
        </li>
        <li>
          <input placeholder="Todo を入力" @keyup.enter="addTodo" />
        </li>
      </ul>
    </div>
  </v-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
// Todo の型定義をインポート
import Todo from '@/models/Test'
// Todo リストのストアモジュールをインポート
import { todoStore } from '@/store'

@Component
export default class IndexPage extends Vue {
  beforeCreate() {
    todoStore.initVuex()
  }

  async created() {
    await todoStore.loadTodos()
  }

  get todos(): Array<Todo> {
    // リスト（todos）を取得
    return todoStore.todos
  }

  // Todo の追加
  addTodo(e: any): void {
    todoStore.add(e.target.value)
    e.target.value = ''
  }

  // Todo の削除
  remove(todo: Todo) {
    todoStore.remove(todo)
  }

  // Todo の done（完了状態）切り替え
  toggle(todo: Todo) {
    todoStore.toggle(todo)
  }
}
</script>

<style>
/* 完了状態の Todo には打消し線をつける */
.done {
  text-decoration: line-through;
}
</style>
