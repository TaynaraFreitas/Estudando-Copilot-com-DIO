const emissionFactors = {
    car: 0.2,      // kg CO2 per km
    bus: 0.1,
    train: 0.05,
    plane: 0.25,
    bike: 0,
    walk: 0
};

document.getElementById('emission-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const distance = parseFloat(document.getElementById('distance').value);
    const transport = document.getElementById('transport').value;
    
    if (isNaN(distance) || distance <= 0) {
        alert('Por favor, insira uma distância válida.');
        return;
    }
    
    if (!transport) {
        alert('Por favor, selecione um meio de transporte.');
        return;
    }
    
    const emission = distance * emissionFactors[transport];
    document.getElementById('emission-value').textContent = emission.toFixed(2);
    
    let tip = '';
    if (transport === 'car') {
        tip = 'Considere usar transporte público ou carona para reduzir emissões.';
    } else if (transport === 'plane') {
        tip = 'Para distâncias menores, considere viagem de trem ou ônibus.';
    } else if (transport === 'bike' || transport === 'walk') {
        tip = 'Ótima escolha! Zero emissões para esta viagem.';
    }
    
    document.getElementById('tip').textContent = tip;
    document.getElementById('results').hidden = false;
});