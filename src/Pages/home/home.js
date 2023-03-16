import "./home2.css"
import "../../index.css"
import { products } from "../../products"; // import the products data
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <section>
      <article>
       {/* Custom colour for background found in home.css */}
        <div className="bg-custGreen">
         {/* container mx-auto sets left and right margin to auto. PY padding top. PX padding left and right. md:px for medium screen */}
          <div className="container mx-auto py-16 px-4 md:px-0 grid md:grid-cols-2 gap-4 items-center text-left">
            {/* md:grid-col-2 gives the grid with 2 columns. gap-4 space between items. items center and text left - put content in the center to the left */}
            <img src={require("../../assets/Image1.png")}  alt="candle" className="w-full md:max-w-lg mx-auto rounded-md"/>
            <div>
              <h1 className="text-white text-4xl font-bold mb-4"> Thank you for choosing our candles </h1>
              <p className="text-white text-lg mb-8">
                Thank you for choosing Wax and Wicks for your candle needs! Shop
                our collection today and indulge in the warmth and comfort of
                Wax and Wicks.
              </p>
              <Link to="/shop"> <button> Shop Now </button> </Link>
            </div>
          </div>
        </div>
      </article>
  
{/* Our Story */}
<article>
        <div className="bg-custCream">
          <div className="container mx-auto py-16 px-4 md:px-0">
            <h2 className="text-4xl font-bold mb-4 text-custGreen">Our Story</h2>
            <p className="text-lg mb-8 text-custGreen">
            At Wax and Wicks, we believe that everyone deserves to enjoy the warm glow and beautiful scent of a high-quality candle without sacrificing their health or breaking the bank. Our story began when we grew tired of buying candles that had little to no fragrance and were filled with toxic chemicals. We knew we had to do something to offer a better alternative.  After months of research and testing, we finally found the perfect combination of all-natural, eco-friendly ingredients that produced beautifully scented, long-lasting candles. We're proud to offer our customers affordable, high-quality candles that are safe to burn in their homes and create an ambiance of comfort and relaxation.
            </p>
          </div>
        </div>
</article>

<article>
{/* Thank You Gifts */}
        <div className="bg-custOrange">
        <div className="container mx-auto py-16 px-4 md:px-0 grid md:grid-cols-2 gap-4 items-center text-right">
            <div className="order-2 md:order-1">
              <h1 className="text-white text-4xl font-bold mb-4"> Thank You Gifts </h1>
              <p className="text-white text-lg mb-8">
              Show your appreciation in the most luxurious way possible with our collection of exquisite thank-you gifts. Indulge your loved ones with our high-quality, handcrafted candles in a variety of alluring scents. Made with the finest ingredients, these candles will create an ambiance of sophistication and relaxation that is sure to impress. Shop now and give a gift that will be cherished and remembered for years to come.
              </p>
              <Link to="/shop"> <button> Shop Now </button> </Link>
            </div>
            <div className="order-1 md:order-2">
              <img src={require("../../assets/images/Image2.png")} alt="candle" className="w-full md:max-w-lg mx-auto rounded-md"/>
            </div>
        </div>
        </div>
</article>

<article>
{/* House Warming Gifts */}
  <div className="bg-custTan">
    <div className="container mx-auto py-16 px-4 md:px-0 grid md:grid-cols-2 gap-4 items-center text-left">
      <div>
        <img src={require("../../assets/images/Image3.png")}  alt="candle" className="w-full md:max-w-lg mx-auto rounded-md"/>
      </div>
      <div>
        <h1 className="text-white text-4xl font-bold mb-4"> House Warming Gifts </h1>
        <p className="text-white text-lg mb-8">
        Welcome friends and family to their new home with a unique and thoughtful housewarming gift from our collection. Our best-selling candles are the perfect way to warm up any new space with their beautiful scents and cozy glow.
        </p>
        <Link to="/shop"> <button> Shop Now </button> </Link>      
        </div>
    </div>
  </div>
</article>

{/* Best Sellers */}
        <div className="bg-custCream">
          <div className="container mx-auto py-16 px-4 md:px-0">
            <h2 className="text-4xl font-bold mb-4 text-custGreen">Our Best Sellers</h2>
            <p className="text-lg mb-8 text-custGreen">
            Looking for the best candles around? Look no further than our top-selling candle collection. With a wide variety of scents to choose from, our candles are handcrafted with care and made from high-quality materials to ensure a long-lasting burn. Whether you prefer sweet and fruity or fresh and floral, we have a scent that will fit your mood and brighten your space. Shop our best sellers today and discover the magic of our candles for yourself!
            </p>
{/* Best Sellers candles */}

  <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {/* This products function is looping throght the first 4 items  */}
    {products.slice(0, 4).map((product) => (
              <div key={product.id} className="group relative">
        <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
          <img src={product.imageSrc} alt={product.imageAlt} className="h-full w-object-cover object-center lg:h-full lg:w-full" />
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>

{/* Testimonial */}
  <article>
    <div className="bg-custGreen">
      <div className="container mx-auto py-16 px-4 md:px-0">
        <h2 className="text-4xl text-white font-bold mb-4"> Testimonial</h2>
        <p className="text-lg text-white mb-8">
         "I am blown away by the quality and beauty of these candles. The scents are unique and carefully crafted, and the eco-friendly ingredients are appreciated. The personalized touch and attention to detail truly sets this shop apart. I will be purchasing more candles and recommending to others."
        </p>
        <p className="text-white font-bold"> - Sarah M. </p>

      </div>
    </div>
  </article>
</section>
);
}
export default HomePage;