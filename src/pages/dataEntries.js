import React from 'react';
import '../style/style.css'

const DataEntries = () => {
  return (
    <div className="DataPage">
      <h1 className="Title">DONNEES A SAISIR</h1>
      <form
      action=""
      method="post"
      className="FormData">
	  
		<div className="package1">
			<div className='Data'>
			  <label className="DataE01">
				E01: Kilométrage annuel moyen du véhicule(km)
			  </label>
			  <input
				type="number"
				id="E01"
			  />
			</div>
			<div className='Data'>
			  <label className="DataE02">
				E02: Dont kilométrage en charge (km)
			  </label>
			  <input
				type="number"
				id="E02"
			  />
			</div>
			<div className='Data'>
			  <label className="DataE03">
				E03: Nombre de véhicules tractés pour un véhicule moteur
			  </label>
			  <input
				type="number"
				id="E03"
			  />
			</div> 
			<div className='Data'>
			  <label className="DataE04">
				E04: Nombre de jours d'exploitation du véhicule moteur par an
			  </label>
			  <input
				type="number"
				id="E04"
			  />
			</div> 
			<div className='Data'>
			  <label className="DataE05">
				E05: Unité de chargement (texte libre)
			  </label>
			  <input
				type="text"
				id="E05"
			  />
			</div> 
			<div className='Data'>
			  <label className="DataE06">
				E06: Capacité de chargement (correspondant à l'unité ci-dessus)
			  </label>
			  <input
				type="number"
				id="E06"
			  />
			</div> 
			<div className='Data'>
			  <label className="DataE07">
				E07: Coefficient d'utilisation de cette capacité (%)
			  </label>
			  <input
				type="number"
				id="E07"
			  />
			</div> 
		</div>
		
		<div className="package2">
			<div className='Data'>
			  <label className="DataE08">
				E08: Consommation de Gazole aux 100 km (litre pour 100 km)
			  </label>
			  <input
				type="number"
				id="E08"
			  />
			</div> 
			<div className='Data'>
			  <label className="DataE09">
				E09: Prix moyen du litre de Gazole route (hors toutes taxes récupérables) (€)
			  </label>
			  <input
				type="number"
				id="E09"
			  />
			</div> 
			<div className='Data'>
			  <label className="DataE10">
				E10: Part de l'approvisionnement citerne (%)
			  </label>
			  <input
				type="number"
				id="E10"
			  />
			</div> 
			<div className='Data'>
			  <label className="DataE11">
				E11: Prix moyen du litre de Gazole citerne (hors toutes taxes récupérables) (€)
			  </label>
			  <input
				type="number"
				id="E11"
			  />
			</div> 
		</div>
		
		<div className='package3'>
			<div className='Data'>
			  <label className="DataE12">
				E12: Coûts kilométriques pneumatiques globaux (€/km)
			  </label>
			  <input
				type="number"
				id="E12"
			  />
			</div> 
			<div className='Data'>
			  <label className="DataE13">
				E13: Nombre de pneus Véhicule moteur
			  </label>
			  <input
				type="number"
				id="E13"
			  />
			</div> 
			<div className='Data'>
			  <label className="DataE14">
				E14: Nombre de pneus Véhicule tracté
			  </label>
			  <input
				type="number"
				id="E14"
			  />
			</div> 
			<div className='Data'>
			  <label className="DataE15">
				E15: Prix d'un pneu (€) Véhicule moteur
			  </label>
			  <input
				type="number"
				id="E15"
			  />
			</div> 
			<div className='Data'>
			  <label className="DataE16">
				E16: Prix d'un pneu (€) Véhicule tracté
			  </label>
			  <input
				type="number"
				id="E16"
			  />
			</div> 
			<div className='Data'>
			  <label className="DataE17">
				E17: Durée de vie (km) Véhicule moteur
			  </label>
			  <input
				type="number"
				id="E17"
			  />
			</div> 
			<div className='Data'>
			  <label className="DataE18">
				E18: Durée de vie (km) Véhicule tracté
			  </label>
			  <input
				type="number"
				id="E18"
			  />
			</div> 
		</div>
		
		<div className='package4'>
			<div className='Data'>
			  <label className="DataE19">
				E19: Dépenses annuelles d'entretien-réparations par véhicule (€)
			  </label>
			  <input
				type="number"
				id="E19"
			  />
			</div> 
		</div>
		
		<div className='package5'>
			<div className='Data'>
			  <label className="DataE20">
				E20: Dépenses annuelles de péages (€)
			  </label>
			  <input
				type="number"
				id="E20"
			  />
			</div> 
		</div>
		
		<div className='package6'>
			<div className='Data'>
			  <label className="DataE21">
				E21: Durée d'utilisation du véhicule moteur (ans)
			  </label>
			  <input
				type="number"
				id="E21"
			  />
			</div> 
		</div>
		
		<div className='package7'>
			<div className='Data'>
			  <label className="DataE22">
				E22: Mode de financement du véhicule moteur (1 pour Emprunt, 2 pour Crédit Bail, 3 pour Location Financière)
			  </label>
			  <input
				type="number"
				id="E22"
			  />
			</div> 
		</div> 
		
		<div className='package8'>
			<div className='Data'>
			  <label className="DataE23">
				E23: Valeur du véhicule moteur (€) 
			  </label>
			  <input
				type="number"
				id="E23"
			  />
			</div> 
			<div className='Data'>
			  <label className="DataE24">
				E24: Montant de l'emprunt (€)
			  </label>
			  <input
				type="number"
				id="E24"
			  />
			</div> 
			<div className='Data'>
			  <label className="DataE25">
				E25: Taux d'intérêt de l'emprunt (%) 
			  </label>
			  <input
				type="number"
				id="E25"
			  />
			</div> 
			<div className='Data'>
			  <label className="DataE26">
				E26: Durée de l'emprunt (mois) 
			  </label>
			  <input
				type="number"
				id="E26"
			  />
			</div> 
			<div className='Data'>
			  <label className="DataE27">
				E27: Valeur de revente (€) 
			  </label>
			  <input
				type="number"
				id="E27"
			  />
			</div> 
		</div>
		
		<div className='package9'>
			<div className='Data'>
			  <label className="DataE28">
				E28: Valeur du véhicule moteur (€)   
			  </label>
			  <input
				type="number"
				id="E28"
			  />
			</div> 
			<div className='Data'>
			  <label className="DataE29">
				E29: Durée du contrat (mois) (1) ou (2) 
			  </label>
			  <input
				type="number"
				id="E29"
			  />
			</div> 
			<div className='Data'>
			  <label className="DataE30">
				E30: Montant mensuel du loyer (€) (1) ou (2) 
			  </label>
			  <input
				type="number"
				id="E30"
			  />
			</div> 
			<div className='Data'>
			  <label className="DataE31">
				E31: Valeur optionnelle d'achat (€) (1)
			  </label>
			  <input
				type="number"
				id="E31"
			  />
			</div> 
			<div className='Data'>
			  <label className="DataE32">
				E32: Valeur de revente (€) (1)
			  </label>
			  <input
				type="number"
				id="E32"
			  />
			</div> 
		</div> 
		
		<div className='package10'>
			<div className='Data'>
			  <label className="DataE33">
				E33: Durée d'utilisation du véhicule tracté (ans)
			  </label>
			  <input
				type="number"
				id="E33"
			  />
			</div> 
		</div>
		
		<div className='package11'>
			<div className='Data'>
			  <label className="DataE34">
				E34: Mode de financement du véhicule tracté (1 pour Emprunt, 2 pour Crédit Bail, 3 pour Location Financière)
			  </label>
			  <input
				type="number"
				id="E34"
			  />
			</div> 
		</div>
		
		<div className='package12'>
			<div className='Data'>
			  <label className="DataE35">
				E35: Valeur du véhicule tracté (€) 
			  </label>
			  <input
				type="number"
				id="E35"
			  />
			</div> 
			<div className='Data'>
			  <label className="DataE36">
				E36: Montant de l'emprunt (€) 
			  </label>
			  <input
				type="number"
				id="E36"
			  />
			</div> 
			<div className='Data'>
			  <label className="DataE37">
				E37: Taux d'intérêt de l'emprunt (%)  
			  </label>
			  <input
				type="number"
				id="E37"
			  />
			</div> 
			<div className='Data'>
			  <label className="DataE38">
				E38: Durée de l'emprunt (mois) 
			  </label>
			  <input
				type="number"
				id="E38"
			  />
			</div>
			<div className='Data'>
			  <label className="DataE39">
				E39: Valeur de revente (€) 
			  </label>
			  <input
				type="number"
				id="E39"
			  />
			</div>
		</div>
		
		<div className='package13'>
			<div className='Data'>
			  <label className="DataE40">
				E40: Valeur du véhicule tracté (€)   
			  </label>
			  <input
				type="number"
				id="E40"
			  />
			</div>
			<div className='Data'>
			  <label className="DataE41">
				E41: Durée du contrat (mois) (1) ou (2) 
			  </label>
			  <input
				type="number"
				id="E41"
			  />
			</div>
			<div className='Data'>
			  <label className="DataE42">
				E42: Montant mensuel du loyer (€) (1) ou (2)  
			  </label>
			  <input
				type="number"
				id="E42"
			  />
			</div>
			<div className='Data'>
			  <label className="DataE43">
				E43: Valeur optionnelle d'achat (€) (1) 
			  </label>
			  <input
				type="number"
				id="E43"
			  />
			</div>
			<div className='Data'>
			  <label className="DataE44">
				E44: Valeur de revente (€) (1) 
			  </label>
			  <input
				type="number"
				id="E44"
			  />
			</div>
		</div>
		
		<div className='package14'>
			<div className='Data'>
			  <label className="DataE45">
				E45: Montant annuel de l'assurance d'un véhicule RC + VI (€/an)
			  </label>
			  <input
				type="number"
				id="E45"
			  />
			</div>
			<div className='Data'>
			  <label className="DataE46">
				E46: Montant annuel de l'assurance marchandises transportées par véhicule (€/an)
			  </label>
			  <input
				type="number"
				id="E46"
			  />
			</div>
		</div>	
		
		<div className='package15'>	
			<div className='Data'>
			  <label className="DataE47">
				E47: Montant annuel de taxe à l'essieu (€/an)
			  </label>
			  <input
				type="number"
				id="E47"
			  />
			</div>
		</div>
		
		<div className='package16'>	
			<div className='Data'>
			  <label className="DataE48">
				E48: Montant annuel des coûts de structure par véhicule (€/an)
			  </label>
			  <input
				type="number"
				id="E48"
			  />
			</div>
			<div className='Data'>
			  <label className="DataE49">
				E49: Nombre de conducteur(s) affecté(s) à l'exploitation du véhicule
			  </label>
			  <input
				type="number"
				id="E49"
			  />
			</div>
			<div className='Data'>
			  <label className="DataE50">
				E50: Nombre de jours d'activité par an d'un conducteur
			  </label>
			  <input
				type="number"
				id="E50"
			  />
			</div>
			<div className='Data'>
			  <label className="DataE51">
				E51: Temps de service mensuel (heures)
			  </label>
			  <input
				type="number"
				id="E51"
			  />
			</div>
			<div className='Data'>
			  <label className="DataE52">
				E52: Temps de conduite mensuel (heures)
			  </label>
			  <input
				type="number"
				id="E52"
			  />
			</div>
			<div className='Data'>
			  <label className="DataE54">
				E54: Salaire mensuel brut (€/mois)
			  </label>
			  <input
				type="number"
				id="E54"
			  />
			</div>
			<div className='Data'>
			  <label className="DataE55">
				E55: Primes annuelles (€/an)
			  </label>
			  <input
				type="number"
				id="E55"
			  />
			</div>
			<div className='Data'>
			  <label className="DataE56">
				E56: Taux de cotisations employeurs (%)
			  </label>
			  <input
				type="number"
				id="E56"
			  />
			</div>
			<div className='Data'>
			  <label className="DataE57">
				E57: Indemnités de déplacement par an (€/an)
			  </label>
			  <input
				type="number"
				id="E57"
			  />
			</div>
			<div className='Data'>
			  <label className="DataE58">
				E58: Nombre de mois payés
			  </label>
			  <input
				type="number"
				id="E58"
			  />
			</div>
		</div>
		
		<div className='package17'>		
			<div className='Data'>
			  <label className="DataE59">
				E59: Libellé de la composante de coût (texte libre)
			  </label>
			  <input
				type="number"
				id="E59"
			  />
			</div>
			<div className='Data'>
			  <label className="DataE60">
				E60: Unité d'œuvre correspondant (texte libre)
			  </label>
			  <input
				type="number"
				id="E60"
			  />
			</div>
			<div className='Data'>
			  <label className="DataE61">
				E61: Nombre d'unité essai2 utilisé par an
			  </label>
			  <input
				type="number"
				id="E61"
			  />
			</div>
			<div className='Data'>
			  <label className="DataE62">
				E62: Montant annuel imputable à ce coût  (€/an)
			  </label>
			  <input
				type="number"
				id="E62"
			  />
			</div>
		</div>
		
		
		
        <div className="NextPage">
			<button
				type="submit"
				className="ButtonPage"
				>Page suivante
			</button>
        </div>
      </form>
    </div>
  );
};

export default DataEntries;
