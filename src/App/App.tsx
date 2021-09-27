import AddItem from '../AddItem/AddItem';
import TodoList from '../TodoList/TodoList';
import Options from '../Options/Options';

import s from './index.module.css'
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoItemsState } from '../state/atoms';


const App = () => {
    const setTodoList = useSetRecoilState(todoItemsState)
    const todos = localStorage.getItem('todos')
    
    if (todos != null) {
        var _initialTodoList = JSON.parse(todos)
    }
    useEffect(()=> {
        if (_initialTodoList) {
            setTodoList(_initialTodoList)
        }// eslint-disable-next-line
    }, [setTodoList])

    return(
        <div className={s.container}>
            <h1>TODO Recoil</h1>
            <AddItem />

            <div className={s.inner}>
                <TodoList />
                <Options />
            </div>
        </div>
    )
}

export default App