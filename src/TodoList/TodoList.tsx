import s from './index.module.css'
import { Element} from '../types'
import { todoItemsState } from '../state/atoms'
import { useRecoilState, useRecoilValue } from 'recoil'
import { filteredTodoListState } from '../state/selectors'

const TodoList = () => {
    const [todoList, setTodoList] = useRecoilState(todoItemsState)

    const setDone = (e: React.FormEvent<EventTarget>, id:number) => {
        e.preventDefault()
        // const index = newArray.map(e => e.id).indexOf(id);
        const index = todoList.findIndex((el) => el.id === id);
        let newArray = [
			...todoList.slice(0, index),
            {...todoList[index], done: !todoList[index].done},
			...todoList.slice(index + 1)
        ]
        setTodoList(newArray)
        localStorage.setItem('todos', JSON.stringify(newArray));
    }

    const deleteItem = (e: React.FormEvent<EventTarget>, id:number) => {
        e.preventDefault()
        const index = todoList.findIndex((el: Element) => el.id === id);
        
        let newArray = [
			...todoList.slice(0, index),
			...todoList.slice(index + 1)
        ]
        setTodoList(newArray)
        localStorage.setItem('todos', JSON.stringify(newArray));
    }

    const visibleItems = useRecoilValue(filteredTodoListState)

    return(
        <ul className={s.list}>
            {
                visibleItems.map((item: Element) => {
                    return(
                        <li key={item.id} className={s.element}>
                            <span onClick={(e) => setDone(e, item.id)} >
                                <input 
                                id={item.id.toString()} 
                                className={s.custom_radio} 
                                type="radio" 
                                checked={item.done} 
                                onChange={()=>console.log('')}/>
                                <label htmlFor={item.id.toString()} className={`${s.label} ${item.done ? s.checked : ''}`}>{item.label}</label> 
                            </span>
                            <button className={s.button} onClick={e=>deleteItem(e, item.id)}>x</button>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default TodoList