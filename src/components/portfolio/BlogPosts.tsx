'use client';

const posts = [
  {
    id: 'BL-001',
    title: 'Building Production-Grade RAG Systems That Actually Work',
    excerpt: 'The gap between a demo RAG pipeline and a production-ready system is enormous. Learn the hard lessons from deploying RAG for 25K+ users.',
    category: 'LLM ENGINEERING',
    readTime: '12 min',
    date: 'DEC 2024',
    color: '#00d4ff',
    tags: ['RAG', 'LangChain', 'Production'],
  },
  {
    id: 'BL-002',
    title: 'Multi-Agent Systems: Beyond the Hype — A Practical Guide',
    excerpt: 'Autonomous AI agents are not magic. Here\'s how to actually architect multi-agent systems that deliver business value without hallucination hell.',
    category: 'AI AGENTS',
    readTime: '18 min',
    date: 'NOV 2024',
    color: '#7c3aed',
    tags: ['Agents', 'AutoGen', 'Architecture'],
  },
  {
    id: 'BL-003',
    title: 'Fine-Tuning LLaMA 3 on a Budget: Full Workflow',
    excerpt: 'A complete guide to fine-tuning Meta\'s LLaMA 3 with QLoRA on consumer hardware — from dataset curation to deployment on AWS.',
    category: 'MODEL TRAINING',
    readTime: '25 min',
    date: 'OCT 2024',
    color: '#10b981',
    tags: ['LLaMA 3', 'QLoRA', 'Fine-Tuning'],
  },
];

export default function BlogPosts() {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-3 px-4 py-2 border border-cyan-500/30 rounded mb-4 font-mono-tech text-xs text-cyan-400">
              <span className="animate-pulse">◈</span>
              INTELLIGENCE BRIEFINGS — LATEST TRANSMISSIONS
            </div>
            <h2 className="font-orbitron text-3xl md:text-4xl font-black text-white">
              INTEL <span className="text-glow-cyan">REPORTS</span>
            </h2>
          </div>
          <a href="#" className="font-mono-tech text-xs text-cyan-400 border border-cyan-400/30 px-4 py-2 hover:bg-cyan-400/10 transition-colors">
            VIEW ALL REPORTS →
          </a>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <article
              key={i}
              className="glass-card border border-gray-700/30 rounded-xl overflow-hidden group hover:-translate-y-2 transition-all duration-500 cursor-pointer flex flex-col"
            >
              {/* Top bar */}
              <div className="h-1" style={{ background: `linear-gradient(90deg, ${post.color}, transparent)` }} />

              <div className="p-6 flex flex-col flex-1">
                {/* Meta */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="font-mono-tech text-xs px-2 py-1 rounded"
                    style={{ color: post.color, background: `${post.color}15`, border: `1px solid ${post.color}30` }}
                  >
                    {post.category}
                  </span>
                  <span className="font-mono-tech text-xs text-gray-600">{post.id}</span>
                </div>

                {/* Title */}
                <h3 className="font-rajdhani font-bold text-white text-lg leading-snug mb-3 group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="font-rajdhani text-gray-500 text-sm leading-relaxed flex-1 mb-5">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {post.tags.map((tag, j) => (
                    <span key={j} className="font-mono-tech text-xs px-2 py-0.5 border border-gray-700/50 text-gray-600 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between border-t border-gray-700/50 pt-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono-tech text-xs text-gray-600">📅 {post.date}</span>
                    <span className="font-mono-tech text-xs text-gray-600">⏱ {post.readTime}</span>
                  </div>
                  <span className="font-mono-tech text-xs text-gray-700 group-hover:text-cyan-400 transition-colors">
                    READ →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
