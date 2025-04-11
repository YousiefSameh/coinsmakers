import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCoins, FaGift, FaUserFriends, FaTrash, FaCheck, FaTimes, FaArrowRight } from 'react-icons/fa';
import { IoNotifications } from 'react-icons/io5';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { toggleNotifications } from '@store/notifications/notificationsSlice';
import { useNavigate } from 'react-router-dom';

interface Notification {
  id: string;
  type: 'reward' | 'friend' | 'system';
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  details?: string;
}

const NotificationSidebar: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isOpen } = useAppSelector((state) => state.notifications);

  // Mock notifications - in real app, this would come from Redux store
  const notifications: Notification[] = [
    {
      id: '1',
      type: 'reward',
      title: 'Daily Reward!',
      message: 'You earned 100 coins from daily tasks',
      timestamp: new Date(),
      read: false,
      details: 'Complete your daily tasks to earn more coins. Keep up the great work!',
    },
    {
      id: '2',
      type: 'friend',
      title: 'New Friend Request',
      message: 'John Doe wants to be your friend',
      timestamp: new Date(Date.now() - 3600000),
      read: true,
      details: 'Adding friends helps you earn more coins through referrals and joint activities.',
    },
    {
      id: '3',
      type: 'system',
      title: 'New Offers Available',
      message: 'Check out new high-paying offers',
      timestamp: new Date(Date.now() - 7200000),
      read: false,
      details: 'We have added new high-paying offers from trusted partners. Complete them to earn big rewards!',
    },
  ];

  const getIcon = (type: Notification['type']) => {
    switch (type) {
      case 'reward':
        return <FaCoins className="text-yellow-500" />;
      case 'friend':
        return <FaUserFriends className="text-blue-500" />;
      case 'system':
        return <FaGift className="text-purple-500" />;
    }
  };

  const formatTime = (date: Date) => {
    const hours = Math.floor((Date.now() - date.getTime()) / 3600000);
    if (hours < 1) return 'Just now';
    if (hours === 1) return '1 hour ago';
    if (hours < 24) return `${hours} hours ago`;
    return `${Math.floor(hours / 24)} days ago`;
  };

  const handleReadMore = () => {
    dispatch(toggleNotifications()); // Close sidebar
    navigate('/notifications'); // Navigate to notifications page
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ type: 'spring', damping: 25 }}
          className="fixed top-0 right-0 w-full md:w-[400px] bg-base-200 shadow-xl z-[60] h-screen flex flex-col"
        >
          {/* Header */}
          <div className="bg-base-300 p-4 shrink-0">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <IoNotifications className="text-2xl text-secondary-color" />
                <div>
                  <h3 className="font-bold text-lg">Notifications</h3>
                  <p className="text-sm opacity-70">
                    {notifications.filter(n => !n.read).length} unread notifications
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => dispatch(toggleNotifications())}
                  className="btn btn-ghost btn-sm btn-circle"
                >
                  <FaTimes className="text-lg" />
                </button>
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <button className="btn btn-sm btn-outline hover:bg-secondary-color hover:text-white text-secondary-color border-secondary-color gap-2 flex-1">
                <FaCheck className="text-sm" /> Mark all read
              </button>
              <button className="btn btn-sm btn-error btn-outline gap-2 flex-1">
                <FaTrash className="text-sm" /> Clear all
              </button>
            </div>
          </div>

          {/* Notifications List */}
          <div className="flex-1 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="text-center py-12">
                <IoNotifications className="text-4xl mx-auto mb-2 opacity-50" />
                <p className="text-lg opacity-70">No notifications</p>
              </div>
            ) : (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
                className="flex flex-col h-full"
              >
                <div className="flex-1">
                  {notifications.map((notification) => (
                    <motion.div
                      key={notification.id}
                      variants={{
                        hidden: { x: 20, opacity: 0 },
                        visible: { x: 0, opacity: 1 }
                      }}
                      className={`p-4 border-b border-base-300 hover:bg-base-300/50 cursor-pointer transition-colors ${
                        !notification.read ? 'bg-base-300/30' : ''
                      }`}
                    >
                      <div className="flex gap-3">
                        <div className="mt-1 text-xl">{getIcon(notification.type)}</div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="font-semibold">{notification.title}</h4>
                            {!notification.read && (
                              <div className="w-2 h-2 rounded-full bg-secondary-color mt-2 shrink-0" />
                            )}
                          </div>
                          <p className="text-sm opacity-70 mt-1">{notification.message}</p>
                          <p className="text-xs opacity-50 mt-1">{formatTime(notification.timestamp)}</p>
                          {notification.details && (
                            <p className="text-xs mt-2 p-2 bg-base-300 rounded-lg">
                              {notification.details}
                            </p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <button
                  onClick={handleReadMore}
                  className="sticky bottom-0 w-full p-4 bg-base-300 hover:bg-base-300/80 transition-colors text-secondary-color font-semibold flex items-center justify-center gap-2"
                >
                  Read More <FaArrowRight className="text-sm" />
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NotificationSidebar;
