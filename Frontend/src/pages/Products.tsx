import { useEffect, useState } from "react";
import type { Product } from "../types";
import { useSearchParams } from "react-router-dom";
import {
    CheckCircle2,
    ChevronDown,
    Filter,
    PackageSearch,
    SlidersHorizontal,
    Sparkles,
    XIcon,
} from "lucide-react";
import { categoriesData } from "../assets/assets";
import ProductCard from "../components/ProductCard";
import Loading from "../components/Loading";
import FilterPanel from "../components/FilterPanel";
import api from "../config/api";
import toast from "react-hot-toast";

const Products = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [products, setProducts] = useState<Product[]>([]);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(true);
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

    const category = searchParams.get("category") || "";
    const organic = searchParams.get("organic") || "";
    const sort = searchParams.get("sort") || "";
    const page = Number(searchParams.get("page")) || 1;
    const minPrice = searchParams.get("minPrice") || "";
    const maxPrice = searchParams.get("maxPrice") || "";

    const fetchProducts = async () => {
        setLoading(true);

        try {
            const params = new URLSearchParams();

            if (category) params.set("category", category);
            if (organic) params.set("organic", organic);
            if (sort) params.set("sort", sort);
            if (sort) params.set("sort", sort);
            if (maxPrice) params.set("maxPrice", maxPrice);

            params.set("page", String(page));
            params.set("limit", "12");

            const { data } = await api.get(`/products?${params.toString()}`);

            setProducts(data.products);
            setTotalPages(data.pages);
        } catch (error: any) {
            toast.error(
                error?.response?.data?.message || error?.message
            );
        } finally {
            setLoading(false);
        }
    };

    const updateFilter = (key: string, value: string) => {
        const newParams = new URLSearchParams(searchParams);

        if (value) {
            newParams.set(key, value);
        } else {
            newParams.delete(key);
        }

        if (key !== "page") {
            newParams.delete("page");
        }

        setSearchParams(newParams);
    };

    const clearFilters = () => setSearchParams({});

    const activeCategory = categoriesData.find(
        (c) => c.slug === category
    );

    const hasFilters = category || organic || minPrice || maxPrice;

    useEffect(() => {
        fetchProducts();
    }, [category, organic, sort, page, minPrice, maxPrice]);

    return (
        <div className="min-h-screen bg-app-cream">

            {/* Background Decoration */}
            <div className="pointer-events-none fixed inset-0 overflow-hidden">
                <div className="absolute -right-40 top-40 size-96 rounded-full bg-app-blue/5 blur-3xl" />
                <div className="absolute -left-40 top-[55%] size-96 rounded-full bg-app-green/5 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-[1440px] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">

                <div className="flex gap-6 xl:gap-8">

                    {/* =========================================
                        DESKTOP SIDEBAR
                    ========================================== */}
                    <aside className="hidden w-64 shrink-0 lg:block xl:w-72">
                        <div className="sticky top-24 overflow-hidden rounded-2xl border border-app-border bg-white shadow-app-sm transition-shadow duration-300 hover:shadow-app-md">

                            {/* Sidebar Header */}
                            <div className="border-b border-app-border-light bg-gradient-to-r from-app-blue-lighter to-white px-5 py-4">
                                <div className="flex items-center gap-2.5">
                                    <div className="flex size-9 items-center justify-center rounded-xl bg-app-blue-light text-app-blue">
                                        <SlidersHorizontal className="size-4" />
                                    </div>

                                    <div>
                                        <h2 className="text-sm font-bold text-app-text">
                                            Filter Products
                                        </h2>
                                        <p className="text-[10px] text-app-text-muted">
                                            Refine your selection
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Filter Content */}
                            <div className="p-4">
                                <FilterPanel
                                    categories={categoriesData}
                                    category={category}
                                    organic={organic}
                                    minPrice={minPrice}
                                    maxPrice={maxPrice}
                                    updateFilter={updateFilter}
                                    clearFilters={clearFilters}
                                    hasFilters={hasFilters}
                                />
                            </div>
                        </div>
                    </aside>

                    {/* =========================================
                        MAIN CONTENT
                    ========================================== */}
                    <main className="min-w-0 flex-1">

                        {/* Header */}
                        <div className="mb-7 animate-fade-in">

                            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

                                {/* Title */}
                                <div>
                                    <div className="mb-2 flex items-center gap-2">
                                        <span className="flex size-6 items-center justify-center rounded-md bg-app-green-light text-app-green">
                                            <Sparkles className="size-3.5" />
                                        </span>

                                        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-app-green">
                                            Fresh collection
                                        </span>
                                    </div>

                                    <h1 className="text-2xl font-bold tracking-tight text-app-text sm:text-3xl">
                                        {activeCategory
                                            ? activeCategory.name
                                            : "All Products"}
                                    </h1>

                                    <div className="mt-2 flex flex-wrap items-center gap-2">
                                        <p className="text-sm text-app-text-light">
                                            Discover quality groceries selected
                                            for your everyday needs.
                                        </p>

                                        {!loading && (
                                            <span className="hidden items-center gap-1.5 rounded-full bg-app-green-light px-2.5 py-1 text-[10px] font-semibold text-white sm:inline-flex">
                                                <CheckCircle2 className="size-3" />
                                                {products.length} products
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Controls */}
                                <div className="flex items-center gap-2">

                                    {/* Mobile Filter */}
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setMobileFiltersOpen(true)
                                        }
                                        className="group inline-flex items-center gap-2 rounded-xl border border-app-border bg-white px-3.5 py-2.5 text-xs font-semibold text-app-text shadow-app-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-app-blue/30 hover:bg-app-blue-light hover:text-app-blue hover:shadow-app-md lg:hidden"
                                    >
                                        <SlidersHorizontal className="size-4 transition-transform duration-300 group-hover:rotate-12" />
                                        Filters

                                        {hasFilters && (
                                            <span className="flex size-4 items-center justify-center rounded-full bg-app-blue text-[9px] text-white">
                                                !
                                            </span>
                                        )}
                                    </button>

                                    {/* Sort */}
                                    <div className="group relative">
                                        <select
                                            value={sort}
                                            onChange={(e) =>
                                                updateFilter(
                                                    "sort",
                                                    e.target.value
                                                )
                                            }
                                            aria-label="Sort products"
                                            className="h-10 cursor-pointer appearance-none rounded-xl border border-app-border bg-white pl-3.5 pr-9 text-xs font-semibold text-app-text shadow-app-sm outline-none transition-all duration-300 hover:border-app-blue/30 hover:shadow-app-md focus:border-app-blue focus:ring-4 focus:ring-app-blue/10"
                                        >
                                            <option value="">
                                                Newest
                                            </option>
                                            <option value="price_asc">
                                                Price: Low → High
                                            </option>
                                            <option value="price_desc">
                                                Price: High → Low
                                            </option>
                                            <option value="rating">
                                                Top Rated
                                            </option>
                                            <option value="name">
                                                A → Z
                                            </option>
                                        </select>

                                        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-3.5 -translate-y-1/2 text-app-text-light transition-transform duration-300 group-focus-within:rotate-180" />
                                    </div>
                                </div>
                            </div>

                            {/* Active Filter Indicator */}
                            {hasFilters && (
                                <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-app-border-light pt-4 animate-slide-in-up">
                                    <span className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-app-text-muted">
                                        <Filter className="size-3" />
                                        Active filters
                                    </span>

                                    {category && activeCategory && (
                                        <button
                                            type="button"
                                            onClick={() =>
                                                updateFilter(
                                                    "category",
                                                    ""
                                                )
                                            }
                                            className="group inline-flex items-center gap-1.5 rounded-full bg-app-blue-light px-2.5 py-1.5 text-[10px] font-semibold text-app-blue transition-all hover:bg-app-blue hover:text-white"
                                        >
                                            {activeCategory.name}
                                            <XIcon className="size-3 transition-transform group-hover:rotate-90" />
                                        </button>
                                    )}

                                    {organic && (
                                        <button
                                            type="button"
                                            onClick={() =>
                                                updateFilter(
                                                    "organic",
                                                    ""
                                                )
                                            }
                                            className="group inline-flex items-center gap-1.5 rounded-full bg-app-green-light px-2.5 py-1.5 text-[10px] font-semibold text-app-green transition-all hover:bg-app-green hover:text-white"
                                        >
                                            Organic
                                            <XIcon className="size-3 transition-transform group-hover:rotate-90" />
                                        </button>
                                    )}

                                    {(minPrice || maxPrice) && (
                                        <button
                                            type="button"
                                            onClick={() => {
                                                updateFilter(
                                                    "minPrice",
                                                    ""
                                                );
                                                updateFilter(
                                                    "maxPrice",
                                                    ""
                                                );
                                            }}
                                            className="group inline-flex items-center gap-1.5 rounded-full bg-app-orange-light px-2.5 py-1.5 text-[10px] font-semibold text-app-orange-dark transition-all hover:bg-app-orange hover:text-white"
                                        >
                                            Price range
                                            <XIcon className="size-3 transition-transform group-hover:rotate-90" />
                                        </button>
                                    )}

                                    <button
                                        type="button"
                                        onClick={clearFilters}
                                        className="ml-1 text-[10px] font-semibold text-app-text-muted underline-offset-2 transition-colors hover:text-app-error hover:underline"
                                    >
                                        Clear all
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Product Area */}
                        {loading ? (
                            <div className="rounded-2xl border border-app-border bg-white p-8 shadow-app-sm">
                                <Loading />
                            </div>
                        ) : products.length === 0 ? (
                            /* Empty State */
                            <div className="flex min-h-[420px] items-center justify-center rounded-2xl border border-dashed border-app-border bg-white px-5 py-16 shadow-app-sm animate-slide-in-up">
                                <div className="max-w-sm text-center">

                                    <div className="mx-auto flex size-20 items-center justify-center rounded-3xl bg-app-blue-light text-app-blue">
                                        <PackageSearch
                                            className="size-9"
                                            strokeWidth={1.5}
                                        />
                                    </div>

                                    <h2 className="mt-6 text-xl font-bold text-app-text">
                                        No products found
                                    </h2>

                                    <p className="mt-2 text-sm leading-6 text-app-text-light">
                                        We couldn't find products matching
                                        your current filters. Try adjusting
                                        your selection.
                                    </p>

                                    <button
                                        type="button"
                                        onClick={clearFilters}
                                        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-app-green px-5 py-3 text-xs font-bold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-app-green-dark hover:shadow-app-md active:scale-[0.98]"
                                    >
                                        Clear Filters
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <>
                                {/* Product Grid */}
                                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:gap-5">
                                    {products.map(
                                        (product, index) =>
                                            product.stock > 0 && (
                                                <div
                                                    key={product.id}
                                                    className="animate-slide-in-up"
                                                    style={{
                                                        animationDelay: `${
                                                            (index % 8) * 45
                                                        }ms`,
                                                    }}
                                                >
                                                    <ProductCard
                                                        product={product}
                                                    />
                                                </div>
                                            )
                                    )}
                                </div>

                                {/* Results Footer */}
                                <div className="mt-8 flex items-center justify-between border-t border-app-border-light pt-5">
                                    <p className="text-[11px] text-app-text-muted">
                                        Showing{" "}
                                        <span className="font-semibold text-app-text">
                                            {products.filter(
                                                (product) =>
                                                    product.stock > 0
                                            ).length}
                                        </span>{" "}
                                        available products
                                    </p>

                                    <div className="hidden items-center gap-1.5 text-[10px] text-app-text-muted sm:flex">
                                        <span className="size-1.5 rounded-full bg-app-green" />
                                        Fresh &amp; ready to order
                                    </div>
                                </div>
                            </>
                        )}

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="mt-12 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 animate-slide-in-up">

                                {/* Previous */}
                                {page > 1 && (
                                    <button
                                        type="button"
                                        onClick={() => {
                                            updateFilter(
                                                "page",
                                                String(page - 1)
                                            );
                                            scrollTo(0, 0);
                                        }}
                                        className="hidden rounded-xl border border-app-border bg-white px-3 py-2 text-xs font-semibold text-app-text-light transition-all duration-200 hover:border-app-blue/30 hover:bg-app-blue-light hover:text-app-blue sm:block"
                                    >
                                        Previous
                                    </button>
                                )}

                                {Array.from({
                                    length: totalPages,
                                }).map((_, i) => (
                                    <button
                                        type="button"
                                        key={i}
                                        onClick={() => {
                                            updateFilter(
                                                "page",
                                                String(i + 1)
                                            );
                                            scrollTo(0, 0);
                                        }}
                                        className={`flex size-9 items-center justify-center rounded-xl text-xs font-bold transition-all duration-300 ${
                                            page === i + 1
                                                ? "bg-app-blue text-white shadow-[0_6px_18px_rgba(66,133,244,0.25)] hover:bg-app-blue-dark"
                                                : "border border-transparent bg-white text-app-text-light hover:-translate-y-0.5 hover:border-app-border hover:bg-app-blue-light hover:text-app-blue"
                                        }`}
                                    >
                                        {i + 1}
                                    </button>
                                ))}

                                {/* Next */}
                                {page < totalPages && (
                                    <button
                                        type="button"
                                        onClick={() => {
                                            updateFilter(
                                                "page",
                                                String(page + 1)
                                            );
                                            scrollTo(0, 0);
                                        }}
                                        className="hidden rounded-xl border border-app-border bg-white px-3 py-2 text-xs font-semibold text-app-text-light transition-all duration-200 hover:border-app-blue/30 hover:bg-app-blue-light hover:text-app-blue sm:block"
                                    >
                                        Next
                                    </button>
                                )}
                            </div>
                        )}
                    </main>
                </div>
            </div>

            {/* =========================================
                MOBILE FILTER MODAL
            ========================================== */}
            {mobileFiltersOpen && (
                <>
                    {/* Overlay */}
                    <div
                        className="fixed inset-0 z-50 bg-[#0F172A]/45 backdrop-blur-[2px] animate-fade-in"
                        onClick={() =>
                            setMobileFiltersOpen(false)
                        }
                    />

                    {/* Bottom Sheet */}
                    <div className="fixed bottom-0 left-0 right-0 z-50 max-h-[88vh] overflow-y-auto rounded-t-[28px] border-t border-app-border bg-white shadow-2xl animate-slide-in-up">

                        {/* Handle */}
                        <div className="flex justify-center pt-3">
                            <span className="h-1 w-10 rounded-full bg-app-border-dark" />
                        </div>

                        {/* Header */}
                        <div className="flex items-center justify-between border-b border-app-border-light px-5 py-4">
                            <div className="flex items-center gap-3">
                                <div className="flex size-9 items-center justify-center rounded-xl bg-app-blue-light text-app-blue">
                                    <SlidersHorizontal className="size-4" />
                                </div>

                                <div>
                                    <h3 className="text-sm font-bold text-app-text">
                                        Filter Products
                                    </h3>
                                    <p className="text-[10px] text-app-text-muted">
                                        Find exactly what you need
                                    </p>
                                </div>
                            </div>

                            <button
                                type="button"
                                onClick={() =>
                                    setMobileFiltersOpen(false)
                                }
                                className="flex size-9 items-center justify-center rounded-xl bg-app-surface-soft text-app-text-light transition-all duration-200 hover:bg-app-error/10 hover:text-app-error active:scale-95"
                                aria-label="Close filters"
                            >
                                <XIcon className="size-4" />
                            </button>
                        </div>

                        {/* Filter Content */}
                        <div className="p-5 pb-8">
                            <FilterPanel
                                categories={categoriesData}
                                category={category}
                                organic={organic}
                                minPrice={minPrice}
                                maxPrice={maxPrice}
                                updateFilter={updateFilter}
                                clearFilters={clearFilters}
                                hasFilters={hasFilters}
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    setMobileFiltersOpen(false)
                                }
                                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-app-green py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:bg-app-green-dark active:scale-[0.98]"
                            >
                                <CheckCircle2 className="size-4" />
                                Show Products
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Products;
