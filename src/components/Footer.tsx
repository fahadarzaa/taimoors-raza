const Footer = () => {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-display text-lg font-bold gradient-gold-text">Taimoor Raza</div>
        <p className="text-sm text-muted-foreground text-center">
          © {new Date().getFullYear()} Taimoor Raza. All rights reserved.
        </p>
        <div className="flex gap-4">
          {["LinkedIn", "Fiverr", "Upwork"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
