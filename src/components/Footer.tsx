import React from 'react';

export function Footer() {
  return (
    <div className="bg-gray-800 text-white py-6 px-8 text-center">
      <p className="text-sm">
        キャンペーン期間: 2024年1月1日 〜 2024年3月31日
      </p>
      <div className="text-sm mt-2">
        <p>NTTスマイルエナジー</p>
        <p className="mt-1">お問い合わせ:</p>
        <p>TEL: 06-6221-1234</p>
        <p>Email: support@nttse.com</p>
      </div>
    </div>
  );
}