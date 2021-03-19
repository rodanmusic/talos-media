import Styles from './index.module.scss';
import Layout from '../components/Layout/Layout';
import { Grid, Paper } from '@material-ui/core';
import Image from 'next/image'

const Home = () => ( 
    <Layout>
        <Grid className={Styles.font} container>
            <Grid container spacing={1}>
                <Grid container item justify='center' xs={12} sm={3}>
                        <Image priority={true} quality={100} src='/images/woman.jpg' width='300' height='300' layout='intrinsic' alt='Header image of city streets'></Image>                    
                    </Grid>
                <Grid container item justify='flex-start' xs={12} sm={9}>
                    This is a description of what Talos AV is about and this page will contain links to either our own personal profiles,
                    or the services we offer in all of the following boxes.
                </Grid>
            </Grid>
            <Grid container justify='center' className={Styles.container}>
                <Grid item md={4}>
                    <Paper>Product 1</Paper>
                </Grid>
                <Grid item md={4}>
                    <Paper>Product 2</Paper>
                </Grid>
                <Grid item md={4}>
                    <Paper>Product 3</Paper>
                </Grid>
            </Grid>
            <Grid className={Styles.newsletterContent}>
            Fully width sign up for newsletter.Fully width sign up for newsletter.Fully width sign up for newsletter.
            Fully width sign up for newsletter.Fully width sign up for newsletter.Fully width sign up for newsletter.
            Fully width sign up for newsletter.Fully width sign up for newsletter.Fully width sign up for newsletter.
            </Grid>
        </Grid>
    </Layout>
);

export default Home;