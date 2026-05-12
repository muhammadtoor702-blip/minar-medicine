---
title: Nephrolithiasis
system: Nephrology
scenario: "A 34-year-old man presents to A&E with sudden onset severe right-sided loin pain radiating to the groin and right iliac fossa, associated with nausea and vomiting. He is writhing in agony and cannot find a comfortable position. Urinalysis shows microscopic haematuria. He had a similar episode two years ago that resolved spontaneously."
sources:
  - EAU Urolithiasis Guidelines 2023
  - NICE NG118
---



## Overview

Nephrolithiasis — renal stone disease — is common, affecting approximately 10–15% of the population at least once in a lifetime, with a high recurrence rate (50% within 10 years without intervention). Stones form when urine becomes supersaturated with stone-forming salts, either due to increased solute excretion or decreased inhibitory factors. The clinical presentation is determined by stone size and location. Understanding stone composition drives targeted prevention.

## Pathophysiology

Stone formation requires supersaturation of the urine with crystalline salts — calcium oxalate, uric acid, struvite, cystine — beyond their solubility threshold. This is facilitated by:
- **Increased solute concentration:** hypercalciuria, hyperoxaluria, hyperuricosuria, hypocystinuria
- **Reduced urine volume:** dehydration, inadequate fluid intake
- **Altered urine pH:** acid urine favours uric acid and cystine stones; alkaline urine favours calcium phosphate and struvite
- **Reduced inhibitors:** hypocitraturia, low levels of nephrocalcin and Tamm-Horsfall protein

**Stone types and associations:**

| Type | Composition | Frequency | Radiopacity | Key Associations |
|------|------------|-----------|------------|-----------------|
| Calcium oxalate | CaOx monohydrate/dihydrate | ~75% | Radiopaque | Hypercalciuria, hyperoxaluria, hypocitraturia |
| Calcium phosphate | Hydroxyapatite | ~10% | Radiopaque | Distal RTA (type 1), hyperparathyroidism |
| Uric acid | Urate | ~10% | Radiolucent (invisible on plain film) | Gout, DM, metabolic syndrome, acidic urine |
| Struvite (infection) | Mg-NH₄-phosphate | ~5% | Radiopaque | Urease-producing organisms (*Proteus*, *Klebsiella*, *Pseudomonas*) — forms staghorn calculi |
| Cystine | Cystine | ~1% | Mildly opaque | Cystinuria (autosomal recessive) — young patients with recurrent stones |

**Calcium stones** are most common. Causes of hypercalciuria: idiopathic (most common), hyperparathyroidism, sarcoidosis, vitamin D excess, immobility. Intestinal hyperoxaluria occurs after bowel resection or bariatric surgery (fat malabsorption → more oxalate absorbed).

**Uric acid stones** are unique in being radiolucent — invisible on plain abdominal X-ray but visible on CT. They form in acid urine (pH <5.5) and dissolve with urinary alkalinisation — the only stone type treatable medically.

## Clinical Presentation

**Renal colic:** The classic presentation. Severe, cramping, colicky loin pain that radiates to the ipsilateral iliac fossa and groin (following the ureter), associated with nausea, vomiting, and haematuria. The pain is **characteristically restless** — the patient moves constantly trying to find a position of comfort, distinguishing it from peritonitis where the patient lies still.

Pain from ureteric colic is among the most severe pains in clinical medicine. It occurs in waves as the ureter peristaltically contracts against the obstruction.

**Localisation of pain by stone position:**
- Pelviureteric junction (PUJ): loin pain, costovertebral angle tenderness
- Mid-ureter: pain radiates to the iliac fossa
- Lower ureter / vesicoureteric junction (VUJ): radiation to the groin, scrotum, or labia, with frequency and urgency (mimic of UTI or testicular pathology)

**Haematuria** — macroscopic or microscopic — is present in >90% of cases. Its absence does not exclude a stone (complete obstruction can prevent haematuria).

**Features suggesting complicated stone (requires urgent urology):**
- Fever and rigors (infected obstructed system — surgical emergency)
- Bilateral obstruction or obstruction of a solitary kidney (causing AKI)
- Stone in a transplant kidney
- Anuria

**Differential for loin-to-groin pain:**
- Pyelonephritis — fever, systemic upset, tenderness without colic, positive urine culture
- Appendicitis — right iliac fossa, migration of pain, guarding, Rovsing's sign
- Ruptured ectopic pregnancy — always in women of reproductive age; haemodynamic instability
- Aortic dissection or leaking AAA — older patient, pulsatile mass, haemodynamic compromise

## Diagnosis

**Urine dipstick:** Haematuria (positive in >90%). Nitrites/leucocytes if infection present.

**Non-contrast CT KUB (kidney, ureter, bladder):** Investigation of choice. Sensitivity and specificity >95% for all stone types including radiolucent uric acid stones. Identifies stone size, location, degree of hydronephrosis, and alternative diagnoses. Replaces plain X-ray as first-line imaging.

**Plain abdominal X-ray (KUB):** Can identify radiopaque stones (calcium, struvite) and is useful for follow-up of known radiopaque stones. Misses uric acid and cystine stones. Not reliable as an initial investigation.

**Ultrasound:** Sensitive for hydronephrosis but less sensitive for ureteric stones. Preferred in pregnancy (avoids radiation) and in children. May miss small stones.

**Bloods:** U&E (AKI from obstruction), FBC (infection), serum calcium, uric acid, PTH (if recurrent stones or hypercalcaemia).

**Stone analysis:** If a stone is passed or retrieved, send for chemical analysis to guide metabolic evaluation and prevention.

**24-hour urine collection** (after acute episode has resolved, for recurrent stone-formers): Calcium, oxalate, uric acid, citrate, sodium, creatinine, and volume — identifies specific metabolic abnormalities to target with prevention.

```mermaid
flowchart TD
    A["Acute loin-to-groin pain or renal colic\nSevere unilateral flank pain · haematuria\nnausea/vomiting · restlessness (can't find comfortable position)"] --> EMERG{"Emergency features?"}

    EMERG -->|"Fever >38°C · systemic upset\nor single kidney · transplant kidney"| OBST_INF["OBSTRUCTED INFECTED KIDNEY — UROLOGICAL EMERGENCY\nIV antibiotics immediately (co-amoxiclav or gentamicin)\nEmergency ureteric stent or nephrostomy (decompression)\n(Do NOT wait for stone to pass — infected obstructed kidney is life-threatening)\nBlood cultures before antibiotics · USS/CT for anatomy"]

    EMERG -->|"Anuria or oliguria\nbilateral obstruction"| ANURIA["BILATERAL OBSTRUCTION\nCatheterise for bladder decompression\nUrgent USS: bilateral hydronephrosis\nBilateral ureteric stents · nephrostomy · urology same day\nMonitor AKI: renal function may deteriorate rapidly"]

    EMERG -->|"No emergency features"| IMAGING["NON-CONTRAST CT KUB\n(Gold standard — detects 97% of stones · size · location · hydronephrosis)\nXR KUB: radio-opaque stones only (calcium · struvite) · 60% visible\nUltrasound: safe in pregnancy · detects hydronephrosis · less sensitive for ureteric stones\nFirst-line in pregnancy: USS → MRI if inconclusive (avoid CT)"]

    IMAGING --> SIZE{"Stone size\nand location?"}

    SIZE -->|"<5 mm ureteric stone\n(>90% pass spontaneously)"| CONSERVATIVE["CONSERVATIVE MANAGEMENT\nIV/IM diclofenac 75 mg (most effective analgesia — NSAID > opioid for renal colic)\nor IM morphine if NSAID contraindicated\nAlpha-blocker: tamsulosin 0.4 mg OD — MET (medical expulsive therapy)\nfacilitates passage of lower ureteric stones ≤10 mm\nHigh fluid intake (2–3 L/day)\nStrain urine — send stone for analysis\nFollow-up KUB/USS in 4 weeks"]

    SIZE -->|"5–10 mm or not passing\nat 4 weeks"| INTER["UROLOGICAL INTERVENTION\nUreterorenoscopy (URS) with laser lithotripsy: mid/lower ureteric stones · gold standard\nShockwave lithotripsy (SWL): upper ureteric/renal stones · can be outpatient\nPercutaneous nephrolithotomy (PCNL): large renal stones >2 cm\nContraindications to SWL: pregnancy · coagulopathy · obstruction distal to stone · AAA"]

    SIZE -->|"Stone analysis → metabolic\nworkup for recurrence"| PREVENTION["STONE PREVENTION\nAll stone types:\n↑ Fluid intake (urine output >2 L/day) · ↓ salt · ↓ animal protein\nCalcium oxalate (most common — 70%):\nNormal calcium diet (low calcium diet INCREASES stones — calcium binds oxalate in gut)\nPotassium citrate or thiazide diuretic\nReduce oxalate: spinach · nuts · chocolate\nCalcium phosphate: thiazide · alkalinise urine\nUric acid stones (radiolucent on CT): allopurinol · alkalinise urine (sodium bicarbonate)\nStruvite (infection stones — staghorn): treat infection · PCNL + antibiotics\nCystine: very high fluid intake · urinary alkalinisation · D-penicillamine"]

    IMAGING --> METABOLIC["METABOLIC INVESTIGATION\n(First stone if <30 years · recurrent · bilateral · family history · metabolic risk factors)\n24-hour urine: volume · pH · calcium · oxalate · citrate · uric acid · sodium\nSerum: Ca²⁺ · urate · PTH (hyperparathyroidism is #1 secondary cause of hypercalciuria)\nRTA type I: distal RTA → calcium phosphate stones · urine pH always >5.5\nHyperoxaluria: primary (AGXT mutation) · enteric (Crohn's/short bowel — ↑oxalate absorption)"]
```

## Management

### Acute Renal Colic

**Analgesia is the priority:**
- **NSAIDs** (diclofenac IM or IV, or oral) — first-line for renal colic. Prostaglandin inhibition reduces ureteral smooth muscle contraction and ureteral oedema, providing superior analgesia to opioids in most patients.
- **Paracetamol** — adjunct or if NSAIDs contraindicated
- **Opioids** (morphine, pethidine) — for severe pain or NSAID contraindication; pethidine is preferred by some for renal colic but morphine is adequate
- **Antiemetics** — ondansetron or metoclopramide

**Hydration:** Maintain good hydration. High fluid intake (>2L/day) encourages stone passage. IV fluids if the patient cannot tolerate orally.

**Medical expulsive therapy:** **Tamsulosin** (alpha-1 blocker) — relaxes the distal ureteral smooth muscle, facilitating spontaneous stone passage. Most beneficial for stones in the lower ureter (VUJ). Increases passage rates for stones ≤10mm.

**Expectant management (watchful waiting):**
- Stones ≤5mm: 80–90% pass spontaneously. Discharge with analgesia and safety netting.
- Stones 5–10mm: 50% pass spontaneously. Tamsulosin increases passage rate.
- Stones >10mm: unlikely to pass; refer for intervention.

### Urological Intervention

| Indication | Preferred Approach |
|-----------|-------------------|
| Stone >10mm or failing to pass | Shockwave lithotripsy (SWL) or ureteroscopy |
| Infected obstructed system | Emergency ureteric stenting or nephrostomy (surgical emergency) |
| Staghorn calculus (struvite) | Percutaneous nephrolithotomy (PCNL) |
| Stone causing AKI from bilateral obstruction | Emergency decompression |

**Shockwave lithotripsy (SWL):** Non-invasive. Focused external shock waves fragment stones. Best for renal stones <20mm. Not suitable for cystine or calcium oxalate monohydrate stones (resistant to fragmentation).

**Ureteroscopy + laser lithotripsy:** Flexible ureteroscope passed retrograde. Holmium laser fragments stones. Effective for ureteric and small renal stones.

**PCNL (percutaneous nephrolithotomy):** Percutaneous tract into the renal collecting system under fluoroscopic guidance. For large (>20mm) or complex renal stones or staghorn calculi.

### Prevention of Recurrence

**Universal:** High fluid intake — target urine output >2.5 L/day. Reduce sodium intake (reduces urinary calcium excretion). Reduce animal protein (reduces urinary uric acid and calcium). Maintain normal calcium intake (low calcium diet paradoxically increases oxalate absorption).

**Type-specific:**

| Stone Type | Targeted Prevention |
|-----------|-------------------|
| Calcium oxalate | Thiazide diuretics (reduce urinary calcium), potassium citrate (increases citrate, alkalinises urine), reduce oxalate-rich foods (spinach, rhubarb, nuts) |
| Uric acid | Allopurinol (reduces uric acid production), potassium citrate (alkalinises urine — dissolves existing stones) |
| Struvite | Treat underlying infection; antibiotic prophylaxis; acetohydroxamic acid (urease inhibitor) |
| Cystine | High fluid intake, D-penicillamine or tiopronin (chelation), urinary alkalinisation |

## Complications

- Ureteric obstruction with AKI — particularly with solitary kidney or bilateral stones
- Infected obstructed system (pyonephrosis) — life-threatening sepsis; emergency decompression
- Chronic hydronephrosis from untreated obstruction → irreversible renal scarring
- Recurrence — high without targeted metabolic investigation and prevention

## Clinical Insight

Fever in the context of renal colic is an emergency until proven otherwise. A stone causing ureteral obstruction in the presence of a urinary tract infection creates a closed space infection — pyonephrosis — with septicaemia that can progress to septic shock within hours. These patients need emergency decompression (stent or nephrostomy) regardless of how unwell they look at presentation; they can deteriorate rapidly.

Uric acid stones are the only stones amenable to medical dissolution. Urinary alkalinisation with potassium citrate to achieve a urine pH of 6.5–7.0 dissolves uric acid stones that would otherwise require urological intervention. They are also invisible on plain X-ray — always use CT in patients with suspected stones, not plain KUB, to avoid missing this treatable diagnosis.

Always investigate a first stone in a child, a woman, or an adult under 25. Primary hyperparathyroidism, distal RTA, cystinuria, and hyperoxaluria are important treatable causes that present early. A 34-year-old on their second episode has already crossed the threshold for full metabolic evaluation.
