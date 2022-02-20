import styled from 'styled-components';

const TxnsContainer = styled.div`
    display: flex;
    height: calc(100vh - 76px);
    background-color: #E5E5E5;
    justify-content: center;
    align-items: center;
`;

const Txns = () => {

    return (
        <TxnsContainer>
            <h1>TXNS Page</h1>
        </TxnsContainer>
        
    )
}

export default Txns;