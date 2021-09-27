import s from './index.module.css'
import { filterState } from '../state/atoms'
import { doneCountState } from '../state/selectors'
import { useRecoilState, useRecoilValue } from 'recoil'

const Options = () => {
    const [filter, setFilter] = useRecoilState(filterState)
    const doneCount = useRecoilValue(doneCountState)
    const buttons = [
        { name: 'all', label: 'All'},
        { name: 'current', label: 'Current'},
        { name: 'done', label: 'Done'}
    ]

    return(
        <div className={s.options}>
            <div className={s.counter}>{doneCount} left</div>
            {
                buttons.map((item, index) => {
                    return(
                        <button key={index} 
                            className={filter === item.name ? s.active : ''} onClick={()=>{setFilter(item.name)}}>
                            {item.label}
                        </button>
                    )
                })
            }
        </div>
    )
}

export default Options