import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {PortfolioSection, Title, Span, PortfolioList, PortfolioItem, BoxDiv, Img, Overlay, OverlaySpan} from './PortfolioStyle.js'

const Portfolio = () => {
    const [images, setImages] = useState([])
    useEffect( () => {
        axios.get('data/data.json').then(res => {setImages(res.data.portfolio) })
    }, [])

    const PortfolioImages = images.map( (imgItem) => {
        return (
            <BoxDiv key={imgItem.id}>
                <Img src={imgItem.image} alt="" />
                <Overlay>
                    <OverlaySpan>
                        Show Image
                    </OverlaySpan>
                </Overlay>
            </BoxDiv>
        )
    })
    return(
        <PortfolioSection>
            <Title><Span>My</Span> Portfolio</Title>
            <PortfolioList>
                <PortfolioItem active>All</PortfolioItem>
                <PortfolioItem>HTML</PortfolioItem>
                <PortfolioItem>Photoshop</PortfolioItem>
                <PortfolioItem>Wordpress</PortfolioItem>
                <PortfolioItem>Mobile</PortfolioItem>
            </PortfolioList>
            <div className="box">
                {PortfolioImages}
            </div>
        </PortfolioSection>
    )
}

export default Portfolio