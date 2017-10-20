import React from 'react';
import { Card } from 'antd'
import PicShowDetail from '../animation/picShow'
import PathAni from '../animation/pathAni'
import './assets/style.css'

export default class ImageShow extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="about_ImageShow_Container">
                <PicShowDetail/>
                <PathAni/>
            </div>
        )
    }
}