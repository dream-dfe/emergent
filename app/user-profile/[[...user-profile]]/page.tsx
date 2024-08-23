import { UserProfile } from "@clerk/nextjs";

const UserProfilePage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <UserProfile path="/user-profile" />
    </div>
  );
};

export default UserProfilePage;
