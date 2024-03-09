const generateCourtArray = (maxCourts) => {
    const courtStatuses = [];
    const statuses = ['unavailable', 'available']; // ENUM-like array
    
    for (let id = 0; id <= maxCourts-1; id++) {
      const status = statuses[1]; // default starting courtArray to AVAILABLE #TODO: this data should be from API
  
      courtStatuses.push({
        id: id, // 0 indexed
        status: status
      });
    }
    
    return courtStatuses;
  };
  
  export default generateCourtArray;