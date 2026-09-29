export const menuSections = [
  {
    id: 'breakfast',
    name: {
      en: 'Breakfast & Brunch',
      fr: 'Petits déjeuners & Brunch',
    },
    subcategories: [
      {
        id: 'breakfast',
        name: {
          en: 'Breakfast',
          fr: 'Petits déjeuners',
        },
      },
      {
        id: 'omelettes',
        name: {
          en: 'Omelettes',
          fr: 'Omelettes',
        },
      },
      {
        id: 'savory-crepes',
        name: {
          en: 'Savory Crêpes',
          fr: 'Crêpes salées',
        },
      },
      {
        id: 'fresh-juice',
        name: {
          en: 'Fresh Juice',
          fr: 'Jus frais',
        },
      },
    ],
  },

  {
    id: 'food',
    name: {
      en: 'Food',
      fr: 'Cuisine',
    },
    subcategories: [
      {
        id: 'starters',
        name: {
          en: 'Starters',
          fr: 'Entrées',
        },
      },
      {
        id: 'salads',
        name: {
          en: 'Salads',
          fr: 'Salades',
        },
      },
      {
        id: 'asian',
        name: {
          en: 'Asian',
          fr: 'Asiatique',
        },
      },
      {
        id: 'pasta',
        name: {
          en: 'Pasta',
          fr: 'Pâtes',
        },
      },
      {
        id: 'gratin',
        name: {
          en: 'Gratin & Stuffed Crêpes',
          fr: 'Gratinés',
        },
      },
      {
        id: 'poultry',
        name: {
          en: 'Poultry',
          fr: 'Volailles',
        },
      },
      {
        id: 'meat',
        name: {
          en: 'Meat',
          fr: 'Viandes',
        },
      },
      {
        id: 'burgers',
        name: {
          en: 'Burgers & Formulas',
          fr: 'Burgers + Formules',
        },
      },
    ],
  },

  {
    id: 'coffee',
    name: {
      en: 'Coffee & Hot',
      fr: 'Café & Chaud',
    },
    subcategories: [
      {
        id: 'coffee',
        name: {
          en: 'Coffee',
          fr: 'Cafés',
        },
      },
      {
        id: 'nespresso',
        name: {
          en: 'Nespresso',
          fr: 'Nespresso',
        },
      },
      {
        id: 'latte',
        name: {
          en: 'Café Latte',
          fr: 'Café Latte',
        },
      },
      {
        id: 'affogato',
        name: {
          en: 'Affogato',
          fr: 'Affogato',
        },
      },
      {
        id: 'hot-drinks',
        name: {
          en: 'Hot Drinks',
          fr: 'Boissons chaudes',
        },
      },
      {
        id: 'chocolate',
        name: {
          en: 'Hot / Ice Choco',
          fr: 'Hot / Ice Choco',
        },
      },
    ],
  },

  {
    id: 'cold',
    name: {
      en: 'Cold & Refreshing',
      fr: 'Frais & Rafraîchissant',
    },
    subcategories: [
      {
        id: 'fresh-juice',
        name: {
          en: 'Fresh Juice',
          fr: 'Jus frais',
        },
      },
      {
        id: 'juice-mixes',
        name: {
          en: 'Juice Mixes',
          fr: 'Jus Duo',
        },
      },
      {
        id: 'smoothies',
        name: {
          en: 'Smoothies',
          fr: 'Smoothies',
        },
      },
      {
        id: 'cocktails',
        name: {
          en: 'Cocktails',
          fr: 'Cocktails',
        },
      },
      {
        id: 'mojitos',
        name: {
          en: 'Mojitos',
          fr: 'Mojitos',
        },
      },
      {
        id: 'jwajem',
        name: {
          en: 'Jwajem',
          fr: 'Jwajem',
        },
      },
      {
        id: 'frappuccino',
        name: {
          en: 'Frappuccino',
          fr: 'Frappuccino',
        },
      },
      {
        id: 'iced-coffee',
        name: {
          en: 'Iced Coffee',
          fr: 'Cafés glacés',
        },
      },
      {
        id: 'drinks',
        name: {
          en: 'Drinks',
          fr: 'Boissons',
        },
      },
    ],
  },

  {
    id: 'sweet',
    name: {
      en: 'Sweet',
      fr: 'Sucré',
    },
    subcategories: [
      {
        id: 'sweet-crepes',
        name: {
          en: 'Sweet Crêpes',
          fr: 'Crêpes sucrées',
        },
      },
      {
        id: 'pancakes',
        name: {
          en: 'Pancakes',
          fr: 'Pancakes',
        },
      },
      {
        id: 'waffles',
        name: {
          en: 'Waffles',
          fr: 'Gaufres',
        },
      },
      {
        id: 'ice-cream',
        name: {
          en: 'Ice Cream',
          fr: 'Glaces',
        },
      },
      {
        id: 'frozen-yogurt',
        name: {
          en: 'Frozen Yogurt',
          fr: 'Yaourt glacé',
        },
      },
    ],
  },

  {
    id: 'healthy',
    name: {
      en: 'Healthy',
      fr: 'Healthy',
    },
    subcategories: [
      {
        id: 'healthy',
        name: {
          en: 'Healthy Food',
          fr: 'Healthy Food',
        },
      },
      {
        id: 'detox',
        name: {
          en: 'Detox',
          fr: 'Detox',
        },
      },
      {
        id: 'bananas',
        name: {
          en: 'Banana Drinks',
          fr: 'Bananas',
        },
      },
    ],
  },
]

export const menuItems = [
  // =========================
  // PETITS DÉJEUNERS
  // =========================

  {
    id: 'breakfast-01',
    category: 'breakfast',
    name: 'Rapi Doose',
    price: 7.5,
  },
  {
    id: 'breakfast-02',
    category: 'breakfast',
    name: 'Court Métrage',
    price: 10.5,
  },
  {
    id: 'breakfast-03',
    category: 'breakfast',
    name: 'Long Métrage',
    price: 16.5,
  },
  {
    id: 'breakfast-04',
    category: 'breakfast',
    name: 'English Breakfast',
    price: 17.5,
  },
  {
    id: 'breakfast-05',
    category: 'breakfast',
    name: 'French Breakfast',
    price: 19.9,
  },
  {
    id: 'breakfast-06',
    category: 'breakfast',
    name: 'Turkish breakfast',
    price: 26.5,
  },
  {
    id: 'breakfast-07',
    category: 'breakfast',
    name: 'Brunch',
    price: 64,
  },
  {
    id: 'breakfast-08',
    category: 'breakfast',
    name: 'American breakfast',
    price: 24.5,
  },
  {
    id: 'breakfast-09',
    category: 'breakfast',
    name: 'Le sportif',
    price: 21.5,
  },
  {
    id: 'breakfast-10',
    category: 'breakfast',
    name: 'Croissant',
    price: 4.2,
  },
  {
    id: 'breakfast-11',
    category: 'breakfast',
    name: 'Pain au chocolat',
    price: 4.5,
  },
  {
    id: 'breakfast-12',
    category: 'breakfast',
    name: 'Croissant Nutella',
    price: 7.2,
  },
  {
    id: 'breakfast-13',
    category: 'breakfast',
    name: 'Croissant Spéculoos',
    price: 7.2,
  },
  {
    id: 'breakfast-14',
    category: 'breakfast',
    name: 'Croissant jambon fromage',
    price: 5.2,
  },
  {
    id: 'breakfast-15',
    category: 'breakfast',
    name: 'Croque monsieur',
    price: 6.5,
  },
  {
    id: 'breakfast-16',
    category: 'breakfast',
    name: 'Croque Tarantino',
    price: 10.2,
  },
  {
    id: 'breakfast-17',
    category: 'breakfast',
    name: 'Charcuterie',
    price: 10.2,
    needsVerification: true,
  },

  // =========================
  // CAFÉS
  // =========================

  {
    id: 'coffee-01',
    category: 'coffee',
    name: 'Expresso',
    price: 3.6,
  },
  {
    id: 'coffee-02',
    category: 'coffee',
    name: 'Americano',
    price: 4,
  },
  {
    id: 'coffee-03',
    category: 'coffee',
    name: 'Capucin',
    price: 4,
  },
  {
    id: 'coffee-04',
    category: 'coffee',
    name: 'Café Crème',
    price: 4.4,
  },
  {
    id: 'coffee-05',
    category: 'coffee',
    name: 'Chocolat au Lait',
    price: 4.4,
  },
  {
    id: 'coffee-06',
    category: 'coffee',
    name: 'Grande Crème',
    price: 4.8,
  },
  {
    id: 'coffee-07',
    category: 'coffee',
    name: 'Cappuccino',
    price: 5.8,
  },
  {
    id: 'coffee-08',
    category: 'coffee',
    name: 'Spéculoos',
    price: 7.8,
  },
  {
    id: 'coffee-09',
    category: 'coffee',
    name: 'Bueno kinder',
    price: 7.8,
  },
  {
    id: 'coffee-10',
    category: 'coffee',
    name: 'Oreo',
    price: 7.8,
  },
  {
    id: 'coffee-11',
    category: 'coffee',
    name: 'Nutella',
    price: 7.8,
  },
  {
    id: 'coffee-12',
    category: 'coffee',
    name: 'Café Gourmand',
    price: 8.8,
  },
  {
    id: 'coffee-13',
    category: 'coffee',
    name: 'Café italien',
    description: 'Tasse biscuit, Café au choix.',
    price: 11.8,
  },

  // =========================
  // NESPRESSO
  // =========================

  {
    id: 'nespresso-01',
    category: 'nespresso',
    name: 'Expresso',
    price: 4.6,
  },
  {
    id: 'nespresso-02',
    category: 'nespresso',
    name: 'Americano',
    price: 5,
  },
  {
    id: 'nespresso-03',
    category: 'nespresso',
    name: 'Capucin',
    price: 5,
  },
  {
    id: 'nespresso-04',
    category: 'nespresso',
    name: 'Café crème',
    price: 5.4,
  },
  {
    id: 'nespresso-05',
    category: 'nespresso',
    name: 'Grand crème',
    price: 5.8,
  },
  {
    id: 'nespresso-06',
    category: 'nespresso',
    name: 'Cappuccino',
    price: 6.8,
  },

  // =========================
  // CAFÉ LATTE
  // =========================

  {
    id: 'latte-01',
    category: 'latte',
    name: 'Latte Cookies',
    price: 7.4,
  },
  {
    id: 'latte-02',
    category: 'latte',
    name: 'Latte Vanille',
    price: 7.4,
  },
  {
    id: 'latte-03',
    category: 'latte',
    name: 'Latte Caramel',
    price: 7.4,
  },
  {
    id: 'latte-04',
    category: 'latte',
    name: 'Latte Noisette',
    price: 7.4,
  },
  {
    id: 'latte-05',
    category: 'latte',
    name: 'Latte Spéculoos',
    price: 7.4,
  },

  // =========================
  // AFFOGATO
  // =========================

  {
    id: 'affogato-01',
    category: 'affogato',
    name: 'Classique',
    price: 4.8,
  },
  {
    id: 'affogato-02',
    category: 'affogato',
    name: 'Nutella',
    price: 6.8,
  },
  {
    id: 'affogato-03',
    category: 'affogato',
    name: 'Noisette',
    price: 7.8,
  },
  {
    id: 'affogato-04',
    category: 'affogato',
    name: 'Pistachio',
    price: 7.8,
  },

  // =========================
  // ENTRÉES
  // =========================

  {
    id: 'starter-01',
    category: 'starters',
    name: 'Soupe Tarantino',
    price: 7,
  },
  {
    id: 'starter-02',
    category: 'starters',
    name: 'Portion Frites',
    price: 6.8,
  },
  {
    id: 'starter-03',
    category: 'starters',
    name: 'Poutine Poulet',
    price: 13.5,
  },
  {
    id: 'starter-04',
    category: 'starters',
    name: 'Poutine Boeuf',
    price: 16.5,
  },
  {
    id: 'starter-05',
    category: 'starters',
    name: 'Calamar doré',
    price: 21,
  },
  {
    id: 'starter-06',
    category: 'starters',
    name: 'Moule à la crème',
    price: 28.5,
  },

  // =========================
  // SALADES
  // =========================

  {
    id: 'salad-01',
    category: 'salads',
    name: 'César',
    price: 19.5,
  },
  {
    id: 'salad-02',
    category: 'salads',
    name: 'Sportive',
    price: 26.5,
  },
  {
    id: 'salad-03',
    category: 'salads',
    name: 'Du Chef',
    price: 24.5,
  },
  {
    id: 'salad-04',
    category: 'salads',
    name: 'Tarantino',
    price: 27.5,
  },
  {
    id: 'salad-05',
    category: 'salads',
    name: 'Saumon',
    price: 32.5,
  },

  // =========================
  // ASIATIQUE
  // =========================

  {
    id: 'asian-01',
    category: 'asian',
    name: 'Teppanyaki Poulet',
    price: 26.5,
  },
  {
    id: 'asian-02',
    category: 'asian',
    name: 'Teppanyaki Crevettes',
    price: 32.5,
  },
  {
    id: 'asian-03',
    category: 'asian',
    name: 'Wok de Poulets',
    price: 26.5,
  },
  {
    id: 'asian-04',
    category: 'asian',
    name: 'Wok de Boeufs',
    price: 34.5,
  },
  {
    id: 'asian-05',
    category: 'asian',
    name: 'Wok fruits de mer',
    price: 32,
  },

  // =========================
  // HEALTHY
  // =========================

  {
    id: 'healthy-01',
    category: 'healthy',
    name: 'Régal Sportif',
    price: 11.5,
  },
  {
    id: 'healthy-02',
    category: 'healthy',
    name: 'Végétarien Sportif',
    price: 13.5,
  },
  {
    id: 'healthy-03',
    category: 'healthy',
    name: 'Intégral Sportif',
    price: 23.8,
  },

  // =========================
  // DETOX
  // =========================

  {
    id: 'detox-01',
    category: 'detox',
    name: 'Green',
    price: 12.5,
  },
  {
    id: 'detox-02',
    category: 'detox',
    name: 'Power',
    price: 12.6,
  },
  {
    id: 'detox-03',
    category: 'detox',
    name: 'Fresh',
    price: 12.6,
  },
  {
    id: 'detox-04',
    category: 'detox',
    name: 'Vitamin',
    price: 12.8,
  },

  // =========================
  // SMOOTHIES
  // =========================

  {
    id: 'smoothie-01',
    category: 'smoothies',
    name: 'Pina Colada',
    price: 11.8,
  },
  {
    id: 'smoothie-02',
    category: 'smoothies',
    name: 'Sweety',
    price: 12.5,
  },
  {
    id: 'smoothie-03',
    category: 'smoothies',
    name: 'Punch',
    price: 12.6,
  },
  {
    id: 'smoothie-04',
    category: 'smoothies',
    name: 'Blue Berry',
    price: 13.5,
  },
  {
    id: 'smoothie-05',
    category: 'smoothies',
    name: 'Happy',
    price: 13.5,
  },

  // =========================
  // COCKTAILS
  // =========================

  {
    id: 'cocktail-01',
    category: 'cocktails',
    name: 'Franbao',
    price: 12.5,
  },
  {
    id: 'cocktail-02',
    category: 'cocktails',
    name: 'Exotic',
    price: 12.5,
  },
  {
    id: 'cocktail-03',
    category: 'cocktails',
    name: 'Apple Berry',
    price: 13.5,
  },
  {
    id: 'cocktail-04',
    category: 'cocktails',
    name: 'Tropical',
    price: 13.5,
  },
  {
    id: 'cocktail-05',
    category: 'cocktails',
    name: 'Paradise',
    price: 14.5,
  },

  // =========================
  // CRÊPES SALÉES
  // =========================

  {
    id: 'savory-crepe-01',
    category: 'savory-crepes',
    name: 'Crêpe Fromage',
    price: 11.5,
  },
  {
    id: 'savory-crepe-02',
    category: 'savory-crepes',
    name: 'Thon Fromage',
    price: 12.8,
  },
  {
    id: 'savory-crepe-03',
    category: 'savory-crepes',
    name: 'Jambon Fromage',
    price: 13.8,
  },
  {
    id: 'savory-crepe-04',
    category: 'savory-crepes',
    name: 'Crêpe Pizza',
    price: 14.5,
  },
  {
    id: 'savory-crepe-05',
    category: 'savory-crepes',
    name: 'Poulet Épinard',
    price: 14.8,
  },
  {
    id: 'savory-crepe-06',
    category: 'savory-crepes',
    name: 'Crêpe Tunisienne',
    price: 14.8,
  },
  {
    id: 'savory-crepe-07',
    category: 'savory-crepes',
    name: 'Crêpe Pepperoni',
    price: 15.8,
  },
  {
    id: 'savory-crepe-08',
    category: 'savory-crepes',
    name: 'Crêpe Italienne',
    price: 17.5,
  },

  // =========================
  // OMELETTES
  // =========================

  {
    id: 'omelette-01',
    category: 'omelettes',
    name: 'Fromage',
    price: 10.8,
  },
  {
    id: 'omelette-02',
    category: 'omelettes',
    name: 'Thon Fromage',
    price: 11.5,
  },
  {
    id: 'omelette-03',
    category: 'omelettes',
    name: 'Jambon Fromage',
    price: 11.5,
  },
  {
    id: 'omelette-04',
    category: 'omelettes',
    name: 'Ricotta épinard',
    price: 11.5,
  },
  {
    id: 'omelette-05',
    category: 'omelettes',
    name: 'Escalope épinard',
    price: 13.5,
  },
  {
    id: 'omelette-06',
    category: 'omelettes',
    name: 'Régal',
    price: 14.5,
  },
  {
    id: 'omelette-07',
    category: 'omelettes',
    name: 'Espagnole',
    price: 15.8,
  },
  {
    id: 'omelette-08',
    category: 'omelettes',
    name: 'TARANTINO',
    price: 18.5,
  },

  // =========================
  // JUS FRAIS
  // =========================

  {
    id: 'fresh-juice-01',
    category: 'fresh-juice',
    name: 'Citronnade',
    price: 6.8,
  },
  {
    id: 'fresh-juice-02',
    category: 'fresh-juice',
    name: 'Orange',
    price: 6.8,
  },
  {
    id: 'fresh-juice-03',
    category: 'fresh-juice',
    name: 'Fraise',
    price: 8.8,
  },
  {
    id: 'fresh-juice-04',
    category: 'fresh-juice',
    name: 'Banane',
    price: 9.5,
  },

  // =========================
  // JUS DUO / AUTRES
  // =========================

  {
    id: 'juice-mix-01',
    category: 'juice-mixes',
    name: 'Yellow',
    description: 'Menthe, Lemon',
    price: 8.5,
  },
  {
    id: 'juice-mix-02',
    category: 'juice-mixes',
    name: 'Red & White',
    description: 'Banane, Fraise',
    price: 10.6,
  },
  {
    id: 'juice-mix-03',
    category: 'juice-mixes',
    name: 'Morning',
    description: 'Orange, Banane',
    price: 10.6,
  },
  {
    id: 'juice-mix-04',
    category: 'juice-mixes',
    name: 'Jus Kiwi Banane',
    price: 12.5,
  },
  {
    id: 'juice-mix-05',
    category: 'juice-mixes',
    name: 'Citronnade aux amandes',
    price: 9.8,
  },
  {
    id: 'juice-mix-06',
    category: 'juice-mixes',
    name: 'Citronnade Sorbet',
    price: 9.8,
  },

  // =========================
  // BANANAS
  // =========================

  {
    id: 'banana-01',
    category: 'bananas',
    name: 'Banane Dattes',
    price: 11.8,
  },
  {
    id: 'banana-02',
    category: 'bananas',
    name: 'Banane Fruits Sec',
    price: 12.8,
  },
  {
    id: 'banana-03',
    category: 'bananas',
    name: 'Banana Moon',
    description: "Banane, Dattes, Miel, Fruits Secs.",
    price: 16.8,
  },
  {
    id: 'banana-04',
    category: 'bananas',
    name: 'Sportif',
    description:
      "Banane, Dattes, Flocon d'avoine, Chia, Miel, Fruits Secs.",
    price: 16.8,
  },

  // =========================
  // MOJITOS
  // =========================

  {
    id: 'mojito-01',
    category: 'mojitos',
    name: 'Virgin',
    price: 9.5,
  },
  {
    id: 'mojito-02',
    category: 'mojitos',
    name: 'Citron Mojito',
    price: 9.8,
  },
  {
    id: 'mojito-03',
    category: 'mojitos',
    name: 'Red',
    price: 10.6,
  },
  {
    id: 'mojito-04',
    category: 'mojitos',
    name: 'Bleu',
    price: 10.6,
  },
  {
    id: 'mojito-05',
    category: 'mojitos',
    name: 'Passion',
    price: 10.6,
  },
  {
    id: 'mojito-06',
    category: 'mojitos',
    name: 'Pêche',
    price: 10.6,
  },
  {
    id: 'mojito-07',
    category: 'mojitos',
    name: 'Kiwi',
    price: 10.8,
  },
  {
    id: 'mojito-08',
    category: 'mojitos',
    name: 'Énergétique',
    price: 10.8,
  },

  // =========================
  // JWAJEM
  // =========================

  {
    id: 'jwajem-01',
    category: 'jwajem',
    name: 'Mini',
    price: 11.5,
  },
  {
    id: 'jwajem-02',
    category: 'jwajem',
    name: 'Big',
    price: 14.5,
  },
  {
    id: 'jwajem-03',
    category: 'jwajem',
    name: 'TARANTINO',
    price: 16.8,
  },

  // =========================
  // FRAPPUCCINO
  // =========================

  {
    id: 'frappuccino-01',
    category: 'frappuccino',
    name: 'Noisette',
    price: 12.6,
  },
  {
    id: 'frappuccino-02',
    category: 'frappuccino',
    name: 'Kinder Bueno',
    price: 12.6,
  },
  {
    id: 'frappuccino-03',
    category: 'frappuccino',
    name: 'Oreo',
    price: 12.6,
  },
  {
    id: 'frappuccino-04',
    category: 'frappuccino',
    name: 'Fruits Secs',
    price: 12.6,
  },
  {
    id: 'frappuccino-05',
    category: 'frappuccino',
    name: 'Caramel Snickers',
    price: 12.6,
  },
  {
    id: 'frappuccino-06',
    category: 'frappuccino',
    name: 'Spéculoos',
    price: 12.6,
  },
  {
    id: 'frappuccino-07',
    category: 'frappuccino',
    name: 'Pistache',
    price: 12.6,
  },
  {
    id: 'frappuccino-08',
    category: 'frappuccino',
    name: 'Nutella',
    price: 14.5,
  },
  {
    id: 'frappuccino-09',
    category: 'frappuccino',
    name: 'Nutella Ferrero Rocher',
    price: 14.5,
  },
  {
    id: 'frappuccino-10',
    category: 'frappuccino',
    name: 'White - Rafaello',
    price: 17.5,
  },
  {
    id: 'frappuccino-11',
    category: 'frappuccino',
    name: 'TARANTINO',
    price: 17.5,
  },

  // =========================
  // YAOURT GLACÉ
  // =========================

  {
    id: 'frozen-yogurt-01',
    category: 'frozen-yogurt',
    name: 'Noisette',
    price: 10.4,
  },
  {
    id: 'frozen-yogurt-02',
    category: 'frozen-yogurt',
    name: 'Nutella',
    price: 10.7,
  },
  {
    id: 'frozen-yogurt-03',
    category: 'frozen-yogurt',
    name: 'Caramel Snickers',
    price: 10.8,
  },
  {
    id: 'frozen-yogurt-04',
    category: 'frozen-yogurt',
    name: 'Fruits Secs',
    price: 10.9,
  },
  {
    id: 'frozen-yogurt-05',
    category: 'frozen-yogurt',
    name: 'Spéculoos',
    price: 10.9,
  },
  {
    id: 'frozen-yogurt-06',
    category: 'frozen-yogurt',
    name: 'Pistaches',
    price: 11.6,
  },
  {
    id: 'frozen-yogurt-07',
    category: 'frozen-yogurt',
    name: 'Nutella Oreo',
    price: 11.6,
  },
  {
    id: 'frozen-yogurt-08',
    category: 'frozen-yogurt',
    name: 'Kinder Bueno',
    price: 12.8,
  },
  {
    id: 'frozen-yogurt-09',
    category: 'frozen-yogurt',
    name: 'Nutella Ferrero Rocher',
    price: 13.8,
  },
  {
    id: 'frozen-yogurt-10',
    category: 'frozen-yogurt',
    name: 'TARANTINO',
    price: 15.8,
  },

  // =========================
  // PÂTES
  // =========================

  {
    id: 'pasta-01',
    category: 'pasta',
    name: 'Puttanesca',
    price: 23.5,
  },
  {
    id: 'pasta-02',
    category: 'pasta',
    name: 'Penne Pesto',
    price: 24.6,
  },
  {
    id: 'pasta-03',
    category: 'pasta',
    name: 'Penne 4 fromages',
    price: 27.5,
  },
  {
    id: 'pasta-04',
    category: 'pasta',
    name: 'Penne Crevettes à la crème',
    price: 27.5,
  },
  {
    id: 'pasta-05',
    category: 'pasta',
    name: 'Spaghetti Bolognaise',
    price: 24.5,
  },
  {
    id: 'pasta-06',
    category: 'pasta',
    name: 'Spaghetti du Chef',
    price: 27.5,
  },
  {
    id: 'pasta-07',
    category: 'pasta',
    name: 'Spaghetti Fruits de Mer',
    price: 34.5,
  },
  {
    id: 'pasta-08',
    category: 'pasta',
    name: 'Tagliatelles TARANTINO',
    price: 34.5,
  },
  {
    id: 'pasta-09',
    category: 'pasta',
    name: 'Tagliatelles SAUMON',
    price: 36.5,
    needsVerification: true,
  },
  {
    id: 'pasta-10',
    category: 'pasta',
    name: 'Tagliatelles Boeuf Champignon',
    price: 36.5,
    needsVerification: true,
  },
  {
    id: 'pasta-11',
    category: 'pasta',
    name: 'Lasagne Bolognaise',
    price: 23.9,
  },
  {
    id: 'pasta-12',
    category: 'pasta',
    name: 'Lasagne Fruits de Mer',
    price: 27.5,
  },

  // =========================
  // GRATINÉS
  // =========================

  {
    id: 'gratin-01',
    category: 'gratin',
    name: 'Crêpe Fourrée Poulet',
    price: 21.5,
  },
  {
    id: 'gratin-02',
    category: 'gratin',
    name: 'Crêpe Fourrée Mexicaine',
    price: 20.5,
  },
  {
    id: 'gratin-03',
    category: 'gratin',
    name: 'Crêpe Fourrée Viande Hachée',
    price: 22.5,
  },
  {
    id: 'gratin-04',
    category: 'gratin',
    name: 'Crêpe Fourrée Fruits de mer',
    price: 26.5,
  },
  {
    id: 'gratin-05',
    category: 'gratin',
    name: 'Gratin Fruits de Mer',
    price: 27.5,
  },

  // =========================
  // VOLAILLES
  // =========================

  {
    id: 'poultry-01',
    category: 'poultry',
    name: 'Escalope Grillée',
    price: 20.5,
  },
  {
    id: 'poultry-02',
    category: 'poultry',
    name: 'Escalope Panée',
    price: 22.5,
  },
  {
    id: 'poultry-03',
    category: 'poultry',
    name: 'Émincé Champignon',
    price: 23.5,
  },
  {
    id: 'poultry-04',
    category: 'poultry',
    name: 'Cordon Bleu',
    price: 24.5,
  },
  {
    id: 'poultry-05',
    category: 'poultry',
    name: '2 Cuisses de Poulet Grillée',
    price: 24.5,
  },
  {
    id: 'poultry-06',
    category: 'poultry',
    name: 'Escalope 4 Fromages',
    price: 26.5,
  },
  {
    id: 'poultry-07',
    category: 'poultry',
    name: 'Émincé du chef',
    price: 26.5,
  },
  {
    id: 'poultry-08',
    category: 'poultry',
    name: 'Fajitas (Boeuf, Poulet)',
    price: 34,
  },
  {
    id: 'poultry-09',
    category: 'poultry',
    name: 'Volailles Mexicaines',
    price: 52.5,
  },
  {
    id: 'poultry-10',
    category: 'poultry',
    name: 'Escalope pané italienne',
    price: 27.5,
  },
  {
    id: 'poultry-11',
    category: 'poultry',
    name: 'Escalope oriental',
    price: 24.5,
  },
  {
    id: 'poultry-12',
    category: 'poultry',
    name: 'Escalope fruits de mer',
    price: 32,
  },

  // =========================
  // VIANDES
  // =========================

  {
    id: 'meat-01',
    category: 'meat',
    name: 'Foie Grillée',
    price: 28.5,
  },
  {
    id: 'meat-02',
    category: 'meat',
    name: 'Steak de Boeuf Grillé',
    price: 32,
  },
  {
    id: 'meat-03',
    category: 'meat',
    name: 'Cheese Steak',
    price: 34.5,
  },
  {
    id: 'meat-04',
    category: 'meat',
    name: 'Grillade Mixte',
    price: 34.5,
  },
  {
    id: 'meat-05',
    category: 'meat',
    name: 'Côte à l\'os Grillée',
    price: 42.5,
  },
  {
    id: 'meat-06',
    category: 'meat',
    name: 'Filet de Boeuf Sauce champignon',
    price: 46.5,
  },
  {
    id: 'meat-07',
    category: 'meat',
    name: 'Filet de Boeuf Sauce Poivre',
    price: 46.5,
  },
  {
    id: 'meat-08',
    category: 'meat',
    name: 'Grillade TARANTINO',
    price: 53.5,
  },

  // =========================
  // BURGERS
  // =========================

  {
    id: 'burger-01',
    category: 'burgers',
    name: 'Friends',
    price: 38.5,
  },
  {
    id: 'burger-02',
    category: 'burgers',
    name: 'Tarantino',
    price: 68.5,
  },
  {
    id: 'burger-03',
    category: 'burgers',
    name: 'All time',
    price: 75,
  },
  {
    id: 'burger-04',
    category: 'burgers',
    name: 'THE ORIGINAL',
    price: 14.8,
  },
  {
    id: 'burger-05',
    category: 'burgers',
    name: 'KENTUCKY BURGER',
    price: 12.8,
  },
  {
    id: 'burger-06',
    category: 'burgers',
    name: 'BUFFALO BURGER',
    price: 18.8,
  },
  {
    id: 'burger-07',
    category: 'burgers',
    name: 'KING KONG BURGER',
    price: 23.8,
  },
  {
    id: 'burger-08',
    category: 'burgers',
    name: 'THE TARANTINO',
    price: 25.8,
  },

  // =========================
  // CRÊPES SUCRÉES
  // =========================

  {
    id: 'sweet-crepe-01',
    category: 'sweet-crepes',
    name: 'Nutella',
    price: 12.5,
  },
  {
    id: 'sweet-crepe-02',
    category: 'sweet-crepes',
    name: 'Spéculoos',
    price: 12.5,
  },
  {
    id: 'sweet-crepe-03',
    category: 'sweet-crepes',
    name: 'Nutella Snickers',
    price: 13.8,
  },
  {
    id: 'sweet-crepe-04',
    category: 'sweet-crepes',
    name: 'Nutella Pistache',
    price: 14.8,
  },
  {
    id: 'sweet-crepe-05',
    category: 'sweet-crepes',
    name: 'Nutella Fruits Secs',
    price: 14.8,
  },
  {
    id: 'sweet-crepe-06',
    category: 'sweet-crepes',
    name: 'Nutella Spéculoos',
    price: 14.8,
  },
  {
    id: 'sweet-crepe-07',
    category: 'sweet-crepes',
    name: 'Nutella Banana Moon',
    price: 16.5,
  },
  {
    id: 'sweet-crepe-08',
    category: 'sweet-crepes',
    name: 'Nutella (Ferrero Rocher / Raffaello)',
    price: 16.5,
  },
  {
    id: 'sweet-crepe-09',
    category: 'sweet-crepes',
    name: 'TARANTINO',
    description: 'Nutella, Fruits Secs, Banane, Ferrero Rocher.',
    price: 19.8,
  },

  // =========================
  // PANCAKES
  // =========================

  {
    id: 'pancake-01',
    category: 'pancakes',
    name: 'Nutella',
    price: 14.5,
  },
  {
    id: 'pancake-02',
    category: 'pancakes',
    name: 'Spéculoos',
    price: 14.5,
  },
  {
    id: 'pancake-03',
    category: 'pancakes',
    name: 'Miel, Fruits Secs, glace',
    price: 16.5,
  },
  {
    id: 'pancake-04',
    category: 'pancakes',
    name: 'Miel, Fruits, Glace',
    price: 16.5,
  },
  {
    id: 'pancake-05',
    category: 'pancakes',
    name: 'Nutella Oreo/Snickers/Mars/Kinder',
    price: 17.5,
  },
  {
    id: 'pancake-06',
    category: 'pancakes',
    name: 'Nutella Banane et Glace',
    price: 17.5,
  },
  {
    id: 'pancake-07',
    category: 'pancakes',
    name: 'Nutella, Fruits Secs, Glace & Ferrero Rocher',
    price: 18.5,
  },

  // =========================
  // GLACES
  // =========================

  {
    id: 'ice-cream-01',
    category: 'ice-cream',
    name: 'Baby time',
    description: '2 boules au choix',
    price: 6.6,
  },
  {
    id: 'ice-cream-02',
    category: 'ice-cream',
    name: 'After Eight',
    description: '3 boules au choix',
    price: 9.4,
  },
  {
    id: 'ice-cream-03',
    category: 'ice-cream',
    name: 'Banana Split',
    description: 'Bananes, 3 boules de glace, chantilly.',
    price: 11.2,
  },
  {
    id: 'ice-cream-04',
    category: 'ice-cream',
    name: 'TARANTINO',
    description:
      'Bananes, 3 boules de glace, chantilly, Fruits Secs, Nutella.',
    price: 14.8,
  },

  // =========================
  // GAUFRES
  // =========================

  {
    id: 'waffle-01',
    category: 'waffles',
    name: 'Nutella',
    price: 12.5,
  },
  {
    id: 'waffle-02',
    category: 'waffles',
    name: 'Nutella Caramel snickers',
    price: 13.5,
  },
  {
    id: 'waffle-03',
    category: 'waffles',
    name: 'Spéculoos',
    price: 13.5,
  },
  {
    id: 'waffle-04',
    category: 'waffles',
    name: 'Nutella Banane',
    price: 14.5,
  },
  {
    id: 'waffle-05',
    category: 'waffles',
    name: 'Nutella Oreo',
    price: 14.5,
  },
  {
    id: 'waffle-06',
    category: 'waffles',
    name: 'Nutella Spéculoos',
    price: 14.5,
  },
  {
    id: 'waffle-07',
    category: 'waffles',
    name: 'Nutella (Rafaello/Ferrero Rocher)',
    price: 16.5,
  },
  {
    id: 'waffle-08',
    category: 'waffles',
    name: 'TARANTINO',
    price: 19.8,
  },

  // =========================
  // HOT / ICE CHOCO
  // =========================

  {
    id: 'choco-01',
    category: 'chocolate',
    name: 'Chocolat',
    price: 7.8,
  },
  {
    id: 'choco-02',
    category: 'chocolate',
    name: 'Chocolat Chantilly',
    price: 8.4,
  },
  {
    id: 'choco-03',
    category: 'chocolate',
    name: 'Chocolat Fruits Sec',
    price: 9.8,
  },
  {
    id: 'choco-04',
    category: 'chocolate',
    name: 'Choco Kinder Bueno',
    price: 9.8,
  },
  {
    id: 'choco-05',
    category: 'chocolate',
    name: 'Choco Spéculoos',
    price: 9.8,
  },
  {
    id: 'choco-06',
    category: 'chocolate',
    name: 'Choco Nutella',
    price: 9.8,
  },
  {
    id: 'choco-07',
    category: 'chocolate',
    name: 'Choco Snickers',
    price: 11.8,
  },
  {
    id: 'choco-08',
    category: 'chocolate',
    name: 'Choco Ferrero',
    price: 11.8,
  },
  {
    id: 'choco-09',
    category: 'chocolate',
    name: 'Choco Raffaello',
    price: 11.8,
  },
  {
    id: 'choco-10',
    category: 'chocolate',
    name: 'Choco Mars',
    price: 11.8,
  },
  {
    id: 'choco-11',
    category: 'chocolate',
    name: 'TARANTINO',
    description: 'Nutella, Ferrero Rocher, banane.',
    price: 14.8,
  },

  // =========================
  // CAFÉS GLACÉS
  // =========================

  {
    id: 'iced-coffee-01',
    category: 'iced-coffee',
    name: 'Caramel',
    price: 9.8,
  },
  {
    id: 'iced-coffee-02',
    category: 'iced-coffee',
    name: 'Vanille',
    price: 9.8,
  },
  {
    id: 'iced-coffee-03',
    category: 'iced-coffee',
    name: 'Noisette',
    price: 9.8,
  },
  {
    id: 'iced-coffee-04',
    category: 'iced-coffee',
    name: 'Cookies',
    price: 9.8,
  },
  {
    id: 'iced-coffee-05',
    category: 'iced-coffee',
    name: 'Café Viennois',
    price: 9.8,
  },
  {
    id: 'iced-coffee-06',
    category: 'iced-coffee',
    name: 'Café Liégeois',
    price: 9.8,
  },
  {
    id: 'iced-coffee-07',
    category: 'iced-coffee',
    name: 'Nutella',
    price: 10.8,
  },
  {
    id: 'iced-coffee-08',
    category: 'iced-coffee',
    name: 'Spéculoos',
    price: 10.8,
  },
  {
    id: 'iced-coffee-09',
    category: 'iced-coffee',
    name: 'TARANTINO',
    price: 11.8,
  },

  // =========================
  // BOISSONS CHAUDES
  // =========================

  {
    id: 'hot-drink-01',
    category: 'hot-drinks',
    name: 'Thé à la menthe',
    price: 3.2,
  },
  {
    id: 'hot-drink-02',
    category: 'hot-drinks',
    name: 'Thé infusion aux choix',
    price: 3.8,
  },
  {
    id: 'hot-drink-03',
    category: 'hot-drinks',
    name: 'English Tea',
    price: 4.5,
  },
  {
    id: 'hot-drink-04',
    category: 'hot-drinks',
    name: 'Thé aux amandes',
    price: 5.2,
  },
  {
    id: 'hot-drink-05',
    category: 'hot-drinks',
    name: 'Thé aux pignons',
    price: 7.6,
  },
  {
    id: 'hot-drink-06',
    category: 'hot-drinks',
    name: 'Thé BAKLAWA',
    price: 8.8,
  },
  {
    id: 'hot-drink-07',
    category: 'hot-drinks',
    name: 'Thé Tarantino',
    price: 16.8,
  },

  // =========================
  // BOISSONS
  // =========================

  {
    id: 'drink-01',
    category: 'drinks',
    name: 'Eau 0.5L',
    price: 1.8,
  },
  {
    id: 'drink-02',
    category: 'drinks',
    name: 'Eau 1L',
    price: 3.2,
  },
  {
    id: 'drink-03',
    category: 'drinks',
    name: 'Eau Gazeuse',
    price: 3.6,
  },
  {
    id: 'drink-04',
    category: 'drinks',
    name: 'Soda',
    price: 4,
  },
  {
    id: 'drink-05',
    category: 'drinks',
    name: 'Orangina',
    price: 4.4,
  },
  {
    id: 'drink-06',
    category: 'drinks',
    name: 'Bière sans alcool',
    price: 5.6,
  },
  {
    id: 'drink-07',
    category: 'drinks',
    name: 'Energy Drink',
    price: 8.6,
  },
]