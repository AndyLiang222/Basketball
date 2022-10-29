
import styled from 'styled-components'; 
import theme from './theme'

const {fonts} = theme;
const {colors} = theme;
const Container = styled.div`
        margin:1vw;
        width:25vw;
        height:20vw;
        border: 2px solid palevioletred;
        border-width: 1px ;
        border-color: ${colors.gray};
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
`
const Title = styled.h2`
    background-color:${colors.blue};
    font-family: 'Poor Story', sans-serif;
    font-size:1.25vw;
    text-decoration: none;
    margin:0;
    padding:0.5vw;
    border: 2px solid palevioletred;
    border-width: 1px ;
    border-color: ${colors.gray};
    color: ${colors.lightFont};
`
const Stats = styled.div`
    
`
const Stat = styled.a`
    font-family: 'Poor Story', sans-serif;
    font-size:1vw;
    text-decoration: none;
    &:hover{
        font-weight: 900;
    }
    margin: 1vw;
    margin-top:3vw;
`
const Standing = styled.table`
    border: 2px solid palevioletred;
    border-width: 1px ;
    border-color: ${colors.gray};
    margin:1vw;
    width:90%;
    margin-left:auto;
    margin-right:auto;
    bordercolor:${colors.gray};
`
const StandingHeaderRow = styled.tr`
    background-color: ${colors.lightGray}
    
`
const StandingHeader = styled.a`
    color: ${colors.font};
    font-family: 'Poor Story', sans-serif;
    font-size:1vw;
    font-weight:900;
    
`
const StandingValue = styled.a`
    font-family: 'Poor Story', sans-serif;
    font-size:1vw;
`

function Standings (props) {
    const {seasonID, seasonTitle} = props.data;
    
    const {teamRecords} = {teamRecords:[
        {id: "fjaljflfklas",name:"T Squares", wins : 5, losses: 0},
        {id: "fjaljflfklas",name:"Nicky Lam", wins : 0, losses: 7},
        {id: "fjaljflfklas",name:"Harden", wins : 10, losses: 0},
        {id: "fjaljflfklas",name:"a", wins : 3, losses: 2},
        {id: "fjaljflfklas",name:"B", wins : 2, losses: 0},
        {id: "fjaljflfklas",name:"C", wins : 5, losses: 5}
    ]}
    teamRecords.sort(function(x,y){
        let xGames = x.wins+x.losses;
        let yGames = y.wins+y.losses;

        let xVal = x.wins + ((xGames-yGames > 0)?0.5*(xGames-yGames):0);
        let yVal = y.wins + ((yGames-xGames > 0)?0.5*(yGames-xGames):0);
        if(xVal == yVal)return 0;
        return ((xVal > yVal)?-1:1);
    })

    const standingData = teamRecords.map((value, index) => {
        return (
            <tr>
                
                <th>
                    <StandingValue>{value.name + "(" + (index+1) + ")"}</StandingValue>
                </th>
                <th>
                    <StandingValue>{value.wins}</StandingValue>
                </th>
                <th>
                    <StandingValue>{value.losses}</StandingValue>
                </th>
            </tr>
        )
    })
    return (
        <Container>
            <Title>{seasonTitle}</Title>
            <Stats>
                <Stat>Summary</Stat>
                <Stat>Players</Stat>
                <Stat>Teams</Stat>
            </Stats>
            <Standing>
                <StandingHeaderRow>
                    <th style = {{width:"60%"}}>
                        <StandingHeader>Team</StandingHeader>
                    </th>
                    <th>
                        <StandingHeader>Win</StandingHeader>
                    </th>
                    <th>
                        <StandingHeader>Loss</StandingHeader>
                    </th>
                    
                </StandingHeaderRow>
                {standingData}
            </Standing>
        </Container>
    )
}
export default Standings;