import React from 'react';

import '../../lib/swiper/swiper.jquery.min'
import Swiper from '../../lib/swiper/swiper.min'
import '../../lib/swiper/swiper.min.css'
import './style.css'

export default class WelcomeBanne extends React.Component{
    constructor(props){
        super(props);
        this.state ={

        }
    }
    render(){
        return(
            <div className="Banner_container">
                {/* <ul>
                    <li>
                        <img src="https://zos.alipayobjects.com/rmsportal/DGOtoWASeguMJgV.png"/>
                    </li>
                    <li>
                        <img src="https://zos.alipayobjects.com/rmsportal/BXJNKCeUSkhQoSS.png"/>
                    </li>
                </ul> */}
                <div className="swiper-container" style={{height:"100%"}}>
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <img src="http://img.pconline.com.cn/images/upload/upc/tx/wallpaper/1308/15/c2/24494094_1376530595237.jpg"/>
                        </div>
                        <div className="swiper-slide">
                            <img src="http://abc.2008php.com/2014_Website_appreciate/2015-09-20/20150920191057.jpg"/>
                        </div>
                        <div className="swiper-slide">
                            <img src="http://img3.91.com/uploads/allimg/130528/32-13052QH547.jpg"/>
                        </div>
                    </div>
                    {/* <!-- 如果需要分页器 --> */}
                    <div className="swiper-pagination"></div>
                    
                    {/* <!-- 如果需要导航按钮 --> */}
                    {/* <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div> */}
                    
                    {/* <!-- 如果需要滚动条 --> */}
                    {/* <div className="swiper-scrollbar"></div> */}
                </div>
            </div>
        )
    }
    componentDidMount(){
        window.onload = function(){
            var mySwiper = new Swiper ('.swiper-container', {
                autoplay: 2000,//可选选项，自动滑动
                // direction: 'vertical',
                loop: true,
                effect : 'fade',
                // 如果需要分页器
                pagination: {
                  el: '.swiper-pagination',
                },
                
                // 如果需要前进后退按钮
                // navigation: {
                //   nextEl: '.swiper-button-next',
                //   prevEl: '.swiper-button-prev',
                // },
                
                // 如果需要滚动条
                // scrollbar: {
                //   el: '.swiper-scrollbar',
                // },
              }) 
        }
    }
    handleLeftSwipe=(e)=> {
        console.log(e);
    }
}