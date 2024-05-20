const BASE_URL = "http://localhost:1337";

const endpoints = {
  getAllAmeenOfficeTasks: `${BASE_URL}/api/AmeenOfficeTasks/all-AmeenOfficeTasks`,
  getAllCommittees: `${BASE_URL}/api/Committee/all-Committee`,
  getAllInitiatives: `${BASE_URL}/api/Initiatives/all-initiatives`,
  getAllMediaMonitoring: `${BASE_URL}/api/MediaMonitoring/all-media-monitoring`,
  getAllNews: `${BASE_URL}/api/News/all-news`,
  getAllSocialMedia: `${BASE_URL}/api/SocialMedia/all-socialMedia`,
  getAllTasks: `${BASE_URL}/api/Tasks/all-tasks`,
  getAllVisual: `${BASE_URL}/api/Visual/all-visual`,
};

export default endpoints;
