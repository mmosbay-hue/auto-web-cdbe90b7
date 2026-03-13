import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDownRight, DollarSign, Wallet, BarChart3, PieChart, AlertTriangle, Lightbulb, TrendingUp, Users } from 'lucide-react';

const kpiData = [
  {
    icon: TrendingUp,
    title: 'Doanh thu',
    value: '1.2 tỷ',
    change: '+12.5%',
    changeType: 'increase',
  },
  {
    icon: DollarSign,
    title: 'Chi phí',
    value: '780 triệu',
    change: '+8.2%',
    changeType: 'increase_bad',
  },
  {
    icon: PieChart,
    title: 'Lợi nhuận',
    value: '420 triệu',
    change: '+18.1%',
    changeType: 'increase',
  },
  {
    icon: Wallet,
    title: 'Dòng tiền',
    value: '250 triệu',
    change: '-5.7%',
    changeType: 'decrease',
  },
];

const cashflowData = [
  { month: 'T1', income: 100, expense: 70 },
  { month: 'T2', income: 120, expense: 80 },
  { month: 'T3', income: 150, expense: 90 },
  { month: 'T4', income: 130, expense: 85 },
  { month: 'T5', income: 160, expense: 100 },
  { month: 'T6', income: 180, expense: 110 },
];

const budgetData = [
  {
    category: 'Marketing',
    spent: 120,
    limit: 150,
    icon: BarChart3,
    color: 'bg-blue-500',
  },
  {
    category: 'Nhân sự',
    spent: 250,
    limit: 300,
    icon: Users,
    color: 'bg-green-500',
  },
  {
    category: 'Vận hành',
    spent: 95,
    limit: 100,
    icon: DollarSign,
    color: 'bg-amber-500',
  },
];

const insightsData = [
  {
    icon: AlertTriangle,
    text: 'Công ty sẽ thiếu tiền sau 45 ngày nếu không tăng doanh thu.',
    type: 'warning',
  },
  {
    icon: Lightbulb,
    text: 'Chi phí quảng cáo Facebook tăng 32% nhưng doanh thu chỉ tăng 8%.',
    type: 'recommendation',
  },
  {
    icon: AlertTriangle,
    text: 'Chi phí marketing đang vượt ngân sách 18%.',
    type: 'warning',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
};

const Card = ({ children, className = '' }) => (
  <motion.div
    variants={itemVariants}
    className={`bg-white p-6 rounded-xl shadow-lg border border-slate-100 ${className}`}
  >
    {children}
  </motion.div>
);

export default function Dashboard() {
  return (
    <section id="dashboard" className="py-20 sm:py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Dashboard <span className="gradient-text">CFO AI</span> Thông Minh
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600 max-w-2xl mx-auto">
            Tổng quan tài chính trực quan, giúp bạn nắm bắt sức khỏe doanh nghiệp trong nháy mắt.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Main content - Left side */}
          <div className="lg:col-span-2 flex flex-col gap-6 lg:gap-8">
            {/* KPI Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {kpiData.map((item, index) => (
                <Card key={index}>
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-slate-500">{item.title}</h3>
                    <item.icon className="h-5 w-5 text-slate-400" />
                  </div>
                  <p className="mt-2 text-2xl font-semibold text-slate-900">{item.value}</p>
                  <div className={`mt-1 flex items-center text-xs font-medium ${item.changeType === 'increase' ? 'text-green-600' : item.changeType === 'decrease' ? 'text-red-600' : 'text-amber-600'}`}>
                    {item.changeType.startsWith('increase') ? <ArrowUpRight className="h-4 w-4 mr-1" /> : <ArrowDownRight className="h-4 w-4 mr-1" />}
                    {item.change}
                  </div>
                </Card>
              ))}
            </div>

            {/* Cashflow Chart */}
            <Card>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Biểu đồ Dòng tiền (6 tháng)</h3>
              <div className="h-64 flex items-end justify-around gap-2">
                {cashflowData.map((data, index) => {
                  const maxVal = Math.max(...cashflowData.map(d => d.income));
                  const incomeHeight = (data.income / maxVal) * 100;
                  const expenseHeight = (data.expense / maxVal) * 100;
                  return (
                    <div key={index} className="flex flex-col items-center w-full">
                      <div className="flex items-end h-full w-full gap-1 justify-center">
                        <motion.div 
                          initial={{ height: 0 }}
                          whileInView={{ height: `${incomeHeight}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: index * 0.1, ease: 'easeOut' }}
                          className="w-1/2 bg-indigo-500 rounded-t-md"
                          title={`Thu: ${data.income}`}
                        ></motion.div>
                        <motion.div 
                          initial={{ height: 0 }}
                          whileInView={{ height: `${expenseHeight}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: index * 0.1 + 0.1, ease: 'easeOut' }}
                          className="w-1/2 bg-sky-300 rounded-t-md"
                          title={`Chi: ${data.expense}`}
                        ></motion.div>
                      </div>
                      <span className="text-xs text-slate-500 mt-2">{data.month}</span>
                    </div>
                  );
                })}
              </div>
               <div className="flex justify-center items-center gap-6 mt-4 text-sm">
                  <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm bg-indigo-500"></div><span>Dòng tiền vào</span></div>
                  <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm bg-sky-300"></div><span>Dòng tiền ra</span></div>
                </div>
            </Card>
          </div>

          {/* Right sidebar */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {/* Budget Tracking */}
            <Card>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Theo dõi Ngân sách</h3>
              <div className="space-y-4">
                {budgetData.map((budget, index) => {
                  const percentage = (budget.spent / budget.limit) * 100;
                  return (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-1">
                        <div className="flex items-center gap-2">
                          <budget.icon className="h-4 w-4 text-slate-500" />
                          <span className="text-sm font-medium text-slate-700">{budget.category}</span>
                        </div>
                        <span className="text-sm text-slate-500">{budget.spent} / {budget.limit} triệu</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2.5">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.2, ease: 'easeOut' }}
                          className={`${budget.color} h-2.5 rounded-full`}
                        ></motion.div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>

            {/* AI Insights */}
            <Card>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">AI Insights</h3>
              <ul className="space-y-3">
                {insightsData.map((insight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className={`mt-1 flex-shrink-0 h-5 w-5 rounded-full flex items-center justify-center ${insight.type === 'warning' ? 'bg-amber-100 text-amber-600' : 'bg-sky-100 text-sky-600'}`}>
                      <insight.icon className="h-3.5 w-3.5" />
                    </div>
                    <p className="text-sm text-slate-600">{insight.text}</p>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
