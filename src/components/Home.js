import styled from 'styled-components';

const HomeContainer = styled.div`
    display: flex;
    height: calc(100vh - 76px);
    background-color: #E5E5E5;
    justify-content: center;
    align-items: center;
`;

const Home = () => {

    return (
        <HomeContainer>
            <h1>Home Page</h1>
        </HomeContainer>
        
    )
}

export default Home;