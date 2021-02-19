import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Head from 'next/head';
import Styles from './Layout.module.scss';

const Layout = props => (
    <div className={Styles.mainContainer}>
        <Head>
            <title>Talos Media</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        </Head>          
        <div className={Styles.layout}>
            <Header />
            <div className={Styles.tempContentTestingHeight}>
                {props.children}
            </div>  
            <Footer />
        </div>
    </div>
);

export default Layout;