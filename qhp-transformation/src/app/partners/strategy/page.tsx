import { getMarkdownContent } from "@/lib/content";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';

export default async function PartnerStrategyPage() {
  const content = await getMarkdownContent('partners/PARTNER_STRATEGY_OVERVIEW.md');

  if (!content) {
    return <div className="p-12 text-white">Content not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <Link href="/partners" className="text-gray-400 hover:text-white mb-8 block font-medium">← Back to Intelligence</Link>
      
      <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-gray-300 prose-a:text-blue-400 prose-strong:text-white prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-800">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
