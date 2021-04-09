import Styles from './index.module.scss';
import Layout from '../components/Layout/Layout';
import { Grid } from '@material-ui/core';
import Image from 'next/image'
import { makeStyles } from '@material-ui/core/styles';
import ProductContainer from '../components/ProductContainer/ProductContainer';


const useStyles = makeStyles({
    root: {
      backgroundColor: '#705f7a',
      height: '300px',
      textAlign: 'center',
      padding: '15px',
      marginLeft: '12px',
      marginRight: '12px',
      marginBottom: '12px'
    },
    container: {
        marginTop: '20px'
    }
});

const c0ldstorage = () => <Image priority={true} layout='fixed' width='100px' height='100px' src='/images/c0ldstorage.png' alt='c0ldstorage'></Image>

const Home = () => {
    const classes = useStyles();
    return (
        <Layout>
            <Grid className={Styles.font} container>
                <Grid className={Styles.introduction} container spacing={1}>
                    <Grid container item justify='center' sm={3}>
                            <Image priority={true} quality={100} src='/images/woman.jpg' width='300' height='300' layout='intrinsic' alt='Header image of city streets'></Image>                    
                        </Grid>
                    <Grid container item justify='flex-start' sm={9}>
                        This is a description of what Talos AV is about and this page will contain links to either our own personal profiles,
                        or the services we offer in all of the following boxes.
                    </Grid>
                </Grid>
                <div className={Styles.productsContainer}>
                    <ProductContainer title='c0ldstorage' ProductImage={c0ldstorage} buttonLink='/about'>
                        This is a description of Product One. This is a description of Product One. 
                        This is a description of Product One. This is a description of Product One. 
                        This is a description of Product One. 
                    </ProductContainer>
                    <ProductContainer title='Talos AV' ProductImage={c0ldstorage} buttonLink='/products'>
                        This is a describe of Product two. This is a description of Product One. 
                        This is a des of Product two. This is a description of Product One. 
                        This is a des of Product two. 
                    </ProductContainer>
                    <ProductContainer title='Shirts & Shit' ProductImage={c0ldstorage} buttonLink='/media'>
                        This is a  Product three. This is a description of Product One. 
                        This is a description Product three. This is a description of Product One. 
                        This is a description of Product. 
                    </ProductContainer>
                </div>
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