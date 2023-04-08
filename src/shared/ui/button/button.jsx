import cn from "classnames";

import "./styles.css"

export const Button = (params) => {
  return (
    <div className={cn("btn", params.variant)}>
      {params.children}
    </div>
  )
}
