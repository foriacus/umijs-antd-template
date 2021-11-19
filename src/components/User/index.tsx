import UserAvatar from '@/components/UserAvatar';

const User = () => {
  return (
    <UserAvatar name="admin">
      <div>个人中心</div>
      <div>退出登录</div>
    </UserAvatar>
  );
};

export default User;
