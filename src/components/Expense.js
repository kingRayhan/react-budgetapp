import React, { Component } from 'react'

import { connect } from 'react-redux'
import { removeBudget } from '../store/budgets'

class Expense extends Component {
    render() {
        return (
            <div className="expenses">
                <h2 className="expenses__title">Expenses</h2>

                {this.props.budget
                    .filter(b => b.type === 'expense')
                    .map(budget => (
                        <div className="expenses__list" key={budget.id}>
                            <div className="item clearfix" id="expense-0">
                                <div className="item__description">
                                    {budget.desc}
                                </div>
                                <div className="right clearfix">
                                    <div className="item__value">
                                        - {budget.amount}
                                    </div>
                                    {/*TODO: <div className="item__percentage">21%</div> */}
                                    <div className="item__delete">
                                        <button
                                            className="item__delete--btn"
                                            onClick={() =>
                                                this.props.removeBudget(
                                                    budget.id
                                                )
                                            }
                                        >
                                            <i className="ion-ios-close-outline" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        )
    }
}

export default connect(
    state => ({ ...state }),
    { removeBudget }
)(Expense)
