import styled from "styled-components";

export const ProductContainer = styled.div`
    background: black;
    color: #fff;
    width: 100%;
    min-height: 100vh;
    padding: 5rem calc((100vw - 1300px)/2);
    overflow-x: hidden;
`

export const ProductWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
`

export const ProductCard = styled.div`
    margin: 2rem 3rem;
    line-height: 2;
    width: 300px;
`

export const ProductImage = styled.img`
    height: 300px;
    min-width: 300px;
    max-width: 100%;
    box-shadow: 8px 8px #fdc500;
    border-radius: 1rem;
`

export const ProductHeading = styled.h1`
    font-size: clamp(2.5rem, 2.5vh, 3rem);
    text-align: center;
    margin-bottom: 2rem;
`

export const ProductTitle = styled.h2`
    font-weight: 700;
    font-size: 1.5rem;
`

export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`

export const ProductDesc = styled.p`
    margin-bottom: 1rem;
    line-height: 20px;
`

export const ProductPrice = styled.p`
    margin-bottom: 1rem;
    font-size: 2rem;
`

export const ProductButton = styled.button`
    font-size: 1rem;
    padding: 1rem 4rem;
    width: 100%;
    border: none;
    background: #e31837;
    color: #fff;
    transition: 0.2 ease-out;

    &:hover{
        background: #ffc500;
        transition: 0.2 ease-out;
        cursor: pointer;
        color: #000;
    }

    @media screen and (max-width:468px){
        margin-bottom: 50px;
    }
`