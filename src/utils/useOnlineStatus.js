import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStaus] = useState(true);
  // check if online
  useEffect(() => {
    window.onoffline = () => {
      setOnlineStaus(false);
    };

    window.addEventListener("online", () => {
      setOnlineStaus(true);
    });
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
