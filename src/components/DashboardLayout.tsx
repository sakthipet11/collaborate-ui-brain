
import { useState } from "react";
import { Menu, X, Settings, User, Layout, Terminal, Code } from "lucide-react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const menuItems = [
    { icon: Layout, label: "Dashboard", href: "#" },
    { icon: Code, label: "Components", href: "#" },
    { icon: Terminal, label: "Console", href: "#" },
    { icon: Settings, label: "Settings", href: "#" },
  ];

  return (
    <div className="min-h-screen flex bg-background">
      {/* Sidebar */}
      <div
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:translate-x-0`}
      >
        <div className="h-full glass flex flex-col">
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <span className="text-xl font-semibold">AI UI Studio</span>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden p-2 rounded-md hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex-1 p-4 space-y-2">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center space-x-3 px-4 py-3 rounded-md hover:bg-white/10 transition-colors"
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </a>
            ))}
          </nav>

          <div className="p-4 border-t border-white/10">
            <a
              href="#"
              className="flex items-center space-x-3 px-4 py-3 rounded-md hover:bg-white/10 transition-colors"
            >
              <User className="w-5 h-5" />
              <span>Profile</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-h-screen">
        <header className="glass z-40 sticky top-0 border-b border-white/10">
          <div className="flex items-center justify-between p-4">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 rounded-md hover:bg-white/10"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-md hover:bg-white/10">
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>
        </header>

        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
