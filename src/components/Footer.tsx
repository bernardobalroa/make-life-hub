
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-makelife-teal-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-makelife-teal rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">ML</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-makelife-teal">Make</span>
                <span className="text-xl font-bold text-white">Life</span>
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              A nº1 em cuidados proctológicos e higiene íntima da região anal. 
              Inovação científica ao serviço do seu bem-estar.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-300 hover:text-makelife-teal transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-makelife-teal transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-makelife-teal transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/institucional" className="text-gray-300 hover:text-makelife-teal transition-colors">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link to="/ciencia" className="text-gray-300 hover:text-makelife-teal transition-colors">
                  Ciência e Inovação
                </Link>
              </li>
              <li>
                <Link to="/distribuicao" className="text-gray-300 hover:text-makelife-teal transition-colors">
                  Representantes
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-300 hover:text-makelife-teal transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Produtos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/produtos-profissionais" className="text-gray-300 hover:text-makelife-teal transition-colors">
                  Linha Profissional
                </Link>
              </li>
              <li>
                <Link to="/loja" className="text-gray-300 hover:text-makelife-teal transition-colors">
                  Loja Online
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-makelife-teal transition-colors">
                  Blog de Saúde
                </Link>
              </li>
              <li>
                <Link to="/parcerias" className="text-gray-300 hover:text-makelife-teal transition-colors">
                  Parcerias
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-makelife-teal mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>Lisboa, Portugal</p>
                  <p>Europa</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-makelife-teal flex-shrink-0" />
                <span className="text-sm text-gray-300">+351 21 000 0000</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-makelife-teal flex-shrink-0" />
                <span className="text-sm text-gray-300">contacto@makelife.pt</span>
              </div>
            </div>

            <div className="mt-6 p-3 bg-makelife-teal/20 rounded-lg">
              <p className="text-sm text-gray-300">
                <strong className="text-makelife-teal">Distribuição Europa</strong><br />
                Entre em contacto para consultas internacionais
              </p>
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-600" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-300">
            © 2024 MakeLife. Todos os direitos reservados.
          </div>
          <div className="flex space-x-6 text-sm">
            <Link to="/politica-privacidade" className="text-gray-300 hover:text-makelife-teal transition-colors">
              Política de Privacidade
            </Link>
            <Link to="/termos-uso" className="text-gray-300 hover:text-makelife-teal transition-colors">
              Termos de Utilização
            </Link>
            <Link to="/cookies" className="text-gray-300 hover:text-makelife-teal transition-colors">
              Política de Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
