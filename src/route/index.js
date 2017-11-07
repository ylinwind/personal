import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router ,
         Link,
         Route ,} from 'react-router-dom';
import HomeList from '../containers/contList';
import About from '../containers/about';
import Welcome from '../containers/welcome';
import WorkInfo from '../containers/linksInfo/WorkInfo';
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
                <div style={{height:'100%',overflow:"hidden"}}>
                    <Route exact path="/" component={Welcome}/>
                    <Sider/>
                    <div className="contWrap">
                        <div className="mainContent">
                            <Route path="/homelist" component={HomeList}/>
                            <Route path="/about" component={About}/>
                            <Route path="/Links" component={WorkInfo}/>
                        </div>
                    </div>
                    
                </div>
            </Router>
        )
    }
}


export default Main;