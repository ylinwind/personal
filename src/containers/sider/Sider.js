import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router ,
         Link,
         Route ,} from 'react-router-dom';
import { Menu, Icon, Switch , Popover} from 'antd';

import UserInfo from '../../components/sider/PersonInfo';
import './style.css';

const SubMenu = Menu.SubMenu;

export default class Sider extends React.Component{
    constructor(props){
        super(props);
        this.state={
            theme: 'light',
            current: '1',
        }
    }
    changeTheme = (value) => {
        this.setState({
          theme: value ? 'light' : 'dark',
        });
    }
    handleClick = (e) => {
        console.log('click ', e,this);
        
        this.setState({
          current: e.key,
        });
    }
    render(){
        return(
            <div className="sider">
                <UserInfo/>
                {/* <Switch
                    checked={this.state.theme === 'light'}
                    onChange={this.changeTheme}
                    checkedChildren="Light"
                    unCheckedChildren="Dark"
                /> */}
                <br />
                <br />
                {/* <Menu
                    theme={this.state.theme}
                    onClick={this.handleClick}
                    style={{ width: "100%" }}
                    defaultOpenKeys={['sub1']}
                    selectedKeys={[this.state.current]}
                    mode="inline"
                >
                    <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Where you wanna go</span></span>}>
                        <Menu.Item key="1"><Link to="/homelist">HomeList</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/about">About</Link></Menu.Item>
                        <Menu.Item key="3"><Link to="/Links">links</Link></Menu.Item>
                    </SubMenu>
                </Menu> */}
                <ul className="sider-links">
                    <li key="1"><Link to="/homelist">文章</Link></li>
                    <li key="2"><Link to="/about">关于我</Link></li>
                    <li key="3"><Link to="/Links">链接</Link></li>
                </ul>
                <div className="sider-links-icon">
                    <Link to="/"><span className="iconfont icon-weibo"></span></Link>
                    <Link to="/"><span className="iconfont icon-weixin-copy"></span></Link>
                    <Popover content={""} title="Title"><Link to="/"><span className="iconfont icon-qq"></span></Link></Popover>
                    <a href="https://github.com/ylinwind"><span className="iconfont icon-git"></span></a>
                </div>
            </div>
        )
    }
}