
import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Wand2, FileCode2, Users, Bot } from "lucide-react";

const Index = () => {
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);

  const features = [
    {
      icon: Wand2,
      title: "AI Customization",
      description: "Smart component customization powered by AI",
    },
    {
      icon: FileCode2,
      title: "Component Library",
      description: "Extensive collection of pre-built components",
    },
    {
      icon: Users,
      title: "Real-time Collaboration",
      description: "Work together seamlessly with your team",
    },
    {
      icon: Bot,
      title: "AI Assistant",
      description: "Get instant help with your UI decisions",
    },
  ];

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Welcome to AI UI Studio</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Create beautiful, responsive, and accessible user interfaces with the
            power of artificial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="glass p-6 space-y-4 hoverable group cursor-pointer"
              onClick={() => setSelectedComponent(feature.title)}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="glass p-8 animate-float">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Getting Started</h2>
            <p className="text-muted-foreground">
              Select a component above to start customizing your UI with AI
              assistance. Our intelligent system will help you create the perfect
              design for your needs.
            </p>
            {selectedComponent && (
              <div className="p-4 bg-primary/10 rounded-lg mt-4 animate-slide-in">
                <p className="font-medium text-primary">
                  You selected: {selectedComponent}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
