import React from 'react';
import { Campaign } from './Campaign';
import { Features } from './Features';
import { ContactForm } from './ContactForm';

export function MainContent() {
  return (
    <div className="bg-white p-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">日頃のご愛顧に感謝を込めて</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            平素は弊社の遠隔監視システム「エコめがね」をご利用いただき、誠にありがとうございます。
            おかげさまで、10年間という長きにわたりご利用いただいております。
          </p>
        </div>

        <Campaign />
        <Features />
        <ContactForm />
      </div>
    </div>
  );
}