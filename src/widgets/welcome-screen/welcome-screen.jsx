import React from "react"
import Splitting from "splitting"

import "./styles.css"

export const WelcomeScreen = () => {
    let splitting = React.useRef(null)
    React.useEffect(() => {
        if (splitting.current) Splitting({ target: splitting.current, by: 'chars' })
    }, [])
    return (
        <div ref={splitting} class="without" data-splitting>
            Привет, я Веб-разработчик
        </div>
    )
}