import { Button } from "antd"

export const BaseButton = (params) => {
    if (params.children) return <Button {...params}>{params.children}</Button>
    return <Button {...params} />
}