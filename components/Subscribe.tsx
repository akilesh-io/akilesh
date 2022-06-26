import { Form, Subscribers } from '@/lib/types';
import { fetcher } from '@/lib/fetcher';
import { useSubscribeToNewsletter } from '@/lib/hooks/useSubscribeToNewsletter';

import { ErrorMessage } from './ErrorMessage';
import { LoadingSpinner } from './LoadingSpinner';
import { SuccessMessage } from './SuccessMessage';

import useSWR from 'swr';

function InlineSubscribe({ handleSubscribe, form, inputRef }) {
    return (
        <div>
            <form action="" onSubmit={handleSubscribe}>
                <div className="grid md:grid-cols-3 gird-cols-1 gap-4 flex justify-center items-center">
                    <div className="md:ml-auto md:mb-6">
                        <p className="text-slate-800">
                            <strong>Sign up for my newsletter</strong>
                        </p>
                    </div>

                    <div className="md:mb-6">
                        <input
                            ref={inputRef}
                            type="email"
                            autoComplete="email"
                            required
                            id="exampleFormControlInput1"
                            placeholder="Email address"
                            className="
      form-control
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
    "
                        />
                    </div>

                    <div className="md:mr-auto mb-6">
                        <button type="submit" className="inline-block px-6 py-2 border-2 
    border-white text-white font-medium text-xs leading-tight 
    uppercase rounded hover:bg-neutral-700 bg-slate-900
    focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                            {form.state === Form.Loading ? <LoadingSpinner /> : 'Subscribe'}
                        </button>
                    </div>
                </div>
            </form>
            {form.state === Form.Error ? (
                <ErrorMessage>{form.message}</ErrorMessage>
            ) : form.state === Form.Success ? (
                <SuccessMessage>{form.message}</SuccessMessage>
            ) : null}
        </div>
    )
}

export function Subscribe() {
    const { form, subscribe, inputEl } = useSubscribeToNewsletter();
    const { data: subData } = useSWR<Subscribers>('/api/subscribe', fetcher);

    return (
        <InlineSubscribe
            handleSubscribe={subscribe}
            form={form}
            inputRef={inputEl}
        />
    );

}