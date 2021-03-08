import React, { Component } from 'react'

export default class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            oddYear: [],
            evenYear: [],
            years: [],
            active: true,
            activeID: 2020,
            successLaunch: 'True',
            successLanding: 'True'
        }
    }

    handleClick = (yr) => {
        this.setState({ activeID: yr });
        this.props.getYears(yr)
        this.props.handleFilteredData()
    };

    handleSuccessLaunch = (opt) => {
        this.setState({ successLaunch: opt })
        this.props.getSuccessLaunch(opt)
    }

    handleSuccessLanding = (opt) => {
        this.setState({ successLanding: opt })
        this.props.getSuccessLanding(opt)
    }

    componentDidMount() {
        const year = 2006;
        const years = Array.from(new Array(15), (val, index) => {
            return index + year
        });

        this.setState({
            years: years
        })
    }

    render() {
        const { years } = this.state;

        const option = ['True', 'False']

        return (
            <div className="sidebar">
                <div className="filter">
                    <h3>Filters</h3>
                    <div className="field">
                        <input className="launchField" type="text" name="launchYear" placeholder="Launch Year" disabled />
                    </div>
                    <div className="badges">
                        <div className="row">

                            <div className="column">
                                {(years && years.length > 0) && years.map((yrs) => {
                                    return <button className={`year ${this.state.activeID === yrs ? "active" : ""}`} onClick={() => this.handleClick(yrs)}>
                                        <label> {yrs} </label>
                                    </button>
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="field">
                        <input className="launchField" type="text" name="successLaunch" placeholder="Successful Launch" disabled />
                    </div>
                    <div className="successbadges">
                        <div className="row">

                            <div className="column">
                                {option.map((opt) => {
                                    return <button className={`year ${this.state.successLaunch === opt ? "active" : ""}`} onClick={() => this.handleSuccessLaunch(opt)}   >
                                        <label> {opt} </label>
                                    </button>
                                })}

                            </div>
                        </div>
                    </div>

                    <div className="field">
                        <input className="launchField" type="text" name="successLanding" placeholder="Successful Landing" disabled />
                    </div>
                    <div className="successbadges">
                        <div className="row">

                            <div className="column">
                                {option.map((opt) => {
                                    return <button className={`year ${this.state.successLanding === opt ? "active" : ""}`} onClick={() => this.handleSuccessLanding(opt)}   >
                                        <label> {opt} </label>
                                    </button>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}