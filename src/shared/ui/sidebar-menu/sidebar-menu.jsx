import { Typography } from "antd";

const { Link } = Typography;

export const SidebarMenu = () => {
  return (
    <div className="sidebar-menu">
      <Link href="https://github.com/FedoseevSM/fedoseevsm/blob/main/cv.pdf" target="_blank">
        Ссылка на резюме
      </Link>
    </div>
  );
};
