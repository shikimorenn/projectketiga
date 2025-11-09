import React from "react";
import { FaInstagram, FaWhatsapp, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <section id="footer">
      <footer className="bg-gradient-to-t from-blue-900 to-blue-600 text-white py-8 mt-10 pb-32">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-8">
            <div className="flex sm:flex-col items-center sm:items-start gap-4 sm:gap-3">
              <a
                href="https://instagram.com/worlldmarket_"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition-colors text-2xl"
              >
                <FaInstagram />
              </a>

              <a
                href="https://wa.me/6281299004985"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition-colors text-2xl"
              >
                <FaWhatsapp />
              </a>

              <a
                href="https://twitter.com/Shikimoreng"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition-colors text-2xl"
              >
                <FaXTwitter />
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-sm text-center sm:text-left flex-1">
              <div>
                <h4 className="font-semibold mb-2">Dukungan</h4>
                <ul className="space-y-1">
                  <li>Pertanyaan Umum</li>
                  <li>Kebijakan Umum</li>
                  <li>Diskon & Promo</li>
                  <li>Kebijakan Privasi</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Tentang Kami</h4>
                <ul className="space-y-1">
                  <li>Profil</li>
                  <li>Karier</li>
                  <li>Testimoni</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Bantuan</h4>
                <ul className="space-y-1">
                  <li>Hubungi Kami</li>
                  <li>Pusat Bantuan</li>
                  <li>FAQ</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-10 border-t border-white/30 pt-4 text-center text-sm">
            <p>© 2025 Shikimoren.</p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
