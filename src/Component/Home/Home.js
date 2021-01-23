import React from 'react'

import {HomeSection, HomeInformation, HomeTitle, HomeInfo, HomeDesc, HomeDescSpan, HomeBtn} from './HomeStyle'

const Home = () => {
    return(
        <HomeSection>
            <div className="container">
                <HomeInformation>
                    <HomeTitle>Bouaziz Mohamed Cherif</HomeTitle>
                    <HomeInfo>React Developer</HomeInfo>
                    <HomeDesc>
                        I'am A beginner <HomeDescSpan>UX Developer</HomeDescSpan> and Front end Developer creating modern and responsive design to Web and Mobile, Let us work together, Thank you
                    </HomeDesc>
                    <HomeBtn className="home-btn">Let's Begin</HomeBtn>
                </HomeInformation>
            </div>
        </HomeSection>
    )
}

export default Home