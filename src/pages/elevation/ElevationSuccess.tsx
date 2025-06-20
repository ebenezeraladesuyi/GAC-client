import { useEffect } from 'react';
import { FiCheckCircle, FiSun, FiCalendar, FiMapPin } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const ElevationSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to home after 15 seconds
    const timer = setTimeout(() => {
      navigate('/elevation');
    }, 15000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-[#1c3f65] to-[#0f2844] relative overflow-hidden pt-[100px] pb-[50px]">
      {/* Animated light rays (more intense than form page) */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div 
            key={i}
            className="absolute top-1/2 left-1/2 w-1 h-80 bg-[#51a0ed] opacity-30"
            style={{
              transform: `translate(-50%, -50%) rotate(${i * 30}deg)`,
              animation: `pulse 2s ease-in-out ${i * 0.15}s infinite alternate`
            }}
          />
        ))}
      </div>

      {/* Main content container */}
      <div className="relative w-full max-w-2xl z-10">
        {/* Glowing center circle */}
        <div className="absolute -inset-12 bg-[#51a0ed] rounded-full opacity-10 blur-xl animate-pulse-slow"></div>

        {/* Success card */}
        <div className="bg-[#fff] rounded-2xl shadow-2xl overflow-hidden border border-[#51a0ed]/30 transform hover:scale-[1.01] transition-transform duration-300">
          {/* Header with celebration gradient */}
          <div className="bg-gradient-to-r from-[#1c3f65] to-[#51a0ed] p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <FiSun className="text-[#fff] w-40 h-40 animate-spin-slow" />
            </div>
            <div className="relative z-10">
              <FiCheckCircle className="mx-auto text-[#fff] w-16 h-16 mb-4" />
              <h1 className="text-4xl font-bold text-[#fff] text-center">REGISTRATION CONFIRMED!</h1>
              <p className="text-[#fff]/90 mt-2 text-lg">Elevation Conference '25</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-[#1c3f65] mb-2">"LIGHT HAS COME"</h2>
              <p className="text-[#1c3f65]/80 max-w-lg mx-auto">
                Your journey to elevation begins now. 
              </p>
            </div>

            {/* Conference details */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#f5f9ff] p-5 rounded-xl border border-[#51a0ed]/20">
                <div className="flex items-center mb-3">
                  <FiCalendar className="text-[#51a0ed] mr-3 text-xl" />
                  <h3 className="font-bold text-[#1c3f65]">Event Date</h3>
                </div>
                <p className="text-[#1c3f65]/80 pl-8">June 27-29, 2025</p>
              </div>

              <div className="bg-[#f5f9ff] p-5 rounded-xl border border-[#51a0ed]/20">
                <div className="flex items-center mb-3">
                  <FiMapPin className="text-[#51a0ed] mr-3 text-xl" />
                  <h3 className="font-bold text-[#1c3f65]">Venue</h3>
                </div>
                <p className="text-[#1c3f65]/80 pl-8">SSANU Cooperative Hall, Beside UBa, Ekiti State University</p>
              </div>
            </div>

            {/* Next steps */}
            <div className="bg-[#1c3f65]/5 p-5 rounded-xl border border-[#1c3f65]/10">
              <h3 className="font-bold text-[#1c3f65] mb-3 flex items-center">
                <FiSun className="mr-2 text-[#51a0ed]" /> Next Steps
              </h3>
              <ul className="space-y-2 text-[#1c3f65]/80 pl-2">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#51a0ed] mt-2 mr-2"></span>
                  <span>Save the date in your calendar</span>
                </li>
                {/* <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#51a0ed] mt-2 mr-2"></span>
                  <span>Join our community platform (link in confirmation email)</span>
                </li> */}
                {/* <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#51a0ed] mt-2 mr-2"></span>
                  <span>Follow @ElevationConf on social media for updates</span>
                </li> */}
              </ul>
            </div>
          </div>

          {/* Footer with actions */}
          <div className="bg-[#f5f9ff] p-5 border-t border-[#51a0ed]/10 flex flex-col sm:flex-ro justify-betwee items-center text-center">
            <p className="text-[#1c3f65]/70 mb-3 sm:mb-0 text-sm">
              You'll be redirected in 15 seconds or <button 
                onClick={() => navigate('/elevation')} 
                className="text-[#51a0ed] hover:underline"
              >
                click here
              </button>
            </p>
            {/* <button className="flex items-center px-5 py-2 bg-[#1c3f65] text-[#fff] rounded-lg hover:bg-[#1c3f65]/90 transition-colors">
              <FiShare2 className="mr-2" /> Share with friends
            </button> */}
          </div>
        </div>
      </div>

      {/* Floating celebration particles */}
      {[...Array(30)].map((_, i) => {
        const size = Math.random() * 8 + 4;
        return (
          <div
            key={i}
            className="absolute rounded-full bg-[#51a0ed]"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.4 + 0.1,
              animation: `float-up ${Math.random() * 6 + 4}s linear ${Math.random() * 5}s infinite`,
            }}
          />
        );
      })}

      {/* Confetti burst (one-time animation) */}
      {[...Array(50)].map((_, i) => (
        <div
          key={`confetti-${i}`}
          className="absolute top-1/2 left-1/2 w-2 h-2 opacity-0"
          style={{
            backgroundColor: i % 3 === 0 ? '#51a0ed' : i % 3 === 1 ? '#1c3f65' : '#fff',
            animation: `confetti 1s ease-out ${i * 0.02}s forwards`,
            transform: `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`,
          }}
        />
      ))}

      {/* CSS animations */}
      {/* <style jsx global>{`
        @keyframes pulse {
          0% { opacity: 0.1; transform: scale(0.95); }
          100% { opacity: 0.4; transform: scale(1.05); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.05; }
          50% { opacity: 0.15; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes float-up {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-100vh) translateX(${Math.random() > 0.5 ? '' : '-'}${Math.random() * 100}px);
            opacity: 0;
          }
        }
        @keyframes confetti {
          0% {
            opacity: 1;
            transform: translate(0, 0) rotate(0deg);
          }
          100% {
            opacity: 0;
            transform: translate(${Math.random() > 0.5 ? '' : '-'}${Math.random() * 500}px, ${Math.random() * 500}px) rotate(${Math.random() * 360}deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 25s linear infinite;
        }
      `}</style> */}
    </div>
  );
};

export default ElevationSuccess;