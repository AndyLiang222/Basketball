import styled from 'styled-components';
import theme from './theme'
import misc from './misc';
const {fonts} = theme;
const {colors} = theme;
const {convertTime} = misc;
const Container = styled.div`
    margin:1vw;
    width:45vw;
    height:30vw;
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
const Game = styled.div`
    border: 2px solid palevioletred;
    border-width: 1px ;
    border-color: ${colors.gray};
    height: 20%;
    width:17%;
    margin:1vw;
    padding:0.5vw;
    display: flex;
    flex-direction:column;
    align-items: center;

`
const GamesContainer = styled.div`
    display:flex;
    flex-wrap: wrap;
    overflow-wrap:normal;
    padding:1vw;

`
const Time = styled.h2`

    font-weight:900;
    font-family: 'Poor Story', sans-serif;
    font-size:0.75vw;
    margin:0.25vw auto;
`
const GameText = styled.h2`
    font-family: 'Poor Story', sans-serif;
    font-size:0.75vw;
    margin:0 auto;
`
const Location = styled(GameText)`
    color: ${colors.grayFont};
`
const TeamContainer = styled.div`
    display:flex;
    margin:0.5vw 0; 
    column-gap: 0.5vw;
`
function Schedule(props){
    const {weekNum} = props.data;
    const {date,games} = {date:"November 2nd, 2022",games: [
        {teamA:{name:"T Squares"}, teamB: {name:"EZ Dub"}, time: 1140, location: "L-Gym: A"},
        {teamA:{name:"B Squares"}, teamB: {name:"Andy"}, time: 1160, location: "L-Gym: B"},
        {teamA:{name:"Cyron"}, teamB: {name:"Harden"}, time: 1180, location: "L-Gym: A"},
        {teamA:{name:"Kanaad"}, teamB: {name:"Nicky"}, time: 1140, location: "L-Gym:B"},
        {teamA:{name:"Harden"}, teamB: {name:"EZ Dub"}, time: 1160, location: "L-Gym: A"},
        {teamA:{name:"Aidan"}, teamB: {name:"Eddie"}, time: 1160, location: "S-Gym"},
        {teamA:{name:"L"}, teamB: {name:"EZ Dub"}, time: 1200, location: "L-Gym: B"},
    ]}
    const upcomingGamesCompoents = games.map((value, index) => {
        return (
            <Game>
                <Time>{convertTime(value.time)}</Time>
                <TeamContainer>
                    <GameText>{value.teamA.name}</GameText>
                    <GameText>{value.teamB.name}</GameText>
                </TeamContainer>
                <Location>{"Location: " + value.location}</Location>
            </Game>
        )
    })
    return (
        <Container>
            <Title>{"Week " + weekNum + " - " + date}</Title>
            <GamesContainer>
                {upcomingGamesCompoents}
            </GamesContainer>
            
        </Container>
    )
}
export default Schedule;