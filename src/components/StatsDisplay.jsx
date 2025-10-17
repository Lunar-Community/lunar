import { useStats } from '../hooks/useStats';

export const StatsDisplay = ({ showExtended = false }) => {
  const { stats } = useStats();

  const formatNumber = (num) => {
    if (num === 'TBD' || num === null || num === undefined) return num;
    if (typeof num === 'number') {
      return num.toLocaleString();
    }
    return num;
  };

  const formatCurrency = (num) => {
    if (num === 'TBD' || num === null || num === undefined) return num;
    if (typeof num === 'number') {
      return num.toLocaleString();
    }
    return num;
  };

  if (stats.loading) {
    return (
      <div className="flex gap-16">
        <div className="text-center">
          <div className="text-white text-sm mb-1">Total Users:</div>
          <div className="text-white text-2xl font-bold">
            <div className="animate-pulse">Loading...</div>
          </div>
        </div>
        <div className="text-center">
          <div className="text-white text-sm mb-1">Total Groups:</div>
          <div className="text-white text-2xl font-bold">
            <div className="animate-pulse">Loading...</div>
          </div>
        </div>
      </div>
    );
  }

  if (stats.error) {
    return (
      <div className="flex gap-16">
        <div className="text-center">
          <div className="text-white text-sm mb-1">Total Users:</div>
          <div className="text-white text-2xl font-bold">
            <span className="text-red-400">Error</span>
          </div>
        </div>
        <div className="text-center">
          <div className="text-white text-sm mb-1">Total Groups:</div>
          <div className="text-white text-2xl font-bold">
            <span className="text-red-400">Error</span>
          </div>
        </div>
      </div>
    );
  }

  if (showExtended) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="text-center">
          <div className="text-white text-sm mb-1">Total Users:</div>
          <div className="text-white text-2xl font-bold">{formatNumber(stats.totalUsers)}</div>
        </div>
        <div className="text-center">
          <div className="text-white text-sm mb-1">Total Groups:</div>
          <div className="text-white text-2xl font-bold">{formatNumber(stats.totalGroups)}</div>
        </div>
        <div className="text-center">
          <div className="text-white text-sm mb-1">Total Moonstones:</div>
          <div className="text-white text-2xl font-bold">{formatCurrency(stats.totalMoonstones)}</div>
        </div>
        <div className="text-center">
          <div className="text-white text-sm mb-1">Active Players:</div>
          <div className="text-white text-2xl font-bold">{formatNumber(stats.playerCount)}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-16">
      <div className="text-center">
        <div className="text-white text-sm mb-1">Total Users:</div>
        <div className="text-white text-2xl font-bold">{formatNumber(stats.totalUsers)}</div>
      </div>
      <div className="text-center">
        <div className="text-white text-sm mb-1">Total Groups:</div>
        <div className="text-white text-2xl font-bold">{formatNumber(stats.totalGroups)}</div>
      </div>
    </div>
  );
};
