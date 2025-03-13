import { useNavigate } from "react-router-dom";



const BrokerageSetup = () => {
  const navigate = useNavigate();


  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {/* Card Container */}
      <div className="relative w-[610px] h-[702px] rounded-lg overflow-hidden shadow-lg">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('src/assets/images/png/BrokerageBanner.png')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-700 opacity-90"></div>
        </div>

        {/* Content Section */}
        <div className="relative z-10 flex flex-col items-center justify-end h-full text-center p-8 text-white">
          <h2 className="text-2xl font-bold">
            Let’s set up your Brokerage service in 1 minute
          </h2>
          <p className="mt-3 text-sm text-gray-200">
            Explore seamless property brokerage directly within the app.
            Whether buying, selling, or managing, we’re here to guide you every
            step of the way.
          </p>

          {/* CTA Button */}
          <button onClick={()=>navigate('/brokerageForm')} className="mt-6 w-full bg-black text-white py-3 rounded-full text-lg font-medium hover:bg-gray-900 transition">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrokerageSetup;
