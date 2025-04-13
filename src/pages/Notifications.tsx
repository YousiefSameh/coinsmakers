import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCoins,
  FaGift,
  FaUserFriends,
  FaTrash,
  FaCheck,
  FaSearch,
  FaEllipsisV,
  FaShoppingBag,
  FaExclamationCircle,
} from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { MdPending } from "react-icons/md";
import { BsCheckCircleFill } from "react-icons/bs";
import { useAppDispatch } from "@store/hooks";
import { openSidebar as openDailyTasks } from "@store/dailyTasks/dailyTasksSlice";
import { useNavigate } from "react-router-dom";

interface Notification {
  id: string;
  type:
    | "reward"
    | "friend"
    | "system"
    | "offer_pending"
    | "offer_completed"
    | "offer_rejected";
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  details?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  offerDetails?: {
    platform: string;
    reward: number;
    status: "pending" | "completed" | "rejected";
    reason?: string;
  };
}

const Notifications = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [filter, setFilter] = useState<"all" | "unread" | "read">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<
    Notification["type"] | "all"
  >("all");
  const [expandedNotification, setExpandedNotification] = useState<
    string | null
  >(null);

  // Mock notifications - in real app, this would come from Redux store
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "4",
      type: "offer_completed",
      title: "Offer Completed Successfully!",
      message: "Your Alibaba.com offer has been verified",
      timestamp: new Date(),
      read: false,
      details:
        "Congratulations! Your participation in the Alibaba.com offer has been verified and approved. Your coins have been credited to your account.",
      offerDetails: {
        platform: "Alibaba.com",
        reward: 500,
        status: "completed",
      },
      action: {
        label: "View Earnings",
        onClick: () => console.log("Viewing earnings..."),
      },
    },
    {
      id: "5",
      type: "offer_pending",
      title: "Offer Under Review",
      message: "Your Alibaba.com registration is being verified",
      timestamp: new Date(Date.now() - 1800000),
      read: false,
      details:
        "We are currently verifying your participation in the Alibaba.com offer. This usually takes 24-48 hours.",
      offerDetails: {
        platform: "Alibaba.com",
        reward: 500,
        status: "pending",
      },
    },
    {
      id: "6",
      type: "offer_rejected",
      title: "Offer Not Approved",
      message: "Your Amazon offer was not verified",
      timestamp: new Date(Date.now() - 5400000),
      read: false,
      details:
        "Unfortunately, we could not verify your participation in the Amazon offer. Please ensure you follow all offer requirements and try again.",
      offerDetails: {
        platform: "Amazon",
        reward: 300,
        status: "rejected",
        reason: "Account creation could not be verified",
      },
      action: {
        label: "Try Again",
        onClick: () => console.log("Retrying offer..."),
      },
    },
    {
      id: "1",
      type: "reward",
      title: "Daily Reward!",
      message: "You earned 100 coins from daily tasks",
      timestamp: new Date(),
      read: false,
      details:
        "Complete your daily tasks to earn more coins. Keep up the great work!",
      action: {
        label: "See Reward",
        onClick: () => dispatch(openDailyTasks()),
      },
    },
    {
      id: "2",
      type: "friend",
      title: "New Friend Request",
      message: "John Doe wants to be your friend",
      timestamp: new Date(Date.now() - 3600000),
      read: true,
      details:
        "Adding friends helps you earn more coins through referrals and joint activities.",
      action: {
        label: "Accept Request",
        onClick: () => console.log("Accepting friend request..."),
      },
    },
    {
      id: "3",
      type: "system",
      title: "New Offers Available",
      message: "Check out new high-paying offers",
      timestamp: new Date(Date.now() - 7200000),
      read: false,
      details:
        "We have added new high-paying offers from trusted partners. Complete them to earn big rewards!",
      action: {
        label: "View Offers",
        onClick: () => navigate("/dashboard/earn"),
      },
    },
  ]);

  const getIcon = (type: Notification["type"]) => {
    switch (type) {
      case "reward":
        return <FaCoins className="text-yellow-500" />;
      case "friend":
        return <FaUserFriends className="text-blue-500" />;
      case "system":
        return <FaGift className="text-purple-500" />;
      case "offer_pending":
        return <MdPending className="text-orange-500" />;
      case "offer_completed":
        return <BsCheckCircleFill className="text-success" />;
      case "offer_rejected":
        return <FaExclamationCircle className="text-error" />;
    }
  };

  const getStatusBadge = (status: "pending" | "completed" | "rejected") => {
    switch (status) {
      case "pending":
        return (
          <span className="badge badge-warning gap-1">
            <MdPending /> Pending
          </span>
        );
      case "completed":
        return (
          <span className="badge badge-success gap-1">
            <BsCheckCircleFill /> Completed
          </span>
        );
      case "rejected":
        return (
          <span className="badge badge-error gap-1">
            <FaExclamationCircle /> Rejected
          </span>
        );
    }
  };

  const formatTime = (date: Date) => {
    const hours = Math.floor((Date.now() - date.getTime()) / 3600000);
    if (hours < 1) return "Just now";
    if (hours === 1) return "1 hour ago";
    if (hours < 24) return `${hours} hours ago`;
    return `${Math.floor(hours / 24)} days ago`;
  };

  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((notification) => ({ ...notification, read: true }))
    );
  };

  const clearAll = () => {
    setNotifications([]);
  };

  const toggleNotificationExpansion = (id: string) => {
    setExpandedNotification(expandedNotification === id ? null : id);
  };

  const markAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const deleteNotification = (id: string) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id)
    );
  };

  const filteredNotifications = notifications
    .filter((notification) => {
      if (filter === "unread") return !notification.read;
      if (filter === "read") return notification.read;
      return true;
    })
    .filter((notification) => {
      if (selectedType !== "all") return notification.type === selectedType;
      return true;
    })
    .filter(
      (notification) =>
        notification.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        notification.message.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <div className="p-6 md:p-0">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <IoNotifications className="text-3xl text-secondary-color" />
          <h1 className="text-2xl font-bold">Notifications</h1>
          <span className="badge bg-secondary-color">
            {notifications.filter((n) => !n.read).length} New
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={markAllAsRead}
            className="btn btn-sm btn-outline hover:bg-secondary-color hover:text-white text-secondary-color border-secondary-color gap-2"
          >
            <FaCheck className="text-sm" /> Mark all read
          </button>
          <button
            onClick={clearAll}
            className="btn btn-sm btn-error btn-outline gap-2"
          >
            <FaTrash className="text-sm" /> Clear all
          </button>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/50" />
          <input
            type="text"
            placeholder="Search notifications..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input input-bordered w-full pl-10"
          />
        </div>
        <select
          value={filter}
          onChange={(e) =>
            setFilter(e.target.value as "all" | "unread" | "read")
          }
          className="select select-bordered w-full"
        >
          <option value="all">All Notifications</option>
          <option value="unread">Unread</option>
          <option value="read">Read</option>
        </select>
        <select
          value={selectedType}
          onChange={(e) =>
            setSelectedType(e.target.value as Notification["type"] | "all")
          }
          className="select select-bordered w-full"
        >
          <option value="all">All Types</option>
          <option value="reward">Rewards</option>
          <option value="friend">Friends</option>
          <option value="system">System</option>
          <option value="offer_pending">Offer Pending</option>
          <option value="offer_completed">Offer Completed</option>
          <option value="offer_rejected">Offer Rejected</option>
        </select>
      </div>

      {/* Notifications List */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-4"
      >
        {filteredNotifications.length === 0 ? (
          <div className="text-center py-12 bg-base-200 rounded-lg">
            <IoNotifications className="text-4xl mx-auto mb-2 opacity-50" />
            <p className="text-lg opacity-70">No notifications found</p>
          </div>
        ) : (
          filteredNotifications.map((notification) => (
            <motion.div
              key={notification.id}
              variants={item}
              className={`bg-base-200 rounded-lg p-4 ${
                !notification.read ? "ring-2 ring-secondary-color/30" : ""
              }`}
            >
              <div className="flex gap-4">
                <div className="mt-1 text-xl">{getIcon(notification.type)}</div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-bold text-lg">
                          {notification.title}
                        </h3>
                        {notification.offerDetails &&
                          getStatusBadge(notification.offerDetails.status)}
                      </div>
                      <p className="opacity-70">{notification.message}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className="text-sm opacity-50 whitespace-nowrap">
                        {formatTime(notification.timestamp)}
                      </span>
                      <div className="dropdown dropdown-end">
                        <label
                          tabIndex={0}
                          className="btn btn-ghost btn-xs btn-circle"
                        >
                          <FaEllipsisV />
                        </label>
                        <ul
                          tabIndex={0}
                          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                        >
                          {!notification.read && (
                            <li>
                              <button
                                onClick={() => markAsRead(notification.id)}
                              >
                                <FaCheck /> Mark as read
                              </button>
                            </li>
                          )}
                          <li>
                            <button
                              onClick={() =>
                                deleteNotification(notification.id)
                              }
                              className="text-error"
                            >
                              <FaTrash /> Delete
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <AnimatePresence>
                    {(expandedNotification === notification.id ||
                      !notification.read) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="mt-3 space-y-3"
                      >
                        {notification.details && (
                          <p className="text-sm opacity-70 p-3 bg-base-300 rounded-lg">
                            {notification.details}
                          </p>
                        )}
                        {notification.offerDetails && (
                          <div className="bg-base-300 p-3 rounded-lg">
                            <div className="flex items-center gap-2 mb-2">
                              <FaShoppingBag className="text-secondary-color" />
                              <span className="font-semibold">
                                {notification.offerDetails.platform}
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-3 text-sm">
                              <div className="flex items-center gap-1">
                                <FaCoins className="text-yellow-500" />
                                <span>
                                  {notification.offerDetails.reward} coins
                                </span>
                              </div>
                              {notification.offerDetails.reason && (
                                <p className="w-full mt-2 text-error">
                                  Reason: {notification.offerDetails.reason}
                                </p>
                              )}
                            </div>
                          </div>
                        )}
                        {notification.action && (
                          <button
                            onClick={notification.action.onClick}
                            className="btn btn-secondary btn-sm"
                          >
                            {notification.action.label}
                          </button>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                  {(notification.details || notification.offerDetails) &&
                    expandedNotification !== notification.id &&
                    notification.read && (
                      <button
                        onClick={() =>
                          toggleNotificationExpansion(notification.id)
                        }
                        className="text-secondary-color text-sm mt-2 hover:underline"
                      >
                        Show more
                      </button>
                    )}
                </div>
              </div>
            </motion.div>
          ))
        )}
      </motion.div>
    </div>
  );
};

export default Notifications;
