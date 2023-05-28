import { Nav } from "@shared/ui"

import { Space, Typography } from 'antd';

const { Text, Link } = Typography;

export const SubMenu = () => {
    return (
        <div className="submenu">
            <Link href="https://github.com/FedoseevSM/fedoseevsm/blob/main/Резюме%20Middle%20Frontend-разработчик%20TypeScript%20React.pdf" target="_blank">
                Ссылка на резюме
            </Link>
        </div>)
}