
import { ProfileOne } from "@/components/ProfileOne";
import { ProfileTwo } from "@/components/ProfileTwo";
import { ProfileThree } from "@/components/ProfileThree";

const ProfilesPage = () => {
  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-foreground">
          Profile Components
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4 text-center text-foreground">Profile One</h2>
            <ProfileOne />
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4 text-center text-foreground">Profile Two</h2>
            <ProfileTwo />
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4 text-center text-foreground">Profile Three</h2>
            <ProfileThree />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilesPage;
