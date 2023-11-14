import notificationsData from '../../../../notifications.json'

export default function getAllNotificationsByUser(userId) {
  // const userNotifications = [];
  
  // for (const notification of notificationsData) {
  //   if (notification.author.id === userId) {
  //     userNotifications.push(notification.context);
  //   }
  // };
  
  // console.log(userNotifications);
  // return userNotifications;
  const userNotifications = notificationsData.filter(notification => notification.author.id === userId);
  const contexts = userNotifications.map(notification => notification.context);
  return contexts;
}

