import React from 'react';
import './style.less';
class ArtcleTop extends React.Component{
    
        constructor(props){
            super(props);
            this.state={
            }
        }
        render(){
            return(
                <div className="lx_artcle_top">
                    <h3>{this.props.titleName||"404 Not Found"}</h3>
                    <p className="artcle-tags">
                        {this.props.artcleTags&&this.props.artcleTags.map((item,index)=>{
                            return <i key={index}>{item}</i>
                        })}
                    </p>
                    <p className="editInfo"><span>{this.props.authorName||"404 Not Found"}</span> - <span>{this.props.editTime || "404 Not Found"}</span></p>
                </div>
            )
        }
    }
    
    
    export default ArtcleTop;