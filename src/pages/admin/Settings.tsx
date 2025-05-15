
import React from 'react';
import { AdminLayout } from '@/components/layout/AdminLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';

const Settings = () => {
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "Settings Saved",
      description: "Your settings have been saved successfully",
    });
  };

  return (
    <AdminLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600">Manage your application settings</p>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>
                Manage your basic portfolio settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="site-name">Portfolio Name</Label>
                <Input id="site-name" defaultValue="Jane Doe Portfolio" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="site-description">Site Description</Label>
                <Input 
                  id="site-description" 
                  defaultValue="Creative designer and developer showcasing my work and services" 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="contact-email">Contact Email</Label>
                <Input 
                  id="contact-email" 
                  type="email" 
                  defaultValue="contact@janedoe.com" 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="footer-text">Footer Text</Label>
                <Input 
                  id="footer-text" 
                  defaultValue="© 2023 Jane Doe. All rights reserved." 
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="analytics">Google Analytics</Label>
                  <p className="text-sm text-gray-500">Enable Google Analytics tracking</p>
                </div>
                <Switch id="analytics" />
              </div>
              
              <div className="flex justify-end pt-4">
                <Button onClick={handleSave}>Save Changes</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="appearance">
          <Card>
            <CardHeader>
              <CardTitle>Appearance Settings</CardTitle>
              <CardDescription>
                Customize how your portfolio looks
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Primary Color</Label>
                <div className="grid grid-cols-5 gap-2">
                  {['#1a2b47', '#2563eb', '#10b981', '#f59e0b', '#ef4444'].map((color) => (
                    <div 
                      key={color} 
                      className="w-full aspect-square rounded-md cursor-pointer ring-offset-2 ring-offset-white dark:ring-offset-slate-950 outline-none focus-visible:ring-2 focus-visible:ring-slate-950 dark:focus-visible:ring-slate-300"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="dark-mode">Dark Mode</Label>
                  <p className="text-sm text-gray-500">Enable dark mode</p>
                </div>
                <Switch id="dark-mode" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="font">Font Family</Label>
                <select 
                  id="font"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="inter">Inter</option>
                  <option value="roboto">Roboto</option>
                  <option value="open-sans">Open Sans</option>
                  <option value="montserrat">Montserrat</option>
                  <option value="poppins">Poppins</option>
                </select>
              </div>
              
              <div className="flex justify-end pt-4">
                <Button onClick={handleSave}>Save Changes</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>
                Configure your notification preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="email-notif">Email Notifications</Label>
                  <p className="text-sm text-gray-500">Receive email when someone contacts you</p>
                </div>
                <Switch id="email-notif" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="project-notif">Project Updates</Label>
                  <p className="text-sm text-gray-500">Notifications about project interactions</p>
                </div>
                <Switch id="project-notif" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="marketing-notif">Marketing Emails</Label>
                  <p className="text-sm text-gray-500">Receive updates about new features</p>
                </div>
                <Switch id="marketing-notif" />
              </div>
              
              <div className="flex justify-end pt-4">
                <Button onClick={handleSave}>Save Changes</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>
                Manage your account security
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input id="new-password" type="password" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <Input id="confirm-password" type="password" />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="two-factor">Two-Factor Authentication</Label>
                  <p className="text-sm text-gray-500">Add an extra layer of security</p>
                </div>
                <Switch id="two-factor" />
              </div>
              
              <div className="flex justify-end pt-4">
                <Button onClick={handleSave}>Save Changes</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </AdminLayout>
  );
};

export default Settings;
