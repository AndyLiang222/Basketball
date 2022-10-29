import styled from 'styled-components';
import theme from './theme'
import misc from './misc';
const {fonts} = theme;
const {colors} = theme;
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

function Scores(){
    return (
        <Container>
            <Title>
                Scores Last Week
            </Title>
        </Container>
    )
}
export default Scores;