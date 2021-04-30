import React, { Component } from 'react'

export default class FeedbackOptions extends Component {
    render() {
        const {handleGood, handleNeutral, handleBad} = this.props;
        return (
            <div>
                <div>
                    <button onClick={handleGood} style={{marginRight: "10px"}}>Good</button>
                    <button onClick={handleNeutral} style={{marginRight: "10px"}}>Neutral</button>
                    <button onClick={handleBad}>Bad</button>
                </div>
            </div>
        )
    }
}
