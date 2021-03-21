import { Layout, Menu } from 'antd'
import Link from 'next/link'
import './index.less'
const { Header }  = Layout
export default function myHeader() {
    return <Header className="header">
        <div className="author">shizhchen2</div>
        <Menu className="menu" mode="horizontal" defaultActiveFirst>
            <Menu.Item><Link href="/">首页</Link></Menu.Item>
            <Menu.Item><Link href="/posts/">文章</Link></Menu.Item>
            <Menu.Item><Link href="/about">关于</Link></Menu.Item>
        </Menu>
    </Header>
}