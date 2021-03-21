import { Layout } from 'antd'
import './index.less'
const { Footer } = Layout
export default function myFooter() {
    return <Footer className="footer">
        <a href="http://beian.miit.gov.cn/">沪ICP备2021004686号</a>
    </Footer>
}