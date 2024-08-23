import React from 'react';
import { CardComponent} from './cards/CardComponent'

const products = [
    {
        title: 'Motorola Edge 50 Ultra',
        price: '1.499.999',
        images: {
            peachFuzz: {
                url: 'src/assets/img/cards/edge_50_ultra/peach_fuzz_cargador.png',
                color: '#f5c6a5'
            },

            forestGray: {
                url: 'src/assets/img/cards/edge_50_ultra/forest_gray_cargador.png',
                color: '#273130' 
            },
            nordicWood: {
                url:'src/assets/img/cards/edge_50_ultra/nordic_wood_cargador.png',
                color: '#D9CDBE'
            }    
        }
    },

    {
        title: 'Motorola Edge 50 Pro',
        price: '1.099.999',
        images: {
            luxLavander: {
                url: 'src/assets/img/cards/edge_50_pro/lux_lavander_cargador.png',
                color: '#8D94C6'
            },

            forestGray: {
                url: 'src/assets/img/cards/edge_50_pro/moonlight_pearl_cargador.png',
                color: '#C8C7C4' 
            },
            nordicWood: {
                url: 'src/assets/img/cards/edge_50_pro/black_beauty_cargador.png',
                color: '#414044'
            }      
        }
    },

    {
        title: 'Motorola Edge 50 Pro',
        price: '1.099.999',
        images: {
            luxLavander: {
                url: 'src/assets/img/cards/edge_50_pro/lux_lavander_cargador.png',
                color: '#8D94C6'
            },

            forestGray: {
                url: 'src/assets/img/cards/edge_50_pro/moonlight_pearl_cargador.png',
                color: '#C8C7C4' 
            },
            nordicWood: {
                url: 'src/assets/img/cards/edge_50_pro/black_beauty_cargador.png',
                color: '#414044'
            }      
        }
    },

    {
        title: 'Motorola Edge 50 Pro',
        price: '1.099.999',
        images: {
            luxLavander: {
                url: 'src/assets/img/cards/edge_50_pro/lux_lavander_cargador.png',
                color: '#8D94C6'
            },

            forestGray: {
                url: 'src/assets/img/cards/edge_50_pro/moonlight_pearl_cargador.png',
                color: '#C8C7C4' 
            },
            nordicWood: {
                url: 'src/assets/img/cards/edge_50_pro/black_beauty_cargador.png',
                color: '#414044'
            }      
        }
    },

    {
        title: 'Motorola Edge 50 Pro',
        price: '1.099.999',
        images: {
            luxLavander: {
                url: 'src/assets/img/cards/edge_50_pro/lux_lavander_cargador.png',
                color: '#8D94C6'
            },

            forestGray: {
                url: 'src/assets/img/cards/edge_50_pro/moonlight_pearl_cargador.png',
                color: '#C8C7C4' 
            },
            nordicWood: {
                url: 'src/assets/img/cards/edge_50_pro/black_beauty_cargador.png',
                color: '#414044'
            }      
        }
    },

    {
        title: 'Motorola Edge 50 Pro',
        price: '1.099.999',
        images: {
            luxLavander: {
                url: 'src/assets/img/cards/edge_50_pro/lux_lavander_cargador.png',
                color: '#8D94C6'
            },

            forestGray: {
                url: 'src/assets/img/cards/edge_50_pro/moonlight_pearl_cargador.png',
                color: '#C8C7C4' 
            },
            nordicWood: {
                url: 'src/assets/img/cards/edge_50_pro/black_beauty_cargador.png',
                color: '#414044'
            }      
        }
    },

    {
        title: 'Motorola Edge 50 Pro',
        price: '1.099.999',
        images: {
            luxLavander: {
                url: 'src/assets/img/cards/edge_50_pro/lux_lavander_cargador.png',
                color: '#8D94C6'
            },

            forestGray: {
                url: 'src/assets/img/cards/edge_50_pro/moonlight_pearl_cargador.png',
                color: '#C8C7C4' 
            },
            nordicWood: {
                url: 'src/assets/img/cards/edge_50_pro/black_beauty_cargador.png',
                color: '#414044'
            }      
        }
    },

    {
        title: 'Motorola Edge 50 Pro',
        price: '1.099.999',
        images: {
            luxLavander: {
                url: 'src/assets/img/cards/edge_50_pro/lux_lavander_cargador.png',
                color: '#8D94C6'
            },

            forestGray: {
                url: 'src/assets/img/cards/edge_50_pro/moonlight_pearl_cargador.png',
                color: '#C8C7C4' 
            },
            nordicWood: {
                url: 'src/assets/img/cards/edge_50_pro/black_beauty_cargador.png',
                color: '#414044'
            }      
        }
    }
    
];

export const ItemListContainer = () => {
    return (
        <>
            <div className="product-list">
                {products.map((product, index) => (
                    <CardComponent key={index} product={product} />
                ))}
            </div>
        </>
    );
};
