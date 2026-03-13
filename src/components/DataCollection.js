import React from 'react';
import { motion } from 'framer-motion';
import { ReceiptText, Landmark, BookUser, ShoppingCart, Users, Building2, Banknote, Calculator, CreditCard, DatabaseZap } from 'lucide-react';

const dataSources = [
  {
    icon: ReceiptText,
    title: 'Hóa đơn',
    description: 'Tự động trích xuất dữ liệu từ hóa đơn điện tử và hóa đơn giấy.',
  },
  {
    icon: Landmark,
    title: 'Sao kê ngân hàng',
    description: 'Kết nối trực tiếp với tài khoản ngân hàng để đồng bộ giao dịch.',
  },
  {
    icon: BookUser,
    title: 'Phần mềm kế toán',
    description: 'Tích hợp với các phần mềm kế toán phổ biến như MISA, FAST.',
  },
  {
    icon: ShoppingCart,
    title: 'POS bán hàng',
    description: 'Lấy dữ liệu doanh thu trực tiếp từ hệ thống quản lý bán hàng.',
  },
  {
    icon: Users,
    title: 'CRM',
    description: 'Đồng bộ dữ liệu khách hàng và hợp đồng từ hệ thống CRM.',
  },
  {
    icon: Building2,
    title: 'ERP',
    description: 'Kết nối với hệ thống ERP để có cái nhìn toàn diện về nguồn lực.',
  },
];

const apiIntegrations = [
    {
        icon: Banknote,
        title: 'Bank API',
        description: 'Tự động hóa việc lấy sao kê và thực hiện giao dịch an toàn.',
    },
    {
        icon: Calculator,
        title: 'Accounting API',
        description: 'Đồng bộ hai chiều với các hệ thống kế toán hàng đầu.',
    },
    {
        icon: CreditCard,
        title: 'Payment Gateway',
        description: 'Tích hợp cổng thanh toán để theo dõi doanh thu real-time.',
    },
];

const SourceCard = ({ icon: Icon, title, description, index }) => (
  <motion.div
    className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 flex flex-col items-center text-center h-full"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
  >
    <div className="bg-indigo-100 p-3 rounded-full mb-4">
      <Icon className="w-8 h-8 text-indigo-600" />
    </div>
    <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
    <p className="text-sm text-slate-600 flex-grow">{description}</p>
  </motion.div>
);

export default function DataCollection() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wider uppercase">Bước 4: Thu thập dữ liệu</h2>
          <p className="mt-2 text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
            Tích hợp dữ liệu tài chính từ mọi nguồn
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-600">
            CFO AI kết nối liền mạch với các hệ thống bạn đang sử dụng, tổng hợp dữ liệu để cung cấp một bức tranh tài chính toàn cảnh.
          </p>
        </div>

        <div className="mt-16 relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-dashed border-slate-300"></div>
            </div>
            <div className="relative flex justify-center">
                <span className="bg-white px-4 text-lg font-medium text-slate-700">Nguồn dữ liệu</span>
            </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {dataSources.map((source, index) => (
            <SourceCard key={source.title} {...source} index={index} />
          ))}
        </div>

        <div className="mt-20 relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-dashed border-slate-300"></div>
            </div>
            <div className="relative flex justify-center">
                <span className="bg-white px-4 text-lg font-medium text-slate-700">Tích hợp qua API</span>
            </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {apiIntegrations.map((api, index) => (
            <SourceCard key={api.title} {...api} index={index + dataSources.length} />
          ))}
        </div>
        
        <motion.div 
          className="mt-20 flex flex-col items-center text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
            <DatabaseZap className="w-16 h-16 text-indigo-600 mb-4" />
            <h3 className="text-2xl font-bold text-slate-900">Hợp nhất tại một nơi duy nhất</h3>
            <p className="mt-2 max-w-xl text-lg text-slate-600">
                Tất cả dữ liệu được làm sạch, chuẩn hóa và lưu trữ an toàn, sẵn sàng cho các mô hình AI phân tích và đưa ra dự báo chính xác.
            </p>
        </motion.div>

      </div>
    </div>
  );
}
