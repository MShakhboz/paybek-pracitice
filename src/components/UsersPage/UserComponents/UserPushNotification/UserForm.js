import React, { useState } from 'react';
import { connect } from 'react-redux';
import AddDataToForm from '../../../redux/actions/AddDataToForm';



function UserForm(props) {
    const [type, setType] = useState('Active');
    const [country, setCountry] = useState('Japan');
    const [language, setLanguage] = useState('English');
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [image, setImage] = useState('');
    const [date, setDate] = useState('');
    const [test, setTest] = useState('');
    let status;
    // ref() of image input
    let inputElem;

    // isCheked

    const [isSetDate, setIsSetDate] = useState(false);
    const [isImmediate, setIsImmediate] = useState(false);

    const isCheckedDateFunc = () => {
        if (!isImmediate) setIsSetDate(!isSetDate);
        else setIsSetDate(isSetDate);
    }
    console.log(isSetDate)

    
    const isCheckedImmediatFunc = () => {
        if(!isSetDate) setIsImmediate(!isImmediate);
        else setIsImmediate(isImmediate);
        
    }

    if(isSetDate) {
        status = "Scheduled";
    } else {
        status = "Immediate";
    }
    
    

    function handleSubmit(e) {
        e.preventDefault();
        let obj = {
            id: '004493',
            type: type,
            country: country,
            language: language,
            title: title,
            message: message,
            image: image[0],
            test: test,
            date: isSetDate ? date.split('T') : [null, null],
            deliveries: null, 
            opens: null, 
            action: null,
            status: status,
        }

        props.AddDataToForm(obj);
        
        console.log(obj);

        setType('');
        setCountry('');
        setLanguage('');
        setTitle('');
        setMessage('');
        setImage('');
        setTest('');
        setDate('');
    }

    function handleSubmitTest(e) {
        e.preventDefault();
        console.log(test);
    }

    function upLoadImage(e) {
        e.preventDefault();
        inputElem.click();
    }

    // is checked if data were stored

    function getDataFromStore(e) {
        e.preventDefault();
        console.log('Data from redux store', props.userDate);
    }


    return (
        <div className="user-form" >
                        {/* ---------------- adding form ------------------ */}
                        <form className='user-fill-form' onSubmit={handleSubmit}>
                            {/* ---------------- User Type ------------------ */}
                            <label for = "user-type">
                                <span className = "form-title">Type</span> 
                                <select id = "user-type" name = "user-type" className='main-input' value = {type} onChange={(e) => setType(e.target.value)} defaultValue = {type}>
                                    <option value = "Active">Active</option>
                                    <option value = "Inactive">Inactive</option>
                                </select>
                            </label>
                            
                            {/* ---------------- Select Countries ------------------ */}
                            <label for = "countries">
                                <span className = "form-title">Select a Country</span>
                                <select id = "countries" name = "countries" className='main-input' value = {country} onChange={(e) => setCountry(e.target.value)} defaultValue = {country}>
                                    <option value = "Japan">Japan</option>
                                    <option value = "Russia">Russia</option>
                                    <option value = "Korea">Korea</option>
                                    <option value = "USA">USA</option>
                                    <option value = "Germany">Germany</option>
                                </select>    
                            </label>
                            {/* ---------------- Select languages ------------------ */}
                            <label for = "languages">
                                <span className = "form-title">Select a Language</span>
                                <select id = "languages" name = "languages" className='main-input' value={language} onChange = {(e) => setLanguage(e.target.value)} defaultValue = {language}>
                                    <option value = "Uzbek">Uzbek</option>
                                    <option value = "English">English</option>
                                    <option value = "Russian">Russian</option>
                                </select>
                            </label>
                            
                            {/* ---------------- Title text ------------------ */}
                            <label for = "title">
                                <span className = "form-title">Title</span>
                                <input type="text" className='title-input' value = {title} onChange={(e) => setTitle(e.target.value)}/>    
                            </label>
    
                            {/* ---------------- Messages ------------------ */}
                            <label for = "message">
                                <span className = "form-title">Message</span>
                                <textarea type="text" className='message-input' value = { message } onChange={(e) => setMessage(e.target.value)} />    
                            </label>
                            
                            {/* ---------------- Upload images ------------------ */}
                            <label for = "thumbnail">
                                <span className = "form-title">Thumbnail</span>
                                <input className='main-input'  value={image}  />
                                <input 
                                    type = "file"  
                                    style={{display: 'none'}} 
                                    onChange={(e) => setImage(e.target.files)} 
                                    ref = {(fileInput) => inputElem = fileInput}
                                />
                                <button className='upload-image-btn' onClick={upLoadImage}>Upload image</button>
                            </label>
                            
                            {/* ---------------- Schedule ------------------ */}
                            <label for = "schedule" className='schedule-label'>
                                <div className = "form-title">Schedule</div>
                                <div className='radio-box' >
                                    <label style={{display: "flex", alignItems: 'center'}}>
                                        <input type="radio" id = "date-time" className = "radio-input"  checked = {isSetDate} onClick = {isCheckedDateFunc}/>
                                        <input type='datetime-local' for = "date-time" className='main-input' value = {date} onChange={(e) => setDate(e.target.value)}/>
                                        {/* <select id = "date" name = "date" className='main-input'>
                                            <option value = "current-date">Current date</option>
                                        </select> */}
                                        
                                    </label>
                                    <label style={{display: "flex", alignItems: 'center', marginTop: '3px'}}>
                                        <input type="radio" id = "immediat" className = "radio-input" checked={isImmediate} onClick = {isCheckedImmediatFunc}/>
                                        <span for = "immediat">Send immediately</span>
                                    </label>
                                    
                                </div>
                            </label>
                            {/* ---------------- Test text ------------------ */}
                            <label for = "test">
                                <span className = "form-title">Test</span>
                                <input type="text" className='main-input' value = {test} onChange={(e) => setTest(e.target.value)}/>
                                <button className='send-test-btn' onClick={handleSubmitTest}>Send a test</button>    
                            </label>
                            <button className='user-form-send-btn'>Send</button>
                        </form>
                        {/* <button onClick = {getDataFromStore}> Get info </button> */}
                    </div>
    )
}

function mapStatetoProps(state) {
    return {
        userDate: state.addDataForm,
    }
}

const mapDispatchToProps = {
    AddDataToForm
}

export default connect(mapStatetoProps, mapDispatchToProps)(UserForm);