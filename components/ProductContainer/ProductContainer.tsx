import Styles from './ProductContainer.module.scss';
import { Button } from '@material-ui/core';
import Link from 'next/link';

export type ProductContainerProps = {
    children: any;
    title: string;
    ProductImage?: React.ReactNode;
    buttonLink: string;
}

const ProductContainer = ({children, title, ProductImage, buttonLink}) => {
    return (
        <div className={Styles.container}>
            <div className={Styles.title}>{title}</div>
            {
                ProductImage && 
                <div className={Styles.image}>
                    <ProductImage />
                </div>
            }
            <div className={Styles.body}>{children}</div>
            <Link href={buttonLink}>
                <Button className={Styles.button} variant="contained">Read More</Button>
            </Link>
        </div>
    )
}

export default ProductContainer;