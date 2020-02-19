import Todo from '@/models/Test'
import { mock_Todo } from '@/models/Test/_mock'

export const fetchTodos = (): Promise<Todo[]> => {
  return new Promise((resolve) => {
    const initTodos: Todo[] = mock_Todo
    resolve(initTodos)
  })
}
