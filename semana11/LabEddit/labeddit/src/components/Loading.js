import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import styled from 'styled-components'
// import LoadingContainer from './styled'

const CircularProgressStyled = styled.div`
margin-left: 600px;
margin-top: 30px;
`

const Loading = () =>{
    return(
        <CircularProgressStyled>
            <CircularProgress />
        </CircularProgressStyled>
    )
}

export default Loading