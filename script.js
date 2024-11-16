const data = [
    { category: 'Sobre nós', detail: 'Fundada em 2004, na Philadelphia – USA, a Lima Consulting Group possui uma rede de experientes consultores e especialistas técnicos por toda a América, incluindo Estados Unidos, São Paulo, Porto Alegre, Curitiba, Paris e Montevideo. Somos inovadores, somos integradores e provedores de soluções através de parcerias com os principais líderes de martech. Temos em nosso DNA o uso de dados e tecnologia para alavancar resultados de negócio. Somos também agnósticos, com uma visão consultiva direcionada a entregar resultados para nossos clientes, independente da tecnologia utilizada.' },
    { category: 'No Brasil', detail: 'Iniciamos no Brasil Brasil em 2010, através de um centro de excelência em Porto Alegre, RS e um escritório comercial em São Paulo, SP. No período de Pandemia (2020) migramos para o formato remoto e nos mantemos nele até hoje, nossos 50+ limers possuem a liberdade de trabalhar de onde quiserem :) A principal característica do nosso time é a especialização nas mais diversas ferramentas de martech. Nossos 50+ funcionários são altamente especializados em Consultoria, Dados e Tecnologia e possuem juntos mais de 50 certificações nas melhores ferramentas e plataformas do mercado.' },
    { category: 'Nosso fundador', detail: 'Autor, palestrante e visionário, Paul passou mais de 25 anos liderando empresas e ajudando as principais marcas do mundo a transformar seu futuro digital. Antes de iniciar a LCG em 2004, Paul serviu como um dos primeiros guerreiros cibernéticos da América no Exército dos EUA. Depois de se aposentar do Exército, Paul se tornou um líder de desenvolvimento de produtos na SEI, a plataforma de contabilidade de confiança líder global. Lá, ele liderou seis soluções FinTech e supervisionou sua evolução, incluindo um esforço para habilitar a web Trust3000 Anywhere, o produto carro-chefe da empresa, responsável pelo processamento de US $ 1,5 trilhão por dia. Paul é o autor do modelo de maturidade de transformação digital. Ele é um Adobe Certified Expert e certificado em vários produtos Google. Paul possui bacharelado em ciências pela Academia Militar dos Estados Unidos em West Point e mestrado em gestão de tecnologia, concedido conjuntamente pela Escola de Engenharia da Universidade da Pensilvânia (SEAS) e pela Wharton School. Fala português, espanhol e inglês.' },
    { category: 'Nossa missão', detail: 'Ajudar organizações em seus processos de transformação digital, com o entendimento consultivo, implementações e otimizações em que o uso de dados e tecnologia alavanquem resultados de negócio e gerem vantagens competitivas.' },
    { category: 'Nossa visão', detail: 'Ser a consultoria de confiança para empresas visionárias globalmente.' },
    { category: 'O que a Lima faz', detail: 'Ajudamos as organizações a desenvolver, implantar e otimizar iniciativas digitais para obter vantagens competitivas sustentáveis. Desenvolvemos, entregamos e medimos Transformação Digital orientada a dados.' },
    { category: 'Como fazemos', detail: 'SERVIÇOS especializados, Melhores TECNOLOGIAS, Conhecimento DO CLIENTE. Valorizamos as características inteligentes, trabalhadoras e empreendedoras. Investimos no aprendizado a cada dia, tanto em esforços formais quanto informais, para aprimorar nossos conhecimentos e solucionar melhor os problemas mais desafiadores de nossos clientes. Nossos valores de integridade, serviço abnegado, dever, respeito e paixão pela liderança inovadora orientam nossas ações dentro e fora do escritório.' },
    { category: 'Base de dados', detail: 'Customer-Centric, orientada à visão do consumidor. Jornada do consumidor única, com dados online e offline. Seleção de ferramentas e arquitetura técnica alinhada com maturidade digital do cliente.' },
    { category: 'Serviços especializados', detail: 'Experiência e know-how em transformação digital orientada ao uso de dados. Engenharia de Dados orientada para coleta, integração e automação de fontes de dados. Consultores especializados para modelagem e segmentação de dados.' },
    { category: 'Uso de dados', detail: 'Ativação de dados em propriedades digitais. Ativação do uso de dados para serem integrados com ferramentas externas. Dashboard com indicadores de sucesso. Melhorar resultados de negócio através do uso de DADOS.' },
    { category: 'Nosso trabalho', detail: 'DADOS QUE ENTREGAM VALOR DE NEGÓCIO.' },
    { category: 'Times da Lima', detail: 'Consultores especialistas no modelo de transformação digital da Lima Consulting (DTMM) para construção de uma cultura de uso de dados em ambientes corporativos. Entendimento e mapeamento das necessidades de negócio, fontes de dados, KPIs, métricas que orientam o negócio e especialistas em cada etapa da maturidade digital.' },
    { category: 'Consulting', detail: 'Especialistas técnicos na coleta de dados alinhados com objetivos de negócio, integração da jornada do consumidor, validação técnica de implementações de ferramentas, automação de processos de coleta, organização e transformação de dados, configurações de ambientes data-driven e engenharia de software relacionada com soluções orientadas a dados.' },
    { category: 'Data', detail: 'Especialistas com profundidade na implementação técnica de tecnologias data-driven (Analytics, Tag Management, CDP, DMP, Automação de Marketing, Otimização, Atribuição).' },
    { category: 'Tech', detail: 'Áreas administrativas: comercial, RH, financeiro, marketing, projetos.' },
    { category: 'Atividades', detail: 'Assessment e mapeamento de necessidades de negócio. Relação direta com os pontos-de-contato do cliente. Utilização, configuração e suporte em ferramentas data-driven: Analytics, Martech, Otimização, Atribuição. Priorização de roadmap e gestão de projeto para agregar valor ao negócio. Ponto de vista estratégico e tático do andamento de cada etapa de transformação digital orientada ao uso de dados.' },
    { category: 'Data', detail: 'Construção, desenvolvimento e manutenção de infraestruturas de dados baseadas em nuvem em ambientes corporativos (ex.: AWS, Google Cloud, Azure). Uso de ferramental para construir fluxos de dados e data sets que atendam requisitos de negócio. Integrações e automações de processos relacionados a dados. Preparação de dados para modelagem. Deploy de soluções baseadas em dados, machine learning e modelos estatísticos. Uso de ferramental para garantia de qualidade de dados.' },
    { category: 'Tech', detail: 'Construção de documentações técnicas e especificações de coleta e integração de dados. Interlocução com equipes técnicas do cliente que participem do processo de implementação. Utilização de melhores práticas de mensuração, implementação e configuração de ferramentas. Quality & Assurance dos processo de implementação. Suporte técnico avançado e troubleshooting em ferramentas.' },
    { category: 'Nossos horários', detail: 'Entrada: 9h00. Intervalo: 12h00-13h30. Saída: 18h00min.' },
    { category: 'Dia do pagamento', detail: 'Dia 25 de cada mês. Crédito na conta Itaú. Contracheque por e-mail.' },
    { category: 'Benefícios', detail: 'Os benefícios, são vale-refeição,Auxílio Home Office, Vale-Alimentação,Day-off de aniversário. Auxílio creche. Licença maternidade e paternidade estendidas. Gympass - Via Caju+. Plano de Saúde. Plano Odontológico.' },
];

document.getElementById('searchButton').addEventListener('click', async () => {
    const query = document.getElementById('searchInput').value;
    const result = await searchData(query);
    displayResults(result);
});
 
async function searchData(query) {
    // Converte a consulta para minúsculas
    const queryLower = query.toLowerCase();
 
    // Divide a consulta em palavras-chave
    const keywords = queryLower.split(' ');
 
    // Procura no array 'data' por uma correspondência com qualquer palavra-chave
    const item = data.find(item =>
        keywords.some(keyword =>
            new RegExp(keyword, 'i').test(item.detail) || // Busca no detalhe
            new RegExp(keyword, 'i').test(item.category) // Busca na categoria
        )
    );
 
    if (item) {
        // Chama a OpenAI API para gerar uma resposta natural
        const response = await callOpenAIAPI(item.detail, query);
        return response;
    } else {
        return { answer: 'Informação não encontrada.' };
    }
}
async function callOpenAIAPI(detail, query) {
    const apiKey = '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'; // Substitua pela sua chave da API
 
    const prompt = `Aqui estão algumas informações internas:\n${data.map(item => `${item.category}: ${item.detail}`).join('\n')}\n\nPergunta do usuário: "${query}"\nBaseando-se na seguinte informação: "${detail}", responda de forma natural e amigável ao usuário.`;
 
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo', 
                messages: [
                    { role: 'system', content: 'Você é um assistente útil.' },
                    { role: 'user', content: prompt }
                ],
                max_tokens: 100,
                temperature: 0.5
            })
        });
 
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Request failed with status ${response.status}: ${errorText}`);
        }
 
        const responseData = await response.json();
        const cleanText = responseData.choices[0].message.content.trim();
 
        return { answer: cleanText };
    } catch (error) {
        console.error('Erro ao chamar a API OpenAI:', error);
        return { answer: 'Ocorreu um erro ao processar a informação.' };
    }
}
 
// Função para exibir os resultados na página

function displayResults(results) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';
 
    if (results.answer) {
        resultsContainer.innerHTML = `<p>${results.answer}</p>`;
    } else {
        resultsContainer.innerHTML = '<p>Nenhum resultado encontrado.</p>';
    }
}