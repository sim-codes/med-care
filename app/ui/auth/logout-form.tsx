import { lusitana } from '@/app/ui/fonts';
import { LogoutIcon } from '@/app/ui/icons';

import { useForm } from 'react-hook-form';
import { AuthActions } from '@/app/auth/utils';
import { useRouter } from 'next/navigation';

type FormData = {
    confirmation: string;
};


export default function LogoutForm() {
  const {
    register,
    handleSubmit,
  } = useForm<FormData>();

  const router = useRouter();

  const { removeTokens } = AuthActions();

  const onSubmit = () => {
    removeTokens();
    router.push("/");
  };


  return (
    <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
      <LogoutButton />
    </form>
  );

  function LogoutButton() {
    return (
        <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md p-3 text-[#676767] font-medium hover:bg-gray-100 md:flex-none md:justify-start md:p-2 md:px-3">
        <LogoutIcon />
        <div className="hidden md:block">Log Out</div>
      </button>
    );
  }
}
