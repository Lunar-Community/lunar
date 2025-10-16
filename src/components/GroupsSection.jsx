import { MessageCircle, Users, Gamepad2, DollarSign, Gavel, Activity } from "lucide-react";

export const GroupsSection = () => {
  const groups = [
    {
      name: "『Lunar Community』",
      link: "https://chat.whatsapp.com/Ksujx5ahO9r4yzFJKdWclc",
      icon: Users,
      description: "Main community hub for all Lunar activities",
      color: "from-blue-500/20 to-purple-500/20",
      borderColor: "border-blue-500/30",
      thumbnail: "./community.jpg"
    },
    {
      name: "『Lunar: Mainland』",
      link: "https://chat.whatsapp.com/LIun4EE4AYkLgi3isJ7CZc",
      icon: Users,
      description: "Main community hub for all Lunar activities",
      color: "from-blue-500/20 to-purple-500/20",
      borderColor: "border-blue-500/30",
      thumbnail: "./mainland.jpg"
    },
    {
      name: "『Lunar: Casino I』",
      link: "https://chat.whatsapp.com/D0nze6dlAV4ImDPuF1R79K",
      icon: DollarSign,
      description: "First casino group for gaming and betting",
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30",
      thumbnail: "./casino.jpg"
    },
    {
      name: "『Lunar: Casino II』",
      link: "https://chat.whatsapp.com/Iqdz0gxKrQ6A8tp8LAvA2U",
      icon: DollarSign,
      description: "Second casino group for more gaming action",
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30",
      thumbnail: "./casino.jpg"
    },
    {
      name: "『Lunar: Games I』",
      link: "https://chat.whatsapp.com/CPvXFU21Er9ExnDsguhbw5",
      icon: Gamepad2,
      description: "First gaming group for card games and battles",
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30",
      thumbnail: "./games.jpg"
    },
    {
      name: "『Lunar: Games II』",
      link: "https://chat.whatsapp.com/EPjOptM1X3lHxNHsuweMpe",
      icon: Gamepad2,
      description: "Second gaming group for more card battles",
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30",
      thumbnail: "./games.jpg"
    },
    {
      name: "『Lunar: Status』",
      link: "https://chat.whatsapp.com/H5f9GF2tn8r4SKXUrw9tlG",
      icon: Activity,
      description: "Status updates and announcements",
      color: "from-red-500/20 to-pink-500/20",
      borderColor: "border-red-500/30",
      thumbnail: "./status.jpg"
    },
    {
      name: "『Lunar: Auction』",
      link: "https://chat.whatsapp.com/KrCfeQp24ZB0zlinqws7mM",
      icon: Gavel,
      description: "Auction house for trading and selling cards",
      color: "from-yellow-500/20 to-orange-500/20",
      borderColor: "border-yellow-500/30",
      thumbnail: "./auction.jpg"
    },
    {
      name: "『Lunar: Giveaways』",
      link: "https://chat.whatsapp.com/IwduJKi344eLm7QPpnZu0U",
      icon: Users,
      description: "Exclusive giveaways and special events",
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30",
      thumbnail: "./giveaways.jpg"
    }
  ];

  return (
    <section id="groups" className="py-24 px-4 relative bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            🌙 Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Groups</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join our vibrant WhatsApp community and dive into the world of Lunar gaming!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {groups.map((group, index) => {
            const IconComponent = group.icon;
            return (
              <a
                key={index}
                href={group.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-3 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10 flex items-center gap-3"
              >
                <div className="flex-shrink-0">
                  <img 
                    src={group.thumbnail} 
                    alt={group.name}
                    className="w-14 h-14 object-cover rounded-full group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      console.log('Image failed to load:', group.thumbnail);
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors duration-300 whitespace-nowrap">
                    {group.name}
                  </h3>
                </div>
                
                <div className="flex-shrink-0">
                  <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 text-sm">
                    Join
                  </button>
                </div>
              </a>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            Ready to join the Lunar community?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://chat.whatsapp.com/Ksujx5ahO9r4yzFJKdWclc"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Users className="w-5 h-5" />
                Join Main Group
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
