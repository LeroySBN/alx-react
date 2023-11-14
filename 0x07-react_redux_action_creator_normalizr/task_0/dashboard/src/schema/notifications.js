import * as notificationsData from '../../../../notifications.json'

console.log(notificationsData);
export default function getAllNotificationsByUser(userId) {
  const userNotifications = notificationsData.filter(notification => notification.author.id === userId);
  const contexts = userNotifications.map(notification => notification.context);
  return contexts;
}

