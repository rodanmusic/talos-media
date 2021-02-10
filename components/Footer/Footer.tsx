import Styles from './Footer.module.scss'
import { Container } from '@material-ui/core';

let Footer = () => {
    return (
        <div className={Styles.outerFooter}>
            <Container maxWidth='sm' className={Styles.innerFooter}>
                Copyright © 2021 Talos Media LLC. All rights reserved.
            </Container>
        </div>
    )
}

export default Footer;