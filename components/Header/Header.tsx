import Styles from './Header.module.scss';
import { Container } from '@material-ui/core';
import Image from 'next/image'

let Header = () => {
    return (
        <div className={Styles.outerHeader}>
            <Container disableGutters={true} maxWidth='md' className={Styles.innerHeader}>
                <Image className={Styles.headerImage} quality={100} src='/images/citymodifiedsize.jpg' width='1920' height='943' layout='responsive' alt='Header image of city streets'></Image>
            </Container>
        </div>
    )
}

export default Header;