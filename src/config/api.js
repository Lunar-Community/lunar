// API Configuration
export const API_CONFIG = {
  // Change this to your actual API endpoint
  // Using your computer's IP address for mobile access
  BASE_URL: 'http://172.20.10.4:3000',
  
  // API endpoints
  ENDPOINTS: {
    STATS: '/api/stats',
    HEALTH: '/api/health'
  },
  
  // Request configuration
  REQUEST_CONFIG: {
    TIMEOUT: 10000, // 10 seconds
    RETRY_ATTEMPTS: 3,
    RETRY_DELAY: 1000 // 1 second
  },
  
  // Auto-refresh configuration
  REFRESH_CONFIG: {
    INTERVAL: 30000, // 30 seconds
    ENABLED: false // Disabled - stats refresh only on page load
  }
};

// Helper function to get full API URL
export const getApiUrl = (endpoint) => {
  return `${API_CONFIG.BASE_URL}${endpoint}`;
};

// Helper function to get stats endpoint
export const getStatsUrl = () => {
  return getApiUrl(API_CONFIG.ENDPOINTS.STATS);
};

// Helper function to get health endpoint
export const getHealthUrl = () => {
  return getApiUrl(API_CONFIG.ENDPOINTS.HEALTH);
};
