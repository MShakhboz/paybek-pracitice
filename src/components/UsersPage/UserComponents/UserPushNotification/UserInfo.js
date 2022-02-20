import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

const UserInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: calc(100vh - 76px);
    background-color: #E5E5E5;
    align-items: center;
`;

const ImageBox = styled.div`

`;

function UserInfo(props) {
    const { id } = useParams();

    const users = props.data;

    return(
        <UserInfoContainer>
            <h1> User's id is {id} </h1>
            <div>
                {users.map((user, index) => index == id && (
                    <div key = {user.id}>
                        <ImageBox>
                            <div>
                                {user.image}
                            </div>
                        </ImageBox>
                        <div>
                            <p>Country: {user.country}</p>
                            <p>Status: {user.status}</p>
                            <p>Language: {user.language}</p>
                            <p>Message: {user.message}</p>
                        </div>
                    </div>
          
                ))}
            
            </div>
        </UserInfoContainer>
    )
}

function mapStatetoProps(state) {
    return {
        data: state.addDataForm,
    }
}

export default connect(mapStatetoProps)(UserInfo);