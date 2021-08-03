import React from 'react'
import {
    ProductContainer,
    ProductWrapper,
    ProductHeading,
    ProductCard,
    ProductImage,
    ProductTitle,
    ProductInfo,
    ProductDesc,
    ProductPrice,
    ProductButton
} from './ProductElements'

const Product = ({heading,data}) => {
    return (
        <ProductContainer>
            <ProductHeading>
                {heading}
            </ProductHeading>
            <ProductWrapper>
                {data.map((product,index) => {
                    return (
                        <ProductCard key={index}>
                            <ProductImage src={product.img} alt={product.alt} />
                            <ProductInfo>
                                <ProductTitle>{product.product_name}</ProductTitle>
                                <ProductDesc>{product.desc}</ProductDesc>
                                <ProductPrice>Rp. {product.price}</ProductPrice>
                                <ProductButton>{product.button}</ProductButton>
                            </ProductInfo>
                        </ProductCard>
                    )
                })}
            </ProductWrapper>
        </ProductContainer>
    )
}

export default Product
