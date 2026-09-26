import { ArrowRightIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { categoriesData } from "../../assets/assets";

const HomeCategories = () => {
    return (
        <section className="relative overflow-hidden py-16 sm:py-20">
            <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <div className="mb-2 flex items-center gap-2">
                            <span className="h-1 w-7 rounded-full bg-app-orange" />
                            <span className="text-xs font-bold uppercase tracking-[0.18em] text-app-green">
                                Shop by category
                            </span>
                        </div>

                        <h2 className="text-2xl font-bold tracking-tight text-app-text sm:text-3xl">
                            Browse Categories
                        </h2>

                        <p className="mt-2 max-w-xl text-sm leading-6 text-app-text-light">
                            Explore fresh produce, pantry essentials, beverages, and
                            everyday favorites — all in one place.
                        </p>
                    </div>

                    <Link
                        to="/products"
                        onClick={() => window.scrollTo(0, 0)}
                        className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-app-blue transition-colors hover:text-app-blue-dark"
                    >
                        View all products
                        <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </div>

                {/* Categories */}
                <div className="mt-9 overflow-x-auto pb-3 no-scrollbar">
                    <div className="flex min-w-max gap-3 sm:gap-4">
                        {categoriesData.map((cat, index) => {
                            const accentClasses = [
                                "bg-app-blue-light group-hover:ring-app-blue/30",
                                "bg-app-orange-light group-hover:ring-app-orange/30",
                                "bg-app-yellow-light group-hover:ring-app-yellow/30",
                                "bg-app-green-light group-hover:ring-app-green/30",
                            ];

                            return (
                                <Link
                                    key={cat.slug}
                                    to={`/products?category=${cat.slug}`}
                                    onClick={() => window.scrollTo(0, 0)}
                                    className="group flex w-[112px] shrink-0 flex-col items-center sm:w-[138px]"
                                >
                                    {/* Image Card */}
                                    <div
                                        className={`relative flex size-[104px] items-center justify-center overflow-hidden rounded-2xl p-2 ring-1 ring-transparent transition-all duration-300 group-hover:-translate-y-1 group-hover:ring-4 sm:size-[128px] sm:p-3 ${
                                            accentClasses[index % accentClasses.length]
                                        }`}
                                    >
                                        {/* Decorative Circle */}
                                        <div className="absolute -right-5 -top-5 size-14 rounded-full bg-white/50 transition-transform duration-500 group-hover:scale-150" />

                                        <img
                                            src={cat.image}
                                            alt={cat.name}
                                            className="relative z-10 h-full w-full rounded-full object-contain transition-transform duration-500 group-hover:scale-110"
                                        />

                                        {/* Hover Arrow */}
                                        <div className="absolute bottom-2 right-2 z-20 flex size-6 translate-y-2 items-center justify-center rounded-full bg-white text-app-blue opacity-0 shadow-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                            <ArrowRightIcon className="size-3.5" />
                                        </div>
                                    </div>

                                    {/* Category Name */}
                                    <span className="mt-3 line-clamp-2 text-center text-xs font-semibold leading-5 text-app-text-light transition-colors duration-300 group-hover:text-app-text sm:text-sm">
                                        {cat.name}
                                    </span>
                                </Link>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom Accent */}
                <div className="mt-6 h-px bg-gradient-to-r from-app-blue/10 via-app-border to-app-green/10" />
            </div>
        </section>
    );
};

export default HomeCategories;

