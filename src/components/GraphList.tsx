const GraphList = ({ graphs }: any) => {
  return (
    <div className="bg-gray-800 text-white pl-10 p-6 transition duration-300 ease-in-out hover:shadow-2xl shadow-lg rounded-lg">
      <div className="flex flex-col h-full transform hover:scale-105 transition duration-300 ease-in-out">
        <h3 className="text-xl font-semibold mb-4">Saved Graphs</h3>
        <ul>
          {graphs.map((graph: any, index: any) => (
            <li key={index} className="mb-2">
              <img
                src={graph.thumbnail}
                alt={graph.title}
                className="w-16 h-16 inline-block mr-2"
              />
              {graph.title} - {graph.dateCreated}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GraphList;
