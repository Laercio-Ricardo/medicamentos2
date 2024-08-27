const medications = [
   
        { name: 'Dipirona', description: 'Analgésico e antipirético.', effects: 'Sonolência, dor de cabeça, náuseas.', indication: 'Tratamento de dores e febre.' },
        { name: 'Paracetamol', description: 'Analgésico e antipirético.', effects: 'Náuseas, dor de estômago, erupção cutânea.', indication: 'Tratamento de dor e febre.' },
        { name: 'Ibuprofeno', description: 'Anti-inflamatório não esteroide (AINE).', effects: 'Dor de estômago, náuseas, tontura.', indication: 'Tratamento de dor e inflamação.' },
        { name: 'Amoxicilina', description: 'Antibiótico.', effects: 'Náuseas, diarreia, erupção cutânea.', indication: 'Tratamento de infecções bacterianas.' },
        { name: 'Omeprazol', description: 'Inibidor da bomba de prótons.', effects: 'Dor de cabeça, dor abdominal, náuseas.', indication: 'Tratamento de úlceras gástricas e refluxo gastroesofágico.' },
        { name: 'Aspirina', description: 'Antiinflamatório não esteroide (AINE).', effects: 'Dor de estômago, náuseas, sangramento.', indication: 'Tratamento de dor, febre e inflamação.' },
        { name: 'Losartana', description: 'Antagonista dos receptores da angiotensina II.', effects: 'Tontura, dor nas costas, fadiga.', indication: 'Tratamento de hipertensão arterial.' },
        { name: 'Metformina', description: 'Antidiabético oral.', effects: 'Náuseas, diarreia, dor abdominal.', indication: 'Tratamento de diabetes tipo 2.' },
        { name: 'Loratadina', description: 'Antihistamínico.', effects: 'Dor de cabeça, secura da boca, sonolência.', indication: 'Tratamento de alergias.' },
        { name: 'Simvastatina', description: 'Estatina.', effects: 'Dor muscular, dor abdominal, constipação.', indication: 'Tratamento de hipercolesterolemia.' },
        { name: 'Furosemida', description: 'Diurético.', effects: 'Desidratação, desequilíbrio eletrolítico, tontura.', indication: 'Tratamento de edema e hipertensão.' },
        { name: 'Clonazepam', description: 'Ansiolítico e anticonvulsivante.', effects: 'Sonolência, tontura, dificuldade de coordenação.', indication: 'Tratamento de distúrbios de ansiedade e epilepsia.' },
        { name: 'Enalapril', description: 'Inibidor da ECA.', effects: 'Tontura, tosse seca, hipopotassemia.', indication: 'Tratamento de hipertensão e insuficiência cardíaca.' },
        { name: 'Hydroxicloroquina', description: 'Antimalárico e antiinflamatório.', effects: 'Náuseas, dor abdominal, problemas de visão.', indication: 'Tratamento de malária e artrite reumatoide.' },
        { name: 'Ranitidina', description: 'Antagonista dos receptores H2.', effects: 'Dor de cabeça, constipação, diarreia.', indication: 'Tratamento de úlceras gástricas e refluxo ácido.' },
        { name: 'Metoclopramida', description: 'Antiemético e pró-cinético.', effects: 'Sonolência, fadiga, diarreia.', indication: 'Tratamento de náuseas e vômitos.' },
        { name: 'Tiamina', description: 'Vitamina B1.', effects: 'Reações alérgicas raras.', indication: 'Tratamento de deficiência de vitamina B1.' },
        { name: 'Captopril', description: 'Inibidor da ECA.', effects: 'Tosse seca, tontura, erupção cutânea.', indication: 'Tratamento de hipertensão e insuficiência cardíaca.' },
        { name: 'Propranolol', description: 'Betabloqueador.', effects: 'Fadiga, frio nas extremidades, bradicardia.', indication: 'Tratamento de hipertensão e ansiedade.' },
        { name: 'Valeriana', description: 'Fitoterápico sedativo.', effects: 'Sonolência, dor de cabeça, náuseas.', indication: 'Tratamento de insônia e ansiedade.' },
        { name: 'Cetoconazol', description: 'Antimicótico.', effects: 'Náuseas, dor abdominal, erupção cutânea.', indication: 'Tratamento de infecções fúngicas.' },
        { name: 'Sulfato Ferroso', description: 'Suplemento de ferro.', effects: 'Dor abdominal, constipação, náuseas.', indication: 'Tratamento de anemia ferropriva.' },
        { name: 'Valsartana', description: 'Antagonista dos receptores da angiotensina II.', effects: 'Tontura, dor nas costas, fadiga.', indication: 'Tratamento de hipertensão arterial.' },
        { name: 'Espironolactona', description: 'Diurético poupador de potássio.', effects: 'Hipercalemia, dor abdominal, tontura.', indication: 'Tratamento de edema e hipertensão.' },
        { name: 'Diazepam', description: 'Ansiolítico e anticonvulsivante.', effects: 'Sonolência, fraqueza muscular, confusão.', indication: 'Tratamento de ansiedade e convulsões.' },
        { name: 'Cloridrato de Amoxicilina', description: 'Antibiótico.', effects: 'Náuseas, diarreia, erupção cutânea.', indication: 'Tratamento de infecções bacterianas.' },
        { name: 'Prednisona', description: 'Corticosteroide.', effects: 'Ganho de peso, hiperglicemia, hipertensão.', indication: 'Tratamento de inflamações e doenças autoimunes.' },
        { name: 'Cloridrato de Betametasona', description: 'Corticosteroide.', effects: 'Ganho de peso, alterações de humor, aumento da pressão arterial.', indication: 'Tratamento de inflamações e reações alérgicas.' },
        { name: 'Digoxina', description: 'Glicosídeo cardíaco.', effects: 'Náuseas, visão borrada, confusão.', indication: 'Tratamento de insuficiência cardíaca e fibrilação atrial.' },
        { name: 'Lorazepam', description: 'Ansiolítico e sedativo.', effects: 'Sonolência, tontura, problemas de coordenação.', indication: 'Tratamento de ansiedade e insônia.' },
        { name: 'Ciprofloxacino', description: 'Antibiótico.', effects: 'Náuseas, diarreia, dor abdominal.', indication: 'Tratamento de infecções bacterianas.' },
        { name: 'Fexofenadina', description: 'Antihistamínico.', effects: 'Dor de cabeça, fadiga, boca seca.', indication: 'Tratamento de alergias sazonais.' },
        { name: 'Azitromicina', description: 'Antibiótico.', effects: 'Náuseas, vômitos, dor abdominal.', indication: 'Tratamento de infecções bacterianas.' },
        { name: 'Metronidazol', description: 'Antimicrobiano.', effects: 'Náuseas, dor de cabeça, sabor metálico.', indication: 'Tratamento de infecções parasitárias e bacterianas.' },
        { name: 'Dipirona', description: 'Analgésico e antipirético.', effects: 'Sonolência, dor de cabeça, náuseas.', indication: 'Tratamento de dores e febre.' },
        { name: 'Paracetamol', description: 'Analgésico e antipirético.', effects: 'Náuseas, dor de estômago, erupção cutânea.', indication: 'Tratamento de dor e febre.' },
        { name: 'Ibuprofeno', description: 'Anti-inflamatório não esteroide (AINE).', effects: 'Dor de estômago, náuseas, tontura.', indication: 'Tratamento de dor e inflamação.' },
        { name: 'Amoxicilina', description: 'Antibiótico.', effects: 'Náuseas, diarreia, erupção cutânea.', indication: 'Tratamento de infecções bacterianas.' },
        { name: 'Omeprazol', description: 'Inibidor da bomba de prótons.', effects: 'Dor de cabeça, dor abdominal, náuseas.', indication: 'Tratamento de úlceras gástricas e refluxo gastroesofágico.' },
        { name: 'Aspirina', description: 'Antiinflamatório não esteroide (AINE).', effects: 'Dor de estômago, náuseas, sangramento.', indication: 'Tratamento de dor, febre e inflamação.' },
        { name: 'Losartana', description: 'Antagonista dos receptores da angiotensina II.', effects: 'Tontura, dor nas costas, fadiga.', indication: 'Tratamento de hipertensão arterial.' },
        { name: 'Metformina', description: 'Antidiabético oral.', effects: 'Náuseas, diarreia, dor abdominal.', indication: 'Tratamento de diabetes tipo 2.' },
        { name: 'Loratadina', description: 'Antihistamínico.', effects: 'Dor de cabeça, secura da boca, sonolência.', indication: 'Tratamento de alergias.' },
        { name: 'Simvastatina', description: 'Estatina.', effects: 'Dor muscular, dor abdominal, constipação.', indication: 'Tratamento de hipercolesterolemia.' },
        { name: 'Furosemida', description: 'Diurético.', effects: 'Desidratação, desequilíbrio eletrolítico, tontura.', indication: 'Tratamento de edema e hipertensão.' },
        { name: 'Clonazepam', description: 'Ansiolítico e anticonvulsivante.', effects: 'Sonolência, tontura, dificuldade de coordenação.', indication: 'Tratamento de distúrbios de ansiedade e epilepsia.' },
        { name: 'Enalapril', description: 'Inibidor da ECA.', effects: 'Tontura, tosse seca, hipopotassemia.', indication: 'Tratamento de hipertensão e insuficiência cardíaca.' },
        { name: 'Hydroxicloroquina', description: 'Antimalárico e antiinflamatório.', effects: 'Náuseas, dor abdominal, problemas de visão.', indication: 'Tratamento de malária e artrite reumatoide.' },
        { name: 'Ranitidina', description: 'Antagonista dos receptores H2.', effects: 'Dor de cabeça, constipação, diarreia.', indication: 'Tratamento de úlceras gástricas e refluxo ácido.' },
        { name: 'Metoclopramida', description: 'Antiemético e pró-cinético.', effects: 'Sonolência, fadiga, diarreia.', indication: 'Tratamento de náuseas e vômitos.' },
        { name: 'Tiamina', description: 'Vitamina B1.', effects: 'Reações alérgicas raras.', indication: 'Tratamento de deficiência de vitamina B1.' },
        { name: 'Captopril', description: 'Inibidor da ECA.', effects: 'Tosse seca, tontura, erupção cutânea.', indication: 'Tratamento de hipertensão e insuficiência cardíaca.' },
        { name: 'Propranolol', description: 'Betabloqueador.', effects: 'Fadiga, frio nas extremidades, bradicardia.', indication: 'Tratamento de hipertensão e ansiedade.' },
        { name: 'Valeriana', description: 'Fitoterápico sedativo.', effects: 'Sonolência, dor de cabeça, náuseas.', indication: 'Tratamento de insônia e ansiedade.' },
        { name: 'Cetoconazol', description: 'Antimicótico.', effects: 'Náuseas, dor abdominal, erupção cutânea.', indication: 'Tratamento de infecções fúngicas.' },
        { name: 'Sulfato Ferroso', description: 'Suplemento de ferro.', effects: 'Dor abdominal, constipação, náuseas.', indication: 'Tratamento de anemia ferropriva.' },
        { name: 'Valsartana', description: 'Antagonista dos receptores da angiotensina II.', effects: 'Tontura, dor nas costas, fadiga.', indication: 'Tratamento de hipertensão arterial.' },
        { name: 'Espironolactona', description: 'Diurético poupador de potássio.', effects: 'Hipercalemia, dor abdominal, tontura.', indication: 'Tratamento de edema e hipertensão.' },
        { name: 'Diazepam', description: 'Ansiolítico e anticonvulsivante.', effects: 'Sonolência, fraqueza muscular, confusão.', indication: 'Tratamento de ansiedade e convulsões.' },
        { name: 'Cloridrato de Amoxicilina', description: 'Antibiótico.', effects: 'Náuseas, diarreia, erupção cutânea.', indication: 'Tratamento de infecções bacterianas.' },
        { name: 'Prednisona', description: 'Corticosteroide.', effects: 'Ganho de peso, hiperglicemia, hipertensão.', indication: 'Tratamento de inflamações e doenças autoimunes.' },
        { name: 'Cloridrato de Betametasona', description: 'Corticosteroide.', effects: 'Ganho de peso, alterações de humor, aumento da pressão arterial.', indication: 'Tratamento de inflamações e reações alérgicas.' },
        { name: 'Digoxina', description: 'Glicosídeo cardíaco.', effects: 'Náuseas, visão borrada, confusão.', indication: 'Tratamento de insuficiência cardíaca e fibrilação atrial.' },
        { name: 'Lorazepam', description: 'Ansiolítico e sedativo.', effects: 'Sonolência, tontura, problemas de coordenação.', indication: 'Tratamento de ansiedade e insônia.' },
        { name: 'Ciprofloxacino', description: 'Antibiótico.', effects: 'Náuseas, diarreia, dor abdominal.', indication: 'Tratamento de infecções bacterianas.' },
        { name: 'Fexofenadina', description: 'Antihistamínico.', effects: 'Dor de cabeça, fadiga, boca seca.', indication: 'Tratamento de alergias sazonais.' },
        { name: 'Azitromicina', description: 'Antibiótico.', effects: 'Náuseas, vômitos, dor abdominal.', indication: 'Tratamento de infecções bacterianas.' },
        { name: 'Metronidazol', description: 'Antimicrobiano.', effects: 'Náuseas, dor de cabeça, sabor metálico.', indication: 'Tratamento de infecções parasitárias e bacterianas.' }
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
            <strong>Indicação:</strong> ${medication.indication}
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
