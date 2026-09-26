import { ArrowUpRightIcon, MailIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { footerData } from "../assets/assets";

const Footer = () => {
return ( <footer className="relative overflow-hidden bg-[#0F3D25] text-white">

        {/* Decorative Background */}
        <div className="pointer-events-none absolute -right-32 -top-32 size-72 rounded-full bg-[#34A853]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 size-72 rounded-full bg-[#4285F4]/10 blur-3xl" />

        <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">

            {/* =========================================================
                MAIN FOOTER
            ========================================================== */}
            <div className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8 lg:py-16">

                {/* =====================================================
                    BRAND
                ====================================================== */}
                <div className="lg:col-span-2">

                    <Link
                        to="/"
                        className="group mb-5 inline-flex items-center gap-3"
                    >
                        <div className="flex size-11 items-center justify-center overflow-hidden rounded-xl bg-white shadow-lg transition-transform duration-300 group-hover:scale-105">
                            <img
                                src="https://i.postimg.cc/T1k9wDpY/logo.png"
                                alt="Nexora"
                                className="size-9 object-contain"
                            />
                        </div>

                        <div>
                            <span className="block text-2xl font-extrabold tracking-tight">
                                {footerData.brand.name}
                            </span>

                            <span className="mt-0.5 block text-[9px] font-semibold uppercase tracking-[0.2em] text-white/45">
                                Fresh • Fast • Simple
                            </span>
                        </div>
                    </Link>

                    <p className="max-w-md text-sm leading-7 text-white/65">
                        {footerData.brand.description}
                    </p>

                    {/* Social Links */}
                    <div className="mt-6 flex items-center gap-2.5">
                        {footerData.brand.socials.map((social, i) => {
                            const SocialIcon = social.icon;

                            return (
                                <a
                                    key={i}
                                    href={social.link}
                                    aria-label={`Visit our social media`}
                                    className="
                                        flex
                                        size-10
                                        items-center
                                        justify-center
                                        rounded-xl
                                        border
                                        border-white/10
                                        bg-white/[0.06]
                                        text-white/70
                                        transition-all
                                        duration-200
                                        hover:-translate-y-1
                                        hover:border-white/20
                                        hover:bg-[#4285F4]
                                        hover:text-white
                                        hover:shadow-lg
                                    "
                                >
                                    <SocialIcon className="size-[17px]" />
                                </a>
                            );
                        })}
                    </div>
                </div>

                {/* =====================================================
                    DYNAMIC SECTIONS
                ====================================================== */}
                {footerData.sections.map((section, i) => (
                    <div key={i}>
                        <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.14em] text-white">
                            {section.title}
                        </h3>

                        <ul className="space-y-3">
                            {section.links.map((link, index) => (
                                <li key={index}>
                                    {link.to ? (
                                        <Link
                                            to={link.to}
                                            className="
                                                group
                                                inline-flex
                                                items-center
                                                gap-1
                                                text-sm
                                                text-white/55
                                                transition-colors
                                                duration-200
                                                hover:text-white
                                            "
                                        >
                                            <span>{link.label}</span>

                                            <ArrowUpRightIcon
                                                className="
                                                    size-3
                                                    opacity-0
                                                    transition-all
                                                    duration-200
                                                    group-hover:translate-x-0.5
                                                    group-hover:-translate-y-0.5
                                                    group-hover:opacity-100
                                                "
                                            />
                                        </Link>
                                    ) : (
                                        <a
                                            href={link.href}
                                            className="
                                                group
                                                inline-flex
                                                items-center
                                                gap-1
                                                text-sm
                                                text-white/55
                                                transition-colors
                                                duration-200
                                                hover:text-white
                                            "
                                        >
                                            <span>{link.label}</span>

                                            <ArrowUpRightIcon
                                                className="
                                                    size-3
                                                    opacity-0
                                                    transition-all
                                                    duration-200
                                                    group-hover:translate-x-0.5
                                                    group-hover:-translate-y-0.5
                                                    group-hover:opacity-100
                                                "
                                            />
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

                {/* =====================================================
                    CONTACT
                ====================================================== */}
                <div>
                    <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.14em] text-white">
                        Contact Us
                    </h3>

                    <ul className="space-y-4">
                        {footerData.contact.map((item, i) => {
                            const Icon = item.icon;

                            return (
                                <li
                                    key={i}
                                    className="group flex items-start gap-3"
                                >
                                    <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-[#FBBC05] transition-colors group-hover:bg-[#FBBC05]/15">
                                        <Icon className="size-[15px]" />
                                    </span>

                                    <span className="pt-1 text-sm leading-5 text-white/55 transition-colors group-hover:text-white/80">
                                        {item.text}
                                    </span>
                                </li>
                            );
                        })}
                    </ul>

                    {/* Newsletter / CTA */}
                    <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                        <div className="mb-3 flex items-center gap-2">
                            <div className="flex size-7 items-center justify-center rounded-lg bg-[#4285F4]/20 text-[#8BB7FF]">
                                <MailIcon className="size-3.5" />
                            </div>

                            <span className="text-xs font-semibold text-white/90">
                                Stay updated
                            </span>
                        </div>

                        <p className="text-[11px] leading-5 text-white/45">
                            Get the latest deals and grocery updates.
                        </p>
                    </div>
                </div>
            </div>

            {/* =========================================================
                BOTTOM BAR
            ========================================================== */}
            <div className="border-t border-white/10 py-6">

                <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">

                    <p className="text-xs text-white/40">
                        {footerData.bottom.copyright}
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
                        {footerData.bottom.links.map((link, i) => (
                            <a
                                key={i}
                                href={link.href}
                                className="
                                    text-xs
                                    text-white/40
                                    transition-colors
                                    duration-200
                                    hover:text-white/80
                                "
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        {/* Bottom Accent Line */}
        <div className="h-1 w-full bg-gradient-to-r from-[#4285F4] via-[#FBBC05] to-[#34A853]" />
    </footer>
);


};

export default Footer;
