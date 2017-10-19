import React from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionWays from '../../actions';
import { Table, Icon } from 'antd';

const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="#">{text}</a>,
  }, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  }, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  }];
  
  const data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  }, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  }, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  }];

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
        }
    }
    render(){
        return(
            <div>
              <Table 
                columns={columns} 
                dataSource={data} 
                onRowClick={(record,index,event)=>{
                  this.props.history.push(`/detail?index=${index}`);
                }}/>
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

export default connect(mapStateToProps,mapDispathchToProps)(Home);