import { NotificationManager } from "react-notifications";

export const createNotification = (type: string) => {
  switch (type) {
    case "info":
      NotificationManager.info("Info message");
      break;
    case "success":
      NotificationManager.success("Message sent successfully", "");
      break;
    case "warning":
      NotificationManager.warning("Warning");
      break;
    case "error":
      NotificationManager.error(
        "Something went wrong, please try again later",
        ""
      );
      break;
  }
};
