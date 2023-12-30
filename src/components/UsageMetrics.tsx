const UsageMetrics = ({ graphsCreated, graphsShared, papersCollected }: any) => {
    return (
      <div className="bg-gray-800 text-white p-6 shadow-lg rounded-lg">
        <div className="flex flex-col h-full transform hover:scale-105 transition duration-300 ease-in-out">
          <h3 className="text-xl font-semibold mb-4">Usage Metrics</h3>
          <p>
            Graphs Created:{" "}
            <span className="font-semibold">{graphsCreated}</span>
          </p>
          <p>
            Graphs Shared: <span className="font-semibold">{graphsShared}</span>
          </p>
          <p>
            Papers Collected:{" "}
            <span className="font-semibold">{papersCollected}</span>
          </p>
        </div>
      </div>
    );
  };
  
  export default UsageMetrics;