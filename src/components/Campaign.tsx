import React from 'react';

export function Campaign() {
  return (
    <div className="bg-blue-50 p-6 rounded-lg mb-8">
      <h3 className="text-xl font-bold text-blue-900 mb-4">期間限定特別キャンペーン</h3>
      <div className="flex items-center justify-center bg-white rounded-lg p-6 mb-4">
        <div className="text-center">
          <p className="text-lg text-gray-700 mb-2">更新のご契約で</p>
          <p className="text-4xl font-bold text-blue-800 mb-2">8,000円分</p>
          <p className="text-xl text-gray-700">ギフト券プレゼント！</p>
        </div>
      </div>
    </div>
  );
}