import type { NextApiRequest, NextApiResponse } from 'next'

const TOPIC_SLUGS = [
  'acute-coronary-syndrome', 'arrhythmias', 'atrial-fibrillation',
  'aortic-disease', 'cardiomyopathy', 'heart-failure', 'hyperlipidaemia',
  'hypertension', 'infective-endocarditis', 'pericardial-disease',
  'stable-coronary-artery-disease', 'valvular-heart-disease',
  'asthma', 'community-acquired-pneumonia', 'copd', 'pleural-effusion',
  'pneumothorax', 'pulmonary-embolism', 'pulmonary-hypertension',
  'respiratory-failure', 'sepsis-and-shock', 'tuberculosis',
  'cirrhosis-and-liver-disease', 'colorectal-disease', 'ibs-and-functional-gi',
  'inflammatory-bowel-disease', 'pancreatitis', 'upper-gi-disease',
  'acid-base-disorders', 'acute-kidney-injury', 'chronic-kidney-disease',
  'fluid-and-electrolyte-disorders', 'glomerular-disease', 'nephrolithiasis',
  'urinary-tract-infections', 'cns-infections', 'dementia',
  'epilepsy-and-seizures', 'headache', 'movement-disorders',
  'multiple-sclerosis', 'neuromuscular-disease', 'stroke-and-tia',
  'adrenal-disease', 'diabetes-mellitus', 'pituitary-and-calcium',
  'reproductive-endocrinology', 'thyroid-disease', 'anaemia',
  'bleeding-disorders-and-thrombosis', 'haematological-malignancies',
  'haemolytic-anaemia-and-bone-marrow-failure', 'oncology-principles',
  'connective-tissue-diseases', 'crystal-arthropathies-and-vasculitis',
  'msk-and-osteoporosis', 'rheumatoid-arthritis',
  'seronegative-spondyloarthropathies', 'antimicrobial-stewardship',
  'fever-and-immunocompromised', 'hiv-and-aids',
  'sexually-transmitted-infections', 'tropical-and-travel-medicine',
  'acne-and-rosacea', 'bullous-disorders-and-drug-reactions',
  'eczema-and-psoriasis', 'skin-cancer', 'skin-infections-and-infestations'
]

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end()

  const { query } = req.body
  if (!query || query.length < 2) return res.json({ slugs: [] })

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          {
            role: 'system',
            content: `You are a medical search assistant. Given a search query, return the most relevant topic slugs from this list: ${TOPIC_SLUGS.join(', ')}. Return ONLY a JSON array of matching slugs, nothing else. Return between 1-5 most relevant slugs. If nothing matches return [].`
          },
          {
            role: 'user',
            content: query
          }
        ],
        max_tokens: 200,
      })
    })

    const data = await response.json()
    const text = data.choices?.[0]?.message?.content || '[]'
    const slugs = JSON.parse(text.match(/\[[\s\S]*\]/)?.[0] || '[]')
    return res.json({ slugs })
  } catch {
    return res.json({ slugs: [] })
  }
}
