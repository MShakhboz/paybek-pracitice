import { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


function Pagination({ postsPerPage, totalPosts, paginate, handlePostsPerPage }) {
    const pageNumbers = [];
    
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    // let arrayNumber = [...pageNumbers.slice(0, 4)];
    const [arrayNumber, setArrayNumber] = useState(pageNumbers.slice(0, 4));

    const next = () => {
        let newArray = [...arrayNumber];
        if(newArray.at(-1) === pageNumbers.at(-1)) {
            setArrayNumber(newArray);
        } else {
            newArray.push(newArray.at(-1) + 1);
            newArray.shift();
        }
        setArrayNumber(newArray);
    }
    
    
    const prev = () => {
        let newArray = [...arrayNumber];
        if(newArray[0] === 1){
            setArrayNumber(newArray);
        } else {
            newArray.unshift(newArray[0] - 1);
            newArray.pop();
        }
        setArrayNumber(newArray);
        
    }

    return (
        <div className="pagination">  
            <div>
                <span>Show</span>
                <input type="number" value = {postsPerPage} className = "showPaginationPage" onChange={(e) => handlePostsPerPage(e.target.value)} />
                <span>on the page</span>
            </div>
            <div>
                <ul style = {{display: "flex"}}>
                    <li className="pagination-item" onClick = {prev}><IoIosArrowBack /></li>
                    {arrayNumber.map(number => (
                        <button key = {number} onClick = {() => {
                                paginate(number)
                            }} 
                            className="pagination-item" 
                            style={{ pointer: "cursor" }}>
                            
                            <li className="pagination-link">
                                {number}
                            </li>
                            
                        </button>
                    ))}
                    <li className="pagination-item" onClick = {next}><IoIosArrowForward /></li>
                </ul>
            </div>
        </div>
  
    );
}

export default Pagination;