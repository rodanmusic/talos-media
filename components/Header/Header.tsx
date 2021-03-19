import Styles from './Header.module.scss';
import { Container, Grid } from '@material-ui/core';
import Image from 'next/image'
import Navigation from '../Navigation/Navigation';

const Header = () => {
    return (
        <div className={Styles.outerHeader}>
            <Container disableGutters maxWidth='md' className={Styles.innerHeader}>
                <Grid container className={Styles.overallHeader} direction='column' justify='center' alignItems='center'>
                    <Image priority={true} className={Styles.headerImage} quality={100} src='/images/skyscraperfaded.jpg' width='1920' height='943' layout='intrinsic' alt='Header image of city streets'></Image>                    
                    <Grid container item xs={12} direction='row' className={Styles.socialMediaContainer}>
                        <Grid container item className={Styles.leftSocialMediaLinks} xs={6} justify='flex-start'>
                            <Grid item className={Styles.facebookIcon}>
                                <a href="https://www.facebook.com/c0ldstorage"><Image priority={true} quality={100} src='/images/socialMedia/facebook.png' width='50' height='50' layout='intrinsic' alt='Facebook'></Image></a>    
                            </Grid>
                            <Grid item>
                            <a href="https://www.tiktok.com/@c0ldstorage"><Image priority={true} quality={100} src='/images/socialMedia/tiktok.png' width='50' height='50' layout='intrinsic' alt='Tik Tok'></Image></a>                                    
                            </Grid>
                        </Grid>
                        <Grid container item className={Styles.rightSocialMediaLinks} xs={6} justify='flex-end'>   
                            <Grid item>
                                <a href="https://www.youtube.com/channel/UCMosQE51m6ed3GuYkp1OrSg"><Image priority={true} quality={100} src='/images/socialMedia/youtube.png' width='50' height='50' layout='intrinsic' alt='Twitch'></Image></a>    
                            </Grid>
                            <Grid item className={Styles.facebookIcon}>
                                <a href="https://www.twitch.tv/c0ldstorage"><Image priority={true} quality={100} src='/images/socialMedia/twitch.png' width='50' height='50' layout='intrinsic' alt='c0ldstorage'></Image></a>
                            </Grid>
                        </Grid>
                    </Grid>    
                    <Grid container item xs={12} direction='row' alignItems='center' justify='center' className={Styles.logoContainer}>
                        <Grid item>
                            <span className={Styles.headerLogo}>TALOS MEDIA</span>
                        </Grid>
                    </Grid>   
                    <Grid container item xs={12} direction='row' alignItems='center' justify='center' className={Styles.navigationContainer}>
                        <Grid item>
                            <Navigation />
                        </Grid>
                    </Grid>           
                </Grid>
            </Container>
        </div>
    )
}

export default Header;
