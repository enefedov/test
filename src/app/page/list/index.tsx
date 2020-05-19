import React from 'react'
import ListWrapper from '../../components/ListWrapper'

const List = () => {

    return (
        <div style={{
            maxWidth: '1100px',
            width: '100%',
            margin: '0 auto',
        }}>
            <h3>Таблица данных</h3>
            <a href='/create'>Добавить</a>
            <ListWrapper />
        </div>
    )
}

export default List;