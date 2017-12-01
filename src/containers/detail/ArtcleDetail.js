import React from 'react';
import ArtcleTop from '../../components/artcle/ArtcleTop';
import ArtcleContent from '../../components/artcle/ArtcleContent';

class ArtcleDetail extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
        }
    }
    
    componentDidMount() {
        let search = location.search&&location.search.slice(1);
        
        console.log(location,'--',search)
    }
    
    render(){
        return(
            <div style={{padding:"10px" , height:"100%"}}>
                <ArtcleTop
                    titleName={"itemTitle"}
                    authorName={"Ylinwind"}
                    editTime={"2017-09-09"}
                    artcleTags={['javascript','css','html']}/>
                <ArtcleContent/>
                <p className="artcle-read-info">
                    <span>阅读<i>(111)</i></span>
                    <span>评论<i>(111)</i></span>
                </p>
            </div>
        )
    }
}
    
    
    export default ArtcleDetail;