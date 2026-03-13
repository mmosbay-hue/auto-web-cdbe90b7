import React from 'react';
import { Smartphone, Server, Database, BrainCircuit, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

const architectureLayers = [
  {
    icon: Smartphone,
    title: 'Frontend (App/Web)',
    description: 'Giao diện người dùng trực quan, cung cấp dashboard, báo cáo và biểu đồ tài chính.',
    tech: ['React', 'Next.js', 'Tailwind CSS'],
    color: 'text-sky-500',
    bgColor: 'bg-sky-50',
    borderColor: 'border-sky-200',
  },
  {
    icon: Server,
    title: 'Backend API',
    description: 'Xử lý logic nghiệp vụ, xác thực người dùng và cung cấp dữ liệu tài chính an toàn.',
    tech: ['Node.js', 'Python', 'FastAPI'],
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
  },
  {
    icon: Database,
    title: 'Database',
    description: 'Lưu trữ có cấu trúc các dữ liệu quan trọng như giao dịch, ngân sách, dòng tiền.',
    tech: ['PostgreSQL', 'MongoDB'],
    color: 'text-amber-500',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
  },
  {
    icon: BrainCircuit,
    title: 'AI Engine',
    description: 'Bộ não của hệ thống, thực hiện phân tích, dự báo và đưa ra các khuyến nghị thông minh.',
    tech: ['Python', 'TensorFlow', 'PyTorch'],
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-200',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

export default function Architecture() {
  return (
    <section id="architecture" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Kiến trúc Hệ thống
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-lg leading-8 text-slate-600">
            Mô hình 4 lớp mạnh mẽ, linh hoạt và bảo mật, được thiết kế để xử lý dữ liệu tài chính phức tạp và cung cấp thông tin chi tiết theo thời gian thực.
          </motion.p>
        </div>

        <motion.div 
          className="mt-16 flex flex-col items-center space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {architectureLayers.map((layer, index) => (
            <React.Fragment key={layer.title}>
              <motion.div 
                className={`w-full max-w-2xl p-6 border ${layer.borderColor} ${layer.bgColor} rounded-xl shadow-lg flex items-start space-x-6`}
                variants={itemVariants}
              >
                <div className={`flex-shrink-0 w-12 h-12 ${layer.color} ${layer.bgColor} border-2 ${layer.borderColor} rounded-full flex items-center justify-center`}>
                  <layer.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className={`text-xl font-semibold ${layer.color}`}>{layer.title}</h3>
                  <p className="mt-1 text-slate-600">{layer.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {layer.tech.map((t) => (
                      <span key={t} className="text-xs font-medium bg-slate-200 text-slate-700 px-2 py-1 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
              
              {index < architectureLayers.length - 1 && (
                <motion.div variants={itemVariants}>
                  <ArrowDown className="w-8 h-8 text-slate-300 my-2" />
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
