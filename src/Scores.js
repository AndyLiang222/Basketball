import styled from 'styled-components';
import theme from './theme'
import misc from './misc';
const {fonts} = theme;
const {colors} = theme;
const {convertTime} = misc;
const Container = styled.div`
    margin:1vw;
    width:97%;
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
const GameContainer = styled.div`
    display:flex;
    padding:1vw;
    flex-wrap: wrap;
    overflow-wrap:normal;
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
const Time = styled.tr`

    font-weight:900;
    font-family: 'Poor Story', sans-serif;
    font-size:0.75vw;
    margin:0.25vw auto;
`
const Team = styled.tr`
    font-family: 'Poor Story', sans-serif;
    font-size:0.75vw;
    display:flex;
    width:90%;
    column-gap:50%;
`
const TeamName = styled.th`
    width:100%;
    text-align: left;
`
const Score = styled.th`
    text-align: left;
`
const Table = styled.table`
    width:80%;
`
function Scores(props){
    const {weekNum} = props;
    const {games} = {games: [{time: 1140,game: {teamA: "T Squares", teamB: "L", scoreA: 35, scoreB: 10, winner:"T Squares" , loser:"L"}}]}; 
    const scores = games.map((value)=>{
        return (
            <Game>
                <Time>{convertTime(value.time)}</Time>
                <Table>
                    <Team>
                        <TeamName>{value.game.teamA}</TeamName>
                        <Score>{value.game.scoreA}</Score>
                    </Team>
                    <Team>
                        <TeamName>{value.game.teamB}</TeamName>
                        <Score>{value.game.scoreB}</Score>
                    </Team>
                </Table>
            </Game>
        )
    })
    return (
        <Container>
            <Title>
                Scores Last Week
            </Title>
            <GameContainer>
                {scores}
            </GameContainer>
        </Container>
    )
}
export default Scores;