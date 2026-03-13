import React from 'react';
import { motion } from 'framer-motion';
import { Activity, PieChart, LineChart, Target, AlertTriangle, Lightbulb } from 'lucide-react';

const goals = [
  {
    icon: Activity,
    title: 'Quản lý Dòng tiền Doanh nghiệp',
    description: 'Giám sát và tối ưu hóa dòng tiền ra vào, đảm bảo sức khỏe tài chính cho doanh nghiệp.',
  },
  {
    icon: PieChart,
    title: 'Phân tích Chi phí – Lợi nhuận',
    description: 'Tự động phân tích cơ cấu chi phí, xác định các điểm nóng và đề xuất giải pháp tăng lợi nhuận.',
  },
  {
    icon: LineChart,
    title: 'Dự báo Tài chính',
    description: 'Sử dụng AI để dự báo xu hướng doanh thu, chi phí và dòng tiền trong tương lai gần và xa.',
  },
  {
    icon: Target,
    title: 'Kiểm soát Ngân sách',
    description: 'Thiết lập và theo dõi ngân sách cho từng phòng ban, đảm bảo chi tiêu luôn trong tầm kiểm soát.',
  },
  {
    icon: AlertTriangle,
    title: 'Cảnh báo Rủi ro Tài chính',
    description: 'Hệ thống chủ động phát hiện các dấu hiệu bất thường và cảnh báo sớm các rủi ro tài chính tiềm ẩn.',
  },
  {
    icon: Lightbulb,
    title: 'Hỗ trợ CEO Ra quyết định',
    description: 'Cung cấp các báo cáo và khuyến nghị thông minh, giúp CEO và ban lãnh đạo đưa ra quyết định chiến lược.',
  },
];

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export default function Goals() {
  return (
    <section id="goals" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Mục tiêu hệ thống</h2>
          <p className="mt-2 text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
            CFO AI được xây dựng để làm gì?
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-500">
            Trợ lý tài chính ảo của bạn, giúp doanh nghiệp phát triển bền vững và hiệu quả.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {goals.map((goal, index) => (
            <motion.div
              key={goal.title}
              className="p-6 bg-slate-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-start"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <goal.icon className="h-6 w-6" aria-hidden="true" />
                </div>
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-medium text-slate-900">{goal.title}</h3>
                <p className="mt-2 text-base text-slate-500">{goal.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
