function Profile() {
  return (
    <div className="text-center mb-12">
      <img 
        src="/assets/pfp.jpeg" 
        alt="Dominic Hubble" 
        className="w-32 h-32 rounded-full mx-auto mb-6 shadow-xl border-4 border-white object-cover"
      />
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Dominic Hubble</h1>
      <p className="text-lg text-gray-600 mb-6 italic">
        Student of Computer Science at Loughborough University, UK
      </p>
      
      {/* Social Links */}
      <div className="flex justify-center space-x-6 mb-8">
        <a 
          href="https://github.com/dominichubble" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-slate-700 text-white px-6 py-3 rounded-lg hover:bg-slate-600 transition-colors duration-300 font-medium w-30"
        >
          GitHub
        </a>
        <a 
          href="https://www.linkedin.com/in/dominichubble" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition-colors duration-300 font-medium w-30"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export default Profile;
