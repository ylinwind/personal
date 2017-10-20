import React from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionWays from '../../actions';
//引用组件
import ImageShow from '../../components/about/ImageShow';


class About extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <div style={{height:'100%'}}>
              <ImageShow/>
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