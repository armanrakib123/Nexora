import { useEffect, useState } from "react";
import type { Product } from "../../types";
import { Link } from "react-router-dom";
import { ArrowRightIcon, SparklesIcon } from "lucide-react";
import ProductCard from "../ProductCard";
import api from "../../config/api";
import toast from "react-hot-toast";

const PopularProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        api.get("/products?sort=rating")
            .then(({ data }) => {
                setProducts(data.products);
            })
            .catch((error: any) => {
                toast.error(error.response.data.message || error?.message);
            });
    }, []);

    return (
        <section className="relative overflow-hidden pb-16 pt-4 sm:pb-20">
            <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <div className="mb-2 flex items-center gap-2">
                            <span className="flex size-7 items-center justify-center rounded-lg bg-app-yellow-light text-app-yellow-dark">
                                <SparklesIcon className="size-3.5" />
                            </span>

                            <span className="text-xs font-bold uppercase tracking-[0.18em] text-app-green">
                                Customer favorites
                            </span>
                        </div>

                        <h2 className="text-2xl font-bold tracking-tight text-app-text sm:text-3xl">
                            Popular Products
                        </h2>

                        <p className="mt-2 text-sm leading-6 text-app-text-light">
                            Discover the top-rated products our customers love this season.
                        </p>
                    </div>

                    <Link
                        to="/products"
                        className="group inline-flex w-fit items-center gap-2 rounded-full border border-app-border bg-white px-4 py-2.5 text-sm font-semibold text-app-orange shadow-app-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-app-orange/30 hover:bg-app-orange-light hover:shadow-app-md"
                    >
                        View All
                        <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </div>

                {/* Products */}
                <div className="relative">
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5 lg:gap-5 xl:gap-6">
                        {products.slice(0, 10).map((product) => (
                            <div
                                key={product.id}
                                className="group rounded-2xl transition-all duration-300 hover:-translate-y-1"
                            >
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>

                    {/* Empty State */}
                    {products.length === 0 && (
                        <div className="flex min-h-[260px] items-center justify-center rounded-2xl border border-dashed border-app-border bg-app-surface-soft">
                            <div className="text-center">
                                <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-app-blue-light text-app-blue">
                                    <SparklesIcon className="size-5" />
                                </div>

                                <p className="mt-3 text-sm font-semibold text-app-text">
                                    No popular products found
                                </p>

                                <p className="mt-1 text-xs text-app-text-light">
                                    Please check back again soon.
                                </p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Bottom Trust Strip */}
                {products.length > 0 && (
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-app-border-light pt-5 text-[11px] text-app-text-muted sm:justify-start">
                        <span className="flex items-center gap-1.5">
                            <span className="size-1.5 rounded-full bg-app-green" />
                            Top-rated picks
                        </span>

                        <span className="flex items-center gap-1.5">
                            <span className="size-1.5 rounded-full bg-app-blue" />
                            Customer favorites
                        </span>

                        <span className="flex items-center gap-1.5">
                            <span className="size-1.5 rounded-full bg-app-orange" />
                            Fresh &amp; trusted
                        </span>
                    </div>
                )}
            </div>
        </section>
    );
};

export default PopularProducts;

