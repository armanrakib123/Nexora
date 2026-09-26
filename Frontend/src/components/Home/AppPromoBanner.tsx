import { ArrowRightIcon, DownloadIcon, SmartphoneIcon, SparklesIcon } from "lucide-react";
import { appPromoBannerData, assets } from "../../assets/assets";

const AppPromoBanner = () => {
    return (
        <section className="relative mx-auto my-14 max-w-[1440px] overflow-hidden rounded-[28px] bg-[#0F3D25] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20 xl:px-16">
            {/* Background Decorations */}
            <div className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-[#34A853]/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 -left-20 size-72 rounded-full bg-[#4285F4]/10 blur-3xl" />

            <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#34A853]/10 to-transparent" />

            <div className="relative z-10 flex flex-col items-center justify-between gap-12 md:flex-row xl:px-6">
                {/* Left Content */}
                <div className="max-w-xl text-center md:text-left">
                    {/* Eyebrow */}
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3.5 py-2 text-xs font-semibold text-white/80 backdrop-blur-md">
                        <span className="flex size-5 items-center justify-center rounded-full bg-[#4285F4]">
                            <SmartphoneIcon className="size-3" />
                        </span>
                        <span>Shop smarter with Nexora</span>
                    </div>

                    {/* Heading */}
                    <h2 className="font-serif text-3xl leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                        {appPromoBannerData.title}
                    </h2>

                    {/* Description */}
                    <p className="mt-4 max-w-lg text-sm leading-7 text-white/65 sm:text-base">
                        {appPromoBannerData.description}
                    </p>

                    {/* App Buttons */}
                    <div className="mt-7 flex flex-wrap justify-center gap-3 md:justify-start">
                        <button
                            type="button"
                            className="group inline-flex items-center gap-3 rounded-xl bg-white px-5 py-3 text-left text-[#0F3D25] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FFAC1C] hover:text-white hover:shadow-xl"
                        >
                            <DownloadIcon className="size-5" />

                            <span>
                                <span className="block text-[9px] font-medium uppercase tracking-wider opacity-60">
                                    Download on the
                                </span>
                                <span className="block text-sm font-bold leading-4">
                                    App Store
                                </span>
                            </span>

                            <ArrowRightIcon className="ml-1 size-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                        </button>

                        <button
                            type="button"
                            className="group inline-flex items-center gap-3 rounded-xl border border-white/15 bg-white/10 px-5 py-3 text-left text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/20"
                        >
                            <SmartphoneIcon className="size-5 text-[#FBBC05]" />

                            <span>
                                <span className="block text-[9px] font-medium uppercase tracking-wider text-white/50">
                                    Get it on
                                </span>
                                <span className="block text-sm font-bold leading-4">
                                    Google Play
                                </span>
                            </span>

                            <ArrowRightIcon className="ml-1 size-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                        </button>
                    </div>

                    {/* Trust Points */}
                    <div className="mt-7 flex flex-wrap justify-center gap-x-5 gap-y-2 md:justify-start">
                        <div className="flex items-center gap-2 text-xs text-white/55">
                            <span className="size-1.5 rounded-full bg-[#34A853]" />
                            Easy ordering
                        </div>

                        <div className="flex items-center gap-2 text-xs text-white/55">
                            <span className="size-1.5 rounded-full bg-[#4285F4]" />
                            Real-time tracking
                        </div>

                        <div className="flex items-center gap-2 text-xs text-white/55">
                            <span className="size-1.5 rounded-full bg-[#FBBC05]" />
                            Exclusive deals
                        </div>
                    </div>
                </div>

                {/* Right Visual */}
                <div className="relative flex w-full max-w-md items-center justify-center md:w-auto md:max-w-none">
                    {/* Glow */}
                    <div className="absolute size-64 rounded-full bg-[#34A853]/15 blur-3xl sm:size-80" />

                    {/* Floating Card */}
                    <div className="absolute -left-2 top-4 z-20 hidden rounded-2xl border border-white/10 bg-white/10 p-3 shadow-2xl backdrop-blur-xl sm:block lg:-left-10">
                        <div className="flex items-center gap-2.5">
                            <div className="flex size-9 items-center justify-center rounded-xl bg-[#FFAC1C]/20 text-[#FFAC1C]">
                                <SparklesIcon className="size-4" />
                            </div>

                            <div>
                                <p className="text-[11px] font-semibold text-white">
                                    Fresh deals
                                </p>
                                <p className="text-[9px] text-white/45">
                                    Every day
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Truck */}
                    <img
                        src={assets.delivery_truck}
                        alt="Nexora delivery truck"
                        className="relative z-10 w-64 object-contain drop-shadow-[0_25px_30px_rgba(0,0,0,0.25)] sm:w-80 lg:w-[380px] xl:pr-4"
                    />

                    {/* Bottom Badge */}
                    <div className="absolute -bottom-2 right-2 z-20 rounded-full border border-white/10 bg-white/10 px-3 py-2 backdrop-blur-xl sm:right-0">
                        <div className="flex items-center gap-2">
                            <span className="size-2 animate-pulse rounded-full bg-[#34A853]" />
                            <span className="text-[10px] font-medium text-white/70">
                                Fast doorstep delivery
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Accent */}
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#4285F4] via-[#FFAC1C] to-[#34A853]" />
        </section>
    );
};

export default AppPromoBanner;