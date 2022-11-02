
import logo from './images/logo.png';
import github from './images/gitLogo.png';
import styled from 'styled-components'; 
import theme from './theme'

const {fonts} = theme;
const {colors} = theme;
function Nav() {
    const Container = styled.div`
        
        height: 9vw;
        
    `
    const Top = styled.div `

        display:flex;
        width: 99vw;
        height: 6vw;
    `
    const Logo = styled.div`
        width:24vw;
        height:5vw;
        background-image: url(${logo});
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    `
    const Links = styled.div`
       background-color: ${colors.lightGray};
       height:3vw;



       display:flex;
       border: 2px solid palevioletred;
       border-width: 1px 1px 3px 1px;
       border-color: ${colors.gray} ${colors.gray} ${colors.blue} ${colors.gray};
    `
    const Link = styled.a`
        font-family: 'Poor Story', sans-serif;
        font-size:2vw;
        margin-left:3vw;

        height:2vw;
        text-decoration: none;
        &:hover{
            font-weight: 900;
        }
        color:#000000;
    `
    
    const Github = styled.a`
        width:3vw;
        background-image: url(${github});
        background-repeat: no-repeat;
        background-position: right;
        background-size: 2vw;
        float:right;
        position:relative;
    `
    return (
        <Container>
            <Top>
                <a href='/Basketball/'><Logo></Logo></a>
            </Top>
            <Links>
                <Link href='/Basketball/#/players'>Players</Link>
                <Link href='/Basketball/#/teams'>Teams</Link>
                <Link href='/Basketball/#/seasons'>Season</Link>
                <Link href='/Basketball/#/weekscores'>Scores</Link>
            </Links>
            
        </Container>
    );
}
  
  export default Nav;