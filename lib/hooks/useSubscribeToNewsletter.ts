import { Form, FormState } from '../types';
import { useRef, useState } from 'react';

export function useSubscribeToNewsletter() {
  const [form, setForm] = useState<FormState>({ state: Form.Initial });
  const inputEl = useRef(null);

  async function subscribe(e) {
    e.preventDefault();
    setForm({ state: Form.Loading });

    const res = await fetch(`/api/subscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: inputEl.current.value
      })
    });

    const { error } = await res.json();

    if (error) {
      setForm({
        state: Form.Error,
        message: error
      });
      return;
    }


    inputEl.current.value = '';
    setForm({
      state: Form.Success,
      message: `Success! 🎉 You are now subscribed to the newsletter.`
    });
  }

  return { subscribe, inputEl, form };
}
