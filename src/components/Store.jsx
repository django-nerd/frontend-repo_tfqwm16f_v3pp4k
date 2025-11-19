import React from 'react'

function Store() {
  const products = [
    { title: 'Immune Support Bundle', price: '$59', benefits: 'Vitamin D3, Zinc, Probiotic', img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop' },
    { title: 'Detox Plan 14-day', price: '$89', benefits: 'Liver support + greens', img: 'https://images.unsplash.com/photo-1611077543541-43f48d6f0cdc?q=80&w=1200&auto=format&fit=crop' },
    { title: 'AI Coaching Session', price: '$39', benefits: '30-minute consult', img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop' },
  ]

  return (
    <div className="bg-white min-h-screen pb-24">
      <div className="max-w-md mx-auto px-6 pt-6 space-y-6">
        <h2 className="text-2xl font-light text-slate-900">Marketplace</h2>
        <div className="grid grid-cols-1 gap-4">
          {products.map(p => (
            <div key={p.title} className="rounded-2xl overflow-hidden border border-slate-200">
              <img src={p.img} alt="" className="h-40 w-full object-cover" />
              <div className="p-4">
                <div className="text-slate-900 font-medium">{p.title}</div>
                <div className="text-slate-500 text-sm mb-2">{p.benefits}</div>
                <div className="flex items-center justify-between">
                  <div className="text-emerald-600 font-semibold">{p.price}</div>
                  <button className="rounded-xl bg-emerald-600 text-white px-4 py-2">Buy Now</button>
                </div>
                <div className="mt-2 text-xs text-slate-500">Apple Pay • Card • M-Pesa</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Store
