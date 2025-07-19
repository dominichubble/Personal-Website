function ContentCards() {
  const skills = ['React', 'TypeScript', 'JavaScript', 'Python', 'Machine Learning', 'AI'];

  return (
    <div className="grid md:grid-cols-2 gap-8 mb-12">
      {/* Areas of Interest */}
      <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Areas of Interest</h3>
        <p className="text-gray-600 leading-relaxed">
          Software Development, Leadership, Problem Solving, Project Management, Deep Learning 
        </p>
      </div>

      {/* Skills & Qualifications */}
      <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Skills & Education</h3>
        
        <div className="mb-6">
          <h4 className="font-semibold text-gray-700 mb-2">Qualifications:</h4>
          <p className="text-gray-600">BSc in Computer Science (In Progress)</p>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-700 mb-2">Technical Skills:</h4>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span 
                key={skill}
                className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-600 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentCards;
