import styled from 'styled-components';

const EventsContent = styled.div`
    display: flex;
    height: 559px;
    width: 1015px;
    background-color: #fff;
    box-shadow: 0px 1px 3px rgb(0 0 0 / 10%), 0px 2px 1px rgb(0 0 0 / 6%), 0px 1px 1px rgb(0 0 0 / 8%);
    border-radius: 12px 0px 0px 0px;
    margin-top: 10px;
    justify-content: center;
    align-items: center;
`;


export default function Events() {
    return (
        <EventsContent>
            Events Users
        </EventsContent>
    )
}