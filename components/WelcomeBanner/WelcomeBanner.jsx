import './style.less';
import { Card } from 'antd';
const { Meta } = Card;


const WelcomeBanner = (props) => {

    return (<div className="WelcomeBanner">
        <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="/images/big-images-2.jpg" />}
        >
            <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>

    </div>);
}

export default WelcomeBanner;