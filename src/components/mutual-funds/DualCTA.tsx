import Link from "next/link";

export default function DualCTA({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-row items-center gap-4 w-full sm:w-auto ${className}`}>
      <button className="flex-1 sm:flex-none px-4 sm:px-8 py-3.5 rounded-full bg-surface-gray text-black text-[0.875rem] md:text-base font-medium hover:bg-gray-100 transition-colors">
        Download App
      </button>
      <Link
        href="https://app-dev.equidux.com/sign-in"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 sm:flex-none px-4 sm:px-8 py-3.5 rounded-full bg-black text-white text-[0.875rem] md:text-base font-medium hover:bg-gray-800 transition-colors text-center"
      >
        Create Account
      </Link>
    </div>
  );
}
