import styled from 'styled-components';

const AccountContainer = styled.div`
    display: flex;
    height: calc(100vh - 76px);
    background-color: #E5E5E5;
    justify-content: center;
    align-items: center;
`;

const Account = () => {

    return (
        <AccountContainer>
            <h1>Account Page</h1>
        </AccountContainer>
        
    )
}

export default Account;