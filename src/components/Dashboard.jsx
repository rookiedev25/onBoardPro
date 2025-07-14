import React from "react";

const Dashboard = () => {
    const documentationTools = [
      {
        id: 1,
        name: "Swagger",
        description: "API documentation made easy with OpenAPI Specification",
        icon: "📚",
      },
      {
        id: 2,
        name: "JSDoc",
        description: "Documentation generator for JavaScript",
        icon: "📝",
      },
      {
        id: 3,
        name: "Storybook",
        description: "UI component documentation and testing",
        icon: "📖",
      },
      {
        id: 4,
        name: "Docusaurus",
        description: "Documentation websites built with React",
        icon: "🔧",
      },
    ];
  return (
    <>
      <div className="flex flex-row">
        <div className="flex min-h-screen bg-gray-50">
          <div className="w-64 bg-white shadow-lg">
            <div className="flex flex-col h-full">
              <div className="px-6 py-4 border-b">
                <h2 className="text-xl font-semibold text-gray-800">
                  Dashboard
                </h2>
              </div>
              <nav className="flex-1 p-4">
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-all"
                    >
                      <span>Skills</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-all"
                    >
                      <span>Activity</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-all"
                    >
                      <span>myPage</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-all"
                    >
                      <span>Assets</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-all"
                    >
                      <span>Training Folder</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          </div>
          
          <div className="contentSection m-10">
          <div className="flex-1 mt-12 mb-8">
            <h2 className="text-2xl font-bold text-gray-800">
              Hello User, welcome to your Dashboard
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 cursor-pointer">
            {documentationTools.map((tool) => (
              <div key={tool.id} className="p-6 bg-white rounded-lg shadow-md">
                <div className="text-3xl mb-2">{tool.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
                <p className="text-gray-600">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
