import image from './assets/image.png'
import {TitleBlock, ImageBlock, ColumnsBlock, TextBlock} from './classes/blocks'

export const model = [
    new TitleBlock('Конструктор сайта на JS', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            'text-align': 'center',
            padding: '1.5rem'
        }
    }),
    new TextBlock('This text', {
        styles: {
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            padding: '1rem',
            'font-weight': 'bold'
        }
    }),
    new ImageBlock(image, {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles: {
            width: '500px',
            height: 'auto' 
        },
        alt: 'Это картинка'
    }),
    new ColumnsBlock([
        'Приложение на JS',
        'Применяется принципы solid и ООП',
        'UI своими руками'
    ], {
        styles: {
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            padding: '2rem',
            color: '#fff',
            'font-weight': 'bold'
        }
    }),
]