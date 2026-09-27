import {
    ArrowUpRightIcon,
    ChevronDownIcon,
    LogOutIcon,
    MapPinIcon,
    MenuIcon,
    PackageIcon,
    SearchIcon,
    ShieldIcon,
    ShoppingCartIcon,
    UserIcon,
    XIcon,
} from "lucide-react";
import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
    const { user, logout } = useAuth();
    const { cartCount, setIsCartOpen } = useCart();
    const [searchQuery, setSearchQuery] = useState("");
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleSearch = (e: FormEvent) => {
        e.preventDefault();

        if (searchQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
            setSearchQuery("");
        }
    };

    const handleLogout = () => {
        logout();
        setUserMenuOpen(false);
        navigate("/");
    };

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/95 backdrop-blur-xl">
            <div className="mx-auto flex h-[72px] max-w-[1440px] items-center gap-4 px-4 sm:px-6 lg:px-8">

                {/* =========================================================
                    BRAND
                ========================================================== */}
                <Link
                    to="/"
                    className="group flex shrink-0 items-center gap-2.5"
                >
                    <div className="relative flex size-10 items-center justify-center overflow-hidden rounded-xl bg-blue-50 ring-1 ring-blue-100 transition-all duration-300 group-hover:scale-105 group-hover:ring-blue-200">
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

                        <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.18em] text-zinc-400">
                            Fresh • Fast • Simple
                        </span>
                    </div>
                </Link>

                {/* =========================================================
                    MAIN CONTENT
                ========================================================== */}
                <div className="flex min-w-0 flex-1 items-center justify-end gap-3 lg:gap-6">

                    {/* =====================================================
                        DESKTOP NAVIGATION
                    ====================================================== */}
                    <div className="hidden items-center gap-1 lg:flex">

                        <Link
                            to="/"
                            className="group relative rounded-xl px-3.5 py-2 text-sm font-semibold text-zinc-700 transition-colors duration-200 hover:bg-blue-50 hover:text-[#4285F4]"
                        >
                            Home
                            <span className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-[#4285F4] transition-all duration-300 group-hover:w-4" />
                        </Link>

                        <Link
                            to="/products"
                            className="group relative rounded-xl px-3.5 py-2 text-sm font-semibold text-zinc-700 transition-colors duration-200 hover:bg-blue-50 hover:text-[#4285F4]"
                        >
                            Products
                            <span className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-[#4285F4] transition-all duration-300 group-hover:w-4" />
                        </Link>

                        <Link
                            to="/deals"
                            className="group relative flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-sm font-semibold text-[#FFAC1C] transition-colors duration-200 hover:bg-orange-50"
                        >
                            Deals

                            <span className="rounded-full bg-[#FBBC05]/15 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-[#d89500]">
                                Hot
                            </span>

                            <span className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-[#FFAC1C] transition-all duration-300 group-hover:w-4" />
                        </Link>
                    </div>

                    {/* =====================================================
                        SEARCH
                    ====================================================== */}
                    <form
                        onSubmit={handleSearch}
                        className="hidden min-w-0 flex-1 sm:flex sm:max-w-[360px] lg:max-w-[410px]"
                    >
                        <div className="group relative w-full">

                            <SearchIcon
                                className="absolute left-3.5 top-1/2 size-[18px] -translate-y-1/2 text-zinc-400 transition-colors duration-200 group-focus-within:text-[#4285F4]"
                            />

                            <input
                                type="text"
                                placeholder="Search groceries, fruits, vegetables..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="
                                    h-11
                                    w-full
                                    rounded-full
                                    border
                                    border-zinc-200
                                    bg-zinc-50
                                    pl-11
                                    pr-4
                                    text-sm
                                    text-zinc-900
                                    outline-none
                                    placeholder:text-zinc-400
                                    transition-all
                                    duration-200
                                    hover:border-zinc-300
                                    hover:bg-white
                                    focus:border-[#4285F4]
                                    focus:bg-white
                                    focus:ring-4
                                    focus:ring-[#4285F4]/10
                                "
                            />

                            {/* Search shortcut */}
                            <div className="pointer-events-none absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-md border border-zinc-200 bg-white px-1.5 py-0.5 text-[10px] font-medium text-zinc-400 xl:block">
                                Search
                            </div>
                        </div>
                    </form>

                    {/* =====================================================
                        RIGHT ACTIONS
                    ====================================================== */}
                    <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">

                        {/* Mobile Search */}
                        <button
                            type="button"
                            onClick={() => {
                                if (searchQuery.trim()) {
                                    navigate(
                                        `/search?q=${encodeURIComponent(
                                            searchQuery.trim()
                                        )}`
                                    );
                                    setSearchQuery("");
                                }
                            }}
                            className="
                                flex
                                size-10
                                items-center
                                justify-center
                                rounded-full
                                text-zinc-600
                                transition-all
                                hover:bg-blue-50
                                hover:text-[#4285F4]
                                sm:hidden
                            "
                            aria-label="Search"
                        >
                            <SearchIcon className="size-[19px]" />
                        </button>

                        {/* =================================================
                            CART
                        ================================================== */}
                        <button
                            type="button"
                            onClick={() => setIsCartOpen(true)}
                            className="
                                group
                                relative
                                flex
                                size-10
                                items-center
                                justify-center
                                rounded-full
                                text-zinc-700
                                transition-all
                                duration-200
                                hover:bg-orange-50
                                hover:text-[#FFAC1C]
                            "
                            aria-label="Shopping cart"
                        >
                            <ShoppingCartIcon
                                className="size-[20px] transition-transform duration-200 group-hover:scale-105"
                            />

                            {cartCount > 0 && (
                                <span
                                    className="
                                        absolute
                                        -right-0.5
                                        -top-0.5
                                        flex
                                        min-w-[18px]
                                        h-[18px]
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#FFAC1C]
                                        px-1
                                        text-[9px]
                                        font-extrabold
                                        text-white
                                        shadow-sm
                                        ring-2
                                        ring-white
                                    "
                                >
                                    {cartCount > 99 ? "99+" : cartCount}
                                </span>
                            )}
                        </button>

                        {/* Vertical Divider */}
                        <div className="mx-1 hidden h-7 w-px bg-zinc-200 sm:block" />

                        {/* =================================================
                            USER
                        ================================================== */}
                        <div className="relative">

                            {user ? (
                                <button
                                    type="button"
                                    onClick={() =>
                                        setUserMenuOpen(!userMenuOpen)
                                    }
                                    className="
                                        flex
                                        items-center
                                        gap-2
                                        rounded-full
                                        p-1
                                        pr-2.5
                                        transition-all
                                        duration-200
                                        hover:bg-zinc-100
                                    "
                                >
                                    <div
                                        className="
                                            flex
                                            size-9
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-gradient-to-br
                                            from-[#4285F4]
                                            to-[#34A853]
                                            text-sm
                                            font-bold
                                            text-white
                                            shadow-sm
                                        "
                                    >
                                        {user.name
                                            ?.charAt(0)
                                            .toUpperCase()}
                                    </div>

                                    <div className="hidden text-left md:block">
                                        <p className="max-w-[90px] truncate text-xs font-semibold text-zinc-900">
                                            {user.name}
                                        </p>

                                        <p className="text-[10px] text-zinc-400">
                                            Account
                                        </p>
                                    </div>

                                    <ChevronDownIcon
                                        className={`hidden size-3.5 text-zinc-400 transition-transform duration-200 sm:block ${
                                            userMenuOpen
                                                ? "rotate-180"
                                                : ""
                                        }`}
                                    />
                                </button>
                            ) : (
                                <div className="flex items-center gap-2">

                                    {/* Desktop Sign In */}
                                    <Link
                                        to="/login"
                                        className="
                                            hidden
                                            items-center
                                            gap-2
                                            rounded-full
                                            bg-[#4285F4]
                                            px-4
                                            py-2.5
                                            text-sm
                                            font-semibold
                                            text-white
                                            shadow-sm
                                            transition-all
                                            duration-200
                                            hover:-translate-y-0.5
                                            hover:bg-[#3578e5]
                                            hover:shadow-md
                                            md:flex
                                        "
                                    >
                                        <UserIcon size={16} />
                                        Sign In
                                    </Link>

                                    {/* Mobile Menu */}
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setUserMenuOpen(!userMenuOpen)
                                        }
                                        className="
                                            flex
                                            size-10
                                            items-center
                                            justify-center
                                            rounded-full
                                            text-zinc-700
                                            transition-all
                                            hover:bg-zinc-100
                                            md:hidden
                                        "
                                        aria-label="Menu"
                                    >
                                        {userMenuOpen ? (
                                            <XIcon className="size-5" />
                                        ) : (
                                            <MenuIcon className="size-5" />
                                        )}
                                    </button>
                                </div>
                            )}

                            {/* =================================================
                                USER / MOBILE DROPDOWN
                            ================================================== */}
                            {userMenuOpen && (
                                <>
                                    <div
                                        className="fixed inset-0 z-40 bg-black/5 backdrop-blur-[1px]"
                                        onClick={() =>
                                            setUserMenuOpen(false)
                                        }
                                    />

                                    <div
                                        className="
                                            absolute
                                            right-0
                                            z-50
                                            mt-3
                                            w-[270px]
                                            overflow-hidden
                                            rounded-2xl
                                            border
                                            border-zinc-200
                                            bg-white
                                            shadow-[0_20px_60px_-15px_rgba(0,0,0,0.18)]
                                            animate-fade-in
                                        "
                                    >

                                        {/* User Header */}
                                        {user ? (
                                            <div className="border-b border-zinc-100 bg-gradient-to-br from-blue-50/80 via-white to-green-50/50 p-4">
                                                <div className="flex items-center gap-3">

                                                    <div
                                                        className="
                                                            flex
                                                            size-11
                                                            shrink-0
                                                            items-center
                                                            justify-center
                                                            rounded-full
                                                            bg-gradient-to-br
                                                            from-[#4285F4]
                                                            to-[#34A853]
                                                            text-base
                                                            font-bold
                                                            text-white
                                                        "
                                                    >
                                                        {user.name
                                                            ?.charAt(0)
                                                            .toUpperCase()}
                                                    </div>

                                                    <div className="min-w-0">
                                                        <p className="truncate text-sm font-bold text-zinc-900">
                                                            {user.name}
                                                        </p>

                                                        <p className="mt-0.5 truncate text-xs text-zinc-500">
                                                            {user.email}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="border-b border-zinc-100 bg-gradient-to-br from-blue-50 to-white p-4">
                                                <p className="text-sm font-bold text-zinc-900">
                                                    Welcome to Nexora
                                                </p>

                                                <p className="mt-1 text-xs leading-relaxed text-zinc-500">
                                                    Sign in to manage your
                                                    orders and account.
                                                </p>

                                                <Link
                                                    to="/login"
                                                    onClick={() =>
                                                        setUserMenuOpen(false)
                                                    }
                                                    className="
                                                        mt-3
                                                        flex
                                                        w-full
                                                        items-center
                                                        justify-center
                                                        gap-2
                                                        rounded-xl
                                                        bg-[#4285F4]
                                                        px-4
                                                        py-2.5
                                                        text-xs
                                                        font-bold
                                                        text-white
                                                        transition-colors
                                                        hover:bg-[#3578e5]
                                                    "
                                                >
                                                    <UserIcon size={15} />
                                                    Sign In
                                                </Link>
                                            </div>
                                        )}

                                        {/* Menu Items */}
                                        <div className="p-2">

                                            {user && (
                                                <Link
                                                    to="/orders"
                                                    onClick={() =>
                                                        setUserMenuOpen(false)
                                                    }
                                                    className="
                                                        group
                                                        flex
                                                        items-center
                                                        gap-3
                                                        rounded-xl
                                                        px-3
                                                        py-2.5
                                                        text-sm
                                                        text-zinc-700
                                                        transition-colors
                                                        hover:bg-blue-50
                                                        hover:text-[#4285F4]
                                                    "
                                                >
                                                    <span className="flex size-8 items-center justify-center rounded-lg bg-blue-50 text-[#4285F4] transition-colors group-hover:bg-blue-100">
                                                        <PackageIcon size={16} />
                                                    </span>

                                                    <span className="font-medium">
                                                        My Orders
                                                    </span>

                                                    <ArrowUpRightIcon
                                                        size={14}
                                                        className="ml-auto text-zinc-300 group-hover:text-[#4285F4]"
                                                    />
                                                </Link>
                                            )}

                                            {user && (
                                                <Link
                                                    to="/addresses"
                                                    onClick={() =>
                                                        setUserMenuOpen(false)
                                                    }
                                                    className="
                                                        group
                                                        flex
                                                        items-center
                                                        gap-3
                                                        rounded-xl
                                                        px-3
                                                        py-2.5
                                                        text-sm
                                                        text-zinc-700
                                                        transition-colors
                                                        hover:bg-green-50
                                                        hover:text-[#34A853]
                                                    "
                                                >
                                                    <span className="flex size-8 items-center justify-center rounded-lg bg-green-50 text-[#34A853] transition-colors group-hover:bg-green-100">
                                                        <MapPinIcon size={16} />
                                                    </span>

                                                    <span className="font-medium">
                                                        Addresses
                                                    </span>

                                                    <ArrowUpRightIcon
                                                        size={14}
                                                        className="ml-auto text-zinc-300 group-hover:text-[#34A853]"
                                                    />
                                                </Link>
                                            )}

                                            {/* Mobile Navigation */}
                                            <div className="md:hidden">
                                                <Link
                                                    to="/"
                                                    onClick={() =>
                                                        setUserMenuOpen(false)
                                                    }
                                                    className="dropdown-link group"
                                                >
                                                    <ArrowUpRightIcon size={16} />
                                                    Home
                                                </Link>

                                                <Link
                                                    to="/products"
                                                    onClick={() =>
                                                        setUserMenuOpen(false)
                                                    }
                                                    className="dropdown-link group"
                                                >
                                                    <ArrowUpRightIcon size={16} />
                                                    Products
                                                </Link>

                                                <Link
                                                    to="/deals"
                                                    onClick={() =>
                                                        setUserMenuOpen(false)
                                                    }
                                                    className="dropdown-link group !text-[#FFAC1C]"
                                                >
                                                    <ArrowUpRightIcon size={16} />
                                                    Deals
                                                </Link>
                                            </div>

                                            {/* Admin */}
                                            {user?.isAdmin && (
                                                <Link
                                                    to="/admin/products"
                                                    onClick={() =>
                                                        setUserMenuOpen(false)
                                                    }
                                                    className="
                                                        mt-1
                                                        flex
                                                        items-center
                                                        gap-3
                                                        rounded-xl
                                                        px-3
                                                        py-2.5
                                                        text-sm
                                                        text-[#FFAC1C]
                                                        transition-colors
                                                        hover:bg-orange-50
                                                    "
                                                >
                                                    <span className="flex size-8 items-center justify-center rounded-lg bg-orange-50">
                                                        <ShieldIcon size={16} />
                                                    </span>

                                                    <span className="font-semibold">
                                                        Admin Panel
                                                    </span>

                                                    <ArrowUpRightIcon
                                                        size={14}
                                                        className="ml-auto"
                                                    />
                                                </Link>
                                            )}

                                            {/* Logout */}
                                            {user && (
                                                <div className="mt-2 border-t border-zinc-100 pt-2">
                                                    <button
                                                        type="button"
                                                        onClick={handleLogout}
                                                        className="
                                                            flex
                                                            w-full
                                                            items-center
                                                            gap-3
                                                            rounded-xl
                                                            px-3
                                                            py-2.5
                                                            text-sm
                                                            font-medium
                                                            text-red-500
                                                            transition-colors
                                                            hover:bg-red-50
                                                        "
                                                    >
                                                        <span className="flex size-8 items-center justify-center rounded-lg bg-red-50">
                                                            <LogOutIcon
                                                                size={16}
                                                            />
                                                        </span>

                                                        Logout
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* =============================================================
                MOBILE SEARCH BAR
            ============================================================= */}
            <div className="border-t border-zinc-100 bg-white px-4 py-2.5 sm:hidden">
                <form onSubmit={handleSearch}>
                    <div className="relative">
                        <SearchIcon className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-zinc-400" />

                        <input
                            type="text"
                            placeholder="Search groceries..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="
                                h-10
                                w-full
                                rounded-full
                                border
                                border-zinc-200
                                bg-zinc-50
                                pl-10
                                pr-4
                                text-sm
                                outline-none
                                transition-all
                                placeholder:text-zinc-400
                                focus:border-[#4285F4]
                                focus:bg-white
                                focus:ring-4
                                focus:ring-[#4285F4]/10
                            "
                        />
                    </div>
                </form>
            </div>
        </nav>
    );
};

export default Navbar;