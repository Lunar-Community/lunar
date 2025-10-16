import { Moon, Gamepad2, Zap, Users, Coins, Shield } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            🌙 About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Lunar</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50 mb-8">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Lunar is a vibrant WhatsApp community powered by interactive bots — your gateway to fun, games, and endless excitement!
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Dive into our anime card game, where you can collect, buy, sell, and trade stunning anime-themed cards using our in-game currency, Moonstones.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Or begin your Pokémon adventure, catching, collecting, trading, and battling with a wide range of Pokémon — all within WhatsApp!
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Join Lunar today and experience the perfect fusion of community, creativity, and entertainment. 🚀✨
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl p-6 border border-blue-500/30 text-center">
              <Gamepad2 className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Anime Card Game</h3>
              <p className="text-gray-400">Collect, trade, and battle with stunning anime-themed cards</p>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-xl p-6 border border-yellow-500/30 text-center">
              <Coins className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Moonstones</h3>
              <p className="text-gray-400">In-game currency for trading and purchasing cards</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl p-6 border border-green-500/30 text-center">
              <Zap className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Pokémon Adventure</h3>
              <p className="text-gray-400">Catch, collect, and battle with Pokémon in WhatsApp</p>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl p-6 border border-gray-600/30 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-yellow-400" />
              <h3 className="text-lg font-bold text-white">Disclaimer</h3>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              The cards utilized in this game are sourced from shoob.gg. All rights, including intellectual property rights, belong to its respective creator. Our usage of these cards is purely for entertainment purposes, and we do not claim any ownership or authorship over them. The inclusion of these cards enhances the gameplay experience. Should there be any concerns regarding copyright infringement or attributions, please feel free to contact the rightful owners.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
