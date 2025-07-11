
import { ProfileOne } from "@/components/ProfileOne";

const ProfilesPage = () => {
  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-foreground">
          User Profile
        </h1>
        
        <div className="flex justify-center">
          <ProfileOne />
        </div>
      </div>
    </div>
  );
};

export default ProfilesPage;
