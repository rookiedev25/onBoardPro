import React from "react";

const Dashboard = () => {
  const date = new Date();
  let day = date.getDate();
  let year = date.getFullYear();
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const getDaySuffix = (d) => {
    if (d > 3 && d < 21) return "th";
    switch (d % 10) {
      case 1: return "st";
      case 2: return "nd";
      case 3: return "rd";
      default: return "th";
    }
  };
  let formattedDate = `${day}${getDaySuffix(day)} ${monthNames[date.getMonth()]}, ${year}`;
  
  const cards = [
    {
      id: 1,
      cardName: "SET-1",
      cardDescription: ["ST4", "XMetaL", "Tags"],
      progress: "20%",
    },
    {
      id: 2,
      cardName: "SET-2",
      cardDescription: ["Graphics", "COSIMA", "DITA"],
      progress: "50%",
    },
    {
      id: 3,
      cardName: "SET-3",
      cardDescription: ["XML", "DocuSET", "CheckTerm"],
      progress: "90%",
    },
    {
      id: 4,
      cardName: "SET-4",
      cardDescription: ["Acrolinx", "DITA-OT", "Sitemap"],
      progress: "60%",
    },
    {
      id: 5,
      cardName: "SET-5",
      cardDescription: ["RoboHelp", "Markdown", "Git"],
      progress: "35%",
    },
    {
      id: 6,
      cardName: "SET-6",
      cardDescription: ["HelpNDoc", "SnagIt", "Versioning"],
      progress: "70%",
    },
    {
      id: 7,
      cardName: "SET-7",
      cardDescription: ["Confluence", "JIRA", "Workflow"],
      progress: "45%",
    },
    {
      id: 8,
      cardName: "SET-8",
      cardDescription: ["SDL Tridion", "Content Import", "CMS"],
      progress: "80%",
    },
    {
      id: 9,
      cardName: "SET-9",
      cardDescription: ["Framemaker", "PDF Review", "TOC"],
      progress: "25%",
    },
  ];
  

  return (
    <>
      <div className="flex flex-row">
        <div className="sideBar min-h-screen mt-10 box-border border-r-1 px-10 border-r-gray-300 flex w-60">
          <ul className="flex flex-col gap-4 font-regular mt-10 text-xl">
            <li className="cursor-pointer hover:font-bold transition-all active:">
              Dashboard
            </li>
            <li className="cursor-pointer hover:font-bold transition-all">
              MyPage
            </li>
            <li className="cursor-pointer hover:font-bold transition-all">
              Assets
            </li>
          </ul>
          {/* <div className="looseButtons">
            <ul>
              <li>Help</li>
              <li>Logout</li>
            </ul>
          </div> */}
        </div>

        {/* CONTENT_SECTION */}
        <div className="contentSection mt-20 min-h-screen flex flex-col w-full mr-8 mb-10">
          <div className="greeting pl-10">
            <h2 className="text-2xl font-bold">Hello User,</h2>
            <p className="font-light text-xl">Today is {formattedDate}</p>
          </div>

          <div className="grid grid-cols-3 grid-rows-2 ml-8 mt-5 py-2 max-w-screen overflow-auto flex-wrap gap-2">
            {
              cards.map((c) => {
                return (
                  <div
                    key={c.id}
                    className="bg-white shadow-lg rounded-xl p-6 min-h-56 flex flex-col justify-between hover:shadow-2xl transition-shadow border border-gray-100 cursor-pointer"
                  >
                    <div>
                      <h1 className="font-semibold text-xl text-gray-800 mb-2">{c.cardName}</h1>
                      <ul className="mb-4 space-y-1">
                        {c.cardDescription.map((l, idx) => (
                          <li key={idx} className="text-gray-600 flex items-center gap-2">
                            <span className="inline-block w-2 h-2 bg-black rounded-full"></span>
                            {l}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm text-gray-500">Progress</span>
                      <div className="w-75 bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-black h-2.5 rounded-full transition-all"
                          style={{ width: c.progress }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-black ml-2">{c.progress}</span>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>

        {/* <div className="contentSection m-10">
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
        </div> */}
      </div>
    </>
  );
};

export default Dashboard;
