import React from 'react'
import styled from 'styled-components'

const Loading = () => {
    return (
        <Load>
            <h1>Loading...</h1>
        </Load>
    )
}
const Load = styled.div`
    height: 80vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;


export default Loading
