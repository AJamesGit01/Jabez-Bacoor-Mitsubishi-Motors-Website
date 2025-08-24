import React, { useState } from "react";
import Layout from '../../../components/layout/Layout';
import { FaSearch } from "react-icons/fa";
import agentList from "../../../data/agentsData";

const Agents = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchClicked, setSearchClicked] = useState(false);

  const filteredAgents = agentList.filter(agent =>
    agent.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout className="pt-16">
      {/* Header */}
      <div className="w-full bg-zinc-900 py-5 px-7 rounded-xl mb-8">
        <h1 className="text-2xl font-bold text-center text-white uppercase tracking-wide">
          List of our Verified <span className="text-red-600">Agents</span>
        </h1>
      </div>

      {/* Search Bar */}
      <div className="flex items-center gap-3 mb-6">
        <input
          type="text"
          placeholder="Enter Agent Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 rounded-lg bg-zinc-800 text-white outline-none"
        />
        <button
          onClick={() => setSearchClicked(true)}
          className="bg-red-500 p-3 rounded-lg hover:bg-red-600 transition flex items-center justify-center"
        >
          <FaSearch className="text-white" />
        </button>
      </div>

      {/* Agent Info */}
      {searchClicked && (
        <>
          {filteredAgents.length > 0 ? (
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
              {filteredAgents.map((agent, index) => (
                <div
                  key={index}
                  className="bg-zinc-800 p-5 rounded-xl shadow hover:shadow-lg transition"
                >
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                  />
                  <h2 className="text-xl font-bold text-white">{agent.name}</h2>
                  <p className="text-red-500">{agent.title}</p>
                  <p className="text-sm mt-2">📞 {agent.phone}</p>
                  <p className="text-sm">✉ {agent.email}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-white text-center mt-6">No SC or SE Agent found.</p>
          )}
        </>
      )}
    </Layout>
  );
};

export default Agents;
