import {
    ArrowRightIcon,
    CheckCircle2Icon,
    MailIcon,
    SparklesIcon,
} from "lucide-react";

const Newsletter = () => {
    return (
        <section className="relative mx-auto mb-20 mt-24 max-w-[1440px] overflow-hidden rounded-[28px] border border-app-border bg-white px-5 py-14 shadow-app-sm sm:px-8 sm:py-16 lg:px-12 lg:py-20">
            {/* Background Decorations */}
            <div className="pointer-events-none absolute -left-24 -top-24 size-72 rounded-full bg-app-blue/5 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-28 -right-20 size-80 rounded-full bg-app-green/5 blur-3xl" />

            {/* Top Accent */}
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-app-blue via-app-yellow to-app-green" />

            <div className="relative z-10 mx-auto max-w-3xl text-center">

                {/* Icon */}
                <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-2xl border border-app-blue/10 bg-app-blue-light text-app-blue shadow-sm transition-transform duration-300 hover:scale-105">
                    <MailIcon className="size-7" strokeWidth={1.8} />
                </div>

                {/* Eyebrow */}
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-app-green-light px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-app-green">
                    <SparklesIcon className="size-3" />
                    <span>Stay in the loop</span>
                </div>

                {/* Heading */}
                <h2 className="text-3xl font-bold tracking-tight text-app-text sm:text-4xl">
                    Fresh updates, straight to your inbox
                </h2>

                {/* Description */}
                <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-app-text-light sm:text-base">
                    Get weekly updates on fresh produce, seasonal offers, new
                    arrivals, and exclusive discounts — carefully curated for you.
                </p>

                {/* Form */}
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"
                >
                    <div className="group relative flex-1">
                        <MailIcon className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-app-text-muted transition-colors group-focus-within:text-app-blue" />

                        <input
                            type="email"
                            placeholder="Enter your email address"
                            required
                            className="h-13 w-full rounded-xl border border-app-border bg-app-surface-soft pl-11 pr-4 text-sm text-app-text outline-none transition-all duration-200 placeholder:text-app-text-muted focus:border-app-blue focus:bg-white focus:ring-4 focus:ring-app-blue/10"
                        />
                    </div>

                    <button
                        type="submit"
                        className="group inline-flex h-13 items-center justify-center gap-2 rounded-xl bg-app-green px-7 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-app-green-dark hover:shadow-app-md active:translate-y-0 active:scale-[0.98]"
                    >
                        Subscribe
                        <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                </form>

                {/* Trust Note */}
                <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
                    <div className="flex items-center gap-1.5 text-[11px] text-app-text-muted">
                        <CheckCircle2Icon className="size-3.5 text-app-green" />
                        No spam
                    </div>

                    <div className="flex items-center gap-1.5 text-[11px] text-app-text-muted">
                        <CheckCircle2Icon className="size-3.5 text-app-blue" />
                        Weekly updates
                    </div>

                    <div className="flex items-center gap-1.5 text-[11px] text-app-text-muted">
                        <CheckCircle2Icon className="size-3.5 text-app-orange" />
                        Unsubscribe anytime
                    </div>
                </div>
            </div>

            {/* Bottom Accent */}
            <div className="absolute inset-x-10 bottom-0 h-px bg-gradient-to-r from-transparent via-app-border to-transparent" />
        </section>
    );
};

export default Newsletter;
