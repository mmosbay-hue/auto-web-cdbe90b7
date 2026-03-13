import React from 'react';
import { DollarSign, BarChart2, TrendingUp, ShieldCheck, Bell, BrainCircuit } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: DollarSign,
    title: 'Quản lý Dòng tiền',
    description: 'Theo dõi và phân tích dòng tiền vào-ra theo thời gian thực, giúp doanh nghiệp luôn chủ động về tài chính.',
  },
  {
    icon: BarChart2,
    title: 'Phân tích Chi phí – Lợi nhuận',
    description: 'AI tự động phân tích cơ cấu chi phí, xác định các khoản lãng phí và đề xuất phương án tối ưu hóa lợi nhuận.',
  },
  {
    icon: TrendingUp,
    title: 'Dự báo Tài chính',
    description: 'Sử dụng mô hình học máy để dự báo doanh thu, chi phí và dòng tiền trong tương lai với độ chính xác cao.',
  },
  {
    icon: ShieldCheck,
    title: 'Kiểm soát Ngân sách',
    description: 'Thiết lập và theo dõi ngân sách cho từng phòng ban, dự án. Nhận cảnh báo khi có nguy cơ vượt ngân sách.',
  },
  {
    icon: Bell,
    title: 'Cảnh báo Rủi ro',
    description: 'Hệ thống tự động phát hiện các dấu hiệu bất thường và rủi ro tài chính tiềm ẩn để bạn có thể hành động kịp thời.',
  },
  {
    icon: BrainCircuit,
    title: 'Hỗ trợ Ra quyết định',
    description: 'Cung cấp các báo cáo phân tích sâu sắc và khuyến nghị thông minh, giúp CEO và ban lãnh đạo đưa ra quyết định chiến lược.',
  },
];

export default function Features() {
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  return (
    <div id="features" className="bg-white py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Mục tiêu hệ thống</h2>
          <p className="mt-2 text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
            Nền tảng quản trị tài chính thông minh
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-600">
            CFO AI được xây dựng để giải quyết các bài toán tài chính cốt lõi, giúp doanh nghiệp phát triển bền vững.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div 
                key={feature.title}
                className="flex flex-col items-start p-6 bg-slate-50 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.5 }}
                variants={cardVariants}
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                </div>
                <div className="mt-5">
                  <h3 className="text-lg leading-6 font-medium text-slate-900">{feature.title}</h3>
                  <p className="mt-2 text-base text-slate-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}