
import React from 'react';
import { AdminLayout } from '@/components/layout/AdminLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ProfileData } from '@/types/dashboard';
import { useToast } from '@/hooks/use-toast';

const Profile = () => {
  const { toast } = useToast();

  // Sample profile data
  const profile: ProfileData = {
    name: 'Jane Doe',
    title: 'UI/UX Designer & Front-end Developer',
    email: 'jane.doe@example.com',
    phone: '+1 (555) 123-4567',
    avatar: 'https://github.com/shadcn.png',
    bio: 'Experienced UI/UX designer and front-end developer with a passion for creating beautiful, functional, and user-centered digital experiences.',
    location: 'San Francisco, CA',
    skills: ['UI Design', 'UX Research', 'React', 'JavaScript', 'Tailwind CSS', 'Figma'],
    socials: {
      twitter: 'janedoe',
      linkedin: 'jane-doe',
      github: 'janedoe',
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Profile Updated",
      description: "Your profile has been updated successfully",
    });
  };

  return (
    <AdminLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
        <p className="text-gray-600">Manage your personal information</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" defaultValue={profile.name} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="title">Title</Label>
                    <Input id="title" defaultValue={profile.title} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue={profile.email} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" defaultValue={profile.phone} />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" defaultValue={profile.location} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Biography</Label>
                  <Textarea 
                    id="bio" 
                    defaultValue={profile.bio}
                    className="min-h-[120px]" 
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="skills">Skills (comma separated)</Label>
                  <Input id="skills" defaultValue={profile.skills.join(', ')} />
                </div>

                <h3 className="text-lg font-medium pt-2">Social Media</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="twitter">Twitter</Label>
                    <Input id="twitter" defaultValue={profile.socials.twitter} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="linkedin">LinkedIn</Label>
                    <Input id="linkedin" defaultValue={profile.socials.linkedin} />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="github">GitHub</Label>
                  <Input id="github" defaultValue={profile.socials.github} />
                </div>

                <div className="flex justify-end pt-2">
                  <Button type="submit">Save Changes</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <Avatar className="h-24 w-24 mb-4">
                <AvatarImage src={profile.avatar} />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <h3 className="text-lg font-medium">{profile.name}</h3>
              <p className="text-sm text-gray-500">{profile.title}</p>
              <p className="text-sm text-gray-500 mt-1">{profile.location}</p>
              
              <div className="border-t border-gray-200 w-full mt-4 pt-4">
                <p className="text-sm text-gray-500 mb-2">Skills</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {profile.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-200 w-full mt-4 pt-4">
                <Button variant="outline" className="w-full">
                  Change Avatar
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium mb-4">Account Settings</h3>
              <div className="space-y-4">
                <Button variant="outline" className="w-full justify-start">
                  Change Password
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Two-Factor Authentication
                </Button>
                <Button variant="outline" className="w-full justify-start text-red-500 hover:text-red-700 hover:bg-red-50">
                  Delete Account
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Profile;
