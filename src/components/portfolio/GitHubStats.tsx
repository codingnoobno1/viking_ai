'use client';

const repos = [
  { name: 'neural-forge', stars: 2847, forks: 312, lang: 'Python', color: '#3776ab', desc: 'Distributed neural training infrastructure' },
  { name: 'agent-nexus', stars: 1923, forks: 198, lang: 'TypeScript', color: '#3178c6', desc: 'Multi-agent orchestration framework' },
  { name: 'viking-llm', stars: 4201, forks: 543, lang: 'Python', color: '#3776ab', desc: 'Fine-tuned LLM with Viking AI optimizations' },
  { name: 'vision-sentinel', stars: 987, forks: 89, lang: 'Python', color: '#3776ab', desc: 'Real-time CV pipeline for edge deployment' },
];

const contributions = [
  [3,5,2,4,1,3,5,2,4,3,5,1,2,4,3,5,2,1,4,3,5,2,4,1,3,5,4,2,3,5,1,4,2,5,3,1,4,2,5,3,1,4,2,5,3,1,4,2,5,3],
  [1,2,4,3,5,2,1,4,3,5,2,4,1,3,5,2,4,3,5,1,2,4,3,5,2,1,4,3,5,2,4,1,3,5,2,4,3,5,1,2,4,3,5,2,1,4,3,5,2,4],
  [5,3,1,4,2,5,3,1,4,2,5,3,1,4,2,5,3,1,4,2,5,3,1,4,2,5,3,1,4,2,5,3,1,4,2,5,3,1,4,2,5,3,1,4,2,5,3,1,4,2],
  [2,4,3,5,1,2,4,3,5,1,2,4,3,5,1,2,4,3,5,1,2,4,3,5,1,2,4,3,5,1,2,4,3,5,1,2,4,3,5,1,2,4,3,5,1,2,4,3,5,1],
  [4,1,5,2,3,4,1,5,2,3,4,1,5,2,3,4,1,5,2,3,4,1,5,2,3,4,1,5,2,3,4,1,5,2,3,4,1,5,2,3,4,1,5,2,3,4,1,5,2,3],
];

const intensityColor = (val: number) => {
  if (val === 0) return 'rgba(31,41,55,0.8)';
  if (val === 1) return 'rgba(0,212,255,0.15)';
  if (val === 2) return 'rgba(0,212,255,0.3)';
  if (val === 3) return 'rgba(0,212,255,0.5)';
  if (val === 4) return 'rgba(0,212,255,0.7)';
  return 'rgba(0,212,255,1)';
};

export default function GitHubStats() {
  const totalStars = repos.reduce((a, r) => a + r.stars, 0);

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-gray-700/50 rounded mb-6 font-mono-tech text-xs text-gray-400">
            <span>⬡</span>
            GITHUB ACTIVITY MATRIX
            <span>⬡</span>
          </div>
          <h2 className="font-orbitron text-3xl font-black text-white mb-4">
            CODE <span className="text-glow-cyan">REPOSITORY</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contribution Graph */}
          <div className="glass-card border border-gray-700/30 rounded-xl p-6">
            <div className="flex items-center justify-between mb-5">
              <div className="font-orbitron text-xs font-bold text-white">CONTRIBUTION ACTIVITY</div>
              <div className="font-mono-tech text-xs text-cyan-400">2,847 commits</div>
            </div>

            <div className="space-y-1">
              {contributions.map((row, ri) => (
                <div key={ri} className="flex gap-1">
                  {row.map((val, ci) => (
                    <div
                      key={ci}
                      className="flex-1 rounded-sm cursor-pointer hover:ring-1 hover:ring-cyan-400 transition-all duration-200"
                      style={{
                        height: '12px',
                        background: intensityColor(val),
                        minWidth: '10px',
                      }}
                      title={`${val * 3} contributions`}
                    />
                  ))}
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between mt-3">
              <span className="font-mono-tech text-xs text-gray-600">Less</span>
              <div className="flex gap-1">
                {[0,1,2,3,4,5].map(v => (
                  <div key={v} className="w-3 h-3 rounded-sm" style={{ background: intensityColor(v) }} />
                ))}
              </div>
              <span className="font-mono-tech text-xs text-gray-600">More</span>
            </div>
          </div>

          {/* Top Repos */}
          <div className="space-y-3">
            <div className="font-orbitron text-xs font-bold text-white mb-4">TOP REPOSITORIES</div>
            {repos.map((repo, i) => (
              <div key={i} className="glass-card border border-gray-700/30 rounded-xl p-4 group hover:border-gray-600/50 transition-all cursor-pointer">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="font-rajdhani font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      {repo.name}
                    </div>
                    <div className="font-rajdhani text-xs text-gray-500">{repo.desc}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: repo.color }} />
                    <span className="font-mono-tech text-xs text-gray-600">{repo.lang}</span>
                  </div>
                  <span className="font-mono-tech text-xs text-gray-600">★ {repo.stars.toLocaleString()}</span>
                  <span className="font-mono-tech text-xs text-gray-600">⑃ {repo.forks}</span>
                </div>
              </div>
            ))}

            {/* Total stats */}
            <div className="flex gap-4 pt-2">
              <div className="flex-1 glass-card border border-gray-700/30 rounded-xl p-3 text-center">
                <div className="font-orbitron text-xl font-black text-glow-cyan">{totalStars.toLocaleString()}</div>
                <div className="font-mono-tech text-xs text-gray-600">TOTAL STARS</div>
              </div>
              <div className="flex-1 glass-card border border-gray-700/30 rounded-xl p-3 text-center">
                <div className="font-orbitron text-xl font-black text-glow-cyan">47</div>
                <div className="font-mono-tech text-xs text-gray-600">PUBLIC REPOS</div>
              </div>
              <div className="flex-1 glass-card border border-gray-700/30 rounded-xl p-3 text-center">
                <div className="font-orbitron text-xl font-black text-glow-cyan">1.2K</div>
                <div className="font-mono-tech text-xs text-gray-600">FOLLOWERS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
