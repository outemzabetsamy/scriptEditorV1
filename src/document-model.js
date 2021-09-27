export default async function(){
    return [
        {
            id:'block-1-FdsvfdULHNH',
            insert:'h1',
            content: 'Lorem Ipsum',
            attrs: {
                align: 'center'
            }
        },
        {
            id:'block-2-9XlnyEhqulg',
            insert:'p',
            content:[
                {id: 'inline-1-xhggd',insert:'span',content:'Lorem ipsum dolor sit amet,consecttetur adipiscing elit.'},
                {id:'inline-2-ffggs',insert: 'span',content:'Vestibulum sed justo in massa bibendum facilisis',attrs:{
                    bold: true
                }},
                {id:'inline-3-tyrxs',insert:'span',content:' Etiam sed placerat magna. Cras lorem augue, volutpat sed scelerisque non, volutpat nec eros. Curabitur lacinia mi ut velit consequat, quis faucibus massa lacinia. Fusce fermentum eget lacus sed vulputate.'},
                {id:'inline-4-rfvdd', insert:'a', content: 'Phasellus dapibus tincidunt mollis. Suspendisse non feugiat mauris. Curabitur laoreet sit amet quam et porta.',attrs: { link:'https://example.com'}},
                {id:'inline-5-frtsd',insert:'span',content: ' Curabitur varius quam vitae vulputate ornare. Nam bibendum metus in leo vehicula, in scelerisque sem consectetur.'},
            ],
             attrs: {
                align: 'left'
            }
        },
        {
            id: 'block-3-wsqw2TsTcCT',
            insert:'p',
            
            content:[
                {id: 'inline-21-cfers',insert: 'ul',content:[
                    {id: 'inline-22-tgrsa', insert: 'li', content: 'Cras juste odio'},
                    {id: 'inline-23-krsas',insert: 'li',content: 'Dapibus ac facilisis in'},
                    {id: 'inline-24-trsta',insert:'li', content: 'Morbi leo risus'},
                    {id: 'inline-25-hwear',insert: 'li', content: 'Vestibulum ar erros'},
                ]},
                {id: 'inline-21-cfers',insert: 'ol',content:[
                    {id: 'inline-22-tgrsa', insert: 'li', content: 'Cras juste odio'},
                    {id: 'inline-23-krsas',insert: 'li',content: 'Dapibus ac facilisis in'},
                    {id: 'inline-24-trsta',insert:'li', content: 'Morbi leo risus'},
                    {id: 'inline-25-hwear',insert: 'li', content: 'Vestibulum ar erros'},
                ]},
                
            ],
            attrs:{
                align: 'center'
            }
        }
    ]
}