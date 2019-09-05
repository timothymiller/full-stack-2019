import './style.less';
import { Card } from 'antd';
const { Meta } = Card;

// const multipleSizes = require('/static/images/big-images-2.jpg?resize&sizes[]=240&sizes[]=600&sizes[]=1000');
const oneSize = require('../../static/images/big-images-2.jpg?resize&size=240');

const WelcomeBanner = (props) => {

    return (<div className="WelcomeBanner">
        <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={oneSize.src} />}
        >
            <Meta title="YouTube website" description="" />
        </Card>

    </div>);
}

export default WelcomeBanner;