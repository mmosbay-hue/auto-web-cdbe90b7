import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, FileText, TrendingUp, Send, CheckCircle2 } from 'lucide-react';

const automationFeatures = [
  {
    icon: ClipboardList,
    title: 'Phân loại Chi phí Tự động',
    description: 'AI thông minh tự động đọc và phân loại các giao dịch từ sao kê ngân hàng, hóa đơn, giúp tiết kiệm hàng giờ làm việc thủ công.',
  },
  {
    icon: FileText,
    title: 'Tạo Báo cáo Tài chính',
    description: 'Hệ thống tự động tổng hợp dữ liệu và tạo ra các báo cáo tài chính (P&L, Cash Flow) định kỳ theo tuần, tháng, hoặc quý.',
  },
  {
    icon: TrendingUp,
    title: 'Dự báo Doanh thu Liên tục',
    description: 'Mô hình AI liên tục cập nhật và dự báo xu hướng doanh thu, giúp ban lãnh đạo có cái nhìn chính xác về tương lai.',
  },
  {
    icon: Send,
    title: 'Gửi Báo cáo cho CEO',
    description: 'Thiết lập lịch gửi báo cáo tự động đến email của CEO và các bên liên quan, đảm bảo thông tin luôn được cập nhật kịp thời.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

export default function Automation() {
  return (
    <section id="automation" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-base font-semibold tracking-wider text-indigo-600 uppercase">
            Bước 8: Tự động hóa
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Tự động hóa Quy trình Tài chính
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Giải phóng đội ngũ của bạn khỏi các công việc lặp đi lặp lại. CFO AI tự động hóa các quy trình tài chính cốt lõi để bạn tập trung vào chiến lược.
          </motion.p>
        </div>

        <motion.div 
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {automationFeatures.map((feature) => (
            <motion.div 
              key={feature.title} 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-start border border-slate-100"
              variants={itemVariants}
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
              </div>
              <div className="mt-5">
                <h3 className="text-lg leading-6 font-medium text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-base text-gray-500">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-12 bg-indigo-50 p-8 rounded-xl border border-indigo-200"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <CheckCircle2 className="h-6 w-6 text-indigo-600" aria-hidden="true" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-indigo-900">Ví dụ về một quy trình tự động:</h3>
              <div className="mt-2 text-sm text-indigo-700">
                <p className="font-mono bg-indigo-100 p-4 rounded-md">
                  <span className="font-bold text-indigo-800">Every Monday at 9:00 AM</span><br/>
                  <span className="pl-4">→ Generate financial report for last week</span><br/>
                  <span className="pl-4">→ Analyze key changes & anomalies</span><br/>
                  <span className="pl-4">→ Send summary to CEO & CFO via Email</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
