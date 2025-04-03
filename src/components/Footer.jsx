const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white p-6 text-center mt-12">
        <p className="text-lg">&copy; {new Date().getFullYear()} Psicología | Todos los derechos reservados</p>
        <div className="flex justify-center mt-2">
          <a href="https://www.instagram.com/" target="_blank" className="text-white hover:text-yellow-200 mx-2">
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <a href="https://www.facebook.com/" target="_blank" className="text-white hover:text-yellow-200 mx-2">
            <i className="fab fa-facebook"></i> Facebook
          </a>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  