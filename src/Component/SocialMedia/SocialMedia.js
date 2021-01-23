import React, {Component} from 'react'
import axios from 'axios'
import {SocialMediaSection, Social, Icon, Paragraph, Span, SpanInfo} from './SocialMediaStyle'

class SocialMedia extends Component{
    state = {
        social : []
    }
    componentDidMount() {
        axios.get('data/data.json').then(res => {this.setState({social: res.data.social})})
    }
    render() {
        const {social} = this.state
        const socialList = social.map(elem => {
            return(
                <Social key={elem.id} item={elem.id}>
                    <Icon className={elem.icon}></Icon>
                    <Paragraph>
                        <Span>{elem.title}</Span>
                        <SpanInfo>{elem.body}</SpanInfo>
                    </Paragraph>
                </Social>
            )
        })
        return(
            <SocialMediaSection>
                    {socialList}
            </SocialMediaSection>
        )
    }
}

export default SocialMedia