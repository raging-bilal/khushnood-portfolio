export type ResearchInterest = {
  title: string
  description: string
  icon: 'ai' | 'learning' | 'language' | 'retrieval' | 'federation' | 'privacy' | 'trust' | 'multilingual'
}

export const researchInterests: ResearchInterest[] = [
  {
    title: 'Artificial Intelligence',
    description: 'Building computational systems that can reason, learn, and assist across varied tasks.',
    icon: 'ai',
  },
  {
    title: 'Machine Learning',
    description: 'Learning patterns from data to support useful predictions and decisions.',
    icon: 'learning',
  },
  {
    title: 'Large Language Models',
    description: 'Exploring the capabilities and limitations of models trained on human language.',
    icon: 'language',
  },
  {
    title: 'Retrieval-Augmented Generation',
    description: 'Combining language generation with retrieved information for grounded responses.',
    icon: 'retrieval',
  },
  {
    title: 'Federated RAG',
    description: 'Connecting retrieval and generation across distributed information sources.',
    icon: 'federation',
  },
  {
    title: 'Federated Learning',
    description: 'Training models collaboratively while data remains with its local owner.',
    icon: 'federation',
  },
  {
    title: 'Privacy-Preserving AI',
    description: 'Designing AI systems with attention to the protection of sensitive information.',
    icon: 'privacy',
  },
  {
    title: 'Trustworthy AI',
    description: 'Studying qualities such as reliability, transparency, and responsible behavior.',
    icon: 'trust',
  },
  {
    title: 'Multilingual NLP',
    description: 'Developing language technologies that work across multiple human languages.',
    icon: 'multilingual',
  },
  {
    title: 'Low-Resource Indian Languages',
    description: 'Supporting language technologies for Indian languages with limited digital resources.',
    icon: 'multilingual',
  },
]
