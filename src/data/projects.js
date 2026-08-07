// Project data — edit links (github/demo) to point to your real repos & deployments.
export const projects = [
  {
    id: 'careersync',
    title: 'CareerSync – AI Career Assistant',
    description:
      'An AI-powered career platform that reads a resume, understands a student\u2019s profile, and delivers personalized career guidance. Includes separate dashboards for students and recruiters, backed by a RAG pipeline over a vector database.',
    tags: [
      'MERN Stack',
      'FastAPI',
      'LangChain',
      'Gemini',
      'Qdrant',
      'Resume Upload',
      'AI Career Guidance',
      'Recruiter Dashboard',
      'Student Dashboard',
    ],
    githubUrl: 'https://github.com/sumitkumawat161-sketch/Smart-Job-Portal',
    liveUrl: 'https://smart-job-portal-26cd.vercel.app/',
    featured: true,
  },
  {
    id: 'speech-enhancement-unet',
    title: 'Speech Enhancement using U-Net',
    description:
      'A deep learning model built on a U-Net architecture to denoise and enhance speech audio, using spectrogram-based signal processing for cleaner, more intelligible output.',
    tags: ['Python', 'PyTorch', 'Deep Learning', 'Signal Processing'],
    githubUrl: 'https://github.com/your-username/speech-enhancement-unet',
    liveUrl: '',
    featured: false,
  },
  {
    id: 'movie-recommender',
    title: 'Movie Recommendation System',
    description:
      'A content-based recommendation engine that suggests similar movies using TF-IDF vectorization and cosine similarity, served through an interactive Streamlit app.',
    tags: ['Python', 'Pandas', 'NumPy', 'TF-IDF', 'Cosine Similarity', 'Streamlit'],
    githubUrl: 'https://github.com/sumitkumawat161-sketch/movies-recommendation-system',
    liveUrl: '',
    featured: false,
  },
  {
    id: 'air-traffic-control',
    title: 'Air Traffic Control Management System',
    description:
      'A simulation of an air traffic control system built in C++, using object-oriented design and multithreading to safely manage concurrent aircraft operations.',
    tags: ['C++', 'OOP', 'Multithreading', 'STL'],
    githubUrl: 'https://github.com/your-username/air-traffic-control',
    liveUrl: '',
    featured: false,
  },
]
