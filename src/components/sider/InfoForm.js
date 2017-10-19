import React from 'react';
import ReactDOM from 'react-dom';
import { Modal, Button , Form , Input , Switch, Radio,
    Slider, Upload, Icon} from 'antd';
import './style.css';

const FormItem = Form.Item;

class InfoForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
           
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
    }
    normFile = (e) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
          return e;
        }
        return e && e.fileList;
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
          labelCol: { span: 6 },
          wrapperCol: { span: 14 },
        };
        return(
            <Form onSubmit={this.handleSubmit}>
                <FormItem
                    {...formItemLayout}
                    label="InputName"
                    >
                    {getFieldDecorator('userName', { initialValue: 'lindada' })(
                        <Input />
                    )}
                    <span className="ant-form-text"> 输入你想修改的用户名</span>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Upload"
                    extra="上传你想更换的头像"
                >
                    {getFieldDecorator('upload', {
                    valuePropName: 'fileList',
                    getValueFromEvent: this.normFile,
                    })(
                    <Upload name="logo" action="/upload.do" listType="picture">
                        <Button>
                        <Icon type="upload" /> Click to upload
                        </Button>
                    </Upload>
                    )}
                </FormItem>
            </Form>
        )
    }
}
const Info = Form.create()(InfoForm);
export default Info;