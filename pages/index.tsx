import Link from 'next/link'
import { getAllTopics, getTopicBySlug } from '../lib/topics'
import { GetStaticProps } from 'next'
import { useState } from 'react'

const SYSTEMS = [
  { name: 'Cardiology', icon: '♥', slug: 'cardiology' },
  { name: 'Pulmonology', icon: '🫁', slug: 'pulmonology' },
  { name: 'Gastroenterology', icon: '🫃', slug: 'gastroenterology' },
  { name: 'Neurology', icon: '🧠', slug: 'neurology' },
  { name: 'Endocrinology', icon: '⚡', slug: 'endocrinology' },
  { name: 'Nephrology', icon: '💧', slug: 'nephrology' },
  { name: 'Haematology', icon: '🩸', slug: 'haematology' },
  { name: 'Rheumatology', icon: '🦴', slug: 'rheumatology' },
  { name: 'Infectious Disease', icon: '🦠', slug: 'infectious-disease' },
  { name: 'Dermatology', icon: '🩹', slug: 'dermatology' },
]

const SYMPTOM_MAP: Record<string, string[]> = {
  // Cardiology
  'palpitations': ['arrhythmias', 'atrial-fibrillation', 'heart-failure'],
  'racing heart': ['arrhythmias', 'atrial-fibrillation'],
  'fast heart': ['arrhythmias', 'atrial-fibrillation'],
  'irregular heartbeat': ['arrhythmias', 'atrial-fibrillation'],
  'chest pain': ['acute-coronary-syndrome', 'stable-coronary-artery-disease', 'pericardial-disease', 'aortic-disease'],
  'chest tightness': ['acute-coronary-syndrome', 'stable-coronary-artery-disease', 'asthma'],
  'angina': ['stable-coronary-artery-disease', 'acute-coronary-syndrome'],
  'heart attack': ['acute-coronary-syndrome'],
  'breathlessness': ['heart-failure', 'asthma', 'copd', 'pulmonary-embolism', 'respiratory-failure', 'pleural-effusion', 'pulmonary-hypertension'],
  'shortness of breath': ['heart-failure', 'asthma', 'copd', 'pulmonary-embolism', 'respiratory-failure'],
  'dyspnoea': ['heart-failure', 'asthma', 'copd', 'pulmonary-embolism', 'respiratory-failure'],
  'sob': ['heart-failure', 'asthma', 'copd', 'pulmonary-embolism'],
  'ankle swelling': ['heart-failure', 'chronic-kidney-disease', 'cirrhosis-and-liver-disease'],
  'leg swelling': ['heart-failure', 'chronic-kidney-disease', 'pulmonary-embolism'],
  'oedema': ['heart-failure', 'chronic-kidney-disease', 'cirrhosis-and-liver-disease', 'nephrotic'],
  'high blood pressure': ['hypertension'],
  'hypertension': ['hypertension'],
  'syncope': ['arrhythmias', 'aortic-disease', 'valvular-heart-disease'],
  'blackout': ['arrhythmias', 'epilepsy-and-seizures', 'stroke-and-tia'],
  'fainting': ['arrhythmias', 'aortic-disease'],
  'murmur': ['valvular-heart-disease', 'infective-endocarditis'],
  'fever with murmur': ['infective-endocarditis'],
  'cholesterol': ['hyperlipidaemia'],
  'aortic': ['aortic-disease'],
  'dissection': ['aortic-disease'],
  'tearing pain': ['aortic-disease'],
  // Pulmonology
  'cough': ['community-acquired-pneumonia', 'copd', 'asthma', 'tuberculosis', 'lung'],
  'wheeze': ['asthma', 'copd'],
  'wheezing': ['asthma', 'copd'],
  'haemoptysis': ['tuberculosis', 'community-acquired-pneumonia', 'pulmonary-embolism'],
  'coughing blood': ['tuberculosis', 'community-acquired-pneumonia'],
  'pleuritic pain': ['pulmonary-embolism', 'pleural-effusion', 'community-acquired-pneumonia'],
  'pneumonia': ['community-acquired-pneumonia'],
  'tb': ['tuberculosis'],
  'night sweats': ['tuberculosis', 'lymphoma', 'haematological-malignancies'],
  'pneumothorax': ['pneumothorax'],
  'collapsed lung': ['pneumothorax'],
  'pleural': ['pleural-effusion'],
  'sepsis': ['sepsis-and-shock'],
  'shock': ['sepsis-and-shock'],
  'hypotension': ['sepsis-and-shock', 'acute-coronary-syndrome'],
  'low blood pressure': ['sepsis-and-shock'],
  // Gastroenterology
  'jaundice': ['cirrhosis-and-liver-disease', 'upper-gi-disease'],
  'yellow skin': ['cirrhosis-and-liver-disease'],
  'abdominal pain': ['inflammatory-bowel-disease', 'ibs-and-functional-gi', 'pancreatitis', 'upper-gi-disease', 'colorectal-disease'],
  'diarrhoea': ['inflammatory-bowel-disease', 'ibs-and-functional-gi', 'colorectal-disease', 'infectious-disease'],
  'diarrhea': ['inflammatory-bowel-disease', 'ibs-and-functional-gi', 'colorectal-disease'],
  'rectal bleeding': ['colorectal-disease', 'inflammatory-bowel-disease'],
  'blood in stool': ['colorectal-disease', 'inflammatory-bowel-disease', 'upper-gi-disease'],
  'vomiting blood': ['upper-gi-disease', 'cirrhosis-and-liver-disease'],
  'haematemesis': ['upper-gi-disease', 'cirrhosis-and-liver-disease'],
  'heartburn': ['upper-gi-disease'],
  'reflux': ['upper-gi-disease'],
  'liver': ['cirrhosis-and-liver-disease'],
  'ascites': ['cirrhosis-and-liver-disease', 'heart-failure'],
  'pancreatitis': ['pancreatitis'],
  'epigastric pain': ['pancreatitis', 'upper-gi-disease'],
  'ibs': ['ibs-and-functional-gi'],
  'constipation': ['ibs-and-functional-gi', 'colorectal-disease'],
  'crohns': ['inflammatory-bowel-disease'],
  'colitis': ['inflammatory-bowel-disease'],
  // Nephrology
  'blood in urine': ['urinary-tract-infections', 'glomerular-disease', 'nephrolithiasis'],
  'haematuria': ['urinary-tract-infections', 'glomerular-disease', 'nephrolithiasis'],
  'proteinuria': ['glomerular-disease', 'chronic-kidney-disease', 'diabetes-mellitus'],
  'frothy urine': ['glomerular-disease', 'chronic-kidney-disease'],
  'kidney stones': ['nephrolithiasis'],
  'renal colic': ['nephrolithiasis'],
  'flank pain': ['nephrolithiasis', 'urinary-tract-infections'],
  'dysuria': ['urinary-tract-infections'],
  'painful urination': ['urinary-tract-infections'],
  'uti': ['urinary-tract-infections'],
  'aki': ['acute-kidney-injury'],
  'renal failure': ['acute-kidney-injury', 'chronic-kidney-disease'],
  'kidney failure': ['acute-kidney-injury', 'chronic-kidney-disease'],
  'oliguria': ['acute-kidney-injury'],
  'low urine': ['acute-kidney-injury'],
  'electrolytes': ['fluid-and-electrolyte-disorders'],
  'hyponatraemia': ['fluid-and-electrolyte-disorders'],
  'hypokalemia': ['fluid-and-electrolyte-disorders'],
  'low sodium': ['fluid-and-electrolyte-disorders'],
  'low potassium': ['fluid-and-electrolyte-disorders'],
  'acid base': ['acid-base-disorders'],
  'metabolic acidosis': ['acid-base-disorders'],
  // Neurology
  'headache': ['headache'],
  'migraine': ['headache'],
  'thunderclap': ['headache'],
  'stroke': ['stroke-and-tia'],
  'facial droop': ['stroke-and-tia'],
  'weakness': ['stroke-and-tia', 'neuromuscular-disease', 'multiple-sclerosis'],
  'seizure': ['epilepsy-and-seizures'],
  'fit': ['epilepsy-and-seizures'],
  'epilepsy': ['epilepsy-and-seizures'],
  'tremor': ['movement-disorders'],
  'parkinson': ['movement-disorders'],
  'confusion': ['dementia', 'stroke-and-tia', 'cns-infections'],
  'memory loss': ['dementia'],
  'dementia': ['dementia'],
  'meningitis': ['cns-infections'],
  'neck stiffness': ['cns-infections'],
  'double vision': ['multiple-sclerosis', 'neuromuscular-disease'],
  'ms': ['multiple-sclerosis'],
  // Endocrinology
  'diabetes': ['diabetes-mellitus'],
  'high sugar': ['diabetes-mellitus'],
  'polyuria': ['diabetes-mellitus', 'fluid-and-electrolyte-disorders'],
  'polydipsia': ['diabetes-mellitus'],
  'thirst': ['diabetes-mellitus'],
  'thyroid': ['thyroid-disease'],
  'hypothyroid': ['thyroid-disease'],
  'hyperthyroid': ['thyroid-disease'],
  'weight gain': ['thyroid-disease', 'diabetes-mellitus', 'adrenal-disease'],
  'weight loss': ['thyroid-disease', 'diabetes-mellitus', 'tuberculosis', 'haematological-malignancies'],
  'adrenal': ['adrenal-disease'],
  'cushing': ['adrenal-disease'],
  'addison': ['adrenal-disease'],
  'pituitary': ['pituitary-and-calcium'],
  'calcium': ['pituitary-and-calcium'],
  'hypercalcaemia': ['pituitary-and-calcium'],
  'amenorrhoea': ['reproductive-endocrinology'],
  'pcos': ['reproductive-endocrinology'],
  // Haematology
  'anaemia': ['anaemia'],
  'fatigue': ['anaemia', 'heart-failure', 'thyroid-disease', 'haematological-malignancies'],
  'tired': ['anaemia', 'thyroid-disease', 'heart-failure'],
  'pale': ['anaemia'],
  'bleeding': ['bleeding-disorders-and-thrombosis'],
  'clot': ['bleeding-disorders-and-thrombosis', 'pulmonary-embolism'],
  'dvt': ['bleeding-disorders-and-thrombosis', 'pulmonary-embolism'],
  'lymphoma': ['haematological-malignancies'],
  'leukaemia': ['haematological-malignancies'],
  'lymph node': ['haematological-malignancies'],
  'splenomegaly': ['haematological-malignancies', 'cirrhosis-and-liver-disease'],
  // Rheumatology
  'joint pain': ['rheumatoid-arthritis', 'crystal-arthropathies-and-vasculitis', 'seronegative-spondyloarthropathies', 'msk-and-osteoporosis'],
  'swollen joints': ['rheumatoid-arthritis', 'crystal-arthropathies-and-vasculitis'],
  'arthritis': ['rheumatoid-arthritis', 'crystal-arthropathies-and-vasculitis', 'seronegative-spondyloarthropathies'],
  'gout': ['crystal-arthropathies-and-vasculitis'],
  'back pain': ['seronegative-spondyloarthropathies', 'msk-and-osteoporosis'],
  'osteoporosis': ['msk-and-osteoporosis'],
  'lupus': ['connective-tissue-diseases'],
  'sle': ['connective-tissue-diseases'],
  'rash with joint pain': ['connective-tissue-diseases'],
  'vasculitis': ['crystal-arthropathies-and-vasculitis'],
  // Infectious Disease
  'hiv': ['hiv-and-aids'],
  'aids': ['hiv-and-aids'],
  'malaria': ['tropical-and-travel-medicine'],
  'dengue': ['tropical-and-travel-medicine'],
  'typhoid': ['tropical-and-travel-medicine'],
  'travel': ['tropical-and-travel-medicine'],
  'sti': ['sexually-transmitted-infections'],
  'discharge': ['sexually-transmitted-infections'],
  'fever': ['sepsis-and-shock', 'community-acquired-pneumonia', 'tuberculosis', 'fever-and-immunocompromised', 'infective-endocarditis'],
  'immunocompromised': ['fever-and-immunocompromised'],
  'antibiotic': ['antimicrobial-stewardship'],
  'resistance': ['antimicrobial-stewardship'],
  // Dermatology
  'rash': ['eczema-and-psoriasis', 'skin-infections-and-infestations', 'bullous-disorders-and-drug-reactions', 'connective-tissue-diseases'],
  'eczema': ['eczema-and-psoriasis'],
  'psoriasis': ['eczema-and-psoriasis'],
  'acne': ['acne-and-rosacea'],
  'skin infection': ['skin-infections-and-infestations'],
  'cellulitis': ['skin-infections-and-infestations'],
  'blisters': ['bullous-disorders-and-drug-reactions'],
  'skin cancer': ['skin-cancer'],
  'melanoma': ['skin-cancer'],
}

interface Topic { slug: string; title: string; system: string; scenario: string; summary: string; content: string }

export default function Home({ topics }: { topics: Topic[] }) {
  const [query, setQuery] = useState('')

  const getSymptomSlugs = (q: string): string[] => {
    const matches: string[] = []
    Object.entries(SYMPTOM_MAP).forEach(([symptom, slugs]) => {
      if (symptom.includes(q) || q.includes(symptom)) {
        matches.push(...slugs)
      }
    })
   return matches.filter((v, i, a) => a.indexOf(v) === i)
  }

  const filtered = query.length > 1
    ? (() => {
        const q = query.toLowerCase()
        const symptomSlugs = getSymptomSlugs(q)
        return topics.filter(t => {
          return (
            t.title.toLowerCase().includes(q) ||
            t.system.toLowerCase().includes(q) ||
            (t.scenario || '').toLowerCase().includes(q) ||
            (t.summary || '').toLowerCase().includes(q) ||
            (t.content || '').toLowerCase().includes(q) ||
            symptomSlugs.includes(t.slug)
          )
        })
      })()
    : topics

  return (
    <main>
      <div className="hero">
        <h1>Clinical medicine,<br /><em>reasoned</em> from first principles</h1>
        <p>A free, open reference built around how clinicians actually think — not just what they memorise.</p>
        <div className="search-box">
          <span className="search-icon">⌕</span>
          <input
            type="text"
            placeholder="Search a condition, symptom, or system..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="container">
        {!query && (
          <div className="section">
            <span className="section-label">Browse by system</span>
            <div className="system-grid">
              {SYSTEMS.map(s => {
                const count = topics.filter(t => t.system.toLowerCase() === s.name.toLowerCase()).length
                return (
                  <Link key={s.slug} href={`/systems/${s.slug}`} className="system-card">
                    <div className="system-icon">{s.icon}</div>
                    <div className="system-name">{s.name}</div>
                    <div className="system-count">{count} {count === 1 ? 'topic' : 'topics'}</div>
                  </Link>
                )
              })}
            </div>
          </div>
        )}
        <div className="section">
          <span className="section-label">{query ? `Results for "${query}"` : 'All topics'}</span>
          <div className="topic-list">
            {filtered.map(t => (
              <Link key={t.slug} href={`/topics/${t.slug}`} className="topic-card">
                <div>
                  <div className="topic-title">{t.title}</div>
                  <div className="topic-system">{t.system}</div>
                </div>
                <span style={{ color: '#ccc' }}>›</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const topics = getAllTopics().map(t => ({
    ...t,
    content: getTopicBySlug(t.slug)?.content || ''
  }))
  return { props: { topics } }
}
