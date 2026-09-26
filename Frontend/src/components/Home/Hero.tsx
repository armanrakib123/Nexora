import {
ArrowRightIcon,
CheckIcon,
LeafIcon,
SparklesIcon,
} from "lucide-react";
import { heroSectionData } from "../../assets/assets";
import { Link } from "react-router-dom";

const Hero = () => {
return ( <section className="relative mx-auto mb-6 mt-1 min-h-[560px] max-w-[1440px] overflow-hidden rounded-[28px] sm:mt-1 sm:min-h-[600px] lg:rounded-[32px]">

        {/* =========================================================
            HERO IMAGE
        ========================================================== */}
        <img
            src={heroSectionData.hero_image}
            alt="Fresh groceries"
            className="absolute inset-0 h-full w-full object-cover"
        />

        {/* =========================================================
            IMAGE OVERLAYS
        ========================================================== */}

        <div className="absolute inset-0 bg-gradient-to-r from-[#0F3D25] via-[#0F3D25]/90 to-[#0F3D25]/15" />

        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/20 to-transparent" />

        <div className="pointer-events-none absolute -left-20 -top-20 size-72 rounded-full bg-[#34A853]/20 blur-3xl" />

        {/* =========================================================
            CONTENT
        ========================================================== */}
        <div className="relative z-10 flex min-h-[560px] items-center sm:min-h-[600px]">

            <div className="w-full px-5 py-20 sm:px-8 lg:px-12 xl:px-16">

                <div className="max-w-2xl">

                    {/* =================================================
                        EYEBROW
                    ================================================== */}
                    <div
                        className="
                            mb-6
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-white/15
                            bg-white/10
                            px-3.5
                            py-2
                            text-xs
                            font-semibold
                            text-white
                            shadow-sm
                            backdrop-blur-md
                        "
                    >
                        <span className="flex size-5 items-center justify-center rounded-full bg-[#34A853]">
                            <LeafIcon className="size-3" />
                        </span>

                        <span>Fresh From Local Farms</span>

                        <span className="size-1 rounded-full bg-[#FBBC05]" />

                        <span className="text-white/65">
                            Delivered to Your Door
                        </span>
                    </div>

                    {/* =================================================
                        HEADING
                    ================================================== */}
                    <h1
                        className="
                            font-serif
                            text-4xl
                            leading-[1.08]
                            tracking-tight
                            text-white
                            sm:text-5xl
                            lg:text-6xl
                            xl:text-[68px]
                        "
                    >
                        Good food starts with{" "}
                        <span className="relative inline-block text-[#FFAC1C]">
                            great ingredients

                            <svg
                                className="absolute -bottom-2 left-0 h-2.5 w-full"
                                viewBox="0 0 300 12"
                                fill="none"
                                preserveAspectRatio="none"
                                aria-hidden="true"
                            >
                                <path
                                    d="M2 8C68 2 150 3 298 7"
                                    stroke="#FBBC05"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </span>
                    </h1>

                    {/* =================================================
                        DESCRIPTION
                    ================================================== */}
                    <p
                        className="
                            mt-6
                            max-w-xl
                            text-sm
                            leading-7
                            text-white/70
                            sm:text-base
                            lg:text-[17px]
                        "
                    >
                        Shop farm-fresh fruits, vegetables, pantry
                        essentials, and everyday groceries — carefully
                        selected and delivered fresh to your doorstep.
                    </p>

                    {/* =================================================
                        ACTIONS
                    ================================================== */}
                    <div className="mt-8 flex flex-wrap items-center gap-3">

                        {/* Primary CTA */}
                        <Link
                            to="/products"
                            className="
                                group
                                inline-flex
                                items-center
                                gap-2.5
                                rounded-full
                                bg-[#FFAC1C]
                                px-6
                                py-3.5
                                text-sm
                                font-bold
                                text-white
                                shadow-[0_10px_30px_rgba(255,172,28,0.25)]
                                transition-all
                                duration-300
                                hover:-translate-y-0.5
                                hover:bg-[#F5A20B]
                                hover:shadow-[0_14px_35px_rgba(255,172,28,0.35)]
                                active:scale-[0.98]
                                sm:px-7
                            "
                        >
                            Shop Groceries

                            <span className="flex size-6 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-0.5">
                                <ArrowRightIcon className="size-3.5" />
                            </span>
                        </Link>

                        {/* Secondary CTA */}
                        <Link
                            to="/products"
                            className="
                                inline-flex
                                items-center
                                gap-2
                                rounded-full
                                border
                                border-white/20
                                bg-white/10
                                px-6
                                py-3.5
                                text-sm
                                font-semibold
                                text-white
                                backdrop-blur-md
                                transition-all
                                duration-300
                                hover:border-white/30
                                hover:bg-white/20
                                active:scale-[0.98]
                                sm:px-7
                            "
                        >
                            Explore Categories
                        </Link>
                    </div>

                    {/* =================================================
                        TRUST FEATURES
                    ================================================== */}
                    <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">

                        <div className="flex items-center gap-2 text-xs text-white/65">
                            <span className="flex size-5 items-center justify-center rounded-full bg-[#34A853]/20 text-[#72D98E]">
                                <CheckIcon className="size-3" />
                            </span>

                            Farm-fresh quality
                        </div>

                        <div className="flex items-center gap-2 text-xs text-white/65">
                            <span className="flex size-5 items-center justify-center rounded-full bg-[#4285F4]/20 text-[#8BB7FF]">
                                <CheckIcon className="size-3" />
                            </span>

                            Fast doorstep delivery
                        </div>

                        <div className="flex items-center gap-2 text-xs text-white/65">
                            <span className="flex size-5 items-center justify-center rounded-full bg-[#FBBC05]/20 text-[#FFD85C]">
                                <CheckIcon className="size-3" />
                            </span>

                            Quality you can trust
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* =========================================================
            FLOATING RIGHT INFO CARD
        ========================================================== */}
        <div
            className="
                absolute
                bottom-7
                right-7
                hidden
                w-[215px]
                rounded-2xl
                border
                border-white/15
                bg-white/10
                p-4
                shadow-2xl
                backdrop-blur-xl
                lg:block
                xl:right-10
                xl:bottom-10
            "
        >
            <div className="flex items-center justify-between">

                <div className="flex size-9 items-center justify-center rounded-xl bg-[#34A853]/20 text-[#7BE096]">
                    <SparklesIcon className="size-4" />
                </div>

                <div className="flex items-center gap-1">
                    <span className="size-1.5 animate-pulse rounded-full bg-[#34A853]" />

                    <span className="text-[10px] font-medium text-white/55">
                        Fresh today
                    </span>
                </div>
            </div>

            <p className="mt-3 text-sm font-semibold text-white">
                Freshness in every order
            </p>

            <p className="mt-1 text-[11px] leading-5 text-white/50">
                From trusted farms to your kitchen, we keep quality at the
                heart of every delivery.
            </p>

            <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[88%] rounded-full bg-[#34A853]" />
            </div>
        </div>

        {/* =========================================================
            BOTTOM BRAND ACCENT
        ========================================================== */}
        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#4285F4] via-[#FBBC05] to-[#34A853]" />
    </section>
);


};

export default Hero;
