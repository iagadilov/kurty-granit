'use client';

import { useState } from 'react';

type FormState = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const [state, setState] = useState<FormState>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState('loading');
    setErrorMessage('');

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      company: (form.elements.namedItem('company') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      volume: (form.elements.namedItem('volume') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setState('success');
        form.reset();
      } else {
        const body = await res.json().catch(() => ({}));
        setErrorMessage(body?.message || 'Произошла ошибка. Попробуйте ещё раз.');
        setState('error');
      }
    } catch {
      setErrorMessage('Не удалось отправить запрос. Проверьте соединение и попробуйте ещё раз.');
      setState('error');
    }
  }

  const inputClass =
    'w-full rounded border border-stone-700 bg-stone-900 px-4 py-3 text-stone-50 placeholder-stone-400 outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent';

  if (state === 'success') {
    return (
      <div className="rounded border border-accent/30 bg-stone-900 p-8 text-center">
        <svg
          className="mx-auto mb-4 h-12 w-12 text-accent"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
        </svg>
        <p className="text-lg font-medium text-stone-50">
          Ваша заявка принята!
        </p>
        <p className="mt-1 text-stone-400">
          Мы свяжемся с вами в ближайшее время.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm text-stone-400">
            Имя
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Иван Иванов"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="company" className="mb-1.5 block text-sm text-stone-400">
            Компания
          </label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder="ООО «Строй»"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="mb-1.5 block text-sm text-stone-400">
          Телефон <span className="text-accent">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+7 (___) ___-__-__"
          required
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="volume" className="mb-1.5 block text-sm text-stone-400">
          Объём, м²
        </label>
        <input
          id="volume"
          name="volume"
          type="text"
          placeholder="Например: 500 м²"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm text-stone-400">
          Комментарий
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Уточните требования, сроки, условия поставки..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {state === 'error' && (
        <p className="text-sm text-red-400">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={state === 'loading'}
        className="w-full rounded bg-accent px-6 py-3.5 font-semibold text-white transition-colors hover:bg-accent-dark disabled:cursor-not-allowed disabled:opacity-60"
      >
        {state === 'loading' ? 'Отправляем...' : 'Отправить заявку'}
      </button>

      <p className="text-xs text-stone-400">
        Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
      </p>
    </form>
  );
}
