import React from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionWays from '../../actions';
import { Table, Icon } from 'antd';
import ArtcleList from '../../components/artcle/ArtcleList';

const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="#">{text}</a>,
  }, {
    title: 'Time',
    dataIndex: 'time',
    key: 'time',
  }, {
    title: ' Brief introduction',
    dataIndex: 'brief',
    key: 'brief',
  }];
  
  const data = [{
    key: '1',
    name: 'John Brown',
    time: 32,
    brief: 'New York No. 1 Lake Park',
  }, {
    key: '2',
    name: 'Jim Green',
    time: 42,
    brief: 'London No. 1 Lake Park',
  }, {
    key: '3',
    name: 'Joe Black',
    time: 32,
    brief: 'Sidney No. 1 Lake Park',
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
                <ArtcleList/>
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