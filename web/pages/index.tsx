// import Link from 'next/link'
import { NextPage } from 'next'
import {GithubOutlined, WechatFilled} from '@ant-design/icons'
import './index.less'
const IndexPage:NextPage = () => {
  return <div className='main-page-container'> 
    <div className="avatar-container">
      <img className="img-avatar" src={require('../public/images/avatar.jpg')}></img>
      <div className="icons-wrap">
        <GithubOutlined className="contact-icon" onClick={()=>window.location.href='https://github.com/shizhchen2'}/>
        {/* <WechatFilled className="contact-icon"/> */}
      </div>
    </div>
  </div>
}
export default IndexPage