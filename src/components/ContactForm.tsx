import React from 'react';
import { useForm } from 'react-hook-form';
import { submitForm } from '../utils/formSubmission';

type FormData = {
  name: string;
  phone: string;
  email: string;
  productId: string;
};

export function ContactForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      await submitForm(data);
      alert('お問い合わせを受け付けました。');
      reset();
    } catch (error) {
      alert('送信に失敗しました。もう一度お試しください。');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold text-gray-800 mb-4">お問い合わせフォーム</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">お名前</label>
          <input
            type="text"
            id="name"
            {...register('name', { required: '名前を入力してください' })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">電話番号</label>
          <input
            type="tel"
            id="phone"
            {...register('phone', { required: '電話番号を入力してください' })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">メールアドレス</label>
          <input
            type="email"
            id="email"
            {...register('email', { required: 'メールアドレスを入力してください' })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="productId" className="block text-sm font-medium text-gray-700">エコめがね商品ID</label>
          <input
            type="text"
            id="productId"
            {...register('productId', { required: '商品IDを入力してください' })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.productId && <p className="text-red-500 text-sm">{errors.productId.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          送信する
        </button>
      </form>
    </div>
  );
}