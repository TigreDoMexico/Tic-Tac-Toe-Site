import { useState } from 'react'
import BoardCell from '../BoardCell'
import { TicTacToeTime, initialGame } from '../../services/gameService/consts'

import './styles.css'

const rows = [0, 1, 2]

const Board = () => {
    const [current, setCurrent] = useState(TicTacToeTime.X);

    const onClickCell = (cellId) => {
        //validarSeJogoAcabou()

        if (current === TicTacToeTime.X)
            setCurrent(TicTacToeTime.O)
        else
            setCurrent(TicTacToeTime.X)
    }

    return (
        <>
            <div>Vez do: {current}</div>
            {rows.map((el) => (
                <div key={el} className="row">
                    {initialGame[el].map((ex, idx) => (
                        <BoardCell
                            key={idx}
                            whoIsCurrent={current}
                            onClick={onClickCell}
                        />
                    ))}
                </div>
            ))}
        </>
    )
}

export default Board