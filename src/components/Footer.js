import React from 'react';
import { Bot } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    'Giải pháp': [
      { name: 'Quản lý dòng tiền', href: '#' },
      { name: 'Dự báo tài chính', href: '#' },
      { name: 'Phân tích chi phí', href: '#' },
    ],
    'Công ty': [
      { name: 'Về chúng tôi', href: '#' },
      { name: 'Tuyển dụng', href: '#' },
      { name: 'Báo chí', href: '#' },
    ],
    'Pháp lý': [
      { name: 'Điều khoản dịch vụ', href: '#' },
      { name: 'Chính sách bảo mật', href: '#' },
    ],
  };

  return (
    <footer className="bg-slate-100 border-t border-slate-200" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center gap-2">
                <Bot className="h-8 w-8 text-indigo-600" />
                <span className="text-xl font-bold text-slate-900">CFO AI</span>
            </div>
            <p className="text-slate-600 text-base">
              Nền tảng quản trị tài chính thông minh cho doanh nghiệp hiện đại.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-slate-500 tracking-wider uppercase">Giải pháp</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {footerLinks['Giải pháp'].map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-slate-600 hover:text-indigo-600">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-slate-500 tracking-wider uppercase">Công ty</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {footerLinks['Công ty'].map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-slate-600 hover:text-indigo-600">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-slate-500 tracking-wider uppercase">Pháp lý</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {footerLinks['Pháp lý'].map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-slate-600 hover:text-indigo-600">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-300 pt-8">
          <p className="text-base text-slate-500 xl:text-center">&copy; {new Date().getFullYear()} CFO AI. Mọi quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
}