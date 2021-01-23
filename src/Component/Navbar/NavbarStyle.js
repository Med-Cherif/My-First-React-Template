import styled from 'styled-components'

export const NavbarSection = styled.div`
    border-bottom: 2px solid #000;
    padding: 20px 0;
`
export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const List = styled.ul `
    display: flex;
`
export const Links = styled.a`
    display: inline-block;
    margin: 0 10px;
    color: #000;
    font-size: 16px;
    font-weight: 500;
    &:hover{
        color: orangered;
    }
`
