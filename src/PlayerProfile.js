import styled from 'styled-components';
import useFetch from './useFetch';
import { useParams } from 'react-router-dom';
import theme from './theme'
import misc from './misc';
import Nav from './Nav';
import defaultPic from './images/defaultPic.jpg'
const {fonts} = theme;
const {colors} = theme;
const {convertTime} = misc;

const positionList = ["Point Guard", "Shooting Guard", "Small Forward" , "Power Forward", "Center"];
const statHeaderList = ["G","Mp","Pts","FGM","FGA","3PM", "3PA", "Ast","Reb","DRB","ORB","Stl","Blk","Tov","Foul","FG%","3P%","Per"];
const Container = styled.div`
    padding:2vw;
    margin:1vw;
    width:90%;
    border: 2px solid palevioletred;
    margin: 2vw auto;
    border-width: 1px ;
    border-color: ${colors.gray};
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
`
const Title = styled.div`
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
const Name = styled.h2`

    font-family: 'Poor Story', sans-serif;
    font-size:2vw;
    text-decoration: none;
    margin:1vw;
    color: ${colors.blue};
`
const Page = styled.div`

`
const TopProfile = styled.div`
    display:flex;
    padding-right: 2vw;
    column-gap: 3vw;
`
const ProfilePic = styled.img`
    margin:1vw;
    width: 13vw;
    height: 15vw;

`
const PlayerDetails = styled.div`

`
const Text = styled.div`
    font-size: 1.5vw;
    font-family: arial;
    align-text:center;
    font-weight:400;
    margin: auto 0;
    display:flex;
`
const SpecDetails = styled.div`
    padding:0.5vw;
    padding-left:2vw;
`
const DetailHeader = styled.h2`
    font-weight:600;
    font-size: 1.5vw;
    font-family: arial;
`
const Award = styled.div`
    border-radius:0.5vw;
    font-size: 1.5vw;
    font-weight:900;
    color:${colors.lightFont};
    background-color: ${colors.blue};
    text-align: center;
    width: 40%;
    height: 10%;
    flex: auto;
    margin:0.25vw 1vw;
`
const AwardContainer = styled.div`
    display:flex;
    flex-wrap: wrap;
    overflow-wrap:normal;
    width:20vw;
    column-gap:0;
    padding:1vw 5vw;
    space-between:0;
    grid-template-columns: repeat(auto-fill,minmax(160px, 1fr));
`
const LowerProfile = styled.div`

`
const Stats = styled.table`
    width:90%;
    margin: 0 auto;
    border: 2px solid palevioletred;
    border-width: 1px ;
    border-color: ${colors.gray};
`
const TopStats = styled.table`
    margin-left: 3vw;
    width:60%;
    border: 2px solid palevioletred;
    border-width: 1px ;
    border-color: ${colors.gray};
`
const StatHeader = styled.th`
    font-size:1.5vw;
`
const StatVal = styled.td`
    text-align:center;
    font-size:1.5vw;
`
const StatRow = styled.tr`
    
`
const StatContainer = styled.div`
    
    padding-top:1vw;
`
function parseHeader(h){
    return h.map((value) => <StatHeader>{value}</StatHeader>);
}
function parseStats(stats,settings,avg,aHeaders, aStats) {
    let header = aHeaders;
    let rows = [];
    for(let i = 0;i<stats.length;i++){
        //  0   1     2     3     4     5      6      7     8     9     10   11    12    13     14    15    16     17 
        //["G","Mp","Pts","FGM","FGA","3PM", "3PA", "Ast","Reb","DRB","ORB","Stl","Blk","Tov","Foul","FG%","3P%","Per"]
        let statDataRow = stats[i];
        let z = stats[i];
        
        console.log(statDataRow[4]);
        statDataRow.push(((statDataRow[4]== 0)?0:(Math.round((statDataRow[3]/statDataRow[4]) * 1000))/10));
        console.log(console.log(statDataRow));
        statDataRow.push((statDataRow[6]== 0)?0:(Math.round(((statDataRow[5]/statDataRow[6])* 1000))/10));
        console.log(console.log(statDataRow));
        let per = (z[1]==0)?0:((z[3]*85.910 + z[11]* 53.897 + z[5]*51.757 + z[12]*39.190 + z[10]* 39.190 + z[7]*34.677 + z[9]*14.707 - z[14]*17.174 - (z[4]-z[3])*39.190- z[13]*53.897)/z[1]);
        statDataRow.push(Math.round((per + Number.EPSILON) * 100) / 100);
        console.log("fldakjflkjasjfd" + console.log(aStats));
        let values =((aStats.length == 0)?[]:aStats[i]) ;
        for(let j = 0;j<statDataRow.length;j++){
            
            if(((1<<j)&settings) > 0){
                //console.log("dkaljfs")
                let val = statDataRow[j];
                if(i == 0)header.push(<StatHeader>{statHeaderList[j]}</StatHeader>);
                if(((1<<j)&avg) > 0){
                    //console.log(statHeaderList[j]);
                    //console.log(statDataRow[0])
                    val = Math.round((val/statDataRow[0] + Number.EPSILON) * 100) / 100;
                    
                    values.push(<StatVal>{val}</StatVal>);
                }else{
                    console.log(statDataRow[j]);
                    values.push(<StatVal>{statDataRow[j]}</StatVal>);
                }
            }
            
        }
        rows.push(<StatRow>{values}</StatRow>);
    }
    console.log([<StatRow>{header}</StatRow>,...rows]);
    return (
        
            [<StatRow>{header}</StatRow>,...rows]
        
    )
}
function PlayerProfile(props){                                                                                                                                                     //  0   1     2     3     4     5      6      7     8     9     10   11    12    13     14    15    16     17 
                                                                                                                                                                                                                                                //["G","Mp","Pts","FGM","FGA","3PM", "3PA", "Ast","Reb","DRB","ORB","Stl","Blk","Tov","Foul","FG%","3P%","Per"]
    // const {picture, name,height, weight,number,team,seasons,stats, awards,nicknames,positions,grade} = {
    //     number:1,name:"Andy Liang", height: "5'5", weight: "135lbs",nicknames: ["A","B","C"],positions:3,grade:12,
    //     awards: ["All-Star","MVP","ROTY","DPOY"], 
    //     stats:[5,75, 121, 34, 52, 12, 30, 15, 8, 7, 1, 6, 1, 17, 11],
    //     seasons:[
    //         {
    //             season:"2022-2023",
    //             seasonID: "jaflkjfd",
    //             type:"reg",
    //             team:"T-Squares",
    //             teamID: "jalfkjalkfaj",
    //             stats:[5,75, 121, 34, 52, 12, 30, 15, 8, 7, 1, 6, 1, 17, 11]
    //         },
    //         {
    //             season:"2022-2023",
    //             seasonID: "kjlafd",
    //             type:"pf",
    //             team:"T-Squares",
    //             teamID: "jalfkjalkfaj",
    //             stats:[5,75, 141, 34, 82, 12, 40, 12, 10, 8, 2, 9, 5, 20, 9]
    //         },
    //     ],
    // };
    const {id} = useParams();
    let picture = undefined;
    let playerData = useFetch("https://basketballmarkville.herokuapp.com/player/getplayer/"+id).data;
    if(playerData){
        const { name,height, weight,number,team,seasons,stats, awards,nicknames,positions,grade} = playerData;
        const teamData = {name:"T Squares"};
        
        let nicknamesFortmated = "(";
        for(let i = 0;i<nicknames.length;i++){
            nicknamesFortmated += nicknames[i]+ ((i+1 == nicknames.length)?"":", ");
        }
        nicknamesFortmated += ")";
        let posFor = "";
        for(let i = 0;i<5;i++){
            if(((1<<i)& positions) > 0){
                
                if(posFor.length == 0)posFor += positionList[i];
                else posFor += " and " + positionList[i];
            } 
        }
        const awardComp = awards.map((value) => {
            return (
                <Award>
                    {value}
                </Award>
            )
        })
        const settingSeasonStats = 262143;
        const avgSeasonStats = 32766;
        const aStats =[];
        
        const aHeaders = parseHeader(["Season","Type","Team"]);
        const seasonStats = [];
        const SeasonStats = seasons.map((value)=>{
            const {season,seasonID,type,team,teamID, stats} = value;
            aStats.push([<StatVal><a href={`/#/seasons/season/${seasonID}`}>{season}</a></StatVal>,<StatVal>{type}</StatVal>,<StatVal><a href={`/#/teams/team/${teamID}`}>{team}</a></StatVal>])
            seasonStats.push(stats);
            return(stats);
        });
        console.log("jlkjfajfla   " + aStats);
        const seasonStatComp = parseStats(SeasonStats,settingSeasonStats,avgSeasonStats,aHeaders,aStats);
        console.log(awardComp)
        return (
            <div>
                <Nav/>
                <Page>
                    <Container>
                        <TopProfile>
                            <ProfilePic src = {picture?picture:defaultPic}></ProfilePic>
                            <PlayerDetails>
                                <Name>{name}</Name>
                                <SpecDetails>
                                    <Text>{nicknamesFortmated}</Text>
                                    <Text><DetailHeader>#{number}&nbsp;</DetailHeader><Text>{teamData.name}</Text></Text>
                                    <Text><DetailHeader>Positions:&nbsp; </DetailHeader><Text>{posFor}</Text></Text>
                                    <Text>{height + ", " + weight}</Text>
                                    <Text><DetailHeader>Grade:&nbsp; </DetailHeader><Text>{grade}</Text></Text>
                                </SpecDetails>
                            </PlayerDetails>
                            <div>
                                <AwardContainer>
                                    {awardComp}
                                </AwardContainer>
                            </div>
                        </TopProfile>
                        <LowerProfile>
                            <Name>Career Stats</Name>
                            <StatContainer>
                            {(stats.length > 0)&&<TopStats><tbody>{parseStats([stats],244101, 32766,[],[])}</tbody></TopStats>}
                            </StatContainer>
                        </LowerProfile>
                    </Container>
                    <Container>
                        <Title>Statistics</Title>
                        <StatContainer>
                            {(SeasonStats.length > 0)&&<Stats>
                                <tbody>
                                    {seasonStatComp}
                                </tbody>
                            </Stats>}
                        </StatContainer>
                    </Container>
                </Page>
            </div>
        )
    }else{
        return(
            <div>
                <Nav/>
                <Page>

                </Page>
            </div>
        )
    }
}
export default PlayerProfile;