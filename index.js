const fs = require("fs");
const csv = require('csv-parser');

(async () => {
    fs.createReadStream('C:\\Users\\Vinicius Mussak\\Desktop\\produtos-vianney\\product.template.csv')
        .pipe(csv())
        .on('data', (data) => converterParaImagem(data))
        .on('end', () => {
            console.log('finish');
        });

    async function converterParaImagem(produto) {
        if(!produto.image)
            return;

        let imageName = produto.id.replace('__export__.', '') + '.png';
        fs.writeFileSync('images\\' + imageName, produto.image, 'base64');
    }
})();