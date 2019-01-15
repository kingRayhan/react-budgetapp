import React, { Component } from 'react'

import { connect } from 'react-redux'
import { removeBudget } from '../store/budgets'

class Income extends Component {
    render() {
        return (
            <div className="income">
                <h2 className="icome__title">Income</h2>

                {this.props.budget
                    .filter(b => b.type === 'earn')
                    .map(budget => (
                        <div className="income__list">
                            <div className="item clearfix" id="income-1">
                                <div className="item__description">
                                    {budget.desc}
                                </div>
                                <div className="right clearfix">
                                    <div className="item__value">
                                        + {budget.amount}
                                    </div>
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
)(Income)
