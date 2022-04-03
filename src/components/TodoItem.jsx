import React from 'react'
import { useDispatch } from 'react-redux'
import {deleteTodo, toggleTodo} from '../store/todoSlice'

export const TodoItem = ({id, title, completed}) => {
    const dispatch = useDispatch();
    return (
    <li>     
        <input type="checkbox" checked={completed} onChange={() => dispatch(toggleTodo(id))}/>
        <span>{title}</span>
        <span className='delete' onClick={() => dispatch(deleteTodo(id))}>
            &times;
        </span>
    </li>
  )
}
