import React, { Component } from 'react'
import ListWrapper from '../../components/ListWrapper'
import {connect} from 'react-redux';
import {setYear} from '../../store/action'
import axios from 'axios';

class List extends Component<{setYearFunction: (t: any) => void}> {

    async componentWillMount() {
        const {setYearFunction} = this.props;
        const {data} = await axios.get('http://localhost:5000/api/list');
        setYearFunction(data);  
    }

    render() {
        console.log(this.props);
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
}

const mapStateToProps = (state: any) => {
    return {...state}
}

const mapDispatchToProps = (dispatch: (d: any) => void) => {
    return {
        setYearFunction: (year: any) => {
            dispatch(setYear(year))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);