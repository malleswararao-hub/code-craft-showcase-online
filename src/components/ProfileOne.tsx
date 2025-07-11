
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface ProfileData {
  name: string;
  role: string;
  department: string;
  avatar: string;
}

export const ProfileOne = () => {
  const [profileData] = useState<ProfileData>({
    name: "John Smith",
    role: "Senior Developer",
    department: "Engineering",
    avatar: "/placeholder.svg"
  });

  const [statusMessage, setStatusMessage] = useState<string>("Available for projects");
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStatusMessage(event.target.value);
  };

  return (
    <Card className="max-w-md mx-auto bg-card border-border">
      <CardHeader className="text-center">
        <div className="w-20 h-20 mx-auto mb-4">
          <img 
            src={profileData.avatar} 
            alt={`${profileData.name} avatar`}
            className="w-full h-full rounded-full object-cover border-2 border-primary"
          />
        </div>
        <CardTitle className="text-foreground">{profileData.name}</CardTitle>
        <p className="text-muted-foreground">{profileData.role}</p>
        <p className="text-sm text-muted-foreground">{profileData.department} Department</p>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="status-message">Status Message</Label>
          <Input
            id="status-message"
            type="text"
            value={statusMessage}
            onChange={handleStatusChange}
            disabled={!isEditing}
            placeholder="Enter your status..."
            className="w-full"
          />
        </div>
        
        <div className="flex gap-2">
          <Button 
            onClick={() => setIsEditing(!isEditing)}
            variant={isEditing ? "destructive" : "default"}
            className="flex-1"
          >
            {isEditing ? "Cancel" : "Edit Status"}
          </Button>
          
          <Button
            disabled={!isEditing}
            variant="outline"
            className="flex-1"
            onClick={() => setIsEditing(false)}
          >
            Save
          </Button>
        </div>
        
        <div className="text-sm text-muted-foreground">
          Current Status: <span className="text-foreground font-medium">{statusMessage}</span>
        </div>
      </CardContent>
    </Card>
  );
};
