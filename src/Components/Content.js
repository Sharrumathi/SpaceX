import React, { Component } from 'react'

export default class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount = () => {
        this.props.handleFetchDetails();
    }

    render() {

        const { Space, launch_years, successLaunch, successLanding } = this.props;
        const checkData = Space.length > 0 && Space.filter(el => {
            const landingData = el.rocket.first_stage.cores[0].land_success == null ? false : true;
            return el.launch_year == launch_years && el.launch_success == successLaunch && landingData == successLanding
        })

        return (
            <div className="content">
                <div className="contentRow">
                    {checkData.length > 0 ?

                        (checkData.map((space, i) => {
                            return (
                                <div className="contentColumn">
                                    <div className="imageContent">
                                        <img src={space.links.mission_patch} className="image" />
                                    </div>
                                    <div className="details">
                                        <div className="detailHeading">
                                            <label>{space.mission_name}</label>
                                        </div>
                                        <div className="detailContent">
                                            <label className="mission">Mission Ids:</label>
                                            {space.mission_id.length > 0 ? space.mission_id.map((id) => {
                                                return <ul className="missionList">
                                                    <li>{id}</li>
                                                </ul>
                                            }) : <span className="answer"> {"-"} </span>}
                                            <div className="detailRow">
                                                <span>Launch Year: &nbsp;</span>
                                                <span className="answer">{space.launch_year}</span>
                                            </div>
                                            <div className="detailRow">
                                                <span>Successful Launch: &nbsp;</span>
                                                <span className="answer">{space.launch_success == true ? "true" : "false"}</span>
                                            </div>
                                            <div className="detailRow">
                                                <span>Successful Landing: &nbsp;</span>
                                                <span className="answer">{space.rocket.first_stage.cores[0].land_success == true ? "true" : "false"}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })) : <div class="alert">
                            <strong>Alert!</strong> In {launch_years} there is no success launch nor success landing.
                      </div>
                    }
                </div>
            </div>
        )
    }
}
