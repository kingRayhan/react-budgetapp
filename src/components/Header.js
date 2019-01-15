import React, { Component } from 'react'

import { connect } from 'react-redux'

class Header extends Component {
    totalEarnings = () => {
        if (this.props.budget.length > 0) {
            const earns = this.props.budget.filter(b => b.type === 'earn')

            return earns
                .reduce(
                    (total, current) => (total += parseFloat(current.amount)),
                    0
                )
                .toFixed(2)
        }
        return 0
    }
    totalExpanses = () => {
        if (this.props.budget.length > 0) {
            const earns = this.props.budget.filter(b => b.type === 'expense')

            return earns
                .reduce(
                    (total, current) => (total += parseFloat(current.amount)),
                    0
                )
                .toFixed(2)
        }
        return 0
    }

    expensePercent = () => {
        return (this.percentage = Math.round(
            (this.totalExpanses() / this.totalEarnings()) * 100
        ))
    }

    render() {
        return (
            <div className="top">
                <div className="budget">
                    <div className="budget__title">
                        Available Budget in{' '}
                        <span className="budget__title--month">
                            January 2019
                        </span>
                        :
                    </div>

                    <div className="budget__value">
                        {(this.totalEarnings() - this.totalExpanses()).toFixed(
                            2
                        ) > 0 && '+'}
                        {(this.totalEarnings() - this.totalExpanses()).toFixed(
                            2
                        )}
                    </div>

                    <div className="budget__income clearfix">
                        <div className="budget__income--text">Income</div>
                        <div className="right">
                            <div className="budget__income--value">
                                {this.totalEarnings()}
                            </div>
                            <div className="budget__income--percentage">
                                &nbsp;
                            </div>
                        </div>
                    </div>

                    <div className="budget__expenses clearfix">
                        <div className="budget__expenses--text">Expenses</div>
                        <div className="right clearfix">
                            <div className="budget__expenses--value">
                                - {this.totalExpanses()}
                            </div>
                            <div className="budget__expenses--percentage">
                                {this.expensePercent()
                                    ? this.expensePercent()
                                    : 0}
                                %
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(state => ({ ...state }))(Header)
