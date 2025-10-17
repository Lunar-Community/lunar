import { useState, useEffect } from 'react';
import { getStatsUrl, API_CONFIG } from '../config/api';

export const useStats = () => {
  const [stats, setStats] = useState({
    totalUsers: 'TBD',
    totalGroups: 'TBD',
    totalWallet: 'TBD',
    totalBank: 'TBD',
    totalTokens: 'TBD',
    totalMoonstones: 'TBD',
    totalBots: 'TBD',
    moderatorCount: 'TBD',
    averagePerPlayer: 'TBD',
    lastUpdated: null,
    loading: true,
    error: null
  });

  const fetchStats = async () => {
    try {
      setStats(prev => ({ ...prev, loading: true, error: null }));
      
      // Use configured API endpoint
      const response = await fetch(getStatsUrl(), {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        // Add timeout
        signal: AbortSignal.timeout(API_CONFIG.REQUEST_CONFIG.TIMEOUT)
      });
      
      if (!response.ok) {
        throw new Error(`Failed to fetch stats: ${response.status} ${response.statusText}`);
      }
      
      const data = await response.json();
      
      setStats({
        totalUsers: data.totalUsers || 'TBD',
        totalGroups: data.totalGroups || 'TBD',
        totalWallet: data.totalWallet || 'TBD',
        totalBank: data.totalBank || 'TBD',
        totalTokens: data.totalTokens || 'TBD',
        totalMoonstones: data.totalMoonstones || 'TBD',
        totalBots: data.totalBots || 'TBD',
        moderatorCount: data.moderatorCount || 'TBD',
        averagePerPlayer: data.averagePerPlayer || 'TBD',
        lastUpdated: data.lastUpdated || null,
        loading: false,
        error: null
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
      setStats(prev => ({
        ...prev,
        loading: false,
        error: error.message
      }));
    }
  };

  useEffect(() => {
    fetchStats(); // Fetch immediately on mount
  }, []);

  return { stats, refetch: fetchStats };
};
