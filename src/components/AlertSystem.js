import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Bell, Mail, Send, Smartphone, ArrowRight } from 'lucide-react';

const alertRules = [
  {
    condition: "IF cashflow < 0",
    action: "THEN send alert"
  },
  {
    condition: "IF expense > budget",
    action: "THEN notify CFO"
  },
  {
    condition: "IF revenue drops > 20%",
    action: "THEN trigger risk analysis"
  }
];

const notificationChannels = [
  { icon: Smartphone, name: 'App' },
  { icon: Mail, name: 'Email' },
  { icon: Send, name: 'Telegram' },
  { icon: Send, name: 'Zalo' }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

export default function AlertSystem() {
  return (
    <div id="alerts" className="py-16 sm:py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Bước 7: Cảnh báo</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl gradient-text">
            Hệ thống Cảnh báo Tự động
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Nhận thông báo ngay lập tức khi có biến động tài chính bất thường, giúp bạn phản ứng kịp thời và giảm thiểu rủi ro.
          </p>
        </motion.div>

        <div className="mt-12 lg:mt-20 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-bold text-slate-800 mb-6">Quy tắc cảnh báo thông minh</motion.h3>
            <div className="space-y-4">
              {alertRules.map((rule, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white p-4 rounded-lg shadow-md border border-slate-200 flex items-center space-x-4"
                  variants={itemVariants}
                >
                  <div className="flex-shrink-0 bg-indigo-100 text-indigo-600 rounded-full p-2">
                    <Bell size={20} />
                  </div>
                  <div className="font-mono text-sm">
                    <span className="text-blue-600">{rule.condition}</span>
                    <span className="text-slate-400"> </span>
                    <span className="text-purple-600">{rule.action}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.h3 variants={itemVariants} className="text-2xl font-bold text-slate-800 mt-10 mb-6">Đa kênh thông báo</motion.h3>
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              {notificationChannels.map((channel, index) => (
                <div key={index} className="flex items-center bg-white py-2 px-4 rounded-full shadow-md border border-slate-200">
                  <channel.icon className="w-5 h-5 text-indigo-500 mr-2" />
                  <span className="text-slate-700 font-medium">{channel.name}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white rounded-xl shadow-xl p-6 border border-slate-200 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-red-100 text-red-600 rounded-full p-3">
                  <AlertTriangle size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-800">Cảnh báo Dòng tiền Âm</h4>
                  <p className="text-slate-600 mt-1">Dự báo dòng tiền sẽ âm <strong className="text-red-600">-150.000.000 VNĐ</strong> trong <strong>14 ngày</strong> tới.</p>
                  <div className="mt-4 flex space-x-2 sm:space-x-4 text-sm">
                    <button className="bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors flex items-center">Xem chi tiết <ArrowRight className='w-4 h-4 ml-1' /></button>
                    <button className="bg-slate-100 text-slate-700 font-semibold py-2 px-4 rounded-lg hover:bg-slate-200 transition-colors">Đã đọc</button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-xl p-6 border border-slate-200 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-amber-100 text-amber-600 rounded-full p-3">
                  <AlertTriangle size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-800">Cảnh báo Vượt Ngân sách</h4>
                  <p className="text-slate-600 mt-1">Chi phí Marketing đã <strong className="text-amber-600">vượt 18%</strong> so với ngân sách tháng.</p>
                   <div className="mt-4 flex space-x-2 sm:space-x-4 text-sm">
                    <button className="bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors flex items-center">Xem phân tích <ArrowRight className='w-4 h-4 ml-1' /></button>
                    <button className="bg-slate-100 text-slate-700 font-semibold py-2 px-4 rounded-lg hover:bg-slate-200 transition-colors">Đã đọc</button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
