import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";
import {
  Building2,
  Users,
  Shield,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  FileText,
  Settings,
  Bell,
  Download,
  Upload,
  Calendar,
  Target,
  Leaf,
  Zap,
  Droplet,
  Recycle,
  Award,
  BookOpen,
  Eye,
  Plus,
} from "lucide-react";
const ESGComplianceTool = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [user, setUser] = useState({
    name: "Rajesh Kumar",
    company: "TechCorp India Ltd",
    role: "ESG Manager",
  });
  const [notifications, setNotifications] = useState(3);
  // Sample data for Indian ESG compliance
  const esgScoreData = [
    { category: "Environmental", score: 72, target: 80 },
    { category: "Social", score: 68, target: 75 },
    { category: "Governance", score: 81, target: 85 },
  ];
  const complianceData = [
    { framework: "SEBI BRSR", completed: 85, total: 100 },
    { framework: "GRI Standards", completed: 72, total: 95 },
    { framework: "TCFD", completed: 45, total: 60 },
    { framework: "SDG Alignment", completed: 38, total: 50 },
  ];
  const monthlyProgress = [
    { month: "Jan", environmental: 65, social: 60, governance: 75 },
    { month: "Feb", environmental: 68, social: 62, governance: 77 },
    { month: "Mar", environmental: 70, social: 65, governance: 79 },
    { month: "Apr", environmental: 72, social: 68, governance: 81 },
  ];
  const riskData = [
    { name: "High Risk", value: 12, color: "#ef4444" },
    { name: "Medium Risk", value: 28, color: "#f59e0b" },
    { name: "Low Risk", value: 45, color: "#10b981" },
    { name: "No Risk", value: 15, color: "#6b7280" },
  ];
  const Logo = () => (
    <div className="flex items-center space-x-2">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-600 to-blue-600 flex items-center justify-center">
        <div className="flex items-center">
          <div className="w-2 h-4 bg-blue-400 rounded-sm mr-0.5"></div>
          <div className="w-2 h-6 bg-blue-500 rounded-sm mr-0.5"></div>
          <div className="w-1 h-3 bg-green-400 rounded-full absolute ml-2"></div>
        </div>
      </div>
      <div>
        <div className="text-xl font-bold">
          <span className="text-green-600">ES</span>
          <span className="text-gray-800">Genius</span>
        </div>
        <div className="text-xs text-gray-500">Technology Solutions</div>
      </div>
    </div>
  );
  const Sidebar = () => (
    <div className="w-64 bg-white shadow-lg h-full">
      <div className="p-6 border-b">
        <Logo />
      </div>
      <nav className="mt-6">
        {[
          { id: "dashboard", label: "Dashboard", icon: BarChart },
          { id: "compliance", label: "Compliance Tracker", icon: Shield },
          { id: "reporting", label: "ESG Reporting", icon: FileText },
          { id: "data", label: "Data Management", icon: Upload },
          { id: "analytics", label: "Analytics", icon: TrendingUp },
          { id: "settings", label: "Settings", icon: Settings },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center px-6 py-3 text-left hover:bg-green-50 ${
                activeTab === item.id
                  ? "bg-green-50 text-green-600 border-r-2 border-green-600"
                  : "text-gray-600"
              }`}
            >
              <Icon className="w-5 h-5 mr-3" />
              {item.label}
            </button>
          );
        })}
      </nav>
    </div>
  );
  const Header = () => (
    <div className="bg-white shadow-sm border-b px-6 py-4 flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          ESG Compliance Dashboard
        </h1>
        <p className="text-gray-600">
          {user.company} • Indian Market Compliance
        </p>
      </div>
      <div className="flex items-center space-x-4">
        <button className="relative p-2 text-gray-600 hover:text-green-600">
          <Bell className="w-6 h-6" />
          {notifications > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {notifications}
            </span>
          )}
        </button>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold">
            {user.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
          <div className="text-sm">
            <div className="font-medium">{user.name}</div>
            <div className="text-gray-500">{user.role}</div>
          </div>
        </div>
      </div>
    </div>
  );
  const Dashboard = () => (
    <div className="p-6 space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Overall ESG Score</p>
              <p className="text-3xl font-bold text-green-600">74</p>
              <p className="text-sm text-green-600">+5 from last month</p>
            </div>
            <Target className="w-12 h-12 text-green-600" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">SEBI BRSR Compliance</p>
              <p className="text-3xl font-bold text-blue-600">85%</p>
              <p className="text-sm text-blue-600">15 items pending</p>
            </div>
            <Shield className="w-12 h-12 text-blue-600" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Risk Score</p>
              <p className="text-3xl font-bold text-orange-600">42</p>
              <p className="text-sm text-orange-600">Medium Risk</p>
            </div>
            <AlertTriangle className="w-12 h-12 text-orange-600" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Next Deadline</p>
              <p className="text-3xl font-bold text-red-600">12</p>
              <p className="text-sm text-red-600">days remaining</p>
            </div>
            <Calendar className="w-12 h-12 text-red-600" />
          </div>
        </div>
      </div>
      {/* ESG Score Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold mb-4">
            ESG Performance by Category
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={esgScoreData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="score" fill="#10b981" />
              <Bar dataKey="target" fill="#e5e7eb" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold mb-4">Risk Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={riskData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                dataKey="value"
                label={({ name, value }) => `${name}: ${value}`}
              >
                {riskData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      {/* Progress Tracking */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-lg font-semibold mb-4">
          Monthly ESG Progress Trend
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={monthlyProgress}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="environmental"
              stroke="#10b981"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="social"
              stroke="#3b82f6"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="governance"
              stroke="#8b5cf6"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-lg text-white">
          <h4 className="font-semibold mb-2">Environmental Data</h4>
          <p className="text-sm mb-4">
            Upload latest carbon emissions and energy consumption data
          </p>
          <button className="bg-white text-green-600 px-4 py-2 rounded font-medium hover:bg-green-50">
            Upload Data
          </button>
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-lg text-white">
          <h4 className="font-semibold mb-2">SEBI BRSR Report</h4>
          <p className="text-sm mb-4">
            Generate your quarterly Business Responsibility report
          </p>
          <button className="bg-white text-blue-600 px-4 py-2 rounded font-medium hover:bg-blue-50">
            Generate Report
          </button>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 rounded-lg text-white">
          <h4 className="font-semibold mb-2">Compliance Check</h4>
          <p className="text-sm mb-4">
            Review pending compliance items and deadlines
          </p>
          <button className="bg-white text-purple-600 px-4 py-2 rounded font-medium hover:bg-purple-50">
            View Items
          </button>
        </div>
      </div>
    </div>
  );
  const ComplianceTracker = () => (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Compliance Tracker</h2>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          Add Framework
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {complianceData.map((framework, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-semibold text-lg">{framework.framework}</h3>
                <p className="text-gray-600">
                  {framework.completed} of {framework.total} requirements
                  completed
                </p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-green-600">
                  {Math.round((framework.completed / framework.total) * 100)}%
                </div>
              </div>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div
                className="bg-green-600 h-2 rounded-full"
                style={{
                  width: `${(framework.completed / framework.total) * 100}%`,
                }}
              ></div>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-gray-600">
                {framework.total - framework.completed} pending
              </span>
              <button className="text-green-600 hover:text-green-700 font-medium">
                View Details →
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Recent Activities */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-lg font-semibold mb-4">
          Recent Compliance Activities
        </h3>
        <div className="space-y-4">
          {[
            {
              action: "Updated water consumption data",
              framework: "SEBI BRSR",
              time: "2 hours ago",
              status: "completed",
            },
            {
              action: "Reviewed board diversity metrics",
              framework: "GRI Standards",
              time: "1 day ago",
              status: "completed",
            },
            {
              action: "Climate risk assessment pending",
              framework: "TCFD",
              time: "3 days ago",
              status: "pending",
            },
            {
              action: "SDG impact measurement due",
              framework: "SDG Alignment",
              time: "5 days ago",
              status: "overdue",
            },
          ].map((activity, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 border rounded-lg"
            >
              <div className="flex items-center space-x-3">
                <div
                  className={`w-3 h-3 rounded-full ${
                    activity.status === "completed"
                      ? "bg-green-500"
                      : activity.status === "pending"
                      ? "bg-yellow-500"
                      : "bg-red-500"
                  }`}
                ></div>
                <div>
                  <p className="font-medium">{activity.action}</p>
                  <p className="text-sm text-gray-600">
                    {activity.framework} • {activity.time}
                  </p>
                </div>
              </div>
              <div
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  activity.status === "completed"
                    ? "bg-green-100 text-green-800"
                    : activity.status === "pending"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {activity.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  const ReportingSection = () => (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">ESG Reporting</h2>
        <div className="flex space-x-3">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center">
            <FileText className="w-4 h-4 mr-2" />
            New Report
          </button>
        </div>
      </div>
      {/* Report Templates */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: "SEBI BRSR Report",
            description: "Business Responsibility & Sustainability Report",
            icon: Shield,
            color: "blue",
          },
          {
            title: "GRI Standards Report",
            description: "Global Reporting Initiative compliance",
            icon: BookOpen,
            color: "green",
          },
          {
            title: "TCFD Report",
            description: "Task Force on Climate-related Disclosures",
            icon: Leaf,
            color: "emerald",
          },
          {
            title: "Carbon Footprint Report",
            description: "Greenhouse gas emissions assessment",
            icon: Zap,
            color: "yellow",
          },
          {
            title: "Water Usage Report",
            description: "Water consumption and conservation",
            icon: Droplet,
            color: "cyan",
          },
          {
            title: "Waste Management Report",
            description: "Waste reduction and recycling metrics",
            icon: Recycle,
            color: "purple",
          },
        ].map((report, index) => {
          const Icon = report.icon;
          return (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow"
            >
              <div
                className={`w-12 h-12 bg-${report.color}-100 rounded-lg flex items-center justify-center mb-4`}
              >
                <Icon className={`w-6 h-6 text-${report.color}-600`} />
              </div>
              <h3 className="font-semibold text-lg mb-2">{report.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{report.description}</p>
              <div className="flex space-x-2">
                <button className="flex-1 bg-gray-100 text-gray-700 px-3 py-2 rounded text-sm hover:bg-gray-200">
                  Preview
                </button>
                <button
                  className={`flex-1 bg-${report.color}-600 text-white px-3 py-2 rounded text-sm hover:bg-${report.color}-700`}
                >
                  Generate
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {/* Recent Reports */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-lg font-semibold mb-4">Recent Reports</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Report Name</th>
                <th className="text-left py-3 px-4">Type</th>
                <th className="text-left py-3 px-4">Generated</th>
                <th className="text-left py-3 px-4">Status</th>
                <th className="text-left py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  name: "Q1 2024 BRSR Report",
                  type: "SEBI BRSR",
                  date: "2024-04-15",
                  status: "Published",
                },
                {
                  name: "Annual GRI Report 2024",
                  type: "GRI Standards",
                  date: "2024-04-10",
                  status: "Draft",
                },
                {
                  name: "Climate Risk Assessment",
                  type: "TCFD",
                  date: "2024-04-08",
                  status: "Under Review",
                },
                {
                  name: "Carbon Emissions Q1",
                  type: "Environmental",
                  date: "2024-04-05",
                  status: "Published",
                },
              ].map((report, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">{report.name}</td>
                  <td className="py-3 px-4 text-gray-600">{report.type}</td>
                  <td className="py-3 px-4 text-gray-600">{report.date}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        report.status === "Published"
                          ? "bg-green-100 text-green-800"
                          : report.status === "Draft"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {report.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-700">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-green-600 hover:text-green-700">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "compliance":
        return <ComplianceTracker />;
      case "reporting":
        return <ReportingSection />;
      case "data":
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-6">Data Management</h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border text-center">
              <Upload className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Upload ESG Data</h3>
              <p className="text-gray-600 mb-4">
                Import data from Excel, CSV, or connect to your existing systems
              </p>
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
                Upload Files
              </button>
            </div>
          </div>
        );
      case "analytics":
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-6">Advanced Analytics</h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border text-center">
              <TrendingUp className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                Deep Insights Coming Soon
              </h3>
              <p className="text-gray-600">
                Advanced predictive analytics and benchmarking features
              </p>
            </div>
          </div>
        );
      case "settings":
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-6">Settings</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold mb-4">
                Company Information
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={user.company}
                    className="w-full p-3 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Industry Sector
                  </label>
                  <select className="w-full p-3 border rounded-lg">
                    <option>Information Technology</option>
                    <option>Manufacturing</option>
                    <option>Financial Services</option>
                    <option>Healthcare</option>
                  </select>
                </div>
                <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 overflow-auto">{renderContent()}</main>
      </div>
    </div>
  );
};
export default ESGComplianceTool;
