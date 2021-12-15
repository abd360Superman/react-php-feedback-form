import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import Style from './styles.css'
import axios from 'axios'

const API_PATH = 'http://localhost/feedback/src/feedback_ac.php';

function App() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [dataSent, setDataSent] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        axios({
            method: 'post',
            url: API_PATH,
            headers: {
                'content-type': 'application/json'
            },
            data: {
                'name': name,
                'email': email,
                'feedback': message
            }
        })
        .then(result => {
            console.log(result.data)
            setDataSent(result.data.sent)
        })
        .catch(error => setError(error.message))
    }

    return (
        <div className="container">
            <div className="box heading">
                <h1>EAT, DINE <span>&#38;</span> <br/>DRINK</h1>
            </div>

            <div className="box feedback-form">
                {dataSent ?
                    <p className="msg">
                        SUCCESS<br/><br/>
                        Thanks for submitting your feedback.<br/>
                        We appreciate your time.
                    </p>
                :
                    <form onSubmit={handleSubmit}>
                        <p className="grey">SEND US YOUR FEEDBACK</p>

                        <div className="inputstyle">
                            <input type="text"
                                   placeholder="Enter your name"
                                   value={name}
                                   onChange={(e) => setName(e.target.value)}/>
                        </div>

                        <div className="inputstyle">
                            <input type="text"
                                   placeholder="Enter your email"
                                   value={email}
                                   onChange={(e) => setEmail(e.target.value)}/>
                        </div>

                        <div className="inputstyle">
                            <textarea placeholder="Your message goes here"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                        </div>

                        <div className="btnstyle">
                            <input type="submit" value="Send"/>
                        </div>
                    </form>
                }
            </div>
        </div>
    )
}

export default App