import Layout from '../components/Layout/Layout';
import Styles from './404.module.scss';

const FourOhFour = () => (
    <Layout>
        <div className={Styles.positioning}>
            <span className={Styles.FourOhFour}>404|</span>
            <p></p>
            <span className={Styles.notFound}>PAGE NOT FOUND</span>
        </div>
    </Layout>
);
  
export default FourOhFour;