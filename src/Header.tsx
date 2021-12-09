import React from 'react';
import { connect } from "react-redux";
import * as actions from "../store/actions/index";
import { Waypoint } from 'react-waypoint';
import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from './store/actions/actionTypes';
import { bindActionCreators } from 'redux';

const Header: React.FC = (props) => {
    
    return (
        <section className="header-section">
            <h1 className="header-section__title">Autumn Collection up to 60% off</h1>
            <Waypoint
                onEnter={({ previousPosition, currentPosition}) => {
                    if (previousPosition === "above" && currentPosition === "inside") props.navigationToggleSticky(false)
                }}
                onLeave={({ previousPosition, currentPosition}) => {
                    if (previousPosition === "inside" && currentPosition === "above") props.navigationToggleSticky(true)
                }}
            />
            <a className="header-section__shop-now-btn" href='#hello'>Shop now</a>
        </section>
    );
};

interface LinkDispatchProps {
    navigationToggleSticky: (isSticky: boolean) => void;
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>) => {
    return {
        navigationToggleSticky: bindActionCreators(navigationToggleSticky, dispatch)
        (isSticky) =>
        dispatch(actions.navigationToggleSticky(isSticky)),
    };
};

export default connect(
    null,
    mapDispatchToProps
)(Header);