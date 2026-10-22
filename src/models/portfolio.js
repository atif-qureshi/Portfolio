// Model: all public portfolio content lives here. Add verified project URLs when available.
export const profile = {
  name: 'Muhammad Atif Qureshi', shortName: 'Atif', initials: 'AQ', role: 'AI Engineer',
  location: 'Lahore, Pakistan', email: 'muhammadatifqureshi30@gmail.com', phone: '+923266284580',
  photo: '/images/profile.jpg', resume: '/documents/atif.pdf',
  summary: 'Computer Science student exploring the intersection of artificial intelligence and useful software. My hands-on work spans large language models, retrieval-augmented generation, AI agents, and full-stack web development.',
  education: { degree: 'BS Computer Science', university: 'Riphah International University', location: 'Lahore', semester: '7th semester', graduation: '2027' },
};
// The CV only contains generic GitHub/LinkedIn homepages, so personal URLs are intentionally unset.
export const socials = { github: '', linkedin: '' };
export const projects = [
  { id: 'computetorrent', number: '01', name: 'ComputeTorrent', category: 'Generative AI', type: 'Distributed LLM inference', description: 'Exploring distributed computing for large language model inference.', tags: ['Generative AI', 'LLM inference', 'Distributed computing'], visual: 'network', url: '' },
  { id: 'intellidocs', number: '02', name: 'IntelliDocs', category: 'Generative AI', type: 'Enterprise AI knowledge hub', description: 'An enterprise knowledge hub built around retrieval-augmented generation.', tags: ['RAG', 'Generative AI', 'Knowledge retrieval'], visual: 'documents', url: '' },
  { id: 'fraud-detection', number: '03', name: 'Credit Card Fraud Detection', category: 'Machine Learning', type: 'Machine learning · PyTorch', description: 'Applying machine learning to the problem of credit card fraud detection.', tags: ['Machine Learning', 'PyTorch', 'Fraud detection'], visual: 'chart', url: '' },
];
export const skillGroups = [
  { title: 'AI & machine learning', icon: 'brain', skills: ['Machine Learning', 'Generative AI', 'LLMs', 'RAG', 'Prompt Engineering', 'Fine-Tuning', 'AI Agents', 'LangChain', 'Embeddings', 'FAISS'] },
  { title: 'Languages & data', icon: 'code', skills: ['Python', 'JavaScript', 'C++', 'C#', 'Java', 'SQL', 'NumPy', 'Pandas', 'Data Visualization'] },
  { title: 'Full-stack & tools', icon: 'layers', skills: ['React.js', 'Tailwind CSS', 'HTML', 'CSS', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'MySQL', 'SQLAlchemy', 'REST APIs', 'Git', 'GitHub', 'Docker'] },
];
