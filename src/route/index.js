import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router ,
         Link,
         Route ,} from 'react-router-dom';
import HomeList from '../containers/contList';
import Detail from '../containers/contDetail';
import Welcome from '../containers/welcome';
import Links from '../components/Links';
import Sider from '../containers/sider/Sider';
import './style.css';
import '../css/common.css';
class Main extends React.Component{

    constructor(props){
        super(props);
        this.state={
        }
    }
    render(){
        return(
            <Router>
                <div style={{height:'100%'}}>
                    <Sider/>
                    <div className="contWrap">
                        <div className="mainContent">
                            <Route exact path="/" component={Welcome}/>
                            <Route path="/homelist" component={HomeList}/>
                            <Route path="/detail" component={Detail}/>
                            <Route path="/Links" component={Links}/>
                        </div>
                    </div>
                    
                </div>
            </Router>
        )
    }
}


export default Main;