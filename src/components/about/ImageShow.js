import React from 'react';
import { Card } from 'antd'
import './assets/style.css'

export default class ImageShow extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        //style={{left:50+(i%3)*20 , top:Math.ceil(i/3)*20}}
        let imgArr = [];
        for(let i  = 0 ; i <5 ; i++){
            imgArr.push(
                <Card style={{animation:"moveAnimate 10s linear "+i*2+"s infinite",
                        WebkitAnimation:"moveAnimate 10s linear "+i*2+"s infinite"}} 
                        bodyStyle={{ padding: 0 ,height:'100%'}} className="image_card" 
                        key={i}
                        onClick={(e)=>{
                            console.log('111',i,e)
                        }}>
                    <div className="custom-image">
                        <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                    </div>
                    <div className="custom-card">
                        <h3>Europe Street beat</h3>
                        <p>www.instagram.com</p>
                    </div>
                </Card>
            )
        }
        return(
            <div className="about_ImageShow_Container">
                {/* <div className="about_ImageShow_Top"></div>
                <div className="about_ImageShow_Left"></div>
                <div className="about_ImageShow_Right"></div>
                <div className="about_ImageShow_Bottom"></div> */}
                {imgArr}
            </div>
        )
    }
}