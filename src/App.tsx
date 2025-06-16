
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Placeholder routes - will be implemented in future iterations */}
          <Route path="/institucional" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl">Página Institucional - Em Desenvolvimento</h1></div>} />
          <Route path="/produtos-profissionais" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl">Produtos Profissionais - Em Desenvolvimento</h1></div>} />
          <Route path="/ciencia" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl">Ciência e Inovação - Em Desenvolvimento</h1></div>} />
          <Route path="/distribuicao" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl">Distribuição - Em Desenvolvimento</h1></div>} />
          <Route path="/blog-tecnico" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl">Blog Técnico - Em Desenvolvimento</h1></div>} />
          <Route path="/loja" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl">Loja Virtual - Em Desenvolvimento</h1></div>} />
          <Route path="/produtos" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl">Produtos - Em Desenvolvimento</h1></div>} />
          <Route path="/blog" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl">Blog de Saúde - Em Desenvolvimento</h1></div>} />
          <Route path="/parcerias" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl">Parcerias - Em Desenvolvimento</h1></div>} />
          <Route path="/suporte" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl">Suporte - Em Desenvolvimento</h1></div>} />
          <Route path="/sobre" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl">Sobre Nós - Em Desenvolvimento</h1></div>} />
          <Route path="/contato" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl">Contato - Em Desenvolvimento</h1></div>} />
          
          {/* Legal pages */}
          <Route path="/politica-privacidade" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl">Política de Privacidade - Em Desenvolvimento</h1></div>} />
          <Route path="/termos-uso" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl">Termos de Uso - Em Desenvolvimento</h1></div>} />
          <Route path="/cookies" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl">Política de Cookies - Em Desenvolvimento</h1></div>} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
