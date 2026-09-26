import { useState } from "react";
import { Link } from "react-router-dom";
import {
    ArrowRightIcon,
    Loader2Icon,
    LockIcon,
    MailIcon,
    UserIcon,
    XIcon,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

const Login = () => {
    const [isLoginState, setIsLoginState] = useState(true);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const { login, register } = useAuth();

    const handleSubmit = async (e: React.SubmitEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            if (isLoginState) {
                await login(email, password);
            } else {
                await register(name, email, password);
            }
        } catch (error: any) {
            toast.error(error.response?.data?.message || error?.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-app-cream">
            {/* Compact Header */}
            <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-5 sm:px-8">
                <Link
                    to="/"
                    className="group flex shrink-0 items-center gap-2.5"
                >
                    <div className="relative flex  size-10 items-center justify-center overflow-hidden rounded-xl bg-blue-50 ring-1 ring-blue-100 transition-all duration-300 group-hover:scale-105 group-hover:ring-blue-200">
                        <img
                            src="https://i.postimg.cc/T1k9wDpY/logo.png"
                            alt="Nexora"
                            className="size-8 object-contain"
                        />
                    </div>

                    <div className="hidden sm:block leading-none">
                        <span className="block text-[21px] font-extrabold tracking-tight text-zinc-900">
                            Nexora
                        </span>
                    </div>
                </Link>

                <Link
                    to="/"
                    className="flex size-9 items-center justify-center rounded-full border border-app-border bg-white text-app-text-light transition-all hover:border-app-blue/30 hover:bg-app-blue-light hover:text-app-blue"
                    aria-label="Close"
                >
                    <XIcon className="size-4" />
                </Link>
            </div>

            {/* Login Card */}
            <main className="flex justify-center px-4 pb-16 pt-6 sm:px-6 sm:pt-10">
                <div className="w-full max-w-[410px]">
                    <div className="rounded-2xl border border-app-border bg-white p-5 shadow-app-md sm:p-7">
                        {/* Header */}

                        <div>
                            <div className="flex justify-center">
                                <div className="relative flex  size-10 items-center justify-center overflow-hidden rounded-xl bg-blue-50 ring-1 ring-blue-100 transition-all duration-300 group-hover:scale-105 group-hover:ring-blue-200">
                                    <img
                                        src="https://i.postimg.cc/T1k9wDpY/logo.png"
                                        alt="Nexora"
                                        className="size-8 object-contain"
                                    />
                                </div>
                            </div>
                            <div className="mb-6 text-center">

                                <h1 className="text-xl font-bold tracking-tight text-app-text sm:text-2xl">
                                    {isLoginState
                                        ? "Welcome back"
                                        : "Create your account"}
                                </h1>

                                <p className="mt-1.5 text-xs text-app-text-light sm:text-sm">
                                    {isLoginState
                                        ? "Sign in to continue shopping with Nexora."
                                        : "Create an account and start shopping fresh."}
                                </p>
                            </div>
                        </div>

                        {/* Form */}
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-4"
                        >
                            {!isLoginState && (
                                <label className="block">
                                    <span className="mb-1.5 block text-xs font-semibold text-app-text">
                                        Name
                                    </span>

                                    <div className="relative">
                                        <UserIcon className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-app-text-muted" />

                                        <input
                                            type="text"
                                            value={name}
                                            onChange={(e) =>
                                                setName(e.target.value)
                                            }
                                            required
                                            placeholder="Your name"
                                            className="h-11 w-full rounded-xl border border-app-border bg-app-surface-soft pl-10 pr-4 text-sm text-app-text outline-none transition-all placeholder:text-app-text-muted focus:border-app-blue focus:bg-white focus:ring-4 focus:ring-app-blue/10"
                                        />
                                    </div>
                                </label>
                            )}

                            <label className="block">
                                <span className="mb-1.5 block text-xs font-semibold text-app-text">
                                    Email Address
                                </span>

                                <div className="relative">
                                    <MailIcon className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-app-text-muted" />

                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        required
                                        placeholder="you@example.com"
                                        className="h-11 w-full rounded-xl border border-app-border bg-app-surface-soft pl-10 pr-4 text-sm text-app-text outline-none transition-all placeholder:text-app-text-muted focus:border-app-blue focus:bg-white focus:ring-4 focus:ring-app-blue/10"
                                    />
                                </div>
                            </label>

                            <label className="block">
                                <span className="mb-1.5 block text-xs font-semibold text-app-text">
                                    Password
                                </span>

                                <div className="relative">
                                    <LockIcon className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-app-text-muted" />

                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        required
                                        placeholder="••••••••"
                                        className="h-11 w-full rounded-xl border border-app-border bg-app-surface-soft pl-10 pr-4 text-sm text-app-text outline-none transition-all placeholder:text-app-text-muted focus:border-app-blue focus:bg-white focus:ring-4 focus:ring-app-blue/10"
                                    />
                                </div>
                            </label>

                            <button
                                type="submit"
                                disabled={loading}
                                className="group flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-app-green text-sm font-bold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-app-green-dark hover:shadow-app-md active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {loading ? (
                                    <>
                                        <Loader2Icon className="size-4 animate-spin" />
                                        Please wait...
                                    </>
                                ) : (
                                    <>
                                        {isLoginState
                                            ? "Sign In"
                                            : "Create Account"}

                                        <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                                    </>
                                )}
                            </button>
                        </form>

                        {/* Switch */}
                        <div className="mt-5 border-t border-app-border-light pt-5 text-center">
                            <p className="text-xs text-app-text-light">
                                {isLoginState
                                    ? "Don't have an account?"
                                    : "Already have an account?"}

                                <button
                                    type="button"
                                    onClick={() =>
                                        setIsLoginState(!isLoginState)
                                    }
                                    className="ml-1 font-bold text-app-blue transition-colors hover:text-app-blue-dark"
                                >
                                    {isLoginState
                                        ? "Create one"
                                        : "Sign in"}
                                </button>
                            </p>
                        </div>
                    </div>

                    <p className="mt-4 text-center text-[10px] text-app-text-muted">
                        Secure shopping experience powered by Nexora
                    </p>
                </div>
            </main>
        </div>
    );
};

export default Login;
