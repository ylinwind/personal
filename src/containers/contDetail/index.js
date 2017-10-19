import React from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionWays from '../../actions';


class About extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <div >
              heiheih
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
export default connect(mapStateToProps,mapDispathchToProps)(About);