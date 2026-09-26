import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
    ArrowRightIcon,
    HeartIcon,
    LeafIcon,
    MinusIcon,
    PlusIcon,
    ShieldCheckIcon,
    ShoppingCartIcon,
    SparklesIcon,
    StarIcon,
    TruckIcon,
} from "lucide-react";

import { useCart } from "../context/CartContext";
import type { Product } from "../types";
import DummyReviewsSection from "../assets/DummyReviewsSection";
import ProductCard from "../components/ProductCard";
import Loading from "../components/Loading";
import api from "../config/api";

const ProductPage = () => {
    const currency = import.meta.env.VITE_CURRENCY_SYMBOL || "$";
    const { id } = useParams();
    const navigate = useNavigate();

    const {
        items,
        addToCart,
        updateQuantity,
        removeFromCart,
    } = useCart();

    const [product, setProduct] = useState<Product | null>(null);
    const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [localQuantity, setLocalQuantity] = useState(1);

    useEffect(() => {
        setLoading(true);
        setLocalQuantity(1);
        window.scrollTo(0, 0);

        api.get(`/products/${id}`)
            .then(({ data }) => {
                setProduct(data.product);

                return api.get(
                    `/products?category=${data.product.category}`
                );
            })
            .then(({ data }) => {
                setRelatedProducts(
                    data.products.filter(
                        (p: Product) => p.id !== id
                    )
                );
            })
            .catch(() => navigate("/products"))
            .finally(() => setLoading(false));
    }, [id, navigate]);

    if (loading) {
        return <Loading />;
    }

    if (!product) {
        return null;
    }

    const cartItem = items.find(
        (item) => item.product.id === product.id
    );

    const inCart = !!cartItem;

    const displayQuantity = inCart
        ? cartItem.quantity
        : localQuantity;

    const handleMinus = () => {
        if (inCart) {
            if (cartItem.quantity > 1) {
                updateQuantity(
                    product.id,
                    cartItem.quantity - 1
                );
            } else {
                removeFromCart(product.id);
            }
        } else {
            setLocalQuantity(
                Math.max(1, localQuantity - 1)
            );
        }
    };

    const handlePlus = () => {
        if (inCart) {
            updateQuantity(
                product.id,
                cartItem.quantity + 1
            );
        } else {
            setLocalQuantity(localQuantity + 1);
        }
    };

    const categoryLabel = product.category.replace(
        /-/g,
        " "
    );

    const roundedRating = Math.round(product.rating);

    return (
        <div className="min-h-screen bg-app-cream">

            {/* Background Decoration */}
            <div className="pointer-events-none fixed inset-0 overflow-hidden">
                <div className="absolute -right-40 top-32 size-96 rounded-full bg-app-blue/5 blur-3xl" />
                <div className="absolute -left-40 top-[55%] size-96 rounded-full bg-app-green/5 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-[1440px] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">


                {/* =========================================
                    PRODUCT DETAILS
                ========================================== */}
                <section className="overflow-hidden rounded-[28px] border border-app-border bg-white shadow-app-sm animate-slide-in-up">

                    <div className="grid lg:grid-cols-2">

                        {/* =================================
                            PRODUCT IMAGE
                        ================================== */}
                        <div className="relative min-h-[360px] overflow-hidden bg-gradient-to-br from-app-surface-soft via-white to-app-blue-lighter/50 sm:min-h-[500px] lg:min-h-[620px]">

                            {/* Decorative Shapes */}
                            <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-app-blue/5 blur-2xl" />
                            <div className="pointer-events-none absolute -bottom-28 -left-20 size-72 rounded-full bg-app-green/5 blur-2xl" />

                            {/* Image */}
                            <div className="relative flex h-full min-h-[360px] items-center justify-center p-8 sm:min-h-[500px] sm:p-12 lg:min-h-[620px] lg:p-16">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="relative z-10 max-h-[300px] w-auto object-contain drop-shadow-[0_25px_35px_rgba(16,24,40,0.12)] transition-transform duration-700 hover:scale-105 sm:max-h-[390px] lg:max-h-[460px]"
                                />
                            </div>

                            {/* Product Badges */}
                            <div className="absolute left-5 top-5 z-20 flex flex-wrap gap-2 sm:left-7 sm:top-7">
                                {product.isOrganic && (
                                    <span className="inline-flex items-center gap-1.5 rounded-full bg-app-green px-3 py-1.5 text-[10px] font-bold text-white shadow-sm">
                                        <LeafIcon className="size-3" />
                                        Organic
                                    </span>
                                )}

                                {product.discount > 0 && (
                                    <span className="rounded-full bg-app-orange px-3 py-1.5 text-[10px] font-bold text-white shadow-sm">
                                        {product.discount}% OFF
                                    </span>
                                )}
                            </div>

                            {/* Image Trust Badge */}
                            <div className="absolute bottom-5 left-5 z-20 hidden items-center gap-2 rounded-xl border border-white/80 bg-white/85 px-3 py-2 shadow-app-md backdrop-blur-md sm:flex">
                                <div className="flex size-7 items-center justify-center rounded-lg bg-app-green-light text-app-green">
                                    <ShieldCheckIcon className="size-3.5" />
                                </div>

                                <div>
                                    <p className="text-[10px] font-bold text-app-text">
                                        Quality checked
                                    </p>
                                    <p className="text-[9px] text-app-text-muted">
                                        Fresh &amp; trusted
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* =================================
                            PRODUCT INFORMATION
                        ================================== */}
                        <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-12 xl:p-16">

                            {/* Category */}
                            <div className="mb-3 flex items-center gap-2">
                                <span className="h-1 w-6 rounded-full bg-app-orange" />

                                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-app-green">
                                    {categoryLabel}
                                </span>
                            </div>

                            {/* Title */}
                            <h1 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-app-text sm:text-4xl lg:text-[42px]">
                                {product.name}
                            </h1>

                            {/* Rating */}
                            {product.rating > 0 && (
                                <div className="mt-5 flex flex-wrap items-center gap-3">
                                    <div className="flex items-center gap-0.5 rounded-lg bg-app-yellow-light px-2.5 py-1.5">
                                        {[1, 2, 3, 4, 5].map(
                                            (star) => (
                                                <StarIcon
                                                    key={star}
                                                    className={`size-3.5 ${
                                                        star <=
                                                        roundedRating
                                                            ? "fill-app-warning text-app-warning"
                                                            : "text-app-border"
                                                    }`}
                                                />
                                            )
                                        )}
                                    </div>

                                    <span className="text-sm font-bold text-app-text">
                                        {product.rating}
                                    </span>

                                    <span className="text-xs text-app-text-light">
                                        {product.reviewCount}{" "}
                                        reviews
                                    </span>
                                </div>
                            )}

                            {/* Price */}
                            <div className="mt-6 flex flex-wrap items-end gap-3">
                                <span className="text-3xl font-bold tracking-tight text-app-green sm:text-4xl">
                                    {currency}
                                    {product.price.toFixed(2)}
                                </span>

                                {product.originalPrice >
                                    product.price && (
                                    <span className="mb-1 text-base text-app-text-muted line-through">
                                        {currency}
                                        {product.originalPrice.toFixed(
                                            2
                                        )}
                                    </span>
                                )}

                                {product.discount > 0 && (
                                    <span className="mb-1 rounded-full bg-app-orange-light px-2.5 py-1 text-[10px] font-bold text-app-orange-dark">
                                        Save{" "}
                                        {product.discount}%
                                    </span>
                                )}
                            </div>

                            {/* Divider */}
                            <div className="my-6 h-px bg-app-border-light" />

                            {/* Description */}
                            <p className="max-w-2xl text-sm leading-7 text-app-text-light sm:text-[15px]">
                                {product.description}
                            </p>

                            {/* Stock */}
                            <div className="mt-6">
                                {product.stock > 0 ? (
                                    <div className="inline-flex items-center gap-2 rounded-full bg-app-green-light px-3 py-1.5 text-xs font-semibold text-app-green">
                                        <span className="relative flex size-2">
                                            <span className="absolute inline-flex size-full animate-ping rounded-full bg-app-green opacity-40" />
                                            <span className="relative inline-flex size-2 rounded-full bg-app-green" />
                                        </span>

                                        In Stock ·{" "}
                                        {product.stock}{" "}
                                        available
                                    </div>
                                ) : (
                                    <div className="inline-flex items-center gap-2 rounded-full bg-app-error/10 px-3 py-1.5 text-xs font-semibold text-app-error">
                                        <span className="size-2 rounded-full bg-app-error" />
                                        Currently out of stock
                                    </div>
                                )}
                            </div>

                            {/* Quantity + Cart */}
                            <div className="mt-7 flex flex-col gap-3 sm:flex-row">

                                {/* Quantity */}
                                <div className="flex h-13 items-center overflow-hidden rounded-xl border border-app-border bg-app-surface-soft">
                                    <button
                                        type="button"
                                        onClick={handleMinus}
                                        className="flex h-full w-11 items-center justify-center text-app-text-light transition-colors hover:bg-app-border-light hover:text-app-text active:scale-95"
                                        aria-label="Decrease quantity"
                                    >
                                        <MinusIcon className="size-4" />
                                    </button>

                                    <span className="flex min-w-[46px] items-center justify-center text-sm font-bold text-app-text">
                                        {displayQuantity}
                                    </span>

                                    <button
                                        type="button"
                                        onClick={handlePlus}
                                        className="flex h-full w-11 items-center justify-center text-app-text-light transition-colors hover:bg-app-border-light hover:text-app-text active:scale-95"
                                        aria-label="Increase quantity"
                                    >
                                        <PlusIcon className="size-4" />
                                    </button>
                                </div>

                                {/* Add to Cart */}
                                <button
                                    type="button"
                                    onClick={() => {
                                        if (!inCart) {
                                            addToCart(
                                                product,
                                                localQuantity
                                            );
                                        }
                                    }}
                                    disabled={product.stock === 0}
                                    className={`group flex h-13 flex-1 items-center justify-center gap-2 rounded-xl px-5 text-sm font-bold shadow-sm transition-all duration-300 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 ${
                                        inCart
                                            ? "border border-app-green bg-app-green-light text-app-green hover:bg-app-green-lighter"
                                            : "bg-app-orange text-white hover:-translate-y-0.5 hover:bg-app-orange-dark hover:shadow-[0_10px_25px_rgba(255,172,28,0.25)]"
                                    }`}
                                >
                                    <ShoppingCartIcon className="size-4 transition-transform duration-300 group-hover:scale-110" />

                                    {inCart
                                        ? "Added to Cart"
                                        : "Add to Cart"}

                                    {!inCart && (
                                        <ArrowRightIcon className="size-3.5 opacity-70 transition-transform duration-300 group-hover:translate-x-1" />
                                    )}
                                </button>

                                {/* Wishlist Visual Button */}
                                <button
                                    type="button"
                                    aria-label="Add to wishlist"
                                    className="hidden size-13 shrink-0 items-center justify-center rounded-xl border border-app-border bg-white text-app-text-light transition-all duration-300 hover:border-app-error/20 hover:bg-app-error/5 hover:text-app-error active:scale-95 sm:flex"
                                >
                                    <HeartIcon className="size-5" />
                                </button>
                            </div>

                            {/* Service Benefits */}
                            <div className="mt-8 grid grid-cols-1 gap-3 border-t border-app-border-light pt-6 sm:grid-cols-2">

                                <div className="flex items-center gap-3">
                                    <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-app-blue-light text-app-blue">
                                        <TruckIcon className="size-4" />
                                    </div>

                                    <div>
                                        <p className="text-xs font-bold text-app-text">
                                            Fast delivery
                                        </p>
                                        <p className="mt-0.5 text-[10px] text-app-text-muted">
                                            Fresh at your doorstep
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-app-green-light text-app-green">
                                        <ShieldCheckIcon className="size-4" />
                                    </div>

                                    <div>
                                        <p className="text-xs font-bold text-app-text">
                                            Quality guaranteed
                                        </p>
                                        <p className="mt-0.5 text-[10px] text-app-text-muted">
                                            Carefully selected products
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================
                    CUSTOMER REVIEWS
                ========================================== */}
                {product.reviewCount > 0 && (
                    <div className="mt-10 animate-slide-in-up">
                        <DummyReviewsSection product={product} />
                    </div>
                )}

                {/* =========================================
                    RELATED PRODUCTS
                ========================================== */}
                {relatedProducts.length > 0 && (
                    <section className="mb-40 mt-14 animate-slide-in-up">

                        {/* Header */}
                        <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                            <div>
                                <div className="mb-2 flex items-center gap-2">
                                    <span className="flex size-7 items-center justify-center rounded-lg bg-app-yellow-light text-app-yellow-dark">
                                        <SparklesIcon className="size-3.5" />
                                    </span>

                                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-app-green">
                                        You may also like
                                    </span>
                                </div>

                                <h2 className="text-2xl font-bold tracking-tight text-app-text sm:text-3xl">
                                    Related Products
                                </h2>

                                <p className="mt-1.5 text-sm text-app-text-light">
                                    More fresh picks from{" "}
                                    <span className="capitalize">
                                        {categoryLabel}
                                    </span>
                                </p>
                            </div>

                            <Link
                                to={`/products?category=${product.category}`}
                                className="group inline-flex w-fit items-center gap-2 rounded-full border border-app-border bg-white px-4 py-2.5 text-xs font-bold text-app-orange shadow-app-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-app-orange/30 hover:bg-app-orange-light hover:shadow-app-md"
                            >
                                View All
                                <ArrowRightIcon className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                        </div>

                        {/* Product Grid */}
                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5 xl:gap-5">
                            {relatedProducts
                                .slice(0, 5)
                                .map((rp, index) => (
                                    <div
                                        key={rp.id}
                                        className="animate-slide-in-up"
                                        style={{
                                            animationDelay: `${
                                                index * 60
                                            }ms`,
                                        }}
                                    >
                                        <ProductCard product={rp} />
                                    </div>
                                ))}
                        </div>

                        {/* Bottom Accent */}
                        <div className="mt-8 h-px bg-gradient-to-r from-app-blue/10 via-app-border to-app-green/10" />
                    </section>
                )}
            </div>
        </div>
    );
};

export default ProductPage;
