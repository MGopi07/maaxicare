export default function PrivacyPolicyPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl bg-white p-8 lg:p-12 rounded-3xl border border-slate-100 shadow-sm">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-slate max-w-none space-y-6 text-slate-600 leading-relaxed">
          <p>Last updated: October 2023</p>
          
          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. Information We Collect</h2>
          <p>We collect information you provide directly to us when you create an account, make a purchase, or communicate with us. This includes your name, email address, postal address, phone number, and payment information.</p>
          
          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. How We Use Your Information</h2>
          <p>We use the information we collect to provide, maintain, and improve our services, to process your transactions, to send you related information, and to communicate with you about promotions, products, and services.</p>
          
          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. Prescription Data</h2>
          <p>Any medical prescriptions uploaded to our platform are treated with strict confidentiality and are only accessible by our licensed pharmacists for the purpose of fulfilling your order.</p>
          
          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. Security</h2>
          <p>We implement reasonable security measures to protect the security of your personal information both online and offline.</p>
        </div>
      </div>
    </div>
  );
}
