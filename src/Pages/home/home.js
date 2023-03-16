import "./home2.css"
import "../../index.css"

const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 3,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 4,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
  },
]


function HomePage() {
  
    return (
      <div>

{/* Heading Section */}
      {/* Custom colour for background found in home.css */}
        <div className="bg-custGreen">
          {/* container mx-auto sets left and right margin to auto. PY padding top. PX padding left and right. md:px for medium screen */}
          <div className="container mx-auto py-16 px-4 md:px-0">
            <div className="grid md:grid-cols-2 gap-4 items-center">
              <div>
                <img src={require("../../assets/Image1.png")} alt="candle" className="w-full md:max-w-lg mx-auto"/>
              </div>
              <div>
                <h1 className="text-white text-4xl font-bold mb-4"> Thank you for choosing our candles </h1>
                <p className="text-white text-lg mb-8">
                  Here you will find a wide range of hand-poured candles that are
                  made with care and love. Our candles are perfect for creating a
                  relaxing ambiance in your home, or for setting the mood for a
                  special occasion.
                </p>
                {/* shop button */}
                {/* <a href="/shop" className="button" > Shop Now </a> */}
                <button> Shop Now </button>
              </div>
            </div>
          </div>
        </div>

  
{/* Our Story */}
        <div className="bg-custCream">
          <div className="container mx-auto py-16 px-4 md:px-0">
            <h2 className="text-4xl font-bold mb-4">Our Story</h2>
            <p className="text-lg mb-8">
              Our story text Here you will find a wide range of hand-poured
              candles that are made with care and love. Our candles are perfect
              for creating a relaxing ambiance in your home, or for setting the
              mood for a special occasion.
            </p>
            {/* <a href="/shop" className="bg-green-700 text-white font-bold py-4 px-8 rounded-full transition duration-300 hover:bg-white hover:text-green-700"> Shop Now </a> */}
            <button> Shop Now </button>
          </div>
        </div>



{/* Luxury Gifts */}
        <div className="bg-custOrange">
        <div className="container mx-auto py-16 px-4 md:px-0">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-white text-4xl font-bold mb-4">
                Luxury Thank You Gifts
              </h1>
              <p className="text-white text-lg mb-8">
                Here you will find a wide range of hand-poured candles that are
                made with care and love. Our candles are perfect for creating a
                relaxing ambiance in your home, or for setting the mood for a
                special occasion.
              </p>
              {/* <a href="/shop" className="bg-white text-green-700 font-bold py-4 px-8 rounded-full transition duration-300 hover:bg-green-700 hover:text-white"> Shop Now </a> */}
              <button> Shop Now </button>
            </div>
            <div className="order-1 md:order-2">
              <img src={require("../../assets/images/Image2.png")} alt="candle" className="w-full md:max-w-lg mx-auto"/>
            </div>
          </div>
        </div>
        </div>



{/* House Warming Gifts */}
        <div className="bg-custTan">
            <div className="container mx-auto py-16 px-4 md:px-0">
            <div className="grid md:grid-cols-2 gap-4 items-center">
                <div>
                <img src={require("../../assets/images/Image3.png")}  alt="candle" className="w-full md:max-w-lg mx-auto"
                />
                </div>
                <div>
                <h1 className="text-white text-4xl font-bold mb-4"> House Warming Gifts </h1>
                <p className="text-white text-lg mb-8">
                    Here you will find a wide range of hand-poured candles that are
                    made with care and love. Our candles are perfect for creating a
                    relaxing ambiance in your home, or for setting the mood for a
                    special occasion.
                </p>
                {/* <a href="/shop" className="bg-white text-green-700 font-bold py-4 px-8 rounded-full transition duration-300 hover:bg-green-700 hover:text-white"> Shop Now </a> */}
                <button> Shop Now </button>
                </div>
            </div>
            </div>
        </div>


{/* Best Sellers */}
        <div className="bg-custCream">
          <div className="container mx-auto py-16 px-4 md:px-0">
            <h2 className="text-4xl font-bold mb-4">Our Story</h2>
            <p className="text-lg mb-8">
              Our story text Here you will find a wide range of hand-poured
              candles that are made with care and love. Our candles are perfect
              for creating a relaxing ambiance in your home, or for setting the
              mood for a special occasion.
            </p>

    {/* Best Sellers candles */}
              <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">

                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                  {products.map((product) => (
                    <div key={product.id} className="group relative">
                      <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                        <img src={product.imageSrc} alt={product.imageAlt} className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                      </div>
                      <div className="mt-4 flex justify-between">
                        <div>
                          <h3 className="text-sm text-gray-700">
                            <a href={product.href}>
                              <span aria-hidden="true" className="absolute inset-0" />
                              {product.name}
                            </a>
                          </h3>
                          <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                        </div>
                        <p className="text-sm font-medium text-gray-900">{product.price}</p>
                        {/* <button onClick={() => handleAddToBasket(product)}>Add to Basket</button> */}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
             </div>
           </div>


{/* Testimonial */}
        <div className="bg-custGreen">
          <div className="container mx-auto py-16 px-4 md:px-0">
            <h2 className="text-4xl text-white font-bold mb-4"> Testimonial</h2>
              <p className="text-lg text-white mb-8">
                "I am blown away by the quality and beauty of these candles. The scents are unique and carefully crafted, and the eco-friendly ingredients are appreciated. The personalized touch and attention to detail truly sets this shop apart. I will be purchasing more candles and recommending to others."
               </p>
               <p className="text-white"> - Sarah M. </p>

          </div>
        </div>
      </div>
);
}
export default HomePage;