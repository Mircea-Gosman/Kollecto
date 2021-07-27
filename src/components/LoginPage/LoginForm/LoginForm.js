import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

import './LoginForm.css';
import { ReactComponent as HorizontalDelimiter } from '../../../assets/horizontal_delimiter.svg';
import { ReactComponent as GoogleSSO } from '../../../assets/GoogleSSO.svg';
import { ReactComponent as FacebookSSO } from '../../../assets/FacebookSSO.svg';
import constants from '../../../utils/constants';

function LoginForm() {
    const history = useHistory();
    const [currentAuthPage, setCurrentAuthPage] = useState("login");

    function handleAuth(auth) {
        if (currentAuthPage === auth) {
            history.push(constants.url.MAIN);
        } else {
            setCurrentAuthPage(auth);
        }
    }

    return (
        <>
            <div className={"formContainer"}>
                <HorizontalDelimiter className={"delimiter"}/>
                {currentAuthPage === "login" &&
                    <div>
                        <FacebookSSO className={"sso FacebookSSO"}/>
                        <GoogleSSO className={"sso GoogleSSO"}/>
                        <HorizontalDelimiter className={"delimiter"}/>
                    </div>
                }
                <input className={`textInput ${currentAuthPage === "signup" ? "singleOutTextInput" : ""}`} type="text" name="name" placeholder={"Email"} />
                {currentAuthPage === "signup" &&
                    <HorizontalDelimiter className={"delimiter"}/>
                }
                <input className={"textInput"} type="password" name="name" placeholder={"Password"} />
                { currentAuthPage === "signup" &&
                    <input className={"textInput"} type="password" name="name" placeholder={"Confirm Password"}/>
                }
                <button className={`buttonInput buttonInputLeft ${currentAuthPage === "signup" ? "activeFormButton" : ""}`} type="submit" value="Submit" onClick={()=> handleAuth("signup")}>Sign up</button>
                <button className={`buttonInput buttonInputRight ${currentAuthPage === "login" ? "activeFormButton" : ""}`} type="submit" value="Submit" onClick={()=> handleAuth("login")}>Log in</button>
            </div>
        </>
    );
}

export default LoginForm;