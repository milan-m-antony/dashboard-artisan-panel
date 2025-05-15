
import React, { useState } from 'react';
import { AdminLayout } from '@/components/layout/AdminLayout';
import { Search, Mail, MailOpen, Trash } from 'lucide-react';
import { Message } from '@/types/dashboard';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Messages = () => {
  const { toast } = useToast();
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Sample data
  const messages: Message[] = [
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@example.com',
      subject: 'Project Inquiry',
      message: 'Hello, I was impressed by your portfolio and I would like to discuss a potential project with you. Could you please let me know your availability for a quick call this week?',
      date: '2023-05-18',
      read: false,
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah.j@example.com',
      subject: 'Collaboration Opportunity',
      message: 'Hi there, I am reaching out to explore a possible collaboration on an upcoming digital project. I think your skills would be a perfect fit for what we have in mind.',
      date: '2023-05-17',
      read: true,
    },
    {
      id: 3,
      name: 'Michael Brown',
      email: 'michael.b@example.com',
      subject: 'Speaking Engagement',
      message: 'We would like to invite you to speak at our upcoming design conference. Your expertise would be valuable to our audience. Please let me know if you are interested and we can discuss the details.',
      date: '2023-05-15',
      read: true,
    },
    {
      id: 4,
      name: 'Emily Wilson',
      email: 'emily.wilson@example.com',
      subject: 'Feedback on Your Work',
      message: 'I just wanted to drop a quick note to say how much I enjoyed browsing through your portfolio. Your attention to detail and creative approach is truly inspiring. Keep up the great work!',
      date: '2023-05-12',
      read: false,
    },
    {
      id: 5,
      name: 'David Lee',
      email: 'david.lee@example.com',
      subject: 'Job Opportunity',
      message: 'Our company is looking for a talented designer like yourself to join our team. We offer competitive compensation and a flexible work environment. Would you be interested in learning more about this opportunity?',
      date: '2023-05-10',
      read: true,
    },
  ];

  const filteredMessages = searchTerm 
    ? messages.filter(message => 
        message.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        message.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
        message.email.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : messages;

  const handleMessageClick = (message: Message) => {
    setSelectedMessage(message);
    // Mark as read if it wasn't already
    if (!message.read) {
      // In a real app, you would update the server here
      toast({
        title: "Message Marked as Read",
        description: `Message from ${message.name} marked as read`,
      });
    }
  };

  const handleDelete = (id: number) => {
    // In a real app, you would delete from the server
    toast({
      title: "Message Deleted",
      description: "The message has been deleted",
      variant: "destructive",
    });
    if (selectedMessage?.id === id) {
      setSelectedMessage(null);
    }
  };

  return (
    <AdminLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Messages</h1>
        <p className="text-gray-600">Manage messages from your contacts</p>
      </div>

      <div className="bg-white rounded-lg shadow mb-6 p-4">
        <div className="flex items-center px-2 py-1 rounded-md border border-gray-300">
          <Search className="h-5 w-5 text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search messages..."
            className="flex-1 outline-none text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <Card className="h-full">
            <CardContent className="p-0">
              <div className="divide-y divide-gray-200 max-h-[600px] overflow-y-auto">
                {filteredMessages.map((message) => (
                  <div
                    key={message.id}
                    onClick={() => handleMessageClick(message)}
                    className={`p-4 cursor-pointer hover:bg-gray-50 ${
                      selectedMessage?.id === message.id ? 'bg-gray-50' : ''
                    } ${!message.read ? 'font-medium' : ''}`}
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        {message.read ? (
                          <MailOpen className="h-5 w-5 text-gray-400" />
                        ) : (
                          <Mail className="h-5 w-5 text-blue-500" />
                        )}
                      </div>
                      <div className="ml-3 flex-1 min-w-0">
                        <p className={`text-sm truncate ${!message.read ? 'font-medium text-gray-900' : 'text-gray-900'}`}>
                          {message.name}
                        </p>
                        <p className="text-xs text-gray-500 truncate">
                          {message.subject}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          {message.date}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                {filteredMessages.length === 0 && (
                  <div className="p-4 text-center text-gray-500">
                    No messages found
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
          {selectedMessage ? (
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-xl font-medium">{selectedMessage.subject}</h2>
                    <p className="text-sm text-gray-600">
                      From: {selectedMessage.name} ({selectedMessage.email})
                    </p>
                    <p className="text-xs text-gray-500">{selectedMessage.date}</p>
                  </div>
                  <Button 
                    variant="destructive" 
                    size="sm" 
                    onClick={() => handleDelete(selectedMessage.id)}
                  >
                    <Trash className="h-4 w-4 mr-1" /> Delete
                  </Button>
                </div>
                
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <p className="text-gray-800 whitespace-pre-line">
                    {selectedMessage.message}
                  </p>
                </div>

                <div className="mt-6 flex space-x-3">
                  <Button>Reply</Button>
                  <Button variant="outline">Forward</Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="h-full flex items-center justify-center bg-white rounded-lg shadow p-8">
              <div className="text-center">
                <Mail className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-1">No message selected</h3>
                <p className="text-gray-500">Select a message from the list to view its contents</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default Messages;
