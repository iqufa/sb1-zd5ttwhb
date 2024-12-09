import React from 'react';

export function Features() {
  return (
    <div className="bg-gray-50 p-6 rounded-lg mb-8">
      <h3 className="text-xl font-bold text-gray-800 mb-4">エコめがねの特長</h3>
      <ul className="space-y-3">
        <li className="flex items-start">
          <span className="text-blue-600 mr-2">■</span>
          <span className="text-gray-700">24時間365日の安定した監視体制</span>
        </li>
        <li className="flex items-start">
          <span className="text-blue-600 mr-2">■</span>
          <span className="text-gray-700">リアルタイムでの発電状況確認</span>
        </li>
        <li className="flex items-start">
          <span className="text-blue-600 mr-2">■</span>
          <span className="text-gray-700">異常時の即時通知システム</span>
        </li>
      </ul>
    </div>
  );
}