import React, { Component } from 'react'
import Sidebar from '../Components/Sidebar';
import { connect } from "react-redux";
import { GET_YEARS, SUCCESS_LANDING, SUCCESS_LAUNCH, UPDATE_DATA } from "../constants/ActionTypes";

class SidebarContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <Sidebar
            getYears={this.props.getYears}
            getSuccessLaunch={this.props.getSuccessLaunch}
            getSuccessLanding={this.props.getSuccessLanding}
            handleFilteredData={this.props.handleFilteredData}
            />
        )
    }
}

export const mapStateToProps = store => {
    return {
    };
};

export const mapDispatchToProps = dispatch => {
    return {
        getYears: (data) => {
            dispatch({ type: GET_YEARS, payload: data })
        },
        getSuccessLaunch: (data) => {
            dispatch({ type: SUCCESS_LAUNCH, payload: data })
        },
        getSuccessLanding: (data) => {
            dispatch({ type: SUCCESS_LANDING, payload: data })
        },
        handleFilteredData: (data) => {
            dispatch({ type: UPDATE_DATA, payload: data })
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainer);
