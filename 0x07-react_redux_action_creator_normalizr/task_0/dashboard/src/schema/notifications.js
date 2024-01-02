import notificationsData from '../../../../notifications.json'

export default function getAllNotificationsByUser(userId) {
  const userNotifications = notificationsData.filter(notification => notification.author.id === userId);
  console.log(userNotifications);
  const contexts = userNotifications.map(notification => notification.context);
  return contexts;
}
