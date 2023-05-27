import React from "react"
import Splitting from "splitting"

import "./styles.css"

export const Welcome = () => {
    let splitting = React.useRef(null)
    React.useEffect(() => {
        if (splitting.current) Splitting({ target: splitting.current, by: 'chars' })
    }, [])
    return (
        <div className="welcome">
            <div ref={splitting} class="without" data-splitting>
                Привет, меня зовут Семён
            </div>
        </div>
    )
}