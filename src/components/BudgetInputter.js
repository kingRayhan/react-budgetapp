import React, { Component } from 'react'
import { connect } from 'react-redux'

import 'toastr/build/toastr.css'
import toastr from 'toastr'
import { isEmpty, isNumeric } from 'validator'

import { addEarn, addExpense } from '../store/budgets'
class BudgetInputter extends Component {
    state = { type: 'earn', desc: '', amount: '' }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    onSubmit = e => {
        e.preventDefault()

        let hasError = false

        Object.keys(this.state).forEach(key => {
            if (isEmpty(this.state[key])) {
                hasError = true
                return toastr.error(`${key} can't be empty`)
            }

            if (key === 'amount' && !isNumeric(this.state[key])) {
                hasError = true
                toastr.error(`${key} should be a numeric value`)
            }
        })

        if (this.state.type === 'earn' && !hasError) {
            this.props.addEarn(this.state.desc, this.state.amount)
            toastr.success('Submitted to Earning list')
            this.setState({ type: 'earn', desc: '', amount: '' })
        }

        if (this.state.type === 'expense' && !hasError) {
            this.props.addExpense(this.state.desc, this.state.amount)
            this.setState({ type: 'expense', desc: '', amount: '' })
            toastr.success('Submitted to Expense list')
        }
    }

    render() {
        return (
            <div className="add">
                <div className="add__container">
                    <form onSubmit={this.onSubmit}>
                        <select
                            className="add__type red-focus"
                            name="type"
                            onChange={this.onChange}
                        >
                            <option value="earn">+</option>
                            <option value="expense">-</option>
                        </select>
                        <input
                            type="text"
                            className="add__description red-focus"
                            placeholder="Add description"
                            name="desc"
                            onChange={this.onChange}
                            value={this.state.desc}
                        />
                        <input
                            type="text"
                            className="add__value red-focus"
                            placeholder="Value"
                            name="amount"
                            onChange={this.onChange}
                            value={this.state.amount}
                        />
                        <button className="add__btn red" type="submit">
                            <i className="ion-ios-checkmark-outline" />
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect(
    null,
    { addEarn, addExpense }
)(BudgetInputter)
