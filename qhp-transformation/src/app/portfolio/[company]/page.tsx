import { getMarkdownContent } from "@/lib/content";
import { portfolioData } from "@/lib/portfolio-data";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  ArrowLeftIcon,
  CurrencyDollarIcon,
  RocketLaunchIcon,
  ClockIcon,
  ArrowTrendingUpIcon,
} from '@heroicons/react/24/outline';

interface PageProps {
  params: Promise<{ company: string }>;
}

export async function generateStaticParams() {
  return portfolioData.map((company) => ({
    company: company.id,
  }));
}

// Extract executive summary for hero section
function extractExecutiveSummary(content: string): { description: string; metricsTable: string | null; investmentTable: string | null } {
  const lines = content.split('\n');
  let inExecSummary = false;
  let description = '';
  let metricsTable: string | null = null;
  let investmentTable: string | null = null;
  let currentTable = '';
  let inTable = false;
  
  for (const line of lines) {
    if (line.match(/^## Executive Summary/i)) {
      inExecSummary = true;
      continue;
    }
    if (inExecSummary && line.match(/^## /)) {
      break; // Hit next section
    }
    
    if (inExecSummary) {
      // Capture first non-table paragraph as description
      if (!description && line.trim() && !line.includes('|') && !line.startsWith('#') && !line.startsWith('-')) {
        description = line.replace(/\*\*/g, '').trim();
      }
      
      // Capture metrics table (Key Transformation Metrics or Key Metrics)
      if (line.includes('| Metric |') || line.includes('|Metric|')) {
        inTable = true;
        currentTable = line + '\n';
      } else if (inTable && line.includes('|')) {
        currentTable += line + '\n';
      } else if (inTable && !line.includes('|') && line.trim()) {
        if (!metricsTable && currentTable.includes('Metric')) {
          metricsTable = currentTable;
        }
        inTable = false;
        currentTable = '';
      }
      
      // Capture investment table
      if (line.includes('| Category |')) {
        inTable = true;
        currentTable = line + '\n';
      } else if (inTable && line.includes('|') && !metricsTable?.includes(line)) {
        currentTable += line + '\n';
      } else if (inTable && !line.includes('|') && line.trim() && currentTable.includes('Category')) {
        investmentTable = currentTable;
        inTable = false;
      }
    }
  }
  
  return { description, metricsTable, investmentTable };
}

// Parse a table string into structured data
function parseTableString(tableStr: string): { headers: string[]; rows: string[][] } | null {
  const lines = tableStr.trim().split('\n').filter(line => line.includes('|'));
  if (lines.length < 2) return null;
  
  const parseRow = (line: string) => 
    line.split('|').map(cell => cell.trim()).filter(cell => cell && !cell.match(/^[-:]+$/));
  
  const headers = parseRow(lines[0]);
  const rows = lines.slice(2).map(parseRow).filter(row => row.length > 0);
  
  return headers.length > 0 && rows.length > 0 ? { headers, rows } : null;
}

export default async function CompanyDeepDivePage({ params }: PageProps) {
  const { company: companyId } = await params;
  
  const company = portfolioData.find(c => c.id === companyId);
  
  if (!company) {
    notFound();
  }

  const content = await getMarkdownContent(`portfolio/${company.fileName}`);

  if (!content) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-6">
        <Link href="/portfolio" className="text-gray-400 hover:text-white mb-8 block font-medium">← Back to Portfolio</Link>
        <h1 className="text-3xl font-bold text-white mb-4">{company.name}</h1>
        <div className="p-6 bg-red-900/20 border border-red-500/20 rounded-lg text-red-200">
          Deep dive content file ({company.fileName}) not found in repository.
        </div>
      </div>
    );
  }

  const { description, metricsTable, investmentTable } = extractExecutiveSummary(content);
  const parsedMetrics = metricsTable ? parseTableString(metricsTable) : null;
  const parsedInvestment = investmentTable ? parseTableString(investmentTable) : null;
  
  // Get impact colors
  const impactColors = {
    'High': { bg: 'bg-emerald-500/20', text: 'text-emerald-400', border: 'border-emerald-500/30' },
    'Medium': { bg: 'bg-amber-500/20', text: 'text-amber-400', border: 'border-amber-500/30' },
    'Low': { bg: 'bg-gray-500/20', text: 'text-gray-400', border: 'border-gray-500/30' },
  };
  const colors = impactColors[company.impactScore];

  // Remove the title line from content for cleaner rendering
  const contentWithoutTitle = content.replace(/^# .+\n/, '');

  return (
    <div className="min-h-screen bg-[#0d0d0d]">
      {/* Hero Header */}
      <div className="relative bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] border-b border-white/5">
        {/* Back button */}
        <Link 
          href="/portfolio" 
          className="absolute top-6 left-6 flex items-center gap-2 text-gray-400 hover:text-white transition-colors bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-lg z-10"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          <span className="text-sm font-medium">Portfolio</span>
        </Link>

        <div className="max-w-5xl mx-auto px-8 pt-20 pb-12">
          {/* Badge row */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${colors.bg} ${colors.text} border ${colors.border}`}>
              {company.impactScore} Impact
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/5 text-gray-400 border border-white/10">
              {company.industry}
            </span>
            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
              company.implementationStatus === 'Active' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' :
              company.implementationStatus === 'Planned' ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' :
              'bg-gray-500/20 text-gray-400 border-gray-500/30'
            } border`}>
              {company.implementationStatus}
            </span>
          </div>
          
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">{company.name}</h1>
          
          {/* Hero description */}
          {description && (
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
              {description}
            </p>
          )}
        </div>
      </div>

      {/* Quick Stats Bar */}
      {parsedMetrics && parsedMetrics.rows.length > 0 && (
        <div className="border-b border-white/5 bg-[#151515]">
          <div className="max-w-5xl mx-auto px-8 py-6">
            <div className={`grid grid-cols-2 md:grid-cols-3 ${parsedMetrics.rows.length > 3 ? 'lg:grid-cols-6' : 'lg:grid-cols-3'} gap-6`}>
              {parsedMetrics.rows.slice(0, 6).map((row, i) => (
                <div key={i} className="text-center">
                  <div className="text-lg font-bold text-white mb-1">
                    {(row[2] || row[1] || '').replace(/\*\*/g, '')}
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">
                    {(row[0] || '').replace(/\*\*/g, '')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Investment Summary Cards */}
      {parsedInvestment && parsedInvestment.rows.length > 0 && (
        <div className="border-b border-white/5 bg-[#0d0d0d]">
          <div className="max-w-5xl mx-auto px-8 py-8">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-6">Investment & Return</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {parsedInvestment.rows.slice(0, 4).map((row, i) => {
                const icons = [CurrencyDollarIcon, ArrowTrendingUpIcon, RocketLaunchIcon, ClockIcon];
                const Icon = icons[i % icons.length];
                return (
                  <div key={i} className="bg-[#1a1a1a] rounded-xl p-5 border border-white/5">
                    <Icon className="w-5 h-5 text-emerald-400 mb-3" />
                    <div className="text-2xl font-bold text-white mb-1">
                      {(row[1] || '').replace(/\*\*/g, '')}
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">
                      {(row[0] || '').replace(/\*\*/g, '')}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Full Markdown Content - Beautifully Styled */}
      <div className="max-w-5xl mx-auto px-8 py-16">
        <article className="
          prose prose-invert prose-lg max-w-none
          
          prose-headings:font-bold prose-headings:tracking-tight
          
          prose-h2:text-3xl prose-h2:text-white prose-h2:mt-20 prose-h2:mb-8
          prose-h2:pb-4 prose-h2:border-b prose-h2:border-white/10
          
          prose-h3:text-xl prose-h3:text-blue-400 prose-h3:mt-12 prose-h3:mb-4
          
          prose-h4:text-lg prose-h4:text-gray-300 prose-h4:mt-8 prose-h4:mb-3
          prose-h4:font-semibold
          
          prose-p:text-gray-400 prose-p:leading-relaxed prose-p:mb-4
          
          prose-strong:text-white prose-strong:font-semibold
          
          prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
          
          prose-ul:my-4 prose-ul:space-y-2
          prose-li:text-gray-400
          prose-li:marker:text-gray-600
          
          prose-table:my-8 prose-table:w-full
          prose-thead:border-b-2 prose-thead:border-blue-500/30
          prose-th:text-left prose-th:py-3 prose-th:px-4 
          prose-th:text-xs prose-th:font-bold prose-th:text-gray-400 
          prose-th:uppercase prose-th:tracking-wider prose-th:bg-[#1a1a1a]
          prose-td:py-3 prose-td:px-4 prose-td:text-sm prose-td:text-gray-400
          prose-td:border-b prose-td:border-white/5
          prose-tr:hover:bg-white/5 prose-tr:transition-colors
          
          prose-hr:border-white/10 prose-hr:my-16
          
          prose-code:text-cyan-400 prose-code:bg-cyan-500/10 
          prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
          prose-code:before:content-[''] prose-code:after:content-['']
          
          prose-blockquote:border-l-2 prose-blockquote:border-purple-500
          prose-blockquote:bg-purple-500/5 prose-blockquote:py-4 prose-blockquote:px-6
          prose-blockquote:rounded-r-lg prose-blockquote:not-italic
          prose-blockquote:text-gray-300
        ">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {contentWithoutTitle}
          </ReactMarkdown>
        </article>
      </div>
      
      {/* Bottom CTA */}
      <div className="border-t border-white/5 bg-[#1a1a1a]">
        <div className="max-w-5xl mx-auto px-8 py-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Ready to transform {company.name}?</h3>
              <p className="text-gray-400">Quick Win: {company.quickWin}</p>
            </div>
            <Link 
              href="/portfolio" 
              className="px-6 py-3 bg-[#EF4B4C] hover:bg-[#d63a3b] text-white font-bold rounded-lg transition-colors flex-shrink-0"
            >
              Explore Full Portfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
