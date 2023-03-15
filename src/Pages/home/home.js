import "./home.css";
function HomePage() {
    return (
      <div>
        {/* Heading Section */}
        <div className="bg-blue-900">
          <div className="container mx-auto py-16 px-4 md:px-0">
            <div className="grid md:grid-cols-2 gap-4 items-center">
              <div>
                <img
                  src={require("../../assets/images/image1.png")}
                  alt="candle"
                  className="w-full md:max-w-lg mx-auto"
                />
              </div>
              <div>
                <h1 className="text-white text-4xl font-bold mb-4">
                  Thank you for choosing our candles
                </h1>
                <p className="text-white text-lg mb-8">
                  Here you will find a wide range of hand-poured candles that are
                  made with care and love. Our candles are perfect for creating a
                  relaxing ambiance in your home, or for setting the mood for a
                  special occasion.
                </p>
                {/* shop */}
                <a
                  href="/shop"
                  className="bg-white text-green-700 font-bold py-4 px-8 rounded-full transition duration-300 hover:bg-green-700 hover:text-white"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
  
        {/* Our Story */}
        <div className="bg-yellow-200">
          <div className="container mx-auto py-16 px-4 md:px-0">
            <h2 className="text-4xl font-bold mb-4">Our Story</h2>
            <p className="text-lg mb-8">
              Our story text Here you will find a wide range of hand-poured
              candles that are made with care and love. Our candles are perfect
              for creating a relaxing ambiance in your home, or for setting the
              mood for a special occasion.
            </p>
            <a
              href="/shop"
              className="bg-green-700 text-white font-bold py-4 px-8 rounded-full transition duration-300 hover:bg-white hover:text-green-700"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    );
  }
  
  export default HomePage;