import { useState } from 'react';
import s from './index.module.css'
import { todoItemsState } from '../state/atoms'
import { useRecoilState } from 'recoil'

const AddItem = () => {
    const [todoList, setTodoList] = useRecoilState(todoItemsState)
    const [text, setText] = useState('')

    const addItem = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault()
        if (text) {
            const newArray = [
                ...todoList,
                {id: Date.now(), label: text, done: false}
            ]
            setTodoList(newArray)
            localStorage.setItem('todos', JSON.stringify(newArray));
            setText('')
        }
    }
    return(
            <div className={s.new_element}>
                <form onSubmit={(e) => {addItem(e)}}>
                    <button>&#10010;</button>
                    <input 
                        type="text" 
                        placeholder='Add item' 
                        value={text}
                        onChange={(e) => setText(e.target.value)}/>
                </form>
            </div>
    )
}

export default AddItem