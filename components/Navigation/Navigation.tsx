import { Container, Grid, Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import Link from 'next/link'

const navLinks = ['HOME', 'ABOUT', 'EVENTS', 'MEDIA', 'PRODUCTS', 'CONTACT'];

const useStyles = makeStyles({
    root: {
      backgroundColor: '#705f7a',
      fontFamily: 'inerta-thin',
      borderRadius: '0px',
      opacity: .7,
      '&:hover': {
        backgroundColor: 'grey'
      },
      '& span': {
        color: 'white',
      }
    }
  });

const Navigation = () => {
    const classes = useStyles();
    return (
        <Container disableGutters maxWidth='sm'>
            <Grid container item xs={12} direction='row' alignItems='center' justify='center'>
                <Grid item>
                    {
                        navLinks.map((link, index) => (
                            <Link key={index} href={index === 0 ? '/' : '/'.concat(link.toLowerCase())}>
                                <Button className={classes.root}>
                                    {link}
                                </Button>
                            </Link>
                        ))
                    }
                </Grid>
            </Grid>                
        </Container>
    )
}

export default Navigation;