import React from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionWays from '../../actions';
// 组件
import PicDetails from '../../components/animation/picShow';

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

class WorkInfo extends React.Component{
    
    render(){
        return(
            <div>
                <PicDetails
                    dataArray = {dataArray}
                    textData={textData}
                    title={'WorksInfo'}
                    desc={'works_desc'}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        state
    };
}
function mapDispathchToProps(dispatch){
    return{
        actions:bindActionCreators(actionWays,dispatch)
    }
}

export default connect(mapStateToProps,mapDispathchToProps)(WorkInfo);