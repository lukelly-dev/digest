'use client';
import { User, Bell, Shield, Palette, Globe, CirclePile } from "lucide-react";
import { useState } from "react";

type SettingsSection = "profile" | "topics" | "appearance" | "preferences";

export default function Profile() {
  const [activeSection, setActiveSection] = useState<SettingsSection>("profile");

  const menuItems = [
    { id: "profile" as SettingsSection, label: "Profile", icon: User },
    { id: "topics" as SettingsSection, label: "Topics", icon: CirclePile },
    { id: "appearance" as SettingsSection, label: "Appearance", icon: Palette },
    { id: "preferences" as SettingsSection, label: "Preferences", icon: Globe },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Sidebar Navigation */}
        <nav className="lg:col-span-1">
          <div className="bg-white rounded-lg border border-gray-200">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors duration-200 ${
                    index === 0 ? "rounded-t-lg" : ""
                  } ${
                    index === menuItems.length - 1 ? "rounded-b-lg" : ""
                  } ${
                    activeSection === item.id
                      ? "bg-gray-50 text-gray-900 border-l-2 border-blue-600"
                      : "text-gray-600 hover:bg-gray-50 border-l-2 border-transparent"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </button>
              );
            })}
          </div>
        </nav>

        {/* Main Content Area */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            {activeSection === "profile" && <ProfileSection />}
            {activeSection === "topics" && <TopicSection />}
            {activeSection === "appearance" && <AppearanceSection />}
            {activeSection === "preferences" && <PreferencesSection />}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProfileSection() {
  return (
    <div className="space-y-6">

      <div className="space-y-4">
        <div>
          <label className="block text-sm text-gray-700 mb-2">Profile picture</label>
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center">
              <User className="w-10 h-10 text-white" />
            </div>
            <button className="px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-200">
              Change photo
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-2">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-2">Email</label>
          <input
            type="email"
            placeholder="your.email@example.com"
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-2">Bio</label>
          <textarea
            placeholder="Tell us about yourself"
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="pt-4 border-t border-gray-200">
        <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors duration-200">
          Save changes
        </button>
      </div>
    </div>
  );
}

function TopicSection() {
  return (
    <div></div>
  )
}

function AppearanceSection() {
  return (
    <div className="space-y-6">

      <div className="space-y-4">
        <div>
          <label className="block text-sm text-gray-700 mb-3">Theme</label>
          <div className="grid grid-cols-3 gap-4">
            {["Light", "Dark", "System"].map((theme) => (
              <button
                key={theme}
                className="px-4 py-3 border-2 border-gray-300 rounded-md text-sm hover:border-blue-600 transition-colors duration-200"
              >
                {theme}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-3">Font size</label>
          <div className="flex gap-4">
            {["Small", "Medium", "Large"].map((size) => (
              <button
                key={size}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50 transition-colors duration-200"
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PreferencesSection() {
  return (
    <div className="space-y-6">

      <div className="space-y-4">
        <div>
          <label className="block text-sm text-gray-700 mb-2">Language</label>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
            <option>German</option>
          </select>
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-2">Time zone</label>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>UTC-8 (Pacific Time)</option>
            <option>UTC-5 (Eastern Time)</option>
            <option>UTC+0 (GMT)</option>
            <option>UTC+1 (Central European Time)</option>
          </select>
        </div>
      </div>
    </div>
  );
}
