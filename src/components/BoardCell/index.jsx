import { useState } from 'react'
import './styles.css'

const BoardCell = ({ whoIsCurrent, onClick }) => {
    const [current, setCurrent] = useState(null)

    const onClickHandler = () => {
        if(!current) {
            setCurrent(whoIsCurrent)
            onClick()
        }
    }

    return (
        <div
            className="cell"
            onClick={onClickHandler}
        >
            {current ? current : ''}
        </div>
    )
}

export default BoardCell