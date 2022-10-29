import Nav from './Nav';
import Standings from './Standings'
import Schedule from './Schedule';
import Posts from './Posts';
import Scores from './Scores';
import styled from 'styled-components'

const Top = styled.div`
    display:flex;
`
const Bottom = styled.div`

`
const Container = styled.div`
   
`
const Page = styled.div`
    display:flex;
`
function LandingPage () {
    return (
        <div>
            <Nav></Nav>
            <Page>
                <Container>
                    <Top>
                        <Standings data = {{seasonID :1, seasonTitle:"2022-2023 Season"}}></Standings>
                        <Schedule data = {{weekNum : 1}}></Schedule>
                        
                    </Top>
                    <Bottom>
                        <Scores></Scores>
                    </Bottom>
                </Container>
                <Posts></Posts>
            </Page>
        </div>
    )
}
export default LandingPage;