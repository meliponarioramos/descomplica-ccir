import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Download, Shield, Clock, Users, FileText, Award, Star } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-2">
            <FileText className="h-8 w-8 text-green-600" />
            <span className="text-2xl font-bold text-green-800">CCIR Expert</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4 bg-green-100 text-green-800">
            🎯 Guia Completo e Atualizado 2024
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold text-green-900 mb-6 leading-tight">
            Guia Prático do CCIR
          </h1>
          
          <p className="text-xl md:text-2xl text-green-700 mb-4 font-medium">
            Tudo o que Você Precisa Saber para Regularizar 
            sua Propriedade Rural com o INCRA
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Domine todos os processos, evite multas e garanta a regularização da sua propriedade rural 
            de forma rápida e segura com nosso guia definitivo.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
            <div className="flex items-center space-x-2 text-green-600">
              <CheckCircle className="h-5 w-5" />
              <span>180+ páginas de conteúdo prático</span>
            </div>
            <div className="flex items-center space-x-2 text-green-600">
              <Download className="h-5 w-5" />
              <span>PDF para download imediato</span>
            </div>
            <div className="flex items-center space-x-2 text-green-600">
              <Shield className="h-5 w-5" />
              <span>Garantia de 30 dias</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problema Section */}
      <section className="bg-red-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-red-800 mb-6">
              ⚠️ Você Sabia Que Pode Estar Perdendo Dinheiro?
            </h2>
            <div className="space-y-4 text-lg text-red-700">
              <p>• Multas do INCRA podem chegar a <strong>R$ 50.000</strong> por irregularidades no CCIR</p>
              <p>• Propriedades sem regularização não podem acessar crédito rural</p>
              <p>• Processos de venda ficam travados sem a documentação correta</p>
              <p>• Herança rural se torna um pesadelo sem regularização prévia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solução Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-12">
              🎯 A Solução Completa Está Aqui!
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-green-700">
                    <FileText className="h-6 w-6" />
                    <span>O Que Você Vai Aprender</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Como preencher corretamente o CCIR sem erros</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Documentação necessária e como organizar</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Prazos e procedimentos do INCRA</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Como evitar multas e penalidades</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Regularização de propriedades herdadas</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Casos práticos e exemplos reais</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-green-700">
                    <Award className="h-6 w-6" />
                    <span>Benefícios Exclusivos</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-2">
                      <Star className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span>Conteúdo atualizado com as últimas mudanças de 2024</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Star className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span>Modelos de documentos prontos para uso</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Star className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span>Checklist completo para não esquecer nada</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Star className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span>Linguagem simples e didática</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Star className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span>Acesso vitalício ao conteúdo</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Star className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span>Suporte por email para dúvidas</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Oferta Section */}
      <section className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              🚀 Oferta Especial de Lançamento!
            </h2>
            
            <Card className="bg-white text-green-900 p-8">
              <div className="text-center space-y-4">
                <div className="text-2xl font-bold text-red-600">
                  Oferta Limitada!
                </div>
                <div className="text-4xl font-bold">
                  <span className="line-through text-muted-foreground text-2xl mr-2">R$ 97,00</span>
                  R$ 49,90
                </div>
                <p className="text-sm text-muted-foreground">
                  Investimento único • Acesso imediato após o pagamento
                </p>
              </div>
              
              <div className="mt-8 space-y-4">
                <Button size="lg" className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-6">
                  🔥 QUERO REGULARIZAR MINHA PROPRIEDADE AGORA!
                </Button>
                
                <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Shield className="h-4 w-4" />
                    <span>Compra 100% Segura</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>Acesso Imediato</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
            💬 O Que Nossos Clientes Dizem
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-green-200">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm mb-4">
                  "Consegui regularizar minha propriedade em apenas 2 meses seguindo o guia. 
                  Economizei mais de R$ 3.000 que gastaria com despachante!"
                </p>
                <div className="text-sm font-medium text-green-700">
                  - Maria Santos, Produtora Rural
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm mb-4">
                  "Linguagem clara e objetiva. Finalmente entendi todos os processos do CCIR. 
                  Recomendo para qualquer proprietário rural!"
                </p>
                <div className="text-sm font-medium text-green-700">
                  - João Silva, Fazendeiro
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm mb-4">
                  "Evitei uma multa de R$ 15.000 porque aprendi sobre os prazos corretos. 
                  O guia se pagou em dobro!"
                </p>
                <div className="text-sm font-medium text-green-700">
                  - Carlos Oliveira, Pecuarista
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Garantia Section */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Shield className="h-16 w-16 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-blue-800 mb-6">
              🛡️ Garantia Total de 30 Dias
            </h2>
            <p className="text-lg text-blue-700 mb-4">
              Estamos tão confiantes na qualidade do nosso guia que oferecemos 
              <strong> 30 dias de garantia incondicional</strong>.
            </p>
            <p className="text-blue-600">
              Se por qualquer motivo você não ficar satisfeito, devolvemos 100% do seu dinheiro. 
              Sem perguntas, sem complicações!
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ⚡ Não Perca Mais Tempo!
            </h2>
            <p className="text-xl mb-8">
              Regularize sua propriedade hoje mesmo e tenha a tranquilidade que você merece.
            </p>
            
            <div className="bg-white text-green-900 p-8 rounded-lg mb-8">
              <div className="text-4xl font-bold mb-4">R$ 49,90</div>
              <Button size="lg" className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-6">
                💳 COMPRAR AGORA COM DESCONTO
              </Button>
            </div>
            
            <div className="flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>Mais de 500 proprietários atendidos</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Oferta por tempo limitado</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-green-100 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <FileText className="h-6 w-6" />
            <span className="text-xl font-bold">CCIR Expert</span>
          </div>
          <p className="text-sm">
            © 2024 CCIR Expert. Todos os direitos reservados.
          </p>
          <p className="text-xs mt-2 text-green-300">
            Este produto é vendido pelo site da Hotmart. A plataforma não faz controle editorial 
            prévio dos produtos comercializados, tão menos avalia a tecnicidade e experiência 
            daqueles que os produzem.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;