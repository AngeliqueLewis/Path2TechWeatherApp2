// src/utils/timeUtils.js
export const getCurrentTime = () => {
    const date = new Date();
    let hours = date.getHours();
    const minutes = ("0" + date.getMinutes()).slice(-2);
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    return `${("0" + hours).slice(-2)}:${minutes}${ampm}`;
  };
  
  