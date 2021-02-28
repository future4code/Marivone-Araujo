import styled from 'styled-components'
import Toolbar from '@material-ui/core/Toolbar';

// LoginPage
export const ContainerFeed = styled.div`
margin-top: 30px;
`

// PostPage
export const ContainerPostComments = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
@media (min-width:500px) and (max-width: 800px) {
display: grid;
grid-template-columns: 1fr 1fr;
};
@media (max-width: 499px) {
margin-left: 37px;
display: grid;
grid-template-columns: 1fr;
}
`
// PostPage

export const Size = styled.div`
width: 600px;
margin: 20px;
`

// ErrorPage
export const ErrorPageBox = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 20px;
`
export const ErrorImg = styled.img`
width: 64vw;
max-width: 400px;
`
// AllFeedCard
export const FeedCardContainer = styled.div`
margin: 20px;
`
// Header
export const StyledToolbar = styled(Toolbar)`
display: flex;
flex-direction: row;
justify-content: space-between;
`
// PostCommentCard
export const BoxWrite = styled.div`
margin-left: 39vw;
width: 50vh;
text-align: center;
@media (min-width:500px) and (max-width: 800px) {
  width: 18vh;
};
@media (max-width: 499px) {
width: 15vh;
}
` 
// PostFeedCard
export const PostsCardsContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr ;
@media (min-width:500px) and (max-width: 800px) {
display: grid;
grid-template-columns: 1fr;
};
@media (max-width: 499px) {
  display: grid;
grid-template-columns: 1fr;
}
`
// writePostCard
export const BoxWritePost = styled.div`
border: 1px solid lightgray;
margin-left: 35vw;
margin-top: 5vw;
width: 360px;
text-align: center;
padding: 10px;
@media (min-width:500px) and (max-width: 800px) {
margin-left: 19vh;
};
@media (max-width: 499px) {
margin-left: 20px;
}
` 
