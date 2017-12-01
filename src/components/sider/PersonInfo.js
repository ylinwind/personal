import React from 'react';
import ReactDOM from 'react-dom';
import { Modal, Button , Form , Input} from 'antd';
import InfoForm from './InfoForm';
import './style.css';

const FormItem = Form.Item;

export default class Sider extends React.Component{
    constructor(props){
        super(props);
        this.state={
            theme: 'light',
            current: '1',
            ModalVisible:false
        }
    }
    setModalVisible=(value)=>{
        console.log(value)
        // this.setState({
        //     ModalVisible:value,
        // })
        Modal.confirm({
            title: '你要慎重！',
            content: '点什么点，再点就把你吃掉~',
            okText: '大哥好~',
            cancelText: '不点了不点了',
          });
    }
    render(){
        return(
            <div>
                <div className="logo" onClick={() => this.setModalVisible(true)}>
                    <img src="./src/images/1.jpg"/>
                    <span>
                        lin dada
                    </span>
                </div>
                {/* <Modal
                    title="修改个人信息"
                    wrapClassName="vertical-center-modal"
                    visible={this.state.ModalVisible}
                    onOk={() => this.setModalVisible(false)}
                    onCancel={() => this.setModalVisible(false)}
                    >
                    <InfoForm/>
                </Modal> */}
            </div>
            
        )
    }
}