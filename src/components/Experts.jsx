import { Linkedin, MapPin, Mail, Phone, ChevronRight, ArrowRight, Users } from 'lucide-react';
import AnimatedButton from './ui/AnimatedButton';

export default function Experts() {
  const experts = [
    {
      name: 'SATEESH KUMAR SEGU',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1708195886023-3ecb00ac7a49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MTE0NzMwNHww&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'DON ADAMS',
      role: 'VP Software and Automation Engineering',
      image: 'https://images.unsplash.com/photo-1587404461093-8091fba7c4f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBidXNpbmVzc21hbiUyMHN1aXR8ZW58MXx8fHwxNzYxMjA5NTM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Experts Section */}
      <section className="flex-1 py-20">
        <div className="max-w-[1440px] mx-auto lg:p-8 p-4">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_.5fr] gap-16 items-center lg:mb-20 mb-6">
            {/* Left Side - Content */}
            <div className="lg:space-y-8 space-y-6">
              <div className='text-center md:text-left'>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-color/10 rounded-full border border-blue-color/20">
                  <Users className="w-4 h-4 text-blue-600" />
                  <span className="text-sm text-blue-600">Meet Our Team</span>
                </div>
              </div>

              <div>
                <h2 className="lg:text-5xl md:text-4xl text-3xl mb-4 font-manrope font-bold md:text-left text-center">
                  Our experienced <span className='text-transparent bg-clip-text bg-button-linear'>experts</span>
                </h2>
              </div>

              <p className="lg:text-lg text-gray-600 leading-relaxed max-w-xl font-manrope md:text-left text-center">
                We offer a range of solutions and services that include Data Engineering and Analytics, Cloud FinOps, Migration, GenAI and other cutting-edge technologies to support your organisation.
              </p>

              <div className="flex flex-wrap items-center gap-4 md:justify-start justify-center">
                <AnimatedButton
                  label="Join us now"
                  to="/"
                  className="px-8 py-4 rounded-full font-manrope font-medium text-sm bg-button-linear text-white"
                />
                <AnimatedButton
                  label="View all team"
                  to="/"
                  className="px-8 py-4 border border-blue-500 rounded-full font-manrope font-medium text-sm text-blue-600"
                />
              </div>

              {/* Stats */}
              <div className="grid sm:grid-cols-3 gap-6 pt-8">
                <div className="text-center lg:text-left">
                  <div className="text-3xl text-gray-900 mb-1 font-manrope font-semibold">50+</div>
                  <div className="text-sm text-gray-500 font-manrope">Team Members</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl text-gray-900 mb-1 font-manrope font-semibold">15+</div>
                  <div className="text-sm text-gray-500 font-manrope">Years Experience</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl text-gray-900 mb-1 font-manrope font-semibold">200+</div>
                  <div className="text-sm text-gray-500 font-manrope">Projects Delivered</div>
                </div>
              </div>
            </div>

            {/* Right Side - Featured Expert Card */}
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-6 -left-6 w-72 h-72 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>

              {/* Main Featured Card */}
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl shadow-gray-900/10">
                <div className="absolute top-6 right-6 px-4 py-2 bg-gradient-to-br from-cyan-400 to-blue-600 text-white text-xs rounded-full font-manrope">
                  Leadership
                </div>

                <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-gray-100 to-gray-200">
                  <img
                    src={experts[0].image}
                    alt={experts[0].name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl text-gray-900">{experts[0].name}</h3>
                  <p className="text-blue-600">{experts[0].role}</p>

                  <div className="flex items-center gap-3 pt-4">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center hover:bg-button-linear group transition-all duration-300"
                    >
                      <Linkedin className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center hover:bg-button-linear group transition-all duration-300"
                    >
                      <Mail className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Expert Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 gap-6">
            {/* Expert Card 1 */}
            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              {/* Gradient Overlay */}

              {/* Image */}
              <div className="aspect-[4/5] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <img
                  src={experts[1].image}
                  alt={experts[1].name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="relative z-20 p-6">
                <h3 className="text-xl text-gray-900 mb-2 transition-colors duration-300">
                  {experts[1].name}
                </h3>
                <p className="text-gray-600 transition-colors duration-300">
                  {experts[1].role}
                </p>

                {/* Social Links - Hidden, shows on hover */}
                <div className="flex items-center gap-3 mt-4 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500">
                  <a
                    href="#"
                    className="w-9 h-9 rounded-lg bg-button-linear backdrop-blur-sm flex items-center justify-center lg:hover:bg-white/30 transition-all"
                  >
                    <Linkedin className="w-4 h-4 text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 rounded-lg bg-button-linear backdrop-blur-sm flex items-center justify-center lg:hover:bg-white/30 transition-all"
                  >
                    <Mail className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Expert Card 3 */}
            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              {/* Gradient Overlay */}

              {/* Image */}
              <div className="aspect-[4/5] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <img
                  src={experts[1].image}
                  alt={experts[1].name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="relative z-20 p-6">
                <h3 className="text-xl text-gray-900 mb-2 transition-colors duration-300">
                  {experts[1].name}
                </h3>
                <p className="text-gray-600 transition-colors duration-300">
                  {experts[1].role}
                </p>

                {/* Social Links - Hidden, shows on hover */}
                <div className="flex items-center gap-3 mt-4 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500">
                  <a
                    href="#"
                    className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-700 backdrop-blur-sm flex items-center justify-center lg:hover:bg-white/30 transition-all"
                  >
                    <Linkedin className="w-4 h-4 text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-700 backdrop-blur-sm flex items-center justify-center lg:hover:bg-white/30 transition-all"
                  >
                    <Mail className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Expert Card 2 */}
            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              {/* Gradient Overlay */}

              {/* Image */}
              <div className="aspect-[4/5] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <img
                  src={experts[1].image}
                  alt={experts[1].name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="relative z-20 p-6">
                <h3 className="text-xl text-gray-900 mb-2 transition-colors duration-300">
                  {experts[1].name}
                </h3>
                <p className="text-gray-600 transition-colors duration-300">
                  {experts[1].role}
                </p>

                {/* Social Links - Hidden, shows on hover */}
                <div className="flex items-center gap-3 mt-4 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500">
                  <a
                    href="#"
                    className="w-9 h-9 rounded-lg bg-button-linear backdrop-blur-sm flex items-center justify-center lg:hover:bg-white/30 transition-all"
                  >
                    <Linkedin className="w-4 h-4 text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 rounded-lg bg-button-linear backdrop-blur-sm flex items-center justify-center lg:hover:bg-white/30 transition-all"
                  >
                    <Mail className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Join Team Card */}
            <div className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex items-center justify-center p-12">
              {/* Animated Background */}

              {/* Content */}
              <div className="relative z-10 text-center space-y-6">
                <div className="w-20 h-20 mx-auto rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                  <Users className="w-10 h-10 text-white" />
                </div>

                <div>
                  <h3 className="text-2xl text-white mb-3">Join Our Team</h3>
                  <p className="text-white/70 mb-6">
                    Be part of our innovative team of experts
                  </p>
                </div>

                <AnimatedButton
                  label="View Careers"
                  to="/"
                  className="px-6 py-3 rounded-full font-manrope font-medium text-sm bg-button-linear text-white"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
