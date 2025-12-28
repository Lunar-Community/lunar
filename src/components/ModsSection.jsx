// Boxicons will be loaded via CDN in index.html

export const ModsSection = () => {
  const moderators = [
    {
      name: "ルシエル",
      role: "Moderator 1",
      avatar: "./ルシエル.jpg",
      whatsapp: "https://wa.me/918999230502",
      instagram: "https://www.instagram.com/rushei1",
      github: "https://github.com/rushei1"
    },
    {
      name: "Hoshino?",
      role: "Moderator 2", 
      avatar: "./Hoshino.jpg",
      whatsapp: "https://wa.me/917059804980"
    }
  ];

  return (
    <section id="mods" className="py-24 px-4 relative bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Mods</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {moderators.map((moderator, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0">
                  <img 
                    src={moderator.avatar} 
                    alt={moderator.name}
                    className="w-16 h-16 object-cover rounded-full"
                    onError={(e) => {
                      e.target.src = "/lunar-logo.png";
                    }}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white">
                    {moderator.name}
                  </h3>
                </div>
              </div>
              
               <div className="flex items-center justify-center gap-4">
                 <a
                   href={moderator.whatsapp}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-white hover:text-green-400 transition-colors duration-300"
                   title="WhatsApp"
                 >
                   <i className="bx bxl-whatsapp text-xl"></i>
                 </a>
                 {moderator.instagram && (
                   <a
                     href={moderator.instagram}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-white hover:text-pink-400 transition-colors duration-300"
                     title="Instagram"
                   >
                     <i className="bx bxl-instagram text-xl"></i>
                   </a>
                 )}
                 {moderator.github && (
                   <a
                     href={moderator.github}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-white hover:text-gray-400 transition-colors duration-300"
                     title="GitHub"
                   >
                     <i className="bx bxl-github text-xl"></i>
                   </a>
                 )}
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
