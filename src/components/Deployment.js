import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Server, MonitorSmartphone, Database, BrainCircuit } from 'lucide-react';

const techStack = [
  {
    category: 'Hạ tầng Cloud',
    icon: Cloud,
    technologies: ['AWS', 'Google Cloud', 'Azure'],
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
  },
  {
    category: 'Backend',
    icon: Server,
    technologies: ['NodeJS', 'Python', 'Flask', 'FastAPI'],
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
  },
  {
    category: 'Frontend',
    icon: MonitorSmartphone,
    technologies: ['React', 'Next.js', 'Tailwind CSS'],
    color: 'text-sky-500',
    bgColor: 'bg-sky-50',
  },
  {
    category: 'Database',
    icon: Database,
    technologies: ['PostgreSQL', 'MongoDB'],
    color: 'text-green-500',
    bgColor: 'bg-green-50',
  },
  {
    category: 'AI & Machine Learning',
    icon: BrainCircuit,
    technologies: ['Python', 'TensorFlow', 'PyTorch'],
    color: 'text-rose-500',
    bgColor: 'bg-rose-50',
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

export default function Deployment() {
  return (
    <div className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Bước 10: Triển khai</h2>
          <p className="mt-2 text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
            Triển khai Hệ thống & Công nghệ
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-500">
            Lựa chọn hạ tầng và công nghệ hiện đại, linh hoạt để đảm bảo hệ thống hoạt động ổn định, an toàn và có khả năng mở rộng.
          </p>
        </div>

        <motion.div 
          className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {techStack.map((stack, index) => (
            <motion.div 
              key={index} 
              className="bg-slate-50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              variants={cardVariants}
            >
              <div className="p-8">
                <div className="flex items-center">
                  <div className={`flex-shrink-0 p-3 rounded-lg ${stack.bgColor}`}>
                    <stack.icon className={`h-8 w-8 ${stack.color}`} aria-hidden="true" />
                  </div>
                  <h3 className="ml-4 text-xl font-bold text-slate-900">{stack.category}</h3>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {stack.technologies.map((tech) => (
                    <span key={tech} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-slate-200 text-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
           <motion.div 
              className="bg-indigo-600 rounded-xl shadow-xl overflow-hidden md:col-span-2 lg:col-span-1 flex flex-col justify-center items-center text-center p-8"
              variants={cardVariants}
            >
                <h3 className="text-2xl font-bold text-white">Cấu trúc Hoàn chỉnh</h3>
                <p className="mt-2 text-indigo-200">
                    Một hệ sinh thái công nghệ mạnh mẽ, sẵn sàng cho việc phân tích và dự báo tài chính thông minh.
                </p>
                 <button className="mt-6 bg-white text-indigo-600 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-indigo-50 transition-colors duration-300">
                    Bắt đầu Xây dựng
                </button>
            </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
