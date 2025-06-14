interface messageNotification {
  readonly id: number;
  senderName: string;
  typeofNotification: "Message";
  content: string;
}
interface alertNotification {
  readonly id: number;
  senderName: string;
  typeofNotification: "Alert";
  content: string;
}
interface taskNotification {
  readonly id: number;
  senderName: string;
  typeofNotification: "Task";
  content: string;
}
interface orderNotification {
  readonly id: number;
  senderName: string;
  typeofNotification: "Order";
  content: string;
}

type UserNotification =
  | messageNotification
  | alertNotification
  | taskNotification
  | orderNotification;

type NotificationWithPriority = UserNotification & { priority: string };

function attachPriority(
  notification: UserNotification
): NotificationWithPriority {
  switch (notification.typeofNotification) {
    case "Message":
      return { ...notification, priority: "low" };
    case "Task":
      return { ...notification, priority: "medium" };
    case "Alert":
      return { ...notification, priority: "high" };
    case "Order":
      return { ...notification, priority: "very high" };
    default://exhaustive checking
      const shouldNeverUse: never = notification;
      throw new Error(`Unhandled notification type: ${shouldNeverUse}`);
  }
}

// Example usage
const orderOne: orderNotification = {
  senderName: "nik",
  id: 1,
  content: "whatsapp",
  typeofNotification: "Order",
};

const prioritizedOrder = attachPriority(orderOne);
console.log(prioritizedOrder);
