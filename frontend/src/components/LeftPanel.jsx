import { Sidebar } from "flowbite-react";
import { NavLink } from "react-router-dom";
import {
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";

export function LeftPanel() {
  return (
    <Sidebar aria-label="Default sidebar example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item icon={HiChartPie}>Dashboard</Sidebar.Item>
          <Sidebar.Item icon={HiViewBoards}>
            <NavLink to="/product">Products</NavLink>
          </Sidebar.Item>
          <Sidebar.Item icon={HiInbox}>
            <NavLink to="/product/create">Create Product</NavLink>
          </Sidebar.Item>
          <Sidebar.Item icon={HiUser}>
            <NavLink to="/product/delete">Delete Products</NavLink>
          </Sidebar.Item>
          <Sidebar.Item icon={HiShoppingBag}>
            <NavLink to="/product/update">Update Products</NavLink>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
export default LeftPanel;
