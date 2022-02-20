import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Pagination from './Pagination';
import './style.css';



function UserDataTable(props) {
    // User data from redux store
    const users = props.user;
    const navigate = useNavigate();

    // pagnitation states
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostPerPage] = useState(5);
        
    // нумерация страниц
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = users.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = ( pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // filter states
    const [filterByCountry, setFilterByCountry] = useState('');
    const [filterByLen, setFilterByLen] = useState('');
    const [filterByStatus, setFilterByStatus] = useState('');

    // filtering user data
    const [userSearchData, setUserSearchData] = useState(currentPosts);

    useEffect(() => {
        setUserSearchData(currentPosts);
    }, [currentPage])
    

    // filter handle funtion
    const handleFilter = () => {
        const filteredData = currentPosts
            .filter(x => x.country == (filterByCountry == "" ? x.country : filterByCountry))
            .filter(y => y.language == (filterByLen == "" ? y.language : filterByLen))
            .filter(z => z.status == (filterByStatus == "" ? z.status : filterByStatus));
        setUserSearchData(filteredData);
    }

    const handlePostsPerPage = (value) => {
        if( value > 0 && value <= 5) setPostPerPage(value);
        else setPostPerPage(5);
    }

    // navigate to the user info
    const handleUserInfo = (userId) => {
        navigate(`/users/push-notification/user-data-table/${userId}`)
    }


    return (
        <div className="user-data-form">
           <div className="user-search-panel" style = {{display: "flex"}}>
                <div>
                    <input type='date' placeholder='from' className='search-options' />
                    <input type='date' for = "start-date" className='search-options' />
                    <select name = "country" className='search-options' value={ filterByCountry } onChange = {(e) => setFilterByCountry(e.target.value)}>
                        <option value="">Country</option>
                        <option value="Japan">Japan</option>
                        <option value="Russia">Russia</option>
                        <option value="Korea">Korea</option>
                        <option value="Usa">USA</option>
                        <option value="Germany">Germany</option>
                    </select>
                    <select name = "languages" className='search-options' value={ filterByLen } onChange = {(e) => setFilterByLen(e.target.value)} >
                        <option value="">Language</option>
                        <option value="Japanese">Japanese</option>
                        <option value="Russian">Russian</option>
                        <option value="Korean">Korean</option>
                        <option value="English">English</option>
                        <option value="German">German</option>
                    </select>
                    <select name = "status" className='search-options' value={ filterByStatus } onChange = {(e) => setFilterByStatus(e.target.value)}>
                        <option value="">Status</option>
                        <option value="Scheduled">Scheduled</option>
                        <option value="Successful">Successful</option>
                        <option value="Canceled">Canceled</option>
                    </select>
                </div>
                <button className='search-panel-btn' onClick={handleFilter}>Search</button>
           </div>
           <div className='user-table-container'>
               <div className='sub-user-table-container'>
                    <table className='user-table'>
                        <tr className='user-table-raw'>
                            <th className='user-table-head'>ID</th>
                            <th className='user-table-head'>Country</th>
                            <th className='user-table-head'>Languages</th>
                            <th className='user-table-head'>Title</th>
                            <th className='user-table-head'>Status</th>
                            <th className='user-table-head'>Sent date</th>
                            <th className='user-table-head'>Deliveries</th>
                            <th className='user-table-head'>Opens</th>
                            <th className='user-table-head'>Action</th>
                        </tr>
                        {userSearchData.map((user, index) => (
                                <tr key = {user.id} className = 'user-table-raw' >
                                    <td className = 'user-table-data' id = 'user-table-id-num' onClick={() => {handleUserInfo(index)}}><span>{user.id}</span></td>
                                    <td className = 'user-table-data'>{user.country}</td>
                                    <td className = 'user-table-data'>{user.language}</td>
                                    <td className = 'user-table-data'>{user.title}</td>
                                    <td className = 'user-table-data' 
                                        style = { 
                                            user.status == "Scheduled" && {color: "#0052B4"} 
                                            || user.status == "Successful" && {color: "#53AC92"} 
                                            || user.status == "Canceled" && {color: "#985CFA"} 
                                            || user.status && {color: "#f1356d"}}>
                                        {user.status}
                                    </td>
                                    <td className = 'user-table-data'>
                                        <div> {user.date[0]} </div>
                                        <div> {user.date[1]} </div>
                                    </td>
                                    <td className = 'user-table-data'>{user.deliveries}</td>
                                    <td className = 'user-table-data'>{user.opens}</td>
                                    <td className = 'user-table-data'>{user.action}</td>
                                </tr>
                        ))}
                    </table>
               </div>
             </div>
           <div>
                {<Pagination 
                    postsPerPage={postsPerPage} 
                    totalPosts = {users.length} 
                    paginate = {paginate}
                    handlePostsPerPage = {handlePostsPerPage}
                />}
           </div>
           
        </div>
    )
}

function mapStatetoProps(state) {
    return {
        user: state.addDataForm,
    }
}

export default connect(mapStatetoProps)(UserDataTable);