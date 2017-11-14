import React from 'react';
import { BrowserRouter as Router ,
    Link,
    Route ,} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionWays from '../../actions';

import jQuery from 'jquery';
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
                {/* <button onClick={this.getStart}>getStart</button> */}
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

    getStart=()=>{

        jQuery.ajax({
            type:'get',
            url:'http://localhost:8081/123',
            success:function(data){
                console.log(data);
            },
            error:function(){
                console.log('error');
            }
            })
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