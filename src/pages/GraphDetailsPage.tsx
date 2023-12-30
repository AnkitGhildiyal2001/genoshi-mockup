import React from 'react';
import NavBar from '../components/NavBar';

const GraphDetailsPage: React.FC = () => {
  const graphs = [
    {
      title: 'Graph Title 1',
      description: 'Graph Description 1',
      dateCreated: '2023-01-01',
      papers: ['Paper 1', 'Paper 2', 'Paper 3'],
    },
    {
      title: 'Graph Title 2',
      description: 'Graph Description 2',
      dateCreated: '2023-02-15',
      papers: ['Paper 4', 'Paper 5'],
    },
    {
      title: 'Graph Title 3',
      description: 'Graph Description 3',
      dateCreated: '2023-03-30',
      papers: ['Paper 6'],
    },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <NavBar />
      <div className="container mx-auto p-4 pt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
        {graphs.map((graph, graphIndex) => (
          <div key={graphIndex} className="p-4 border border-gray-700 hover:shadow-md transition duration-300 ease-in-out">
            <h2 className="text-2xl font-bold mb-4">{graph.title}</h2>
            <p className="text-gray-300 mb-4">{graph.description}</p>
            <p className="text-gray-300">Date Created: {graph.dateCreated}</p>
            <ul className="mt-4">
              {graph.papers.map((paper, paperIndex) => (
                <li key={paperIndex} className="text-gray-300 mb-2">
                  {paper}
                  <button className="ml-2 text-gray-500 hover:text-blue-500 transition duration-300 ease-in-out">
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex space-x-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out">
                Edit
              </button>
              <button className="bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-gray-800 transition duration-300 ease-in-out">
                Share
              </button>
              <button className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-300 ease-in-out">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GraphDetailsPage;
