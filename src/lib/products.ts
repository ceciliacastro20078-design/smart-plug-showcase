import productImgMini from "@/assets/slug_mini.jpeg";
import productImgOffice from "@/assets/slug_office.jpeg";
import productImgP3 from "@/assets/slug_p3.jpeg";
import productImgPro from "@/assets/slug_pro.jpeg";
import productImgSolo from "@/assets/slug_solo.jpeg";


export type Product = {
  slug: string;
  name: string;
  price: number;
  tagline: string;
  description: string;
  features: string[];
  image: string;
};

export const products: Product[] = [
  {
    slug: "mini",
    name: "EcoSwitch Mini",
    price: 9.9,
    tagline: "Compacto e essencial.",
    description:
      "A versão mais compacta do EcoSwitch. Ideal para carregadores e pequenos aparelhos que ficam permanentemente ligados à tomada. Corte físico de energia, sem necessidade de Wi-Fi.",
    features: [
      "Corte físico total da corrente",
      "Deteção automática de standby",
      "Formato compacto, ocupa apenas uma tomada",
      "Sem necessidade de aplicação ou internet",
    ],
    image: productImgMini,
  },
  {
    slug: "solo",
    name: "EcoSwitch Solo",
    price: 17.9,
    tagline: "Uma tomada, poupança real.",
    description:
      "O modelo padrão da gama EcoSwitch. Perfeito para televisores, cafeteiras e sistemas de som. O sensor aprende o padrão de standby do aparelho e desliga a corrente automaticamente.",
    features: [
      "Sensor inteligente que aprende o padrão do aparelho",
      "Indicador LED discreto",
      "Compatível com qualquer aparelho doméstico",
      "Instalação plug & play",
    ],
    image: productImgSolo,
  },
  {
    slug: "pack-3",
    name: "EcoSwitch Pack 3",
    price: 37.9,
    tagline: "Toda a casa protegida.",
    description:
      "Conjunto de três adaptadores EcoSwitch Solo, ideal para equipar a sala, o quarto e o escritório. A solução completa para eliminar o consumo fantasma em toda a casa.",
    features: [
      "3 unidades EcoSwitch Solo",
      "Poupança até 12% na fatura mensal",
      "Embalagem 100% reciclável",
      "Garantia de 2 anos",
    ],
    image: productImgP3,
  },
  {
    slug: "office-strip",
    name: "EcoSwitch Office Strip",
    price: 39.9,
    tagline: "Multitomada inteligente para o escritório.",
    description:
      "Extensão com 4 tomadas, cada uma com deteção independente de standby. Perfeita para o setup de trabalho: monitor, computador, impressora e candeeiro.",
    features: [
      "4 tomadas com deteção independente",
      "Proteção contra sobretensão",
      "Cabo de 1,5 m com fio têxtil",
      "Design minimalista para secretária",
    ],
    image: productImgOffice,
  },
  {
    slug: "pro",
    name: "EcoSwitch Pro",
    price: 59.9,
    tagline: "Eficiência máxima, dados reais.",
    description:
      "O topo de gama da EcoSwitch. Inclui ecrã integrado com leitura de consumo em tempo real, histórico de poupança e modo de programação por horários.",
    features: [
      "Ecrã com consumo em tempo real",
      "Histórico mensal de poupança",
      "Modo programado por horários",
      "Acabamento premium em alumínio escovado",
    ],
    image: productImgPro,
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
