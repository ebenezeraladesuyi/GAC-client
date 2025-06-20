import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FiUser, FiPhone, FiBook, FiAward, FiSun, FiArrowRight } from 'react-icons/fi';
import 'react-toastify/dist/ReactToastify.css';
import { url } from '../../utils/Api';
import { useNavigate } from 'react-router-dom';

interface FormData {
  name: string;
  sex: 'male' | 'female' | '';
  phoneNumber: string;
  department: string;
  level: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '';
}

const ElevationForm = () => {
    const navigate = useNavigate()
  const [formData, setFormData] = useState<FormData>({
    name: '',
    sex: '',
    phoneNumber: '',
    department: '',
    level: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setGlowPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate all fields are filled
      if (!formData.name || !formData.sex || !formData.phoneNumber || !formData.department || !formData.level) {
        toast.error('Please fill all fields', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return;
      }

      await axios.post(`${url}/elevation/create`, formData);
      
      toast.success('Registration successful!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      // Reset form
      setFormData({
        name: '',
        sex: '',
        phoneNumber: '',
        department: '',
        level: ''
      });

      navigate("/elevation/success")

    } catch (error) {
      console.error('Registration error:', error);
      toast.error('Registration failed. Please try again.', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-[#1c3f65] to-[#0f2844] relative overflow-hidden pt-[100px] pb-[50px]">
      {/* Animated light rays */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className="absolute top-1/2 left-1/2 w-1 h-64 bg-[#51a0ed] opacity-20"
            style={{
              transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
              animation: `pulse 3s ease-in-out ${i * 0.2}s infinite alternate`
            }}
          />
        ))}
      </div>

      {/* Main form container */}
      <div 
        className="relative w-full max-w-md z-10"
        onMouseMove={handleMouseMove}
      >
        {/* Glow effect */}
        <div 
          className="absolute inset-0 rounded-2xl bg-[#51a0ed] opacity-10 pointer-events-none"
          style={{
            transform: `translate(calc(${glowPosition.x}px - 50%), calc(${glowPosition.y}px - 50%)`,
            background: `radial-gradient(600px at ${glowPosition.x}px ${glowPosition.y}px, rgba(81, 160, 237, 0.4), transparent 80%)`,
            transition: 'transform 0.1s ease-out'
          }}
        />

        <div className="bg-[#fff] rounded-2xl shadow-2xl overflow-hidden border border-[#51a0ed]/20">
          {/* Header */}
          <div className="bg-[#1c3f65] p-6 text-center relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <FiSun className="text-[#51a0ed] w-32 h-32 animate-spin-slow" />
            </div>
            <h1 className="text-3xl font-bold text-[#fff] relative z-10">
              ELEVATION CONFERENCE '25
            </h1>
            <p className="text-[#51a0ed] mt-2 font-medium relative z-10">
              "LIGHT HAS COME"
            </p>
            <div className="mt-4 h-1 bg-gradient-to-r from-transparent via-[#51a0ed] to-transparent opacity-50" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Name Field */}
            <div className="space-y-2">
              <label htmlFor="name" className="flex items-center text-[#1c3f65] font-medium">
                <FiUser className="mr-2" /> Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-[#1c3f65]/30 focus:border-[#51a0ed] focus:ring-2 focus:ring-[#51a0ed]/30 outline-none transition-all duration-200 bg-[#fff] text-[#1c3f65] placeholder-[#1c3f65]/50"
                placeholder="John Doe"
              />
            </div>

            {/* Sex Field */}
            <div className="space-y-2">
              <label htmlFor="sex" className="flex items-center text-[#1c3f65] font-medium">
                <FiUser className="mr-2" /> Gender
              </label>
              <select
                id="sex"
                name="sex"
                value={formData.sex}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-[#1c3f65]/30 focus:border-[#51a0ed] focus:ring-2 focus:ring-[#51a0ed]/30 outline-none appearance-none bg-[#fff] text-[#1c3f65] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMxYzNmNjUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGV2cm9uLWRvd24iPjxwYXRoIGQ9Im02IDkgNiA2IDYtNiIvPjwvc3ZnPg==')] bg-no-repeat bg-[right_1rem_center] bg-[length:1rem]"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            {/* Phone Number Field */}
            <div className="space-y-2">
              <label htmlFor="phoneNumber" className="flex items-center text-[#1c3f65] font-medium">
                <FiPhone className="mr-2" /> Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-[#1c3f65]/30 focus:border-[#51a0ed] focus:ring-2 focus:ring-[#51a0ed]/30 outline-none transition-all duration-200 bg-[#fff] text-[#1c3f65] placeholder-[#1c3f65]/50"
                placeholder="08012345678"
              />
            </div>

            {/* Department Field */}
            <div className="space-y-2">
              <label htmlFor="department" className="flex items-center text-[#1c3f65] font-medium">
                <FiBook className="mr-2" /> Department
              </label>
              <input
                type="text"
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-[#1c3f65]/30 focus:border-[#51a0ed] focus:ring-2 focus:ring-[#51a0ed]/30 outline-none transition-all duration-200 bg-[#fff] text-[#1c3f65] placeholder-[#1c3f65]/50"
                placeholder="Computer Science"
              />
            </div>

            {/* Level Field */}
            <div className="space-y-2">
              <label htmlFor="level" className="flex items-center text-[#1c3f65] font-medium">
                <FiAward className="mr-2" /> Level
              </label>
              <select
                id="level"
                name="level"
                value={formData.level}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-[#1c3f65]/30 focus:border-[#51a0ed] focus:ring-2 focus:ring-[#51a0ed]/30 outline-none appearance-none bg-[#fff] text-[#1c3f65] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMxYzNmNjUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGV2cm9uLWRvd24iPjxwYXRoIGQ9Im02IDkgNiA2IDYtNiIvPjwvc3ZnPg==')] bg-no-repeat bg-[right_1rem_center] bg-[length:1rem]"
              >
                <option value="">Select Level</option>
                <option value="100">100 Level</option>
                <option value="200">200 Level</option>
                <option value="300">300 Level</option>
                <option value="400">400 Level</option>
                <option value="500">500 Level</option>
                <option value="600">600 Level</option>
                <option value="700">700 Level</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center py-3 px-6 bg-gradient-to-r from-[#1c3f65] to-[#51a0ed] text-[#fff] font-bold rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 group"
            >
              {isSubmitting ? (
                'Registering...'
              ) : (
                <>
                  Complete Registration
                  <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </>
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="bg-[#f5f9ff] p-4 text-center text-sm text-[#1c3f65]/70 border-t border-[#51a0ed]/10">
            <p>Elevation Conference '25 - "Light Has Come"</p>
          </div>
        </div>
      </div>

      {/* Floating light particles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-[#51a0ed] opacity-20 animate-spin-slow"
          style={{
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${Math.random() * 10 + 10}s linear ${Math.random() * 10}s infinite`,
          }}
        />
      ))}

      {/* CSS for animations */}
      {/* <style jsx global>{`
        @keyframes pulse {
          0% { opacity: 0.1; }
          100% { opacity: 0.3; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.2;
          }
          100% {
            transform: translateY(-100vh) translateX(20px);
            opacity: 0;
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style> */}
    </div>
  );
};

export default ElevationForm;