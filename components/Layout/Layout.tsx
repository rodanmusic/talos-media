import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Head from 'next/head'
import { Container } from '@material-ui/core';

const Layout = props => (
    <Container maxWidth='sm'>
        <Head>
            <title>Talos Media</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        </Head>          
        <div className="Layout">
            <Header />
            <div className="Content">
                {props.children}
            </div>  
            <Footer />
        </div>
    </Container>
);

export default Layout;