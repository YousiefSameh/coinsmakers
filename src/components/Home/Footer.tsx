import Logo from "@assets/Logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    Company: ["About Us", "Careers", "Press", "Blog"],
    Resources: ["Help Center", "Community", "Partners", "Affiliates"],
    Legal: ["Terms of Service", "Privacy Policy", "Cookie Policy", "Security"],
  };

  return (
    <footer className="bg-blue-middle">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img src={Logo} className="h-12 mb-4" alt="Coinsmakers" />
            <p className="mb-4 text-blue-light">
              The #1 platform for earning money online through games, surveys,
              and more. Join millions making money online daily.
            </p>
            <div className="flex gap-4">
              {["📱", "👍", "🐦", "📸", "👉"].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity bg-panel-bg"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          {Object.entries(links).map(([category, categoryLinks]) => (
            <div key={category}>
              <h3 className="font-bold mb-4 text-main-color">
                {category}
              </h3>
              <ul className="space-y-2">
                {categoryLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="hover:underline text-blue-light"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div
          className="pt-8 mt-8 border-t flex flex-col md:flex-row justify-center items-center"
        >
          <div className="text-blue-light">
            &copy; {currentYear} CoinsMaker. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
