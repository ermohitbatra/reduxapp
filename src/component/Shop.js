import React from 'react'
import { useDispatch } from 'react-redux'
//import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';
import { bindActionCreators } from 'redux';

const Shop = () => {
    const dispatch = useDispatch();
    const actions = bindActionCreators(actionCreators, dispatch);
    const {withdrawMoney, depositMoney, decreseAge, increaseAge} = actions;
    return (
        <div>
            <h2>Deposit/Withdraw Money</h2>
            {/* <button className='btn btn-primary mx-2' onClick={() => {dispatch(actionCreators.withdrawMoney(100))}}>-</button>
            Update Balance
            <button className='btn btn-primary mx-2' onClick={() => {dispatch(actionCreators.depositMoney(100))}}>+</button> */}
            <button className='btn btn-primary mx-2' onClick={() => {withdrawMoney(100); decreseAge(1)}}>-</button>
            Update Balance
            <button className='btn btn-primary mx-2' onClick={() => {depositMoney(100); increaseAge(1)}}>+</button>
        </div>
    )
}

export default Shop
