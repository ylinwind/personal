import React from 'react';
import { BrowserRouter as Router ,
    Link,
    Route ,} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionWays from '../../actions';

import WelcomeBanne from '../../components/welcome/SwiperBanner'

class Welcome extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <div style={{height:"100%",position:"relative"}}>
                <Link to="/homelist" style={{position:"absolute",
                            zIndex:2,
                            background:"rgba(44,33,55,.5)",
                            padding:"10px 20px",
                            borderRadius:"5px",
                            color:"white",
                            left:"50%",
                            bottom:"5%",
                            transform:"translateX(-50%)"
                            }}>Come In</Link>
              <WelcomeBanne/>
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
export default connect(mapStateToProps,mapDispathchToProps)(Welcome);