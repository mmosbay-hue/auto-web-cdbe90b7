import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, KeyRound, Smartphone, FileText } from 'lucide-react';

const securityFeatures = [
  {
    icon: ShieldCheck,
    title: 'Mã hóa Dữ liệu Toàn diện',
    description: 'Tất cả dữ liệu tài chính, từ giao dịch đến báo cáo, đều được mã hóa bằng chuẩn AES-256 cả khi lưu trữ và truyền tải.',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    icon: KeyRound,
    title: 'Phân quyền Truy cập Chi tiết',
    description: 'Kiểm soát chặt chẽ ai có thể xem hoặc chỉnh sửa dữ liệu nào với hệ thống phân quyền linh hoạt theo vai trò (Role-Based Access Control).',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
  },
  {
    icon: Smartphone,
    title: 'Xác thực Hai yếu tố (2FA)',
    description: 'Thêm một lớp bảo vệ cho tài khoản của bạn, đảm bảo chỉ người dùng được ủy quyền mới có thể truy cập, ngay cả khi mật khẩu bị lộ.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: FileText,
    title: 'Nhật ký Truy cập và Giám sát',
    description: 'Hệ thống ghi lại mọi hoạt động truy cập và thay đổi dữ liệu, giúp dễ dàng truy vết và phát hiện các hành vi bất thường.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
];

const standards = ['AES-256', 'OAuth2', 'JWT', 'ISO 27001 Compliant'];

export default function Security() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section id="security" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Bảo mật cấp doanh nghiệp</h2>
          <p className="mt-2 text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
            Bảo Mật Dữ Liệu Tài Chính: Ưu Tiên Hàng Đầu
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-500">
            Chúng tôi hiểu rằng dữ liệu tài chính là tài sản nhạy cảm nhất. Hệ thống được xây dựng trên nền tảng bảo mật đa lớp để bảo vệ bạn.
          </p>
        </motion.div>

        <motion.div 
          className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {securityFeatures.map((feature, index) => (
            <motion.div key={index} className="flex flex-col" variants={itemVariants}>
              <div className="flex-shrink-0">
                <div className={`flex items-center justify-center h-12 w-12 rounded-lg ${feature.bgColor} ${feature.color}`}>
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
              </div>
              <div className="mt-5">
                <h3 className="text-lg leading-6 font-medium text-slate-900">{feature.title}</h3>
                <p className="mt-2 text-base text-slate-500">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-sm font-semibold text-slate-500 tracking-wider uppercase">Tuân thủ các chuẩn bảo mật hàng đầu</h3>
          <div className="mt-6 flex justify-center items-center gap-x-6 sm:gap-x-10">
            {standards.map((standard) => (
              <span key={standard} className="font-mono text-slate-600 font-medium">
                {standard}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
