import React from 'react'
import './TodoItem.css'

export default function TodoItem ({item, onTodoDone}) {
        return (
            <div className="TodoItem">
                <input 
                 type="checkbox"
                 id={`todo-${item.key}`}
                 className="css-checkbox"
                 checked={item.isDone}
                 onChange={onTodoDone}/>
                 <label htmlFor={`todo-${item.key}`} className="css-label">{item.text}</label>
            </div>
        )
}