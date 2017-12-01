import React from 'react';
import './style.less';
class ArtcleList extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
        }
    }
    render(){
        return(
            <div className="artcle-list-wrap">
                <ul className="artcle-list">
                    <li className="artcle-item">
                        <h3 className="artcle-name">name</h3>
                        <div className="artcle-item-content">
                            dasdasddaffodil敖德萨所撒大声地
                        </div>
                    </li>
                </ul>

            </div>
        )
    }
}
    
    
    export default ArtcleList;