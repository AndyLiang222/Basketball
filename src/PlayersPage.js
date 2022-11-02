import styled from 'styled-components';
import useFetch from './useFetch';
import { useParams } from 'react-router-dom';
import theme from './theme'
import misc from './misc';
import Nav from './Nav';
const {fonts} = theme;
const {colors} = theme;
const {convertTime} = misc;
const Container = styled.div`
    margin:1vw;
    width:90%;
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
const Page = styled.div`
    width:100%;
    padding:1vw;
    display:flex;
    align-items:center;
    justify-content:center;
`
const Players = styled.div`
    padding:2vw;
    display:flex;
    flex-wrap: wrap;
    overflow-wrap:normal;
`
const Player = styled.a`
    font-family: 'Poor Story', sans-serif;
    font-size:1.5vw;
    margin:1vw;
`
function PlayersPage(props){
    // const {playerData} = {playerData: [
    //     {name: "Andy Liang", id:"63617227e59934c4f002e38d"},
    //     {name: "Nicky Lam", id:"6361caa032847533321de7c3"},
    //     {name: "Aidan Louie", id:"qioenjdqv"},
    //     {name: "Eddie Chen", id:"qipoenwfpo"},
    //     {name: "Cyron Nohay", id:"adjfvnalkw"},
    //     {name: "Kanaad Choudankar", id:"sadkvjnlds"},
    // ]}

    const playerData = useFetch("https://basketballmarkville.herokuapp.com/player/").data;
    if(!playerData){
        return( <div>
            <Nav/>
            <Page>
                <Container>
                    <Title>Players</Title>
                    
              </Container>
            </Page>
        </div>)
    }

    playerData.sort((a,b)=>{
        return a.name.localeCompare(b.name);
    })
    const players  = playerData.map((value)=>{
        return (
            <Player href = {("/#/player/" + value._id)}>
                {value.name}
            </Player>
        )
    })
    return (
        <div>
            <Nav/>
            <Page>
                <Container>
                    <Title>Players</Title>
                    <Players>
                        {players}
                    </Players>
                </Container>
            </Page>
        </div>
    )
}
export default PlayersPage;