import React from 'react'
import './Login.css'

const Login = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    }
    return (

        <div className="container">
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <div className="input-container" >
                        <label for="inputState">Table No.</label>
                        <select className='select'>
                            <option selected>Choose...</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                        </select>
                    </div>
                    <div className="input-container user_name">
                        <label>User Name </label>
                        <input className='Una' type="text" name="uname" required />

                    </div>
                    <div className="input-container mobile_no">
                        <label>Mobile No. </label>
                        <input className='Mno' type="text" name="Mnumber" required />

                    </div>
                    <div className="button-container">
                        <input type="submit" />
                    </div>
                </form>
            </div>
        </div>





    )
}

export default Login