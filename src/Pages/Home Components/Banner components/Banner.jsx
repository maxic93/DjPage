import React from 'react'
import './banner.css'
import { BannerSection, H1, SocialMediaContainer, SocialMediaDiv } from '../../../Styled-Components/Home-Styed/banner-styled/bannerStyled'

const Banner = () => {
  return (
    <BannerSection>
        <H1>Franco Musachi</H1>
        <SocialMediaContainer>
            <SocialMediaDiv>
            <i className="fa-brands fa-instagram"></i>
            </SocialMediaDiv>
            <SocialMediaDiv>
            <i className="fa-brands fa-facebook"></i>
            </SocialMediaDiv>
            <SocialMediaDiv>
            <i class="fa-brands fa-soundcloud"></i>   
            </SocialMediaDiv>
        </SocialMediaContainer>
    </BannerSection>
  )
}

export default Banner