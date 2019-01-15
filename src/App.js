import React, { Component } from 'react'

import Header from './components/Header'
import Input from './components/BudgetInputter'
import Income from './components/Income'
import Expense from './components/Expense'

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="bottom">
                    <Input />
                    <div className="container clearfix">
                        <Income />
                        <Expense />
                    </div>
                </div>
            </div>
        )
    }
}
