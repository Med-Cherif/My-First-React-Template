import React, {Component} from 'react'
import axios from 'axios'
import {WorkSection, WorkTitle, PartTitleSpan, PartsRow, Part, Icon, PartTitle, Line, PartDesc} from './WorkStyle.js'

class Work extends Component{
    
    state = {
        works: []
    }
    componentDidMount = () => {
        axios.get('data/data.json').then(res => (this.setState({works: res.data.works})))
    }

    render () {
        const {works} = this.state
        const worksList = works.map(data => {
            return (
                <Part key={data.id}>
                    <Icon className={data.icon_name}></Icon>
                    <PartTitle>{data.title}</PartTitle>
                    <Line className="line" />
                    <PartDesc>
                    {data.body}
                    </PartDesc>
                </Part>
            )
        })
        return (
            <WorkSection>
                <div className="container">
                    <WorkTitle><PartTitleSpan>My</PartTitleSpan> Work</WorkTitle>
                    <PartsRow>
                        {worksList}
                    </PartsRow>
                </div>
            </WorkSection>
        )
    }
    
}

export default Work