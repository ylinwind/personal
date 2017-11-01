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
        const textData = {
            content: 'Taiwan called motorcycle, motor bike [1] or a motorcycle,' +
            ' the motorcycle referred to in the mainland, Hong Kong and Southeast' +
            ' Asia known as motorcycles.',
            title: 'Motorcycle',
          };
        let dataArray = [
            { image: 'https://zos.alipayobjects.com/rmsportal/DGOtoWASeguMJgV.png' },
            { image: 'https://zos.alipayobjects.com/rmsportal/BXJNKCeUSkhQoSS.png' },
            { image: 'https://zos.alipayobjects.com/rmsportal/TDIbcrKdLWVeWJM.png' },
            { image: 'https://zos.alipayobjects.com/rmsportal/SDLiKqyfBvnKMrA.png' },
            { image: 'https://zos.alipayobjects.com/rmsportal/UcVbOrSDHCLPqLG.png' },
            { image: 'https://zos.alipayobjects.com/rmsportal/QJmGZYJBRLkxFSy.png' },
            { image: 'https://zos.alipayobjects.com/rmsportal/PDiTkHViQNVHddN.png' },
            { image: 'https://zos.alipayobjects.com/rmsportal/beHtidyjUMOXbkI.png' },
            { image: 'https://zos.alipayobjects.com/rmsportal/vJcpMCTaSKSVWyH.png' },
            { image: 'https://zos.alipayobjects.com/rmsportal/dvQuFtUoRmvWLsZ.png' },
            { image: 'https://zos.alipayobjects.com/rmsportal/QqWQKvgLSJaYbpr.png' },
            { image: 'https://zos.alipayobjects.com/rmsportal/pTfNdthdsUpLPLJ.png' },
          ];
        return(
            <div className="about_ImageShow_Container">
                <PicShowDetail
                    dataArray={dataArray}
                    textData={textData}
                    title={'Personal_Info'}
                    desc={'Personal_desc'}/>

                {/* <PathAni/> 先不加  换一个svg图片，100*100 */}
                <div className="leen_links">
                    powered by leen_shine @ylinwind
                </div>
            </div>
        )
    }
}