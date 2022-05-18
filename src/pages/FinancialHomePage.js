import React from 'react';
import FinancialMenu from '../components/FinancialMenu'
import Footer from '../components/Footer'
import InputDataNumber from '../components/InputDataNumber';
import InputDataText from '../components/InputDataText';

const FinancialHomePage = () => {
  return (
    <>
      <FinancialMenu />
      <div className='package1'>
        <InputDataNumber
          label="E01: Kilométrage annuel moyen du véhicule(km)"
          id='E01'
        />
        <InputDataNumber
          label="E02: Dont kilométrage en charge (km)"
          id='E02'
        />
        <InputDataNumber
          label="E03: Nombre de véhicules tractés pour un véhicule moteur"
          id='E03'
        />
        <InputDataNumber
          label="E04: Nombre de jours d'exploitation du véhicule moteur par an"
          id='E04'
        />
        <InputDataText
          label='E05: Unité de chargement (texte libre)'
          id='E05'
        />
        <InputDataNumber
          label="E06: Capacité de chargement (correspondant à l'unité ci-dessus)"
          id='E06'
        />
        <InputDataNumber
          label="E07: Coefficient d'utilisation de cette capacité (%)"
          id='E07'
        />
      </div>
      <div className='package2'>
        <InputDataNumber
          label="E08: Consommation de Gazole aux 100 km (litre pour 100 km)"
          id='E08'
        />
        <InputDataNumber
          label="E09: Prix moyen du litre de Gazole route (hors toutes taxes récupérables) (€)"
          id='E09'
        />
        <InputDataNumber
          label="E10: Part de l'approvisionnement citerne (%)"
          id='E10'
        />
        <InputDataNumber
          label="E11: Prix moyen du litre de Gazole citerne (hors toutes taxes récupérables) (€)"
          id='E11'
        />
      </div>
      <div className='package3'>
        <InputDataNumber
          label="E12: Coûts kilométriques pneumatiques globaux (€/km)"
          id='E12'
        />
        <InputDataNumber
          label="E13: Nombre de pneus Véhicule moteur"
          id='E13'
        />
        <InputDataNumber
          label="E14: Nombre de pneus Véhicule tracté"
          id='E15'
        />
        <InputDataNumber
          label="E15: Prix d'un pneu (€) Véhicule moteur"
          id='E15'
        />
        <InputDataNumber
          label="E16: Prix d'un pneu (€) Véhicule tracté"
          id='E16'
        />
        <InputDataNumber
          label="E17: Durée de vie (km) Véhicule moteur"
          id='E17'
        />
        <InputDataNumber
          label="E18: Durée de vie (km) Véhicule tracté"
          id='E18'
        />
      </div>
      <div className='package4'>
        <InputDataNumber
          label="E19: Dépenses annuelles d'entretien-réparations par véhicule (€)"
          id='E19'
        />
      </div>
      <div className='package5'>
        <InputDataNumber
          label="E20: Dépenses annuelles de péages (€)"
          id='E20'
        />
      </div>
      <div className='package6'>
        <InputDataNumber
          label="E21: Durée d'utilisation du véhicule moteur (ans)"
          id='E21'
        />
      </div>
      <div className='package7'>
        <InputDataNumber
          label="E22: Mode de financement du véhicule moteur (1 pour Emprunt, 2 pour Crédit Bail, 3 pour Location Financière)"
          id='E22'
        />
      </div>
      <div className='package8'>
        <InputDataNumber
          label="E23: Valeur du véhicule moteur (€) "
          id='E23'
        />
        <InputDataNumber
          label="E24: Montant de l'emprunt (€)"
          id='E24'
        />
        <InputDataNumber
          label="E25: Taux d'intérêt de l'emprunt (%) "
          id='E25'
        />
        <InputDataNumber
          label="E26: Durée de l'emprunt (mois) "
          id='E26'
        />
        <InputDataNumber
          label="E27: Valeur de revente (€)"
          id='E27'
        />
      </div>
      <div className='package9'>
        <InputDataNumber
          label="E28: Valeur du véhicule moteur (€)   "
          id='E28'
        />
        <InputDataNumber
          label="E29: Durée du contrat (mois) (1) ou (2) "
          id='E29'
        />
        <InputDataNumber
          label="E30: Montant mensuel du loyer (€) (1) ou (2) "
          id='E30'
        />
        <InputDataNumber
          label="E31: Valeur optionnelle d'achat (€) (1)"
          id='E31'
        />
        <InputDataNumber
          label="E32: Valeur de revente (€) (1)"
          id='E32'
        />
      </div>
      <div className='package10'>
        <InputDataNumber
          label="E33: Durée d'utilisation du véhicule tracté (ans)"
          id='E33'
        />
      </div>
      <div className='package11'>
        <InputDataNumber
          label="E34: Mode de financement du véhicule tracté (1 pour Emprunt, 2 pour Crédit Bail, 3 pour Location Financière)"
          id='E34'
        />
      </div>
      <div className='package12'>
        <InputDataNumber
          label="E35: Valeur du véhicule tracté (€) "
          id='E35'
        />
        <InputDataNumber
          label="E36: Montant de l'emprunt (€)"
          id='E36'
        />
        <InputDataNumber
          label="E37: Taux d'intérêt de l'emprunt (%) "
          id='E37'
        />
        <InputDataNumber
          label="E38: Durée de l'emprunt (mois)"
          id='E38'
        />
        <InputDataNumber
          label="E39: Valeur de revente (€)"
          id='E39'
        />
      </div>
      <div className='package13'>
        <InputDataNumber
          label="E40: Valeur du véhicule tracté (€)"
          id='E40'
        />
        <InputDataNumber
          label="E41: Durée du contrat (mois) (1) ou (2) "
          id='E41'
        />
        <InputDataNumber
          label="E42: Montant mensuel du loyer (€) (1) ou (2)"
          id='E42'
        />
        <InputDataNumber
          label="E43: Valeur optionnelle d'achat (€) (1)"
          id='E0'
        />
        <InputDataNumber
          label="E44: Valeur de revente (€) (1)"
          id='E44'
        />
      </div>
      <div className='package14'>
        <InputDataNumber
          label="E45: Montant annuel de l'assurance d'un véhicule RC + VI (€/an)"
          id='E45'
        />
        <InputDataNumber
          label="E46: Montant annuel de l'assurance marchandises transportées par véhicule (€/an)"
          id='E46'
        />
      </div>
      <div className='package15'>
        <InputDataNumber
          label="E47: Montant annuel de taxe à l'essieu (€/an)"
          id='E47'
        />
      </div>
      <div className='package16'>
        <InputDataNumber
          label="E48: Montant annuel des coûts de structure par véhicule (€/an)"
          id='E48'
        />
      </div>
      <div className='package17'>
        <InputDataNumber
          label="E49: Nombre de conducteur(s) affecté(s) à l'exploitation du véhicule"
          id='E49'
        />
        <InputDataNumber
          label="E50: Nombre de jours d'activité par an d'un conducteur"
          id='E50'
        />
        <InputDataNumber
          label="E51: Temps de service mensuel (heures)"
          id='E51'
        />
        <InputDataNumber
          label="E52: Temps de conduite mensuel (heures)"
          id='E52'
        />
        <InputDataNumber
          label="E53: Nombre de jours travaillés par mois"
          id='E53'
        />
        <InputDataNumber
          label="E54: Salaire mensuel brut (€/mois)"
          id='E54'
        />
        <InputDataNumber
          label="E55: Primes annuelles (€/an)"
          id='E55'
        />
        <InputDataNumber
          label="E56: Taux de cotisations employeurs (%)"
          id='E56'
        />
        <InputDataNumber
          label="E57: Indemnités de déplacement par an (€/an)"
          id='E57'
        />
        <InputDataNumber
          label="E58: Nombre de mois payés"
          id='E58'
        />
      </div>
      <div className='package17'>
        <InputDataNumber
          label="E59: Libellé de la composante de coût (texte libre)"
          id='E59'
        />
        <InputDataNumber
          label="E60: Unité d'œuvre correspondant (texte libre)"
          id='E60'
        />
        <InputDataNumber
          label="E61: Nombre d'unité essai2 utilisé par an"
          id='E61'
        />
        <InputDataNumber
          label="E62: Montant annuel imputable à ce coût  (€/an)"
          id='E62'
        />
      </div> 
        
      <Footer />
    </>
  );
};

export default FinancialHomePage;