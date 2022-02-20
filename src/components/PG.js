import styled from 'styled-components';

const PgContainer = styled.div`
    display: flex;
    height: calc(100vh - 76px);
    background-color: #E5E5E5;
    justify-content: center;
    align-items: center;
`;

const Pg = () => {

    return (
        <PgContainer>
            <h1>PG Page</h1>
        </PgContainer>
    )
}

export default Pg;