const Footer = () => {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-display text-lg font-bold gradient-gold-text">Taimoor Raza</div>
        <p className="text-sm text-muted-foreground text-center">
          © {new Date().getFullYear()} Taimoor Raza. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a href="https://www.facebook.com/share/181gWidEzd/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">Facebook</a>
          <a href="https://www.linkedin.com/in/maliktaimoorraza" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
