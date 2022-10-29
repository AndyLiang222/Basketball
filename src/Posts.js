import styled from 'styled-components';
import theme from './theme'
import misc from './misc';
const {fonts} = theme;
const {colors} = theme;

const Container = styled.div`
    margin:1vw;
    width:20vw;
    height:52.5vw;
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
const Content = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
`
const Video = styled.iframe`
    width: 60%;
    frameBorder:0;
`
const Post = styled.div`
    padding 1vw;
`
const Text = styled.div`
    font-size: 14px;
    font-family: arial;
    
    font-weight:600;
`
const TextLight = styled(Text)`
    color: ${colors.grayFont};
    font-weight:400;
`
const PostHeader = styled.div`
    display:flex;
    column-gap: 0.5vw;
    font-size: 14px;
    font-family: arial;
    
`
const PostBody = styled.div`
    padding:0 0.5vw;
    
`
const TextBody = styled.div`
    margin:1vw;
    overflow-wrap:normal;
    font-size: 14px;
    font-family: arial;
`
function Posts (){
    const {posts} = {posts: [
        {user: "Andy Liang", date: "October 29th, 2022", text: "Nicky Lam Plays Basketball in 5 days!!!🥶🥶🥶", content: "https://video.twimg.com/ext_tw_video/1474199886560174085/pu/vid/320x342/BSYdNmCC1YCypXct.mp4?tag=12"}
    ]}
    const feed = posts.map((value)=> {
        return (
            <Post>
                <PostHeader>
                    <Text>{value.user}</Text>
                    <TextLight>{value.date}</TextLight>
                </PostHeader>
                <PostBody>
                    <TextBody>
                        {value.text}
                    </TextBody>
                    <Content>
                        <Video src = {value.content}></Video>
                    </Content>
                </PostBody>
            </Post>
        )
    })
    return (
        <Container>
            <Title>Announcements</Title>
            {feed}
        </Container>
    )
}
export default Posts;