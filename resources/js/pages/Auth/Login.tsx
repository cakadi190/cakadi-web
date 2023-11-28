import Checkbox from "@/components/ui/Checkbox";
import InputError from "@/components/ui/InputError";
import InputLabel from "@/components/ui/InputLabel";
import TextInput from "@/components/ui/TextInput";
import { Button } from "@/components/ui/buttons";
import GuestLayout from "@/layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { FormEventHandler, useEffect, useState } from "react";
import { RiEyeCloseFill, RiEyeFill } from 'react-icons/ri';

export default function Login({
  status,
  canResetPassword,
}: {
  status?: string;
  canResetPassword: boolean;
}) {
  const [passwordType, setPasswordType] = useState("password");
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    remember: false,
  });

  useEffect(() => {
    return () => reset("password");
  }, []);

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    post(route("login"));
  };

  const buttonPasswordChange = () => setPasswordType(passwordType === "password" ? "text" : "password");

  return (
    <GuestLayout>
      <Head title="Masuk" />

      {status && (
        <div className="mb-4 font-medium text-sm text-green-600">{status}</div>
      )}

      <form onSubmit={submit}>
        <div>
          <InputLabel htmlFor="email" value="Surel kamu" />

          <TextInput
            id="email"
            type="email"
            name="email"
            value={data.email}
            className="mt-1 block w-full"
            autoComplete="username"
            placeholder="Misal: email@domain.tld"
            isFocused={true}
            onChange={(e) => setData("email", e.target.value)}
          />

          <InputError message={errors.email} className="mt-2" />
        </div>

        <div className="mt-4">
          <InputLabel htmlFor="password" value="Password" />

          <div className="relative">
            <TextInput
              id="password"
              type={passwordType}
              name="password"
              placeholder="Masukkan kata sandi"
              value={data.password}
              className="mt-1 block w-full"
              autoComplete="current-password"
              onChange={(e) => setData("password", e.target.value)}
            />
            <Button onClick={buttonPasswordChange} type="button" variant={"ghost-primary"} className="absolute w-8 h-8 !p-0 top-[5px] bottom-[5px] rounded-md right-1 flex items-center justify-center">
              {passwordType === "password" ? <RiEyeCloseFill /> : <RiEyeFill />}
            </Button>
          </div>

          <InputError message={errors.password} className="mt-2" />
        </div>

        <div className="block mt-4">
          <label className="flex items-center">
            <Checkbox
              name="remember"
              checked={data.remember}
              onChange={(e) => setData("remember", e.target.checked)}
            />
            <span className="ms-2 text-sm text-gray-600">Remember me</span>
          </label>
        </div>

        <div className="flex items-center gap-2 justify-end mt-4">
          {canResetPassword && (
            <Link
              href={route("password.request")}
              className="underline outline-none outline-0 text-sm text-gray-600 hover:text-gray-900 rounded-md"
            >
              Forgot your password?
            </Link>
          )}

          <Button variant="primary" disabled={processing}>Login</Button>
        </div>
      </form>
    </GuestLayout>
  );
}
