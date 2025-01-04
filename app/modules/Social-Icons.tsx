"use client";

import Icon, { GithubOutlined } from "@ant-design/icons";
import { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";
import { Space } from "antd";

export default function SocialIcons() {
  return (
    <Space>
      <Icon
        component={GithubOutlined as React.ForwardRefExoticComponent<CustomIconComponentProps>}
      />
    </Space>
  );
}
