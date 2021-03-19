import Styles from './index.module.scss';
import Layout from '../components/Layout/Layout';
import { Grid, Paper } from '@material-ui/core';
import Image from 'next/image'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
      backgroundColor: '#705f7a',
      height: '300px',
      textAlign: 'center'
    },
    container: {
        marginTop: '20px'
    }
});

const Home = () => {
    const classes = useStyles();
    return (
        <Layout>
            <Grid className={Styles.font} container>
                <Grid container spacing={1}>
                    <Grid container item justify='center' sm={3}>
                            <Image priority={true} quality={100} src='/images/woman.jpg' width='300' height='300' layout='intrinsic' alt='Header image of city streets'></Image>                    
                        </Grid>
                    <Grid container item justify='flex-start' sm={9}>
                        This is a description of what Talos AV is about and this page will contain links to either our own personal profiles,
                        or the services we offer in all of the following boxes.
                    </Grid>
                </Grid>
                <Grid container justify='center' className={classes.container} spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <Paper className={classes.root} square elevation={0}>Product 1</Paper>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Paper className={classes.root} square  elevation={0}>Product 2</Paper>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Paper className={classes.root} square elevation={0}>Product 3</Paper>
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
};

export default Home;