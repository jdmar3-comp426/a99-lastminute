import React, { useState } from "react";
import PropTypes from "prop-types";

import CreateAccount from "./CreateAccount"
import Login from "./Login";

export default function LoggedOutState({ setUsernameToken }) {
    const [showCreateAccount, setShowCreateAccount] = useState(false)

    const handleToggleCreateAccount = () => {
        setShowCreateAccount(!showCreateAccount)
    }

    if (showCreateAccount) {
        return <CreateAccount setUsernameToken={setUsernameToken}/>
    } else {
        return <Login setUsernameToken={setUsernameToken} handleToggleCreateAccount={handleToggleCreateAccount}/>
    }
}

LoggedOutState.propTypes = {
    setUsernameToken: PropTypes.func.isRequired
}
