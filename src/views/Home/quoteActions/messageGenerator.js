import materials from './informations/materials';

export const messageGenerator = ({ name, finishing, material, width, weight, innerFinishing }) => {
    let infoMaterial = (materials.filter((obj) => { return obj.value === material }))
    let materialName = infoMaterial[0].label;
    let priceAV = ((weight * material) + (weight * infoMaterial[0].profit));
    priceAV >= 1000?
    priceAV = (priceAV + 150).toFixed(2)
    : 
    priceAV = (priceAV + 70).toFixed(2);
    let priceCC = (priceAV * 1.10).toFixed(2);
    return `${!name.length || name.length <= 1 ?
        'Opa! Aqui está seu orçamento!':`Olá ${name}, aqui está seu orçamento!`} O par de alianças ${finishing} em ${materialName}, com ${width} e acabamento interno ${innerFinishing}, já com gravação de nome e data, estojo de veludo, ${priceAV >= 1000 ? 'certificado de garantia *PERMANENTE* pro teor do material utilizado e entrega à domicilio sem custo':'e certificado de garantia *PERMANENTE* pro teor do material utilizado'}, fica: R$${priceCC} em até ${priceAV >= 600 ?'*10X SEM JUROS*' : '*6X SEM JUROS*'} ou R$${priceAV} à vista! O que acha?`
}