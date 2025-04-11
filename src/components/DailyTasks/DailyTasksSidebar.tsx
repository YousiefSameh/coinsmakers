import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaCheckCircle, FaCoins, FaGift } from 'react-icons/fa';
import { MdTimer } from 'react-icons/md';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import {
  closeSidebar,
  completeTask,
  Task,
} from '@store/dailyTasks/dailyTasksSlice';

const DailyTasksSidebar: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isOpen, tasks } = useAppSelector((state) => state.dailytasks);
  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  const handleClose = () => {
    dispatch(closeSidebar());
  };

  const handleClaimReward = (taskId: number) => {
    dispatch(completeTask(taskId));
  };

  const sidebarVariants = {
    hidden: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  const taskVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  };

  const progressBarVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={handleClose}
          />

          {/* Sidebar */}
          <motion.div
            className="fixed top-0 right-0 h-full w-full md:w-[400px] bg-[#1E2130] z-50 shadow-2xl flex flex-col"
            variants={sidebarVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700/50">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-secondary-color/20 rounded-lg">
                  <FaGift className="w-6 h-6 text-secondary-color" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Daily Tasks</h2>
                  <p className="text-sm text-gray-400">
                    Complete tasks to earn rewards
                  </p>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="p-2 hover:bg-gray-700/50 rounded-full transition-colors"
              >
                <FaTimes className="w-5 h-5" />
              </button>
            </div>

            {/* Tasks List */}
            <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700/50 scrollbar-track-transparent p-6 space-y-4">
              {tasks.map((task: Task, index: number) => (
                <motion.div
                  key={task.id}
                  custom={index}
                  variants={taskVariants}
                  initial="hidden"
                  animate="visible"
                  className="bg-[#272B3A] rounded-xl p-4 hover:bg-[#2A2D3E] transition-colors border border-gray-700/30"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-white flex items-center gap-2">
                        {task.title}
                        {task.isCompleted && (
                          <FaCheckCircle className="text-green-400 text-sm" />
                        )}
                      </h3>
                      <p className="text-gray-400 text-sm mt-1">
                        {task.description}
                      </p>

                      {/* Progress Bar (if applicable) */}
                      {task.requiredProgress && (
                        <div className="mt-3 space-y-1">
                          <div className="flex justify-between text-xs text-gray-400">
                            <span>Progress</span>
                            <span>
                              {task.progress || 0}/{task.requiredProgress}
                            </span>
                          </div>
                          <div className="h-1.5 bg-gray-700/50 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-secondary-color origin-left"
                              variants={progressBarVariants}
                              initial="hidden"
                              animate="visible"
                              style={{
                                scaleX:
                                  (task.progress || 0) / task.requiredProgress,
                              }}
                            />
                          </div>
                        </div>
                      )}

                      {task.timeLeft && (
                        <div className="flex items-center gap-1 text-yellow-400/90 text-sm mt-2">
                          <MdTimer className="animate-pulse" />
                          <span>{task.timeLeft}</span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-secondary-color bg-secondary-color/10 px-3 py-1 rounded-full">
                      <span className="font-bold">{task.reward}</span>
                      <FaCoins className="text-yellow-500 w-4 h-4" />
                    </div>
                  </div>
                  <div className="mt-3">
                    <button
                      onClick={() => handleClaimReward(task.id)}
                      className={`w-full py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                        task.isCompleted
                          ? "bg-green-500/20 text-green-400 cursor-not-allowed"
                          : "bg-secondary-color/20 text-secondary-color hover:bg-secondary-color/30 active:scale-95"
                      }`}
                      disabled={task.isCompleted}
                    >
                      {task.isCompleted ? "Completed" : "Claim Reward"}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Progress Footer */}
            <div className="p-6 bg-[#1E2130] border-t border-gray-700/50">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">Daily Progress</span>
                <span className="text-sm text-secondary-color font-medium">
                  {completedTasks}/{tasks.length} Complete
                </span>
              </div>
              <div className="h-2 bg-gray-700/30 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-secondary-color"
                  initial={{ width: 0 }}
                  animate={{
                    width: `${(completedTasks / tasks.length) * 100}%`,
                  }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default DailyTasksSidebar;
