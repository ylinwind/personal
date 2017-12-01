import React from 'react';
import './style.less';
class ArtcleContent extends React.Component{
    
        constructor(props){
            super(props);
            this.state={
            }
        }
        render(){
            return(
                <div className="artcle-content">
                    <div className="artcle-greate-point">
                        <i className="iconfont icon-zan"></i>
                    </div>
                </div>
            )
        }
    }
    
    
    export default ArtcleContent;