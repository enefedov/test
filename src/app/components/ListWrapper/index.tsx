import React from 'react'
import TableComponent from '../Table'
import {labels} from './helpers'

const rows = [
    {
        taskName: 'Выбить 100',
        name: 'Игорь1',
        status: true, 
    },
    {
        taskName: 'Выбить 100',
        name: 'Игорь1',
        status: true, 
    },
    {
        taskName: 'Выбить 100',
        name: 'Игорь1',
        status: true, 
    },
    {
        taskName: 'Выбить 100',
        name: 'Игорь1',
        status: true, 
    },
    {
        taskName: 'Выбить 100',
        name: 'Игорь1',
        status: true, 
    },
    {
        taskName: 'Выбить 100',
        name: 'Игорь1',
        status: true, 
    },
    {
        taskName: 'Выбить 100',
        name: 'Игорь1',
        status: true, 
    },
]

const ListWrapper = () => {
    return (
        <div>
            <TableComponent
                label={labels}
                rows={rows}
            />
        </div>
    )
}

export default ListWrapper;
