import './style.less';
import { Card } from 'antd';
const { Meta } = Card;

// const multipleSizes = require('/static/images/big-images-2.jpg?webp?resize&sizes[]=240&sizes[]=600&sizes[]=1000');
// const oneSize = require('../../static/images/big-images-2.jpg?resize&size=240');

const WelcomeBanner = (props) => {

    return (<div className="WelcomeBanner">
        <Card
            hoverable
            style={{ width: 240 }}
            cover={<picture>
                <source srcSet={require('../../static/images/big-images-2.jpg?webp?resize&size=240')} type="image/webp" />
                <source srcSet={require('../../static/images/big-images-2.jpg?resize&size=240')} type="image/jpeg" />
                <img src={require('../../static/images/big-images-2.jpg?resize&size=240')} />
            </picture>}
        >
            <Meta title="YouTube website" description="" />
        </Card>

    </div>);
}

export default WelcomeBanner;