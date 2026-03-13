import React from 'react';
import { Users, ArrowRightLeft, Target, LineChart, BrainCircuit, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const dataModels = [
  {
    icon: Users,
    title: 'Users',
    description: 'Quản lý người dùng, vai trò và quyền truy cập vào hệ thống.',
    fields: ['id', 'name', 'role', 'company_id'],
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
  },
  {
    icon: ArrowRightLeft,
    title: 'Transactions',
    description: 'Ghi lại mọi giao dịch thu-chi của doanh nghiệp.',
    fields: ['id', 'amount', 'type (income/expense)', 'category', 'date', 'note'],
    color: 'text-green-500',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
  },
  {
    icon: Target,
    title: 'Budgets',
    description: 'Thiết lập và theo dõi ngân sách cho từng hạng mục chi tiêu.',
    fields: ['id', 'category', 'limit_amount', 'period'],
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200',
  },
  {
    icon: LineChart,
    title: 'Cashflow',
    description: 'Tổng hợp dòng tiền vào-ra để theo dõi sức khỏe tài chính.',
    fields: ['date', 'income', 'expense', 'balance'],
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
  },
  {
    icon: BrainCircuit,
    title: 'Forecast',
    description: 'Lưu trữ các dự báo tài chính do AI tạo ra.',
    fields: ['date', 'predicted_income', 'predicted_expense', 'risk_level'],
    color: 'text-rose-500',
    bgColor: 'bg-rose-50',
    borderColor: 'border-rose-200',
  },
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
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

export default function DataModel() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Bước 3: Thiết kế Dữ liệu</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Mô hình Dữ liệu Tài chính
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Nền tảng của một CFO AI thông minh là một cấu trúc dữ liệu vững chắc, cho phép AI phân tích và đưa ra dự báo chính xác.
          </p>
        </div>
        <motion.div
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {dataModels.map((model, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`p-6 border ${model.borderColor} ${model.bgColor} rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg bg-white border ${model.borderColor}`}>
                  <model.icon className={`h-8 w-8 ${model.color}`} aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-900">{model.title}</h3>
                  <p className="text-sm text-slate-500 mt-1">{model.description}</p>
                </div>
              </div>
              <ul className="mt-6 space-y-3">
                {model.fields.map((field) => (
                  <li key={field} className="flex items-center gap-3">
                    <CheckCircle2 className={`h-5 w-5 ${model.color} flex-shrink-0`} />
                    <span className="text-slate-700 font-mono text-sm bg-slate-100 px-2 py-1 rounded-md">{field}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
