import { schema } from 'normalizr';
import notificationsData from '../../../../notifications.json'

export function getAllNotificationsByUser(userId) {
  const userNotifications = notificationsData.filter(notification => notification.author.id === userId);
  const contexts = userNotifications.map(notification => notification.context);
  return contexts;
}

const user = new schema.Entity('users');

const message = new schema.Entity('messages', {}, {
  idAttribute: 'guid'
});

export const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});
