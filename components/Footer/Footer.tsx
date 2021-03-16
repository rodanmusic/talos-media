import Styles from './Footer.module.scss'
import { Container } from '@material-ui/core';

const Footer = () => {
    return (
        <div className={Styles.outerFooter}>
            <Container maxWidth='sm' className={Styles.innerFooter}>
                <span className={Styles.copyrightDescription}>COPYRIGHT © 2021 TALOS MEDIA LLC. ALL RIGHTS RESERVED.</span>
            </Container>
        </div>
    )
}

export default Footer;