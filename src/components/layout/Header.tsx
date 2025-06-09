import { Button } from "@/components/ui/button";
import { Search, ChevronDown } from "lucide-react";

export function Header() {
  return (
    <header className="w-full bg-black border-b border-gray-800">
      <div className="max-w-[1440px] mx-auto px-4 h-[84px] flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-green-500 rounded-lg"></div>
          <span className="text-white text-xl font-bold">Skillfulsense</span>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-2 px-4 py-2 text-white hover:text-green-400 cursor-pointer">
            <span>About SFS</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <div className="flex items-center gap-2 px-4 py-2 text-white hover:text-green-400 cursor-pointer">
            <span>Features</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <div className="flex items-center gap-2 px-4 py-2 text-white hover:text-green-400 cursor-pointer">
            <span>Testimonials</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <div className="flex items-center gap-2 px-4 py-2 text-white hover:text-green-400 cursor-pointer">
            <span>Company</span>
            <ChevronDown className="w-4 h-4" />
          </div>
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:text-green-400"
          >
            <Search className="w-5 h-5" />
          </Button>
          <div className="hidden md:flex items-center gap-2">
            <Button
              variant="outline"
              className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black"
            >
              Get Demo
            </Button>
            <Button variant="ghost" className="text-white hover:text-green-400">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
