
import React from 'react';
import { AdminLayout } from '@/components/layout/AdminLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';
import { Construction, Save } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

const Settings = () => {
  const { toast } = useToast();
  const { theme, setTheme } = useTheme();
  const [maintenanceMode, setMaintenanceMode] = React.useState(false);

  const handleSave = () => {
    toast({
      title: "Settings Saved",
      description: "Your settings have been saved successfully",
    });
  };

  const handleMaintenanceToggle = (checked: boolean) => {
    setMaintenanceMode(checked);
    toast({
      title: checked ? "Maintenance Mode Enabled" : "Maintenance Mode Disabled",
      description: checked ? 
        "Your portfolio site is now in maintenance mode and not accessible to visitors." : 
        "Your portfolio site is now back online and accessible to visitors.",
      variant: checked ? "destructive" : "default",
    });
  };

  const handleThemeChange = (value: string) => {
    setTheme(value as 'light' | 'dark' | 'system');
  };

  return (
    <AdminLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground">Manage your application settings</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="mb-6 md:col-span-2">
          <CardHeader>
            <CardTitle>Site Availability</CardTitle>
            <CardDescription>
              Control the availability of your portfolio website
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="maintenance-mode" className="flex items-center gap-2">
                  <Construction className="h-4 w-4" />
                  Maintenance Mode
                </Label>
                <p className="text-sm text-muted-foreground">
                  When enabled, visitors will see a maintenance message instead of your portfolio
                </p>
              </div>
              <Switch 
                id="maintenance-mode" 
                checked={maintenanceMode}
                onCheckedChange={handleMaintenanceToggle}
              />
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6 md:col-span-2">
          <CardHeader>
            <CardTitle>Theme Preferences</CardTitle>
            <CardDescription>
              Customize the appearance of your admin dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Theme Mode</Label>
                <ToggleGroup 
                  type="single" 
                  value={theme} 
                  onValueChange={(value) => value && handleThemeChange(value)}
                  className="justify-start"
                >
                  <ToggleGroupItem value="light" aria-label="Light Mode">Light</ToggleGroupItem>
                  <ToggleGroupItem value="dark" aria-label="Dark Mode">Dark</ToggleGroupItem>
                  <ToggleGroupItem value="system" aria-label="System Preference">System</ToggleGroupItem>
                </ToggleGroup>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="mb-6 w-full md:w-auto overflow-x-auto">
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
              <div className="grid gap-6 md:grid-cols-2">
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
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="analytics">Google Analytics</Label>
                  <p className="text-sm text-muted-foreground">Enable Google Analytics tracking</p>
                </div>
                <Switch id="analytics" />
              </div>
              
              <div className="flex justify-end pt-4">
                <Button onClick={handleSave} className="gap-2">
                  <Save className="h-4 w-4" />
                  Save Changes
                </Button>
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
                      className="w-full aspect-square rounded-md cursor-pointer ring-offset-2 ring-offset-background outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:opacity-80"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="dark-mode">Dark Mode</Label>
                  <p className="text-sm text-muted-foreground">Enable dark mode</p>
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
                <Button onClick={handleSave} className="gap-2">
                  <Save className="h-4 w-4" />
                  Save Changes
                </Button>
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
                  <p className="text-sm text-muted-foreground">Receive email when someone contacts you</p>
                </div>
                <Switch id="email-notif" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="project-notif">Project Updates</Label>
                  <p className="text-sm text-muted-foreground">Notifications about project interactions</p>
                </div>
                <Switch id="project-notif" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="marketing-notif">Marketing Emails</Label>
                  <p className="text-sm text-muted-foreground">Receive updates about new features</p>
                </div>
                <Switch id="marketing-notif" />
              </div>
              
              <div className="flex justify-end pt-4">
                <Button onClick={handleSave} className="gap-2">
                  <Save className="h-4 w-4" />
                  Save Changes
                </Button>
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
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input id="current-password" type="password" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" />
                </div>
                
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input id="confirm-password" type="password" />
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="two-factor">Two-Factor Authentication</Label>
                  <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                </div>
                <Switch id="two-factor" />
              </div>
              
              <div className="flex justify-end pt-4">
                <Button onClick={handleSave} className="gap-2">
                  <Save className="h-4 w-4" />
                  Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </AdminLayout>
  );
};

export default Settings;
