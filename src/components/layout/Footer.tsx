import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  MessageCircle,
  Send,
  Phone,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-[1440px] mx-auto px-20 py-16">
        <div className="grid grid-cols-12 gap-8 mb-16">
          {/* Logo and Description */}
          <div className="col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-green-500 rounded-lg"></div>
              <span className="text-white text-2xl font-bold tracking-tight">
                Skillfulsense
              </span>
            </div>
            <p className="text-white text-lg leading-relaxed tracking-tight max-w-[320px]">
              AI-powered learning paths, smart skill tests, and personalized
              course suggestions — all in one place.
            </p>
          </div>

          {/* Contact Information */}
          <div className="col-span-3 col-start-8">
            <h4 className="text-white text-xl font-medium mb-6">Contact us:</h4>
            <div className="space-y-1">
              <div className="text-white text-sm font-semibold opacity-80">
                +1 (406) 555-0120
              </div>
              <div className="text-white text-sm font-semibold opacity-80">
                +1 (480) 555-0103
              </div>
            </div>
          </div>

          {/* Social Media - Follow us */}
          <div className="col-span-2 col-start-10">
            <h4 className="text-white text-xl font-medium mb-6">Follow us:</h4>
            <div className="flex gap-3">
              <div className="w-12 h-12 border border-white/25 rounded-full flex items-center justify-center hover:bg-white/10 cursor-pointer">
                <Facebook className="w-5 h-5 text-white" />
              </div>
              <div className="w-12 h-12 border border-white/25 rounded-full flex items-center justify-center hover:bg-white/10 cursor-pointer">
                <Twitter className="w-4 h-4 text-white" />
              </div>
              <div className="w-12 h-12 border border-white/25 rounded-full flex items-center justify-center hover:bg-white/10 cursor-pointer">
                <Instagram className="w-5 h-5 text-white" />
              </div>
              <div className="w-12 h-12 border border-white/25 rounded-full flex items-center justify-center hover:bg-white/10 cursor-pointer">
                <Youtube className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Let's Chat Section */}
        <div className="flex justify-end mb-16">
          <div>
            <h4 className="text-white text-xl font-medium mb-6">Let's chat:</h4>
            <div className="flex gap-3">
              <div className="w-12 h-12 border border-white/25 rounded-full flex items-center justify-center hover:bg-white/10 cursor-pointer">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div className="w-12 h-12 border border-white/25 rounded-full flex items-center justify-center hover:bg-white/10 cursor-pointer">
                <Send className="w-5 h-5 text-white" />
              </div>
              <div className="w-12 h-12 border border-white/25 rounded-full flex items-center justify-center hover:bg-white/10 cursor-pointer">
                <Phone className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white mb-8"></div>

        {/* Footer Bottom */}
        <div className="flex items-center justify-between">
          {/* Footer Links */}
          <div className="flex items-center gap-8">
            <a
              href="#"
              className="text-white text-lg font-semibold hover:text-green-400 transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-white text-lg">|</span>
            <a
              href="#"
              className="text-white text-lg font-semibold hover:text-green-400 transition-colors"
            >
              Terms & Conditions
            </a>
            <span className="text-white text-lg">|</span>
            <a
              href="#"
              className="text-white text-lg font-semibold hover:text-green-400 transition-colors"
            >
              Cookie Policy
            </a>
          </div>

          {/* Copyright */}
          <div className="text-white text-base font-medium">
            © Skillfulsense 2025
          </div>
        </div>
      </div>
    </footer>
  );
}
