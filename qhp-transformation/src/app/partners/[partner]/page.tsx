import { getMarkdownContent } from "@/lib/content";
import { partnerData } from "@/lib/partner-data";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ partner: string }>;
}

export async function generateStaticParams() {
  return partnerData.map((p) => ({
    partner: p.id,
  }));
}

export default async function PartnerProfilePage({ params }: PageProps) {
  const { partner: partnerId } = await params;
  
  if (partnerId === 'strategy') {
     return null; 
  }

  const partner = partnerData.find(p => p.id === partnerId);
  
  if (!partner) {
    notFound();
  }

  // Fetch the markdown content
  const content = await getMarkdownContent(`partners/${partner.fileName}`);

  if (!content) {
    return (
       <div className="max-w-4xl mx-auto py-12 px-6">Content not found for {partner.name}</div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      <Link href="/" className="text-gray-400 hover:text-white mb-8 block font-medium">← Back to Home</Link>
      
      {/* Hero Section */}
      <div className="relative w-full h-72 md:h-80 bg-black overflow-hidden mb-12 rounded-2xl border border-white/10 shadow-2xl">
         
         {partner.image ? (
             <div className="absolute right-0 top-0 h-full w-2/3 md:w-1/2">
               <img 
                 src={partner.image} 
                 alt={partner.name}
                 className="absolute inset-0 w-full h-full object-cover object-top"
               />
             </div>
         ) : (
             <div className={`absolute right-0 top-0 h-full w-1/3 opacity-30 ${partner.imageColor} blur-3xl rounded-full translate-x-1/4`}></div>
         )}

         <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-12 max-w-2xl">
             <p className="text-sm text-gray-500 font-medium uppercase tracking-widest mb-2">QHP Capital</p>
             <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tighter mb-2">{partner.name}</h1>
             <p className="text-2xl text-gray-400 font-light tracking-wide">{partner.role}</p>
         </div>
      </div>

      {/* Quick Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        <div className="bg-[#1E2433] rounded-xl p-5 border border-white/5">
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Focus Area</p>
          <p className="text-white font-medium">{partner.focusArea}</p>
        </div>
        <div className="bg-[#1E2433] rounded-xl p-5 border border-white/5">
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Key Angle</p>
          <p className="text-white font-medium">{partner.keyAngle}</p>
        </div>
        <div className="bg-[#1E2433] rounded-xl p-5 border border-white/5">
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Role</p>
          <p className="text-white font-medium">{partner.role} at QHP Capital</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="prose prose-invert prose-lg max-w-none 
          prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight
          prose-h1:text-3xl prose-h1:mt-12 prose-h1:mb-6 prose-h1:pb-4 prose-h1:border-b prose-h1:border-white/10
          prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-gray-200
          prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-gray-300
          prose-p:text-gray-300 prose-p:leading-relaxed
          prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
          prose-strong:text-white prose-strong:font-semibold
          prose-li:text-gray-300 prose-li:marker:text-gray-600
          prose-ul:space-y-2
          prose-hr:border-white/10 prose-hr:my-8
          prose-table:border-collapse prose-th:text-gray-300 prose-th:border-b prose-th:border-gray-700 prose-td:border-b prose-td:border-gray-800
          prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-500/5 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg prose-blockquote:not-italic">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
