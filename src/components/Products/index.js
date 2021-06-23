import React from 'react';
import { ProductsContainer, ProductHeading, ProductWrapper, ProductCard, ProductImg, ProductInfo, ProductTitle, ProductDesc, ProductPrize, ProductButton } from './ProductsElements';

const Products = ({ heading, data }) => {
   return (
      <ProductsContainer>
         <ProductHeading>{heading}</ProductHeading>
         <ProductWrapper>
            {data.map((product, index) => {
               return(
                  <ProductCard key={index}>
                     <ProductImg src={product.img} alt={product.alt} />
                     <ProductInfo>
                        <ProductTitle>{product.name}</ProductTitle>
                        <ProductDesc>{product.desc}</ProductDesc>
                        <ProductPrize>{product.prize}</ProductPrize>
                        <ProductButton>{product.button}</ProductButton>
                     </ProductInfo>
                  </ProductCard>
               );
            })}
         </ProductWrapper>
      </ProductsContainer>
   );
}

export default Products;
