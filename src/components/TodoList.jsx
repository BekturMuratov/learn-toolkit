import React from 'react'
import { TodoItem } from './TodoItem'
import {useSelector} from 'react-redux'

export const TodoList = () => {
    const todos = useSelector(state => state.todos.todos);
    return (
    <ul>{todos.map(todo => 
    <TodoItem key={todo.id}
    {...todo} />
    )}</ul>
  )
}
