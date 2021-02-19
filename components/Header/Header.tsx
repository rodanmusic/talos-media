import Styles from './Header.module.scss';
import { Container, Grid } from '@material-ui/core';
import Image from 'next/image'

let Header = () => {
    return (
        <div className={Styles.outerHeader}>
            <Container disableGutters maxWidth='md' className={Styles.innerHeader}>
                <Grid container className={Styles.overallHeader} direction='column' justify='center' alignItems='center'>
                    <Image className={Styles.headerImage} quality={100} src='/images/skyscraperfaded.jpg' width='1920' height='943' layout='intrinsic' alt='Header image of city streets'></Image>                    
                    <Grid container item xs={12} direction='row' className={Styles.socialMediaContainer}>
                        <Grid container item className={Styles.leftSocialMediaLinks} xs={6} justify='flex-start'>
                            <Grid item>
                                <Image quality={100} src='/images/socialMedia/facebook.png' width='50' height='50' layout='intrinsic' alt='Facebook'></Image>    
                            </Grid>
                            <Grid item>
                                <Image quality={100} src='/images/socialMedia/tiktok.png' width='50' height='50' layout='intrinsic' alt='Tik Tok'></Image>                                    
                            </Grid>
                        </Grid>
                        <Grid container item className={Styles.rightSocialMediaLinks} xs={6} justify='flex-end'>   
                            <Grid item>
                                <Image quality={100} src='/images/socialMedia/youtube.png' width='50' height='50' layout='intrinsic' alt='Twitch'></Image>    
                            </Grid>
                            <Grid item>
                                <Image quality={100} src='/images/socialMedia/twitch.png' width='50' height='50' layout='intrinsic' alt='c0ldstorage'></Image>    
                            </Grid>
                        </Grid>
                    </Grid>    
                    <Grid container item xs={12} direction='row' alignItems='center' justify='center' className={Styles.logoContainer}>
                        <Grid item>
                            <span className={Styles.headerLogo}>TALOS MEDIA</span>
                        </Grid>
                    </Grid>             
                </Grid>
            </Container>
        </div>
    )
}

export default Header;
