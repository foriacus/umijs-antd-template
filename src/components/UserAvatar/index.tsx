import React, { CSSProperties } from "react";
import {
  Avatar as AntdAvatar,
  AvatarProps as AntdAvatarProps,
  Dropdown,
  DropDownProps as AntdDropDownProps,
  Menu,
  MenuProps as AntdMenuProps,
} from "antd";
import { UserOutlined, DownOutlined } from "@ant-design/icons";
import classnames from "classnames";

import "./index.less";

export interface AvatarProps {
  className?: string;
  style?: CSSProperties;
  avatarProps?: AntdAvatarProps;
  menuProps?: AntdMenuProps;
  dropdownProps?: AntdDropDownProps;
  name?: React.ReactNode;
}

const Avatar: React.FC<AvatarProps> = (props) => {
  const {
    className,
    style,
    avatarProps,
    menuProps,
    dropdownProps,
    name,
    children,
  } = props;

  const menu = (
    <Menu {...menuProps}>
      {React.Children.map(children, (child) => (
        <Menu.Item>{child}</Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div className={classnames("uniubi-user-avatar", className)} style={style}>
      <Dropdown
        overlay={menu}
        arrow
        placement="bottomRight"
        trigger={["click"]}
        {...dropdownProps}
      >
        <div className="uniubi-user-avatar-inner">
          <AntdAvatar size="small" icon={<UserOutlined />} {...avatarProps} />
          <span className="uniubi-user-avatar-inner-name">{name}</span>
          <DownOutlined />
        </div>
      </Dropdown>
    </div>
  );
};

export default Avatar;
