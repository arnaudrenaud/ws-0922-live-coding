type NotificationActionPrompt = {
  action: "GetWilders";
};

export async function sendPushNotification(
  expoPushToken: string,
  title: string,
  body: string,
  data: NotificationActionPrompt
) {
  const message = {
    to: expoPushToken,
    sound: "default",
    title,
    body,
    data,
  };

  await fetch("https://exp.host/--/api/v2/push/send", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Accept-encoding": "gzip, deflate",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  });
}
