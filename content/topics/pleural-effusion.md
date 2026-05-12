---
title: Pleural Effusion
system: Pulmonology
scenario: "A 62-year-old man with a 45 pack-year smoking history presents with three months of progressive breathlessness and a non-productive cough. He has lost 6kg and noticed his voice has become hoarse. On examination, his trachea is deviated to the right. There is stony dullness to percussion and absent breath sounds over the left lower and mid zones."
sources:
  - BTS Pleural Disease Guidelines 2023
  - NICE NG12
---



## Overview

A pleural effusion is an abnormal accumulation of fluid in the pleural space. The normal pleural space contains only 10–20 mL of fluid — the balance between production (primarily by the parietal pleura) and absorption (primarily via lymphatics). Effusions develop when this balance is disrupted by increased fluid production, reduced absorption, or both. The clinical priority is to determine whether the effusion is a **transudate** (a systemic process affecting fluid dynamics) or an **exudate** (a local process involving the pleura itself), as this fundamentally directs the diagnostic and management pathway.

## Pathophysiology

Fluid accumulates in the pleural space through four main mechanisms:

1. **Elevated hydrostatic pressure** (heart failure) — increased capillary pressure drives fluid from parietal pleural capillaries into the pleural space
2. **Reduced oncotic pressure** (hypoalbuminaemia in nephrotic syndrome, cirrhosis, malnutrition) — reduced plasma protein reduces the osmotic force holding fluid in the vasculature
3. **Increased capillary permeability** (inflammation, infection, malignancy) — disrupted endothelial integrity allows protein-rich fluid to leak
4. **Impaired lymphatic drainage** (malignancy, lymphoma) — normal pleural fluid reabsorption is blocked

Transudates result from mechanisms 1 and 2. Exudates result from mechanisms 3 and 4.

## Clinical Presentation

Small effusions (<300 mL) may be asymptomatic. As volume increases, breathlessness from lung compression becomes the dominant symptom. Associated symptoms provide critical diagnostic clues:

- **Pleuritic chest pain** — suggests pleural inflammation (infection, PE, malignant mesothelioma)
- **Fever and purulent sputum** — parapneumonic effusion or empyema
- **Peripheral oedema and orthopnoea** — heart failure
- **Weight loss, night sweats, haemoptysis** — malignancy or TB
- **Ascites and jaundice** — hepatic hydrothorax (cirrhosis)

**Examination findings:**
- Stony dullness to percussion — highly characteristic of pleural fluid (distinguishes from consolidation which produces a duller rather than stony note)
- Reduced or absent breath sounds and tactile vocal fremitus
- Tracheal deviation away from a large effusion; toward an effusion if the underlying lung is collapsed by an obstructing mass

## Diagnosis

**CXR:** Blunting of the costophrenic angle (>200 mL), meniscus sign, haziness of the lower zone. Mediastinal shift away from a large effusion; shift toward it suggests underlying collapse (malignant airway obstruction). Loculated effusions have an atypical distribution.

**Pleural ultrasound:** Mandatory before any pleural procedure. More sensitive than CXR for small effusions, identifies loculations, guides safe drainage, and reduces complication rates. Real-time ultrasound guidance is now the standard of care.

**CT thorax with contrast:** Characterises the pleura (smooth vs nodular/irregular — the latter strongly suggests malignancy or empyema), identifies underlying parenchymal or mediastinal pathology, and guides biopsy planning.

**Pleural fluid analysis — Light's criteria:**

An exudate is defined by **at least one** of the following:
- Pleural fluid protein / serum protein >0.5
- Pleural fluid LDH / serum LDH >0.6
- Pleural fluid LDH > 2/3 upper limit of normal for serum LDH

A transudate meets none of these criteria.

**Additional pleural fluid tests:**

| Test | Use |
|------|-----|
| pH | pH <7.2 in parapneumonic effusion = complicated; requires drainage |
| Glucose | Low in infection, malignancy, RA |
| Cytology | Malignant cells — sensitivity ~60%; send ≥50 mL for best yield |
| Microbiology | MC&S; Ziehl-Neelsen and TB culture if TB suspected |
| LDH | Elevated in infection, malignancy |
| Triglycerides | >1.24 mmol/L = chylothorax (lymphatic disruption) |
| Haematocrit | >50% of serum haematocrit = haemothorax |
| Amylase | Elevated in oesophageal rupture, pancreatitis |

**Causes by fluid type:**

| Transudate | Exudate |
|-----------|--------|
| Heart failure (most common) | Malignancy (most common in adults) |
| Liver cirrhosis (hepatic hydrothorax) | Parapneumonic effusion / empyema |
| Nephrotic syndrome | Tuberculosis |
| Hypoalbuminaemia | Pulmonary embolism |
| Hypothyroidism | Mesothelioma |
| Constrictive pericarditis | Autoimmune (RA, SLE) |

```mermaid
flowchart TD
    A["Pleural effusion identified\nDullness to percussion · reduced breath sounds · CXR (blunting)\nor CT/USS finding · dyspnoea"] --> SIZE{"Symptomatic or\nsignificant size?"}

    SIZE -->|"Massive/symptomatic\nor diagnostic uncertainty"| TAP["DIAGNOSTIC AND THERAPEUTIC PLEUROCENTESIS\nUltrasound-guided aspiration (standard of care — NICE)\nSend: pH · protein · LDH · glucose · differential cell count · culture + Gram stain · cytology\nApply Light's criteria (exudate if ANY of):\n· Pleural protein/serum protein >0.5\n· Pleural LDH/serum LDH >0.6\n· Pleural LDH >2/3 upper limit of normal serum LDH"]

    TAP --> LIGHTS{"Light's criteria?"}

    LIGHTS -->|"TRANSUDATE (none of Light's criteria)\npleural protein <30 g/L"| TRANSUDATE["TRANSUDATIVE EFFUSION\nCauses (fluid leaks due to hydrostatic/oncotic imbalance):\nHeart failure (most common): bilateral · BNP >100 · cardiomegaly on CXR\n→ Diuresis + treat underlying HF\nLiver cirrhosis (hepatic hydrothorax): right-sided · ascites\n→ Diuresis · TIPS for refractory\nNephrotic syndrome: bilateral · hypoalbuminaemia · frothy urine\nHypothyroidism: check TFTs\nConstrictive pericarditis\nManagement: treat underlying cause — do NOT drain transudates repeatedly unless symptomatic"]

    LIGHTS -->|"EXUDATE (any Light's criterion)\npleural protein >30 g/L"| EXUDATE{"Exudate cause?"}

    EXUDATE -->|"pH <7.2 · glucose <2.2\nLDH >1000 · +ve culture · frank pus\nor loculated on USS"| COMPLICATED["COMPLICATED PARAPNEUMONIC EFFUSION / EMPYEMA\nChest drain insertion (14–16 Fr) under USS guidance\nIV antibiotics: co-amoxiclav 1.2 g TDS (or piperacillin-tazobactam if severe)\nIntrapleural fibrinolytics: alteplase 10 mg + DNase 5 mg BD × 3 days\n(MIST2 trial: significantly reduces need for surgery)\nSurgical VATS decortication: if loculated/failed drainage\nAntibiotic duration: 3–6 weeks total (until drain removed + clinical improvement)"]

    EXUDATE -->|"Haemoserous fluid · unilateral\nweight loss · pleural thickening on CT\ncytology positive"| MALIGNANT["MALIGNANT PLEURAL EFFUSION\nCytology: positive in 60% (repeat if negative — send 50+ mL)\nPleural biopsy (CT-guided or VATS): if cytology negative\nCommon primaries: lung · breast · mesothelioma · lymphoma\nManagement:\nSmall/asymptomatic: observe\nLarge/symptomatic: therapeutic thoracocentesis (1.5 L max per session)\nIndwelling pleural catheter (IPC): recurrent malignant effusion · allows home drainage\nTalc pleurodesis: definitive obliteration (VATS or slurry via drain)"]

    EXUDATE -->|"Lymphocytic effusion\nAFB/NAAT · ± upper lobe CXR changes\nimmunocompromised · immigrant"| TB_EFF["TB PLEURITIS\nTB effusion: lymphocytic exudate · low glucose · ADA >40 IU/L\nPleural biopsy: caseating granulomata (most sensitive for TB pleurisy)\nTreatment: standard 6-month TB regimen (2HRZE/4HR)\nBritish Thoracic Society: drain only if massive/symptomatic (not routine)"]

    EXUDATE -->|"Unilateral · risk factors for PE\nor bilateral · diaphragmatic irritation\nor post-cardiac surgery"| OTHER_EX["OTHER EXUDATES\nPulmonary embolism: haemorrhagic exudate · pleuritic pain · positive CTPA\nPancreatitis: high amylase in pleural fluid (left-sided)\nRheumatoid arthritis: very low glucose (<1.6) · low complement\nSLE: multisystem features · ANA + anti-dsDNA\nChylothorax: milky fluid · high TG (>1.2 mmol/L) · lymphatic disruption"]
```

## Management

### Transudate

Treat the underlying cause. Heart failure effusions respond to diuresis. Hepatic hydrothorax requires management of portal hypertension (diuretics, TIPSS). Therapeutic thoracocentesis for symptom relief if diuresis is inadequate or slow.

### Parapneumonic Effusion and Empyema

Any pleural fluid associated with pneumonia should be aspirated and the pH measured. A complicated parapneumonic effusion (pH <7.2, glucose <2.2 mmol/L, LDH >1000 U/L, positive MC&S, or frankly purulent) requires **chest drain insertion**. Delay allows loculation and makes drainage progressively more difficult.

**Empyema:** Frank pus in the pleural space. Requires:
- Chest drain — small-bore Seldinger (if free-flowing) or large-bore (loculated)
- Prolonged IV antibiotics (typically 4–6 weeks for empyema)
- Intrapleural fibrinolytics (urokinase or alteplase/DNase combination) if loculated — significantly improves drainage (MIST2 trial)
- VATS decortication for treatment failure

### Malignant Pleural Effusion

Often recurs after simple thoracocentesis. Options for pleurodesis to prevent recurrence:
- **Talc pleurodesis** — talc slurry via chest drain or poudrage via thoracoscopy; induces pleural fibrosis; most effective method
- **Indwelling pleural catheter (IPC)** — tunnelled drain for ambulatory intermittent drainage; preferred if lung is trapped (unable to expand after drainage); equivalent to talc pleurodesis for dyspnoea relief (TIME2 trial)

### Haemothorax

Traumatic or spontaneous haemothorax. Requires large-bore chest drain. Surgical intervention for massive haemothorax (>1500 mL drained initially) or continued bleeding.

## Complications

- Empyema and pleural thickening if infection not drained promptly
- Trapped lung from cortical formation — limits expansion after drainage
- Re-expansion pulmonary oedema — avoid draining >1.5L in a single session
- Pneumothorax and haemothorax from pleural procedures — reduced by ultrasound guidance

## Clinical Insight

Bilateral transudates in the context of heart failure do not routinely need pleural aspiration — treat the heart failure and they will resolve. However, if one effusion is significantly larger than the other, or if there is any atypical feature (fever, chest pain, unilateral exudate), sample it.

A unilateral exudative effusion in a smoker with weight loss is a malignant effusion until proven otherwise. The absence of malignant cells on cytology does not exclude it — sensitivity is only about 60%. Thoracoscopy with pleural biopsy is the investigation of choice for unexplained exudative effusion and achieves a diagnosis in over 90% of malignant cases.

Mesothelioma is the one diagnosis that is easy to miss and devastating to delay. Any pleural effusion with a history of asbestos exposure — even decades prior — should prompt CT, thoracoscopy, and pleural biopsy, regardless of how the fluid looks macroscopically.
