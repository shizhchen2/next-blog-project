import Header from './header/header'
import Footer from './footer/footer'
import { Layout } from 'antd'
import './index.less'
const { Content } = Layout
export default function layout(props) {
    return <Layout className="container">
        <Header />
            <Content>{props.children}</Content>
        <Footer />
    </Layout>
}