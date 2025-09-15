import { useState, useEffect } from 'react';

export const useConfig = <T>(configFile: string): T | null => {
  const [config, setConfig] = useState<T | null>(null);

  useEffect(() => {
    const loadConfig = async () => {
      try {
        const response = await fetch(`/config/${configFile}`);
        if (!response.ok) {
          throw new Error(`Failed to load ${configFile}`);
        }
        const data = await response.json();
        setConfig(data);
      } catch (error) {
        console.error(`Error loading config file ${configFile}:`, error);
      }
    };

    loadConfig();
  }, [configFile]);

  return config;
};

// Tipos TypeScript para cada configuração
export interface SiteConfig {
  titulo: string;
  logo: string;
  favicon: string;
  cores: {
    primaria: string;
    secundaria: string;
    background: string;
    foreground: string;
    muted: string;
    mutedForeground: string;
    accent: string;
    accentForeground: string;
    destructive: string;
    border: string;
    input: string;
    ring: string;
  };
  meta: {
    description: string;
    keywords: string;
    author: string;
  };
}

export interface HeroConfig {
  titulo: string;
  subtitulo: string;
  imagemBanner: string;
  beneficiosDestaque: Array<{
    icone: string;
    texto: string;
  }>;
  botoes: Array<{
    texto: string;
    icone: string;
    tipo: string;
    link: string;
  }>;
  indicadoresConfianca: string[];
}

export interface PlanosConfig {
  titulo: string;
  subtitulo: string;
  planos: Array<{
    nome: string;
    preco: string;
    periodo: string;
    icone: string;
    descricao: string;
    recursos: string[];
    popular: boolean;
    textoBotao: string;
  }>;
  informacoesAdicionais: {
    testeGratis: string;
    beneficios: string[];
  };
}

export interface CanaisConfig {
  titulo: string;
  subtitulo: string;
  categorias: Array<{
    nome: string;
    icone: string;
    quantidade: string;
    cor: string;
    corFundo: string;
    canaisExemplo: string[];
  }>;
  recursos: Array<{
    titulo: string;
    descricao: string;
  }>;
}

export interface ContatoConfig {
  titulo: string;
  subtitulo: string;
  metodosContato: Array<{
    icone: string;
    titulo: string;
    descricao: string;
    acao: string;
    link: string;
    destaque: boolean;
  }>;
  horarioAtendimento: Array<{
    dia: string;
    horario: string;
  }>;
  suporteTecnico: string[];
  atendimentoPremium: {
    titulo: string;
    descricao: string;
    textoBotao: string;
  };
}

export interface SeriesConfig {
  titulo: string;
  subtitulo: string;
  series: Array<{
    titulo: string;
    imagem: string;
    categoria: string;
    ano: string;
  }>;
}

export interface FilmesConfig {
  titulo: string;
  subtitulo: string;
  filmes: Array<{
    titulo: string;
    imagem: string;
    categoria: string;
    ano: string;
  }>;
}