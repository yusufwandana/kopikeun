import React from 'react'
import {FeatureContainer, FeatureButton} from './FeatureElements'

const Feature = () => {
    return (
        <FeatureContainer>
            <h1>Quotes of the day</h1>
            <p>"Pahitnya kopi lebih menyenangkan daripada manisnya janjimu."</p>
            <p>- Yusuf Wandana</p>
            <FeatureButton>Pesan sekarang</FeatureButton>
        </FeatureContainer>
    )
}

export default Feature
