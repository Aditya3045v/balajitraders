import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'BALAJI TRADERS SOLAR ENERGY',
        short_name: 'Balaji Solar',
        description: 'ALL SOLAR NORTH BIHAR SUPER DISTRIBUTORSHIP',
        start_url: '/',
        display: 'standalone',
        background_color: '#0B1120',
        theme_color: '#0056D2',
        icons: [
            {
                src: '/assets/logo.png',
                sizes: 'any',
                type: 'image/png',
            },
        ],
    }
}
