import React from 'react';
import { LineChart, PieChart, AlertTriangle, Lightbulb, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const aiModules = [
  {
    icon: LineChart,
    title: 'Dự đoán Dòng tiền',
    description: 'Sử dụng dữ liệu lịch sử và các yếu tố thị trường để dự báo dòng tiền trong tương lai, giúp doanh nghiệp chủ động lập kế hoạch.',
    examples: ['Dự báo dòng tiền 7 ngày tới', 'Mô phỏng kịch bản doanh thu', 'Dự báo 90 ngày'],
    color: 'text-sky-500',
    bgColor: 'bg-sky-50',
  },
  {
    icon: PieChart,
    title: 'Phân tích Chi phí',
    description: 'AI tự động phân loại và phân tích sâu vào từng khoản chi, xác định các khu vực có thể cắt giảm để tối ưu hóa lợi nhuận.',
    examples: ['Phân tích chi phí marketing', 'So sánh chi phí theo phòng ban', 'Xác định chi phí bất thường'],
    color: 'text-amber-500',
    bgColor: 'bg-amber-50',
  },
  {
    icon: AlertTriangle,
    title: 'Phát hiện Rủi ro',
    description: 'Hệ thống liên tục quét dữ liệu để phát hiện các dấu hiệu bất thường có thể dẫn đến rủi ro tài chính và cảnh báo kịp thời.',
    examples: ['Cảnh báo chi tiêu vượt ngân sách', 'Phát hiện doanh thu giảm đột ngột', 'Cảnh báo nguy cơ dòng tiền âm'],
    color: 'text-red-500',
    bgColor: 'bg-red-50',
  },
  {
    icon: Lightbulb,
    title: 'Công cụ Khuyến nghị',
    description: 'Dựa trên phân tích toàn diện, AI đưa ra các gợi ý hành động cụ thể và khả thi để cải thiện tình hình tài chính.',
    examples: ['Đề xuất giảm chi phí quảng cáo', 'Gợi ý tối ưu hóa tồn kho', 'Khuyến nghị điều chỉnh giá bán'],
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-50',
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function AiAnalysis() {
  return (
    <section id="ai-analysis" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-base font-semibold leading-7 text-indigo-600">
            Bước 5: Xây dựng AI Phân tích Tài chính
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Bộ não Thông minh của CFO AI
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-slate-600">
            Các module AI cốt lõi giúp biến dữ liệu tài chính thô thành những hiểu biết sâu sắc, dự báo chính xác và các khuyến nghị hành động chiến lược.
          </motion.p>
        </div>

        <motion.div 
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {aiModules.map((module) => (
            <motion.div 
              key={module.title}
              className="rounded-xl shadow-lg overflow-hidden bg-white border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              variants={itemVariants}
            >
              <div className="p-8">
                <div className="flex items-center">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${module.bgColor}`}>
                    <module.icon className={`w-6 h-6 ${module.color}`} />
                  </div>
                  <h3 className={`ml-4 text-xl font-semibold text-slate-800`}>{module.title}</h3>
                </div>
                <p className="mt-4 text-slate-600 md:h-20">{module.description}</p>
                <ul className="mt-6 space-y-3">
                  {module.examples.map((example) => (
                    <li key={example} className="flex items-start">
                      <CheckCircle className="flex-shrink-0 w-5 h-5 text-emerald-500 mt-0.5" />
                      <span className="ml-3 text-slate-700">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
