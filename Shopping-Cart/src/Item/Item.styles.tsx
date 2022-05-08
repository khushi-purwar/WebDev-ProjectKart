import styled from 'styled-components';

export const Wrapper = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
width: 100%;
border-radius: 20px;
height: 100%; 

button {
    border-radius: 0 0 20px 20px;
}

img {
    max-height: 250px;
    onject-fit: cover;
    border-radius: 20px 20px 0 0;
}
div {
    font-family: Arial, Helvitica, sans-serif;
    padding: 1rem;
    height: 100%;
}`;