function App() {
  return (
    <div className="App flex justify-center items-center flex-col md:bg-red-500 lg:bg-green-500">
      <h1 className="text-8xl hover:bg-red-100 text-myColor-300">
        Hello world!
      </h1>
      <button className="border-2 border-blue-700 px-2 py-1 rounded text-white bg-blue-500 hover:bg-transparent hover:text-blue-700 hover:border-blue ">Click ME</button>
    </div>
  );
}

export default App;
