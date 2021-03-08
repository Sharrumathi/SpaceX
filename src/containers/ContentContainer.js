import React, { Component } from 'react'
import Content from '../Components/Content';
import { connect } from 'react-redux';
import { getSpaceList } from '../api/apiHelpers';
import { LIST_DATA, UPDATE_DATA } from "../constants/ActionTypes";

export class ContentContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const { launch_years, Space } = this.props;
        // const filterYear = Space.length > 0 && Space.filter((item) => {
        //     console.log('item--------', item)
            
        //     return item.launch_year == launch_years
        // })

        // console.log('check((((((((((', filterYear )
        return (
            <Content
                Space={this.props.Space}
                handleFetchDetails={this.props.handleFetchDetails}
                launch_years={this.props.launch_years}
                successLaunch={this.props.successLaunch}
                successLanding={this.props.successLanding}
                // filterYear={filterYear}
                // handleFilteredData={this.props.handleFilteredData}
            />
        )
    }
}

const mapStateToProps = store => {
    console.log('store in content container', store.dataHelpers)
    return {
        Space: store.dataHelpers.space,
        launch_years: store.dataHelpers.years,
        successLaunch: store.dataHelpers.successLaunch,
        successLanding: store.dataHelpers.successLanding
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleFetchDetails: () => {
            getSpaceList()
                .then(data => dispatch({ type: LIST_DATA, payload: data }))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentContainer);