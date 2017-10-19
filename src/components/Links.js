import React from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionWays from '../actions';

class Links extends React.Component{
    render(){
        return(
            
            <div>
                0090
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        state
    };
}
function mapDispathchToProps(dispatch){
    return{
        actions:bindActionCreators(actionWays,dispatch)
    }
}

export default connect(mapStateToProps,mapDispathchToProps)(Links);