const Toy = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-brown-900/95 p-4">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-extrabold text-center mb-12 text-black-200 font-sans tracking-wider">
          You as a POP TOY
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className="bg-gradient-to-b from-amber-950/90 to-amber-900/80 rounded-xl shadow-black shadow-lg p-6"
            >
              <img
                src={`toys/toy${num}.png`}
                alt={`Poop Toy ${num}`}
                className="w-full h-auto object-contain rounded-lg shadow-black/50"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Toy;
