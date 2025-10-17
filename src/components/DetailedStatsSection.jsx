import { useStats } from '../hooks/useStats';
import { Coins, Users, Gamepad2, TrendingUp, Clock } from 'lucide-react';

export const DetailedStatsSection = () => {
  const { stats } = useStats();

  const formatNumber = (num) => {
    if (num === 'TBD' || num === null || num === undefined) return 'TBD';
    if (typeof num === 'number') {
      return num.toLocaleString();
    }
    return num;
  };

  const formatCurrency = (num) => {
    if (num === 'TBD' || num === null || num === undefined) return 'TBD';
    if (typeof num === 'number') {
      return num.toLocaleString();
    }
    return num;
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'TBD';
    try {
      return new Date(dateString).toLocaleString();
    } catch {
      return 'TBD';
    }
  };

  const formatTime = (dateString) => {
    if (!dateString) return 'TBD';
    try {
      const date = new Date(dateString);
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } catch {
      return 'TBD';
    }
  };

  const formatDateOnly = (dateString) => {
    if (!dateString) return 'TBD';
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString();
    } catch {
      return 'TBD';
    }
  };

  if (stats.loading) {
    return (
      <section className="py-24 px-4 relative bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Live <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Statistics</span>
            </h2>
            <div className="animate-pulse text-gray-400">Loading community statistics...</div>
          </div>
        </div>
      </section>
    );
  }

  if (stats.error) {
    return (
      <section className="py-24 px-4 relative bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Live <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Statistics</span>
            </h2>
            <div className="text-red-400">Unable to load statistics. Please try again later.</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="detailed-stats" className="py-24 px-4 relative bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Live <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Statistics</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real-time community statistics powered by Lunar Bot API
          </p>
        </div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl p-6 border border-blue-500/30 text-center">
            <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Total Users</h3>
            <p className="text-3xl font-bold text-blue-400">{formatNumber(stats.totalUsers)}</p>
          </div>

          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl p-6 border border-green-500/30 text-center">
            <Gamepad2 className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Total Groups</h3>
            <p className="text-3xl font-bold text-green-400">{formatNumber(stats.totalGroups)}</p>
          </div>

          <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-xl p-6 border border-yellow-500/30 text-center">
            <Coins className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Total Moonstones</h3>
            <p className="text-3xl font-bold text-yellow-400">{formatCurrency(stats.totalMoonstones)}</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-purple-500/30 text-center">
            <TrendingUp className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Active Bots</h3>
            <p className="text-3xl font-bold text-purple-400">{formatNumber(stats.totalBots)}</p>
          </div>
        </div>

        {/* Last Updated */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-4 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl p-6 border border-gray-600/30 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Clock className="w-8 h-8 text-gray-400" />
              <h3 className="text-lg font-bold text-white">Last Updated</h3>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold text-gray-300">Time: {formatTime(stats.lastUpdated)}</p>
              <p className="text-lg font-bold text-gray-300">Date: {formatDateOnly(stats.lastUpdated)}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
