import React, { Component } from 'react'
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';

export default class Section extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
        total: 0,
        positivePercentage: 0,
    }

    handleGoodFeedback = () => {
        this.setState((prevState) => ({
            good: prevState.good + 1,
        }));
        this.countTotalFeedback()
    };

    handleNeutralFeedback = () => {
        this.setState((prevState) => ({
            neutral: prevState.neutral + 1,
        }));
        this.countTotalFeedback()
    };

    handleBadFeedback = () => {
        this.setState((prevState) => ({
            bad: prevState.bad + 1,
        }));
        this.countTotalFeedback()
    };

    countTotalFeedback = () => {
        this.setState((prevState) => ({
            total: prevState.total + 1,
        }));
        this.countPositiveFeedbackPercentage()
    };

    countPositiveFeedbackPercentage = () => {
        this.setState({
            positivePercentage: Math.round(this.state.good * 100/ this.state.total)
        });
    };

    render() {
        const { good, neutral, bad, total, positivePercentage } = this.state; 
        return (
            <div>
                <h1>Please leave feedback</h1>
                <FeedbackOptions handleGood={this.handleGoodFeedback} handleNeutral={this.handleNeutralFeedback} handleBad={this.handleBadFeedback}/>
                <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />
            </div>
        )
    }
}