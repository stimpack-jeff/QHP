import { getMarkdownContent } from "@/lib/content";
import { portfolioData } from "@/lib/portfolio-data";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ company: string }>;
}

export async function generateStaticParams() {
  return portfolioData.map((company) => ({
    company: company.id,
  }));
}

export default async function CompanyDeepDivePage({ params }: PageProps) {
  const { company: companyId } = await params;
  
  const company = portfolioData.find(c => c.id === companyId);
  
  if (!company) {
    notFound();
  }

  // Fetch the markdown content
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

  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      <Link href="/portfolio" className="text-gray-400 hover:text-white mb-8 block font-medium">← Back to Portfolio Matrix</Link>
      
      <div className="mb-10 space-y-4">
        <div className="flex items-center gap-4">
             <h1 className="text-4xl font-bold text-white tracking-tight">{company.name}</h1>
             <span className={`px-3 py-1 rounded text-sm font-semibold
                ${company.impactScore === 'High' ? 'bg-green-500/20 text-green-400' : 
                  company.impactScore === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' : 
                  'bg-gray-500/20 text-gray-400'}`}>
                {company.impactScore} Impact
            </span>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-2 text-gray-400">
            <p><span className="text-gray-500">Industry:</span> {company.industry}</p>
            <p><span className="text-gray-500">Status:</span> {company.implementationStatus}</p>
            <p><span className="text-gray-500">Quick Win:</span> {company.quickWin}</p>
        </div>
      </div>

      <div className="prose prose-invert prose-lg max-w-none 
          prose-headings:text-white prose-p:text-gray-300 
          prose-a:text-blue-400 prose-strong:text-white
          prose-li:text-gray-300
          prose-table:border-collapse prose-th:text-gray-300 prose-th:border-b prose-th:border-gray-700 prose-td:border-b prose-td:border-gray-800">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
