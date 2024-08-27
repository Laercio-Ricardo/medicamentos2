const medications = [
    { name: 'Dipirona', description: 'Analgésico e antipirético.', effects: 'Sonolência, dor de cabeça, náuseas.', indication: 'Tratamento de dores e febre.', dosages: '500-1000 mg a cada 6-8 horas, não excedendo 4 g por dia.', ageRange: 'A partir de 3 meses.'},
    { name: 'Paracetamol', description: 'Analgésico e antipirético.', effects: 'Náuseas, dor de estômago, erupção cutânea.', indication: 'Tratamento de dor e febre.', dosages: '500-1000 mg a cada 4-6 horas, não excedendo 4 g por dia.', ageRange: 'A partir de 2 meses.'},
    { name: 'Ibuprofeno', description: 'Anti-inflamatório não esteroide (AINE).', effects: 'Dor de estômago, náuseas, tontura.', indication: 'Tratamento de dor e inflamação.', dosages: '200-400 mg a cada 4-6 horas, não excedendo 1.200 mg por dia.', ageRange: 'A partir de 6 meses.'},
    { name: 'Amoxicilina', description: 'Antibiótico.', effects: 'Náuseas, diarreia, erupção cutânea.', indication: 'Tratamento de infecções bacterianas.', dosages: '500-1000 mg a cada 8 horas.', ageRange: 'A partir de 2 anos.'},
    { name: 'Omeprazol', description: 'Inibidor da bomba de prótons.', effects: 'Dor de cabeça, dor abdominal, náuseas.', indication: 'Tratamento de úlceras gástricas e refluxo gastroesofágico.', dosages: '20-40 mg a cada 24 horas.', ageRange: 'A partir de 1 ano (sob orientação médica).'},
    { name: 'Aspirina', description: 'Anti-inflamatório não esteroide (AINE).', effects: 'Dor de estômago, náuseas, sangramento.', indication: 'Tratamento de dor, febre e inflamação.', dosages: '500-1000 mg a cada 4-6 horas, não excedendo 4 g por dia.', ageRange: 'A partir de 12 anos.'},
    { name: 'Losartana', description: 'Antagonista dos receptores da angiotensina II.', effects: 'Tontura, dor nas costas, fadiga.', indication: 'Tratamento de hipertensão arterial.', dosages: '50-100 mg a cada 24 horas.', ageRange: 'A partir de 6 anos (sob orientação médica).'},
    { name: 'Metformina', description: 'Antidiabético oral.', effects: 'Náuseas, diarreia, dor abdominal.', indication: 'Tratamento de diabetes tipo 2.', dosages: '500-2000 mg/dia dividido em 2-3 doses.', ageRange: 'A partir de 10 anos.'},
    { name: 'Loratadina', description: 'Antihistamínico.', effects: 'Dor de cabeça, secura da boca, sonolência.', indication: 'Tratamento de alergias.', dosages: '10 mg a cada 24 horas.', ageRange: 'A partir de 2 anos.'},
    { name: 'Simvastatina', description: 'Estatina.', effects: 'Dor muscular, dor abdominal, constipação.', indication: 'Tratamento de hipercolesterolemia.', dosages: '10-40 mg a cada 24 horas.', ageRange: 'A partir de 18 anos.'},
    { name: 'Furosemida', description: 'Diurético.', effects: 'Desidratação, desequilíbrio eletrolítico, tontura.', indication: 'Tratamento de edema e hipertensão.', dosages: '20-80 mg a cada 6-8 horas.', ageRange: 'A partir de 1 ano.'},
    { name: 'Captopril', description: 'Inibidor da enzima de conversão da angiotensina (IECA).', effects: 'Tosse seca, tontura, fadiga.', indication: 'Tratamento de hipertensão e insuficiência cardíaca.', dosages: '25-100 mg/dia dividido em 2-3 doses.', ageRange: 'A partir de 6 anos (sob orientação médica).'},
    { name: 'Clonazepam', description: 'Benzodiazepínico.', effects: 'Sonolência, tontura, confusão.', indication: 'Tratamento de transtornos de ansiedade e crises convulsivas.', dosages: '0,5-2 mg a cada 24 horas.', ageRange: 'A partir de 6 anos (sob orientação médica).'},
    { name: 'Diazepam', description: 'Benzodiazepínico.', effects: 'Sonolência, tontura, fraqueza muscular.', indication: 'Tratamento de ansiedade, espasmos musculares e convulsões.', dosages: '2-10 mg a cada 6-12 horas.', ageRange: 'A partir de 6 meses.'},
    { name: 'Dexametasona', description: 'Corticosteroide.', effects: 'Aumento de peso, hipertensão, hiperglicemia.', indication: 'Tratamento de inflamações e reações alérgicas.', dosages: '0,5-9 mg/dia dividido em 1-4 doses.', ageRange: 'A partir de 1 ano.'},
    { name: 'Hidrocortisona', description: 'Corticosteroide.', effects: 'Retenção de líquidos, hipertensão, hiperglicemia.', indication: 'Tratamento de inflamações e insuficiência adrenal.', dosages: '20-240 mg/dia dividido em 2-4 doses.', ageRange: 'A partir de 1 ano.'},
    { name: 'Fluconazol', description: 'Antifúngico.', effects: 'Náuseas, dor abdominal, dor de cabeça.', indication: 'Tratamento de infecções fúngicas.', dosages: '150-400 mg a cada 24 horas.', ageRange: 'A partir de 6 meses.'},
    { name: 'Cetirizina', description: 'Antihistamínico.', effects: 'Sonolência, dor de cabeça, boca seca.', indication: 'Tratamento de alergias.', dosages: '5-10 mg a cada 24 horas.', ageRange: 'A partir de 2 anos.'},
    { name: 'Atenolol', description: 'Betabloqueador.', effects: 'Fadiga, tontura, bradicardia.', indication: 'Tratamento de hipertensão e angina.', dosages: '25-100 mg a cada 24 horas.', ageRange: 'A partir de 12 anos.'},
    { name: 'Alprazolam', description: 'Benzodiazepínico.', effects: 'Sonolência, tontura, boca seca.', indication: 'Tratamento de transtornos de ansiedade e pânico.', dosages: '0,25-1 mg a cada 8-12 horas.', ageRange: 'A partir de 18 anos.'},
    { name: 'Enalapril', description: 'Inibidor da enzima de conversão da angiotensina (IECA).', effects: 'Tosse seca, tontura, hipercalemia.', indication: 'Tratamento de hipertensão e insuficiência cardíaca.', dosages: '5-20 mg a cada 12-24 horas.', ageRange: 'A partir de 6 anos (sob orientação médica).'},
    { name: 'Levotiroxina', description: 'Hormônio tireoidiano.', effects: 'Tremores, palpitações, perda de peso.', indication: 'Tratamento de hipotireoidismo.', dosages: '50-200 mcg a cada 24 horas.', ageRange: 'A partir de 1 ano (sob orientação médica).'},
    { name: 'Ranitidina', description: 'Antagonista H2.', effects: 'Dor de cabeça, tontura, diarreia.', indication: 'Tratamento de úlceras gástricas e refluxo gastroesofágico.', dosages: '150-300 mg a cada 12 horas.', ageRange: 'A partir de 1 ano.'},
    { name: 'Hidroclorotiazida', description: 'Diurético tiazídico.', effects: 'Desequilíbrio eletrolítico, tontura, aumento da glicemia.', indication: 'Tratamento de hipertensão e edema.', dosages: '12,5-50 mg a cada 24 horas.', ageRange: 'A partir de 12 anos.'},
    { name: 'Prednisona', description: 'Corticosteroide.', effects: 'Aumento de peso, hipertensão, hiperglicemia.', indication: 'Tratamento de inflamações e reações alérgicas.', dosages: '5-60 mg a cada 24 horas.', ageRange: 'A partir de 1 ano.'},
    { name: 'Diclofenaco', description: 'Anti-inflamatório não esteroide (AINE).', effects: 'Dor de estômago, náuseas, diarreia.', indication: 'Tratamento de dor e inflamação.', dosages: '50-150 mg a cada 8-12 horas.', ageRange: 'A partir de 14 anos.'},
    { name: 'Sertralina', description: 'Inibidor seletivo da recaptação de serotonina (ISRS).', effects: 'Náuseas, insônia, boca seca.', indication: 'Tratamento de depressão e transtornos de ansiedade.', dosages: '50-200 mg a cada 24 horas.', ageRange: 'A partir de 6 anos (sob orientação médica).'},
    { name: 'Carbamazepina', description: 'Anticonvulsivante.', effects: 'Sonolência, tontura, náuseas.', indication: 'Tratamento de epilepsia e neuralgia do trigêmeo.', dosages: '200-600 mg a cada 12 horas.', ageRange: 'A partir de 6 anos (sob orientação médica).'},
    { name: 'Gabapentina', description: 'Anticonvulsivante.', effects: 'Sonolência, tontura, edema periférico.', indication: 'Tratamento de neuralgia e epilepsia.', dosages: '300-600 mg a cada 8-12 horas.', ageRange: 'A partir de 12 anos.'},
    { name: 'Tramadol', description: 'Analgesic.', effects: 'Náuseas, tontura, sonolência.', indication: 'Tratamento de dor moderada a grave.', dosages: '50-100 mg a cada 4-6 horas, não excedendo 400 mg por dia.', ageRange: 'A partir de 12 anos.'},
    { name: 'Amlodipino', description: 'Bloqueador dos canais de cálcio.', effects: 'Tontura, edema periférico, rubor facial.', indication: 'Tratamento de hipertensão e angina.', dosages: '5-10 mg a cada 24 horas.', ageRange: 'A partir de 6 anos (sob orientação médica).'},
    { name: 'Escitalopram', description: 'Inibidor seletivo da recaptação de serotonina (ISRS).', effects: 'Náuseas, insônia, boca seca.', indication: 'Tratamento de depressão e transtornos de ansiedade.', dosages: '10-20 mg a cada 24 horas.', ageRange: 'A partir de 18 anos.'},
    { name: 'Bromazepam', description: 'Benzodiazepínico.', effects: 'Sonolência, tontura, fadiga.', indication: 'Tratamento de ansiedade.', dosages: '3-6 mg a cada 12-24 horas.', ageRange: 'A partir de 12 anos.'},
    { name: 'Metronidazol', description: 'Antibiótico.', effects: 'Náuseas, dor de cabeça, gosto metálico.', indication: 'Tratamento de infecções bacterianas e parasitárias.', dosages: '500 mg a cada 8-12 horas.', ageRange: 'A partir de 12 anos.'},
    { name: 'Prednisolona', description: 'Corticosteroide.', effects: 'Aumento de peso, hipertensão, hiperglicemia.', indication: 'Tratamento de inflamações e reações alérgicas.', dosages: '5-60 mg a cada 24 horas.', ageRange: 'A partir de 1 ano.'},
    { name: 'Escopolamina', description: 'Antiespasmódico.', effects: 'Boca seca, sonolência, visão turva.', indication: 'Tratamento de espasmos gastrointestinais.', dosages: '10 mg a cada 8 horas.', ageRange: 'A partir de 6 anos.'},
    { name: 'Fentermina', description: 'Supressor de apetite.', effects: 'Insônia, nervosismo, aumento da pressão arterial.', indication: 'Tratamento de obesidade.', dosages: '15-37,5 mg a cada 24 horas.', ageRange: 'A partir de 18 anos.'},
    { name: 'Metoclopramida', description: 'Antiemético.', effects: 'Sonolência, fadiga, agitação.', indication: 'Tratamento de náuseas e vômitos.', dosages: '10 mg a cada 8 horas.', ageRange: 'A partir de 2 anos.'},
    { name: 'Tansulosina', description: 'Alfabloqueador.', effects: 'Tontura, fraqueza, dor de cabeça.', indication: 'Tratamento de hiperplasia prostática benigna.', dosages: '0,4-0,8 mg a cada 24 horas.', ageRange: 'A partir de 18 anos.'},
    { name: 'Clonidina', description: 'Antihipertensivo.', effects: 'Sonolência, boca seca, tontura.', indication: 'Tratamento de hipertensão.', dosages: '0,1-0,3 mg a cada 12 horas.', ageRange: 'A partir de 12 anos.'},
    { name: 'Fenitoína', description: 'Anticonvulsivante.', effects: 'Sonolência, tontura, nistagmo.', indication: 'Tratamento de epilepsia.', dosages: '100 mg a cada 8 horas.', ageRange: 'A partir de 6 anos (sob orientação médica).'}
];

   
function populateMedicationOptions() {
    const select = document.getElementById('medication');
    medications.forEach(med => {
        const option = document.createElement('option');
        option.value = med.name;
        option.textContent = med.name;
        select.appendChild(option);
    });
}

function showMedicationInfo() {
    const selectedMedication = document.getElementById('medication').value;
    const medication = medications.find(med => med.name === selectedMedication);
    if (medication) {
        const resultText = `
            <strong>Nome:</strong> ${medication.name}<br>
            <strong>Descrição:</strong> ${medication.description}<br>
            <strong>Efeitos Colaterais:</strong> ${medication.effects}<br>
            <strong>Indicação:</strong> ${medication.indication}<br>
            <strong>Posologia:</strong> ${medication.dosages}<br>
            <strong>Faixa Etária:</strong> ${medication.ageRange}
        `;
        document.getElementById('result-text').innerHTML = resultText;
    }
}

function calculateDosage() {
    const medicationName = document.getElementById('medication').value;
    const dose = parseFloat(document.getElementById('dose').value);
    const concentration = parseFloat(document.getElementById('concentration').value);
    const volume = parseFloat(document.getElementById('volume').value);

    if (isNaN(dose) || isNaN(concentration) || isNaN(volume)) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

    const doseRequired = (dose / concentration).toFixed(2);
    const dosage = (doseRequired * volume).toFixed(2);

    const resultText = `Você precisa administrar ${dosage} mL do medicamento.`;
    document.getElementById('result-text').textContent = resultText;

    // Adicionar ao histórico
    addHistory(dose, concentration, volume, dosage);
}

function addHistory(dose, concentration, volume, dosage) {
    const historyList = document.getElementById('history-list');
    const listItem = document.createElement('li');
    listItem.textContent = `Dose Prescrita: ${dose} mg, Concentração: ${concentration} mg/mL, Volume Disponível: ${volume} mL, Dosagem Calculada: ${dosage} mL`;
    historyList.appendChild(listItem);
}

function calculateInfusionRate() {
    const volume = parseFloat(document.getElementById('infusion-volume').value);
    const time = parseFloat(document.getElementById('infusion-time').value);

    if (isNaN(volume) || isNaN(time)) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

    const rate = (volume / (time * 60)).toFixed(2); // gotejamento por minuto
    const infusionResultText = `A taxa de gotejamento deve ser ${rate} mL/minuto.`;
    document.getElementById('infusion-result-text').textContent = infusionResultText;
}

document.getElementById('medication').addEventListener('change', showMedicationInfo);
document.addEventListener('DOMContentLoaded', populateMedicationOptions);

// Função para autocomplete
const searchBar = document.getElementById('search-bar');
const autocompleteList = document.getElementById('autocomplete-list');

searchBar.addEventListener('input', function() {
    const query = this.value.toLowerCase();
    autocompleteList.innerHTML = '';
    
    if (query) {
        const filteredMedications = medications.filter(med =>
            med.name.toLowerCase().includes(query)
        );

        filteredMedications.forEach(med => {
            const div = document.createElement('div');
            div.textContent = med.name;
            div.addEventListener('click', () => {
                searchBar.value = med.name;
                autocompleteList.innerHTML = '';
                document.getElementById('medication').value = med.name;
                showMedicationInfo();
            });
            autocompleteList.appendChild(div);
        });
    }
});

